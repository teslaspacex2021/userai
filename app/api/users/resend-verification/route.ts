import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { sendVerificationEmail } from '@/lib/email'

// 确保 Prisma 客户端只被实例化一次
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // 查找用户
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      // 为了安全起见，我们仍然返回成功，但实际上不发送邮件
      return NextResponse.json(
        { message: "Verification email sent successfully" },
        { status: 200 }
      )
    }

    if (user.emailVerified) {
      return NextResponse.json(
        { message: "Email already verified" },
        { status: 400 }
      )
    }

    // 生成新的验证令牌
    const newVerificationToken = uuidv4()

    // 更新用户的验证令牌
    await prisma.user.update({
      where: { id: user.id },
      data: { verificationToken: newVerificationToken }
    })

    // 发送验证邮件
    await sendVerificationEmail({ email, token: newVerificationToken })

    return NextResponse.json(
      { message: "Verification email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error resending verification email:", error)
    return NextResponse.json(
      { error: "An error occurred while resending the verification email" },
      { status: 500 }
    )
  }
}