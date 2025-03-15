import Link from "next/link"
import { ArrowRight, Layers, Server, LineChart, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">欢迎来到您的仪表盘</h1>
        <p className="text-muted-foreground">通过UserAI快速创建和管理您的网站，并获得丰富的数据分析。</p>
      </div>

      {/* 快速操作卡片 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">创建网站</CardTitle>
            <CardDescription>
              选择模板，快速构建您的网站
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Layers className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="p-0">
              <Link href="/dashboard/templates" className="flex items-center gap-1">
                查看模板 
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">我的网站</CardTitle>
            <CardDescription>
              管理您已创建的网站
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Server className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="p-0">
              <Link href="/dashboard/sites" className="flex items-center gap-1">
                查看网站 
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">流量分析</CardTitle>
            <CardDescription>
              查看您网站的访问数据
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <LineChart className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="p-0">
              <Link href="/dashboard/analytics" className="flex items-center gap-1">
                查看分析 
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">AI助手</CardTitle>
            <CardDescription>
              利用AI优化您的网站内容
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="p-0">
              <Link href="/dashboard/ai-tools" className="flex items-center gap-1">
                使用AI工具 
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* 入门指南 */}
      <div>
        <h2 className="text-xl font-semibold mb-4">开始使用 UserAI</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-semibold text-primary">1</span>
                </div>
                <h3 className="font-semibold">选择模板</h3>
                <p className="text-sm text-muted-foreground">
                  浏览我们的模板库，选择适合您业务的网站模板
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-semibold text-primary">2</span>
                </div>
                <h3 className="font-semibold">自定义设置</h3>
                <p className="text-sm text-muted-foreground">
                  根据您的需求自定义网站设置和内容
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-semibold text-primary">3</span>
                </div>
                <h3 className="font-semibold">发布上线</h3>
                <p className="text-sm text-muted-foreground">
                  一键发布您的网站，开始吸引访客
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button asChild>
              <Link href="/dashboard/templates">立即开始</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
