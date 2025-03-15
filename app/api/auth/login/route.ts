import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/db';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // 查找用户
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // 验证密码
    // 由于字段可能不匹配，使用原始SQL查询获取密码
    const userWithPassword = await prisma.$queryRaw`
      SELECT "password" FROM "User" WHERE "email" = ${email}
    `
    
    const storedPassword = Array.isArray(userWithPassword) && userWithPassword.length > 0 
      ? userWithPassword[0].password 
      : null
      
    if (!storedPassword) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }
    
    const isValidPassword = await bcrypt.compare(password, storedPassword);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // 检查用户是否已验证邮箱
    // 使用原始SQL查询获取verified状态
    const verificationStatus = await prisma.$queryRaw`
      SELECT "verified" FROM "User" WHERE "email" = ${email}
    `
    
    const isVerified = Array.isArray(verificationStatus) && verificationStatus.length > 0 
      ? verificationStatus[0].verified 
      : false
      
    if (!isVerified) {
      return NextResponse.json(
        { 
          message: 'Please verify your email before logging in',
          verificationRequired: true 
        },
        { status: 403 }
      );
    }

    // 生成JWT令牌
    const token = jwt.sign(
      { 
        userId: user.id,
        email: user.email,
        role: user.role 
      },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    );

    // 设置cookie和响应
    const response = NextResponse.json({
      message: 'Logged in successfully',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });

    // 设置cookie
    response.cookies.set({
      name: 'auth_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 // 7天
    });

    // 更新最后登录时间
    await prisma.$executeRaw`
      UPDATE "User" 
      SET "lastLogin" = ${new Date()} 
      WHERE "id" = ${user.id}
    `

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'An error occurred during login' },
      { status: 500 }
    );
  }
}