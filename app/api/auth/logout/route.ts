import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // 创建响应对象
    const response = NextResponse.json({
      message: '登出成功',
      success: true,
    });

    // 清除认证Cookie
    response.cookies.set({
      name: 'auth_token',
      value: '',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 0 // 立即过期
    });

    // 如果存在userSession cookie也清除它
    response.cookies.set({
      name: 'userSession',
      value: '',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 0 // 立即过期
    });

    return response;
  } catch (error) {
    console.error('登出错误:', error);
    return NextResponse.json(
      { message: '登出过程中发生错误', success: false },
      { status: 500 }
    );
  }
} 