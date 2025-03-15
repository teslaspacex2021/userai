import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { sendVerificationEmail } from '@/lib/email';
import { v4 as uuidv4 } from 'uuid'; 

// 确保 Prisma 客户端只被实例化一次
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body;
    
    console.log("尝试创建用户:", email);
    
    // 检查用户是否已存在
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      console.log("用户已存在:", email);
      return NextResponse.json(
        { error: "邮箱已被注册" },
        { status: 400 }
      );
    }
    
    // 密码加密
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // 生成验证令牌 - 修复未定义变量
    const verifyToken = uuidv4();
    
    // 创建用户 - 使用password字段来匹配schema
    const user = await prisma.user.create({
      data: {
        email,
        name: name || email.split('@')[0],
        password: hashedPassword,
        emailVerified: null,
        verificationToken: verifyToken,
      }
    });
    
    console.log("用户创建成功:", user.id);
    
    try {
      // 尝试发送验证邮件，但不阻止注册流程
      await sendVerificationEmail({ 
        email, 
        verificationToken: verifyToken 
      });  // 修复参数格式
    } catch (emailError) {
      console.error("发送验证邮件失败:", emailError);
      // 继续处理，不中断注册流程
    }

    return NextResponse.json(
      { 
        user: { 
          id: user.id,
          email: user.email,
          name: user.name
        }
      },
      { status: 201 }
    );
    
  } catch (error) {
    // 详细记录错误
    const typedError = error as { message: string; code?: string; meta?: unknown };
    console.error("用户注册错误详情:", {
      message: typedError.message,
      code: typedError.code,
      meta: typedError.meta
    });
    return NextResponse.json(
      { error: "注册失败，请稍后再试" },
      { status: 500 }
    );
  }
}