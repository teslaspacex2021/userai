"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { NavItem } from "@/types"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface NavMainProps {
  items: NavItem[]
}

export function NavMain({ items }: NavMainProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // 检查用户是否已登录
  useEffect(() => {
    // 简单检查是否存在认证Cookie
    const checkLoginStatus = () => {
      const cookies = document.cookie.split(';')
      const hasAuthCookie = cookies.some(cookie => 
        cookie.trim().startsWith('auth_token=') || 
        cookie.trim().startsWith('userSession=')
      )
      setIsLoggedIn(hasAuthCookie)
    }
    
    checkLoginStatus()
    // 监听存储事件，以便在登录/登出状态变化时更新
    window.addEventListener('storage', checkLoginStatus)
    
    return () => {
      window.removeEventListener('storage', checkLoginStatus)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id.replace('-mobile', '')]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    })
  }

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (response.ok) {
        // 触发存储事件以更新登录状态
        window.localStorage.setItem('logout', Date.now().toString())
        // 重定向到登录页面
        router.push('/login')
      }
    } catch (error) {
      console.error('登出失败:', error)
    }
  }

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">U</span>
            </div>
            <span className="text-xl font-bold">UserAI</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {items?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">切换主题</span>
          </Button>
          
          {isLoggedIn ? (
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              登出
            </Button>
          ) : (
          <Link href="/login">
            <Button variant="ghost">登录</Button>
          </Link>
          )}
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>联系我们</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>联系我们</DialogTitle>
                <DialogDescription>
                  请填写以下信息，我们会尽快与您联系。
                </DialogDescription>
              </DialogHeader>
              <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input 
                    id="name" 
                    placeholder="请输入您的姓名" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">公司名称</Label>
                  <Input id="company" placeholder="请输入您的公司名称" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">邮箱</Label>
                  <Input id="email" type="email" placeholder="请输入您的邮箱" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">电话</Label>
                  <Input id="phone" placeholder="请输入您的联系电话" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">留言内容</Label>
                  <textarea
                    id="message"
                    placeholder="请输入您想咨询的内容" 
                    className="h-24"
                  />
                </div>
                <div className="flex justify-end">
                  <Button type="submit">发送</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="px-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">打开菜单</span>
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
          <div className="fixed inset-x-0 top-0 z-50 min-h-screen w-full bg-background px-6 py-6 shadow-lg">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">U</span>
                </div>
                <span className="text-xl font-bold">UserAI</span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="px-2"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">关闭菜单</span>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="mt-8 flex flex-col space-y-4">
              {items?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-4">
                {isLoggedIn ? (
                  <Button variant="ghost" className="w-full justify-center" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    登出
                  </Button>
                ) : (
                <Link href="/login" className="block">
                  <Button variant="ghost" className="w-full justify-center">
                    登录
                  </Button>
                </Link>
                )}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">联系我们</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>联系我们</DialogTitle>
                      <DialogDescription>
                        请填写以下信息，我们会尽快与您联系。
                      </DialogDescription>
                    </DialogHeader>
                    <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
                      <div className="grid gap-2">
                        <Label htmlFor="name-mobile">姓名</Label>
                        <Input 
                          id="name-mobile" 
                          placeholder="请输入您的姓名" 
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="company-mobile">公司名称</Label>
                        <Input id="company-mobile" placeholder="请输入您的公司名称" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email-mobile">邮箱</Label>
                        <Input id="email-mobile" type="email" placeholder="请输入您的邮箱" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone-mobile">电话</Label>
                        <Input id="phone-mobile" placeholder="请输入您的联系电话" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message-mobile">留言内容</Label>
                        <textarea
                          id="message-mobile"
                          placeholder="请输入您想咨询的内容"
                          className="h-24"
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button type="submit">发送</Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
