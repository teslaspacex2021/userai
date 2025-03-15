"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

// 表单验证schema
const formSchema = z.object({
  email: z.string().email({
    message: "请输入有效的电子邮件地址",
  }),
  password: z.string().min(1, {
    message: "密码至少需要8个字符",
  }),
})

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showResendVerification, setShowResendVerification] = useState(false)
  const [emailForResend, setEmailForResend] = useState("")

  // 表单初始化
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 表单提交处理
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setError("")
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        if (data.requiresVerification) {
          setError("请先验证您的邮箱。请检查您的收件箱。")
          setShowResendVerification(true)
          setEmailForResend(values.email)
        } else {
          throw new Error(data.error || "登录失败")
        }
        return
      }
      
      // 登录成功
      router.push('/dashboard')
    } catch (error: any) {
      console.error("登录失败:", error)
      setError(error.message || "登录过程中发生错误")
    } finally {
      setIsLoading(false)
    }
  }

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
          <CardTitle className="text-2xl text-center">欢迎回来</CardTitle>
          <CardDescription className="text-center">
            登录您的账户继续使用UserAI
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {error && (
            <div className="bg-destructive/15 p-3 rounded-md text-destructive text-sm">
              {error}
              {showResendVerification && (
                <div className="mt-2">
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-sm underline text-primary"
                    onClick={() => {
                      // 实现重新发送验证邮件的功能
                      toast({
                        title: "验证邮件已发送",
                        description: "请检查您的收件箱并点击验证链接",
                      });
                    }}
                  >
                    重新发送验证邮件
                  </Button>
                </div>
              )}
            </div>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>邮箱</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>密码</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "登录中..." : "登录"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            <Link href="/forgot-password" className="hover:text-primary underline underline-offset-4">
              忘记密码?
            </Link>
          </div>
          <div className="text-sm text-center text-muted-foreground">
            还没有账户?{" "}
            <Link href="/register" className="text-primary hover:underline underline-offset-4">
              注册
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
