import nodemailer from 'nodemailer'

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // smtp.exmail.qq.com
  port: Number(process.env.EMAIL_PORT), // 465
  secure: true, // 使用 465 端口需要设置为 true
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  // 禁用 TLS，因为已经使用 SSL (secure: true)
  // 腾讯企业邮箱 465 端口使用 SSL 而非 TLS
})

interface SendVerificationEmailProps {
  email: string
  verificationToken: string
  verificationCode?: string
}

export const sendVerificationEmail = async ({ 
  email, 
  verificationToken, 
  verificationCode 
}: SendVerificationEmailProps) => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
  const verificationUrl = `${baseUrl}/verify-email?token=${verificationToken}`
  
  console.log('生成验证链接:', verificationUrl);
  
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: '验证您的邮箱',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">验证您的邮箱</h1>
        <p>请点击以下链接验证您的邮箱：</p>
        <div style="margin: 30px 0;">
          <a href="${verificationUrl}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">验证您的邮箱</a>
        </div>
        ${verificationCode ? `<p>或者使用以下验证码: <strong>${verificationCode}</strong></p>` : ''}
        <p>此链接24小时内有效</p>
        <p>或复制下面的链接到浏览器中：</p>
        <p>${verificationUrl}</p>
        <p>如果您没有请求此验证，请忽略此邮件。</p>
      </div>
    `,
  }

  console.log('尝试发送验证邮件到:', email);
  console.log('使用配置:', {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
    from: process.env.EMAIL_FROM
  });
  
  try {
    await transporter.sendMail(mailOptions)
    console.log(`Verification email sent to ${email}`)
    return true
  } catch (error) {
    console.error('Error sending verification email:', error)
    throw error
  }
}

export const sendWelcomeEmail = async (email: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
  
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: '欢迎加入我们的平台！',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">欢迎！</h1>
        <p>感谢您验证邮箱并加入我们的平台。</p>
        <p>您现在可以使用我们应用的所有功能。</p>
        <div style="margin: 30px 0;">
          <a href="${baseUrl}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">前往控制台</a>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log(`Welcome email sent to ${email}`)
    return true
  } catch (error) {
    console.error('Error sending welcome email:', error)
    throw error
  }
}

// 测试邮件发送功能
export const testEmailConfig = async () => {
  try {
    // 验证SMTP配置
    await transporter.verify();
    console.log('SMTP连接成功，邮件服务准备就绪');
    return true;
  } catch (error) {
    console.error('SMTP验证失败:', error);
    throw error;
  }
}