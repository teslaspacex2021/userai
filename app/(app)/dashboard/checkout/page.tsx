import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import config from '@/payload.config'

// 模板数据 - 实际项目中应从数据库获取
const templates = {
  'business-1': {
    id: 'business-1',
    name: '企业官网基础版',
    description: '适合中小企业的官方网站模板，包含主页、关于我们、服务、联系等基本页面',
    price: 599,
    image: '/templates/business-basic.jpg',
  },
  'ecommerce-1': {
    id: 'ecommerce-1',
    name: '电商网站标准版',
    description: '功能齐全的电子商务网站模板，支持产品展示、购物车和支付功能',
    price: 1299,
    image: '/templates/ecommerce-standard.jpg',
  },
  'portfolio-1': {
    id: 'portfolio-1',
    name: '个人作品集',
    description: '展示个人或团队作品的精美模板，适合设计师、摄影师等创意人士',
    price: 399,
    image: '/templates/portfolio.jpg',
  },
  'blog-1': {
    id: 'blog-1',
    name: '专业博客',
    description: '为内容创作者设计的博客模板，支持丰富的文章格式和分类管理',
    price: 499,
    image: '/templates/blog-pro.jpg',
  }
}

export default async function CheckoutPage({ searchParams }: { searchParams: { template?: string } }) {
  // 从URL获取模板ID
  const templateId = searchParams.template
  
  // 如果没有选择模板，重定向到模板选择页面
  if (!templateId || !templates[templateId as keyof typeof templates]) {
    redirect('/dashboard/templates')
  }
  
  // 获取选择的模板信息
  const template = templates[templateId as keyof typeof templates]
  
  // 从Payload获取用户信息
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  
  if (!user) {
    // 未登录用户重定向到登录页
    redirect('/login?redirect=/dashboard/templates')
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">订单结算</h1>
      
      <div className="grid gap-8 md:grid-cols-3">
        {/* 订单概览 */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>订单详情</CardTitle>
              <CardDescription>您正在购买的产品信息</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-40 h-40">
                  <Image
                    src={template.image}
                    alt={template.name}
                    className="object-cover rounded-md"
                    fill
                    unoptimized // 实际项目中移除此属性并使用真实图片
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{template.name}</h3>
                  <p className="text-muted-foreground mt-2">{template.description}</p>
                  <div className="mt-4">
                    <p className="text-lg font-bold">¥{template.price}</p>
                    <p className="text-sm text-muted-foreground">一次性购买，终身使用</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* 支付方式 */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>支付方式</CardTitle>
              <CardDescription>选择您偏好的支付方式</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="alipay" className="space-y-4">
                <div className="flex items-center space-x-2 border p-3 rounded-md">
                  <RadioGroupItem value="alipay" id="alipay" />
                  <Label htmlFor="alipay" className="flex items-center">
                    <span className="ml-2">支付宝</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border p-3 rounded-md">
                  <RadioGroupItem value="wechat" id="wechat" />
                  <Label htmlFor="wechat" className="flex items-center">
                    <span className="ml-2">微信支付</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border p-3 rounded-md">
                  <RadioGroupItem value="creditcard" id="creditcard" />
                  <Label htmlFor="creditcard" className="flex items-center">
                    <span className="ml-2">信用卡</span>
                  </Label>
                </div>
              </RadioGroup>
              
              <Separator className="my-6" />
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>产品价格</span>
                  <span>¥{template.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>税费</span>
                  <span>¥0.00</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>总计</span>
                  <span>¥{template.price.toFixed(2)}</span>
                </div>
              </div>
              
              <Button className="w-full mt-6" asChild>
                <Link href={`/dashboard/site-setup?template=${templateId}`}>
                  确认支付
                </Link>
              </Button>
              <Button variant="outline" className="w-full mt-2" asChild>
                <Link href="/dashboard/templates">
                  取消
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 