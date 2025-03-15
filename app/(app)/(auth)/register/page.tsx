"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CheckCircle } from "lucide-react"

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
import { Checkbox } from "@/components/ui/checkbox"

// 表单验证schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "姓名至少需要2个字符",
  }),
  email: z.string().email({
    message: "请输入有效的电子邮件地址",
  }),
  password: z.string().min(1, {
    message: "密码至少需要8个字符",
  }),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, {
    message: "您必须同意服务条款和隐私政策",
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "密码不匹配",
  path: ["confirmPassword"],
});

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [registeredEmail, setRegisteredEmail] = useState("")
  const [error, setError] = useState("")

  // 表单初始化
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  })

  // 表单提交处理
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setError("")
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          name: values.name,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || '注册失败');
      }
      
      // 处理成功注册
      setRegistrationSuccess(true);
      setRegisteredEmail(values.email);
      form.reset();
    } catch (error: any) {
      console.error("注册失败", error);
      setError(error.message || "注册过程中发生错误，请稍后重试");
    } finally {
      setIsLoading(false)
    }
  }

  if (registrationSuccess) {
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
            <div className="flex justify-center text-green-500 mb-2">
              <CheckCircle size={50} />
            </div>
            <CardTitle className="text-2xl text-center">注册成功</CardTitle>
            <CardDescription className="text-center">
              我们已向 {registeredEmail} 发送了一封验证邮件
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p>请查看您的邮箱并点击验证链接以完成注册流程。</p>
            <p className="text-sm text-muted-foreground">
              如果您没有收到邮件，请检查您的垃圾邮件文件夹，或
              <button 
                className="text-primary underline underline-offset-4 ml-1"
                onClick={async () => {
                  try {
                    await fetch('/api/users/resend-verification', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email: registeredEmail }),
                    });
                    alert('验证邮件已重新发送');
                  } catch (error) {
                    console.error('重新发送邮件失败', error);
                  }
                }}
              >
                点击这里重新发送
              </button>
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => router.push('/login')}>返回登录</Button>
          </CardFooter>
        </Card>
      </div>
    );
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
          <CardTitle className="text-2xl text-center">创建账户</CardTitle>
          <CardDescription className="text-center">
            填写以下信息以创建您的UserAI账户
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>姓名</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>确认密码</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        我同意UserAI的
                        <Link href="/terms" className="text-primary hover:underline ml-1">
                          服务条款
                        </Link>
                        <span className="mx-1">和</span>
                        <Link href="/privacy" className="text-primary hover:underline">
                          隐私政策
                        </Link>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "创建中..." : "创建账户"}
              </Button>
            </form>
          </Form>
          {error && (
            <Alert variant="destructive">
              <AlertTitle>注册失败</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <div className="text-sm text-center w-full text-muted-foreground">
            已有账户?{" "}
            <Link href="/login" className="text-primary hover:underline underline-offset-4">
              登录
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}