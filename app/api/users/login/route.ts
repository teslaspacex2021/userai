import { NextRequest, NextResponse } from 'next/server'
import payload from 'payload'
import { resendVerificationEmail } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Attempt to login
    try {
      const result = await payload.login({
        collection: 'users',
        data: {
          email,
          password,
        },
      })

      // Check if user is verified
      if (result.user && result.user.verified === false) {
        // Resend verification email
        await resendVerificationEmail(email)

        return NextResponse.json(
          { 
            message: 'Email not verified. A new verification email has been sent.',
            user: { email: result.user.email, verified: false }
          },
          { status: 403 }
        )
      }

      // Remove sensitive data
      const { password: _password, ...userWithoutPassword } = result.user

      return NextResponse.json(
        { 
          message: 'Login successful',
          user: userWithoutPassword,
          token: result.token
        },
        { status: 200 }
      )
    } catch (loginError) {
      console.error('Login error:', loginError)
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Error during login:', error)
    return NextResponse.json(
      { message: 'An error occurred during login' },
      { status: 500 }
    )
  }
} 