"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  LayoutGrid, 
  UsersRound, 
  FileText, 
  LineChart, 
  Settings, 
  Menu, 
  X,
  Layers,
  LogOut,
  ChevronDown
} from "lucide-react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SidebarItem {
  title: string
  href: string
  icon: React.ReactNode
}

const sidebarItems: SidebarItem[] = [
  {
    title: "仪表盘",
    href: "/dashboard",
    icon: <LayoutGrid className="h-5 w-5" />,
  },
  {
    title: "建站服务",
    href: "/dashboard/templates",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "数据分析",
    href: "/dashboard/analytics",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    title: "用户管理",
    href: "/dashboard/users",
    icon: <UsersRound className="h-5 w-5" />,
  },
  {
    title: "UI组件",
    href: "/dashboard/components",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "设置",
    href: "/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
  },
]

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()

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
    <div className="flex min-h-screen flex-col">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="flex h-16 items-center px-4 md:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2 md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">切换导航</span>
          </Button>
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="UserAI Logo"
                width={100}
                height={35}
                priority
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden items-center gap-4 md:flex">
              <Link 
                href="/dashboard" 
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                文档
              </Link>
              <Link 
                href="/dashboard/support" 
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                支持
              </Link>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/settings">
                <Settings className="mr-2 h-4 w-4" />
                设置
              </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  登出
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* 侧边栏 - 移动端 */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40 bg-zinc-950/70 md:hidden" onClick={() => setIsSidebarOpen(false)} />
        )}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 shrink-0 border-r bg-sidebar-background pt-16 transition-transform md:static md:z-0 md:translate-x-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="absolute right-3 top-3 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">关闭侧边栏</span>
            </Button>
          </div>
          <div className="flex h-full flex-col gap-4 p-4">
            <nav className="flex flex-col gap-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-medium">用户名</p>
                    <p className="text-xs text-muted-foreground">user@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* 主要内容 */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
