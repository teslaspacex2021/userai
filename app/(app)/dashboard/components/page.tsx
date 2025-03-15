"use client"

import { DialogDemo } from "@/components/DialogDemo"
import { DropdownMenuDemo } from "@/components/DropdownMenuDemo"
import { TableDemo } from "@/components/TableDemo"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function ComponentsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">UI组件展示</h1>
          <p className="text-muted-foreground">
            项目中使用的UI组件示例和用法展示
          </p>
        </div>
      </div>
      
      <Tabs defaultValue="basic" className="w-full">
        <TabsList>
          <TabsTrigger value="basic">基础组件</TabsTrigger>
          <TabsTrigger value="complex">复杂组件</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic" className="space-y-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">按钮</h2>
          <div className="flex flex-wrap gap-4">
            <Button>默认</Button>
            <Button variant="secondary">次要</Button>
            <Button variant="destructive">警告</Button>
            <Button variant="outline">边框</Button>
            <Button variant="ghost">幽灵</Button>
            <Button variant="link">链接</Button>
          </div>
          
          <h2 className="text-xl font-semibold mb-4 pt-6">输入框</h2>
          <div className="grid gap-4 max-w-sm">
            <div className="grid gap-2">
              <Label htmlFor="name">姓名</Label>
              <Input id="name" placeholder="输入您的姓名" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">邮箱</Label>
              <Input id="email" type="email" placeholder="输入您的邮箱" />
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mb-4 pt-6">文本区域</h2>
          <div className="grid gap-2 max-w-sm">
            <Label htmlFor="message">消息</Label>
            <Textarea id="message" placeholder="输入您的留言" />
          </div>
          
          <h2 className="text-xl font-semibold mb-4 pt-6">徽章</h2>
          <div className="flex flex-wrap gap-4">
            <Badge>默认</Badge>
            <Badge variant="secondary">次要</Badge>
            <Badge variant="destructive">警告</Badge>
            <Badge variant="outline">边框</Badge>
          </div>
        </TabsContent>
        
        <TabsContent value="complex" className="space-y-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">对话框</h2>
          <Card>
            <CardHeader>
              <CardTitle>对话框示例</CardTitle>
              <CardDescription>点击按钮打开一个对话框</CardDescription>
            </CardHeader>
            <CardContent>
              <DialogDemo />
            </CardContent>
          </Card>
          
          <h2 className="text-xl font-semibold mb-4 pt-6">下拉菜单</h2>
          <Card>
            <CardHeader>
              <CardTitle>下拉菜单示例</CardTitle>
              <CardDescription>点击按钮打开一个下拉菜单</CardDescription>
            </CardHeader>
            <CardContent>
              <DropdownMenuDemo />
            </CardContent>
          </Card>
          
          <h2 className="text-xl font-semibold mb-4 pt-6">表格</h2>
          <Card>
            <CardHeader>
              <CardTitle>表格示例</CardTitle>
              <CardDescription>展示数据的表格组件</CardDescription>
            </CardHeader>
            <CardContent>
              <TableDemo />
            </CardContent>
          </Card>
          
          <h2 className="text-xl font-semibold mb-4 pt-6">卡片</h2>
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>卡片标题</CardTitle>
              <CardDescription>卡片的描述文本</CardDescription>
            </CardHeader>
            <CardContent>
              <p>卡片的主要内容区域，可以放置任何内容。</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost">取消</Button>
              <Button>确认</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 