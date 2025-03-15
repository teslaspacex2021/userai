import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

async function main() {
  try {
    console.log('正在连接数据库...')
    console.log('数据库URL:', process.env.DATABASE_URL)
    
    await prisma.$connect()
    console.log('数据库连接成功！')

    // 测试查询
    const count = await prisma.user.count()
    console.log(`数据库中现有用户数量: ${count}`)

    // 检查用户表结构
    const userTableInfo = await prisma.$queryRaw`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'User'
    `
    console.log('User表结构:', userTableInfo)

    // 创建测试用户数据
    const testUsers = [
      {
        email: 'admin@example.com',
        name: '管理员',
        hashedPassword: await hash('admin123', 12), // 修改这里
        role: 'admin',
        emailVerified: new Date() // 修改这里以匹配schema
      },
      {
        email: 'user1@example.com',
        name: '测试用户1',
        hashedPassword: await hash('user123', 12),
        role: 'user',
        emailVerified: new Date()
      },
      {
        email: 'user2@example.com',
        name: '测试用户2',
        hashedPassword: await hash('user123', 12),
        role: 'user',
        emailVerified: null
      }
    ]

    // 批量创建用户
    for (const userData of testUsers) {
      await prisma.user.upsert({
        where: { email: userData.email },
        update: userData,
        create: userData
      })
    }

    // 验证用户创建
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        emailVerified: true
      }
    })
    
    console.log('创建的用户:', JSON.stringify(users, null, 2))
    console.log(`总用户数量: ${users.length}`)

    // 查询所有用户
    const allUsers = await prisma.user.findMany()
    console.log('现有用户:', JSON.stringify(allUsers, null, 2))

  } catch (error) {
    console.error('数据库连接错误:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()