import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { sendWelcomeEmail } from './email';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';
import { prisma } from './db';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// 这是一个示例，您需要根据实际使用的认证方案来实现
export async function auth() {
  // 返回用户会话信息
  return null
}

import payload from 'payload'

// 在您现有的验证用户函数中添加检查

export async function validateUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user || !user.hashedPassword) {
    return { success: false, message: "无效的登录凭据" };
  }

  // 检查邮箱是否已验证
  if (!user.emailVerified) {
    return { success: false, message: "请先验证您的邮箱", requiresVerification: true };
  }

  const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
  if (!passwordMatch) {
    return { success: false, message: "无效的登录凭据" };
  }

  return { success: true, user: { id: user.id, name: user.name, email: user.email } };
}

interface VerifyEmailProps {
  token?: string
  code?: string
}

interface PayloadUser {
  id: string
  email: string
  verified?: boolean
  verificationCode?: string | null
  [key: string]: any
}

// 添加验证邮箱函数
export async function verifyEmail({ token, code }: VerifyEmailProps) {
  try {
    if (!token && !code) {
      return { success: false, message: "验证令牌或验证码是必需的" };
    }

    let user;

    if (token) {
      user = await prisma.user.findFirst({
        where: { verificationToken: token }
      });
    } else if (code) {
      user = await prisma.user.findFirst({
        where: { verificationCode: code }
      });
    }

    if (!user) {
      return { success: false, message: "无效的验证令牌或验证码" };
    }

    // 更新用户的验证状态
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: new Date(),
        verificationToken: null, // 清除验证令牌，防止重复使用
        verificationCode: null, // 清除验证码
      }
    });

    // 发送欢迎邮件
    try {
      await sendWelcomeEmail(user.email);
    } catch (error) {
      console.error("Error sending welcome email:", error);
      // 继续执行，不中断验证流程
    }

    return { 
      success: true, 
      message: "邮箱验证成功", 
      user: { id: updatedUser.id, name: updatedUser.name, email: updatedUser.email } 
    };
  } catch (error) {
    console.error("Error verifying email:", error);
    return { success: false, message: "验证过程中发生错误" };
  }
}

export const resendVerificationEmail = async (email: string) => {
  try {
    const users = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (users.docs.length === 0) {
      return {
        success: false,
        message: 'User not found or already verified',
      }
    }

    const user = users.docs[0] as PayloadUser

    // Generate new verification code if needed
    let verificationCode = user.verificationCode
    if (!verificationCode) {
      verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
      await payload.update({
        collection: 'users',
        id: user.id,
        data: {
          verificationCode,
        } as any, // Type assertion to bypass type checking
      })
    }

    // Resend verification email
    await payload.forgotPassword({
      collection: 'users',
      data: {
        email,
      },
    })

    return {
      success: true,
      message: 'Verification email resent',
    }
  } catch (error) {
    console.error('Error resending verification email:', error)
    return {
      success: false,
      message: 'An error occurred while resending the verification email',
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET || 'your-fallback-secret-key-change-in-production';

export async function getAuthUser() {
  try {
    const token = cookies().get('userSession')?.value;
    
    if (!token) {
      return null;
    }
    
    const decoded = verify(token, JWT_SECRET) as {
      id: string;
      email: string;
    };
    
    if (!decoded || !decoded.id) {
      return null;
    }
    
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    
    return user;
  } catch (error) {
    console.error("验证会话时发生错误:", error);
    return null;
  }
}