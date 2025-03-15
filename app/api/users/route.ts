import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { sendVerificationEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password, name } = body

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'A user with this email already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    
    // Generate verification code and token
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
    const verificationToken = uuidv4()
    
    console.log('Creating user with data:', {
      email,
      name,
      verificationToken,
      verificationCode
    })
    
    // Create new user
    const user = await prisma.user.create({
      data: {
        email,
        name: name || null,
        password: hashedPassword,
        verificationToken,
        verificationCode,
        verified: false,
        role: 'user'
      }
    })

    // Send verification email
    await sendVerificationEmail({
      email: user.email,
      verificationToken: user.verificationToken || '',
      verificationCode: user.verificationCode || ''
    })

    // Remove sensitive data for response
    const userResponse = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    }

    return NextResponse.json({
      message: 'User created successfully. Please check your email for verification instructions.',
      user: userResponse
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { message: 'An error occurred while creating the user' },
      { status: 500 }
    )
  }
} 