import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db' // 确保使用共享的prisma实例
import { sendWelcomeEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { token, code } = body

    console.log(`正在验证邮箱: ${token ? '使用令牌' : '使用验证码'} ${code || ''}`)

    if (!token && !code) {
      return NextResponse.json(
        { message: '需要提供验证令牌或验证码' },
        { status: 400 }
      )
    }

    let user;
    
    // 根据令牌或验证码查找用户
    if (token) {
      user = await prisma.user.findFirst({
        where: { verificationToken: token }
      })
    } else if (code) {
      // 由于字段可能不存在，使用原始SQL查询
      const users = await prisma.$queryRaw`
        SELECT * FROM "User" WHERE "verificationCode" = ${code}
      `
      user = Array.isArray(users) && users.length > 0 ? users[0] : null
    }

    if (!user) {
      console.log("未找到匹配的用户")
      return NextResponse.json(
        { message: '无效的验证信息' },
        { status: 400 }
      )
    }

    // 更新用户的验证状态
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: new Date(),
        verificationToken: null,
        // 使用原始SQL更新verified和verificationCode字段
        ...await prisma.$executeRaw`
          UPDATE "User" SET 
            "verified" = true,
            "verificationCode" = null
          WHERE "id" = ${user.id}
        ` ? {} : {}
      }
    })

    console.log("用户邮箱验证成功:", updatedUser.id)

    // 发送欢迎邮件
    try {
      await sendWelcomeEmail(user.email)
    } catch (emailError) {
      console.error("发送欢迎邮件失败:", emailError)
      // 继续执行，不中断验证流程
    }

    return NextResponse.json(
      { 
        message: '邮箱验证成功', 
        user: { 
          id: updatedUser.id, 
          email: updatedUser.email 
        } 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("验证邮箱过程中发生错误:", error)
    return NextResponse.json(
      { message: '验证过程中发生错误' },
      { status: 500 }
    )
  }
}