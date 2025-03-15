"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle, XCircle } from "lucide-react"

export default function VerifyEmailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  
  const [isVerifying, setIsVerifying] = useState(true)
  const [verificationSuccess, setVerificationSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setError("无效的验证令牌")
        setIsVerifying(false)
        return
      }

      try {
        console.log("正在提交验证请求，令牌:", token)
        
        const response = await fetch('/api/users/verify-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        })

        const data = await response.json()

        if (!response.ok) {
          console.error("验证失败:", data)
          throw new Error(data.message || '验证失败')
        }

        console.log("验证成功:", data)
        setVerificationSuccess(true)
        // 延迟3秒后跳转到登录页面
        setTimeout(() => {
          router.push('/login?verified=true')
        }, 3000)
      } catch (error: any) {
        console.error('邮箱验证失败:', error)
        setError(error.message || '验证过程中发生错误，请稍后重试')
      } finally {
        setIsVerifying(false)
      }
    }

    if (token) {
      verifyEmail()
    } else {
      setIsVerifying(false)
      setError("缺少验证令牌")
    }
  }, [token, router])

  return (
    <div className="flex justify-center items-center min-h-screen bg-muted/40">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-full flex justify-center mb-6">
            <Image
              src="/logo.svg" 
              alt="UserAI Logo"
              width={120}
              height={40}
              priority
            />
          </div>
          <CardTitle className="text-2xl text-center">邮箱验证</CardTitle>
          <CardDescription className="text-center">
            {isVerifying ? "正在验证您的邮箱..." : 
             verificationSuccess ? "邮箱验证成功！" : 
             "邮箱验证失败"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-8">
          {isVerifying ? (
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          ) : verificationSuccess ? (
            <>
              <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
              <p className="text-center">您的邮箱已成功验证，将在3秒后跳转到登录页面...</p>
            </>
          ) : (
            <>
              <XCircle className="h-12 w-12 text-red-500 mb-4" />
              <p className="text-center text-red-500">{error}</p>
              <p className="text-center mt-2">
                令牌: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{token || "无"}</span>
              </p>
            </>
          )}
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full" 
            onClick={() => router.push('/login')}
          >
            前往登录页面
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}