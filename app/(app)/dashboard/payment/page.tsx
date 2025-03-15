'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, CreditCard, CheckCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// 模拟模板数据 - 在实际应用中应从API获取
const websiteTemplates = [
  {
    id: 1,
    name: '企业官网模板',
    description: '适合公司官方网站，包含关于我们、服务、联系方式等页面',
    image: '/templates/business.jpg',
    price: 599,
    category: 'business'
  },
  {
    id: 2,
    name: '电子商务模板',
    description: '完整的在线商店解决方案，包含产品展示、购物车、结账流程',
    image: '/templates/ecommerce.jpg',
    price: 799,
    category: 'ecommerce'
  },
  {
    id: 3,
    name: '个人博客模板',
    description: '简洁的博客设计，专注于内容展示，适合个人创作者',
    image: '/templates/blog.jpg',
    price: 399,
    category: 'blog'
  },
  {
    id: 4,
    name: '作品集展示模板',
    description: '适合设计师、摄影师等创意人士展示作品',
    image: '/templates/portfolio.jpg',
    price: 499,
    category: 'portfolio'
  },
  {
    id: 5,
    name: '外贸企业模板',
    description: '针对外贸企业优化，多语言支持，产品展示',
    image: '/templates/foreign-trade.jpg',
    price: 699,
    category: 'business'
  },
  {
    id: 6,
    name: '新闻媒体模板',
    description: '内容密集型网站设计，适合新闻、杂志网站',
    image: '/templates/news.jpg',
    price: 599,
    category: 'news'
  }
]

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const templateId = Number(searchParams.get('templateId'))
  
  const [template, setTemplate] = useState<any>(null)
  const [paymentMethod, setPaymentMethod] = useState('alipay')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  })
  
  useEffect(() => {
    // 查找选中的模板
    const selectedTemplate = websiteTemplates.find(t => t.id === templateId)
    if (selectedTemplate) {
      setTemplate(selectedTemplate)
    } else {
      // 如果没有找到模板，返回模板选择页面
      router.push('/dashboard')
    }
  }, [templateId, router])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // 模拟支付处理
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
      
      // 支付成功后等待几秒再跳转到设置页面
      setTimeout(() => {
        router.push('/dashboard/setup?templateId=' + templateId)
      }, 2000)
    }, 1500)
  }
  
  if (!template) {
    return <div className="flex justify-center items-center min-h-[500px]">加载中...</div>
  }
  
  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto my-16 p-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <CheckCircle className="h-12 w-12 text-green-500" />
              <CardTitle>支付成功!</CardTitle>
              <CardDescription>
                您的订单已完成，即将跳转到网站设置页面...
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
  
  return (
    <div className="max-w-2xl mx-auto my-12 p-6">
      <Button 
        variant="ghost" 
        className="mb-6"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        返回
      </Button>
      
      <h1 className="text-2xl font-bold mb-6">完成订单</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>支付方式</CardTitle>
              <CardDescription>选择您偏好的支付方式</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <RadioGroup 
                  defaultValue="alipay" 
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="alipay" id="alipay" />
                    <Label htmlFor="alipay" className="flex-grow cursor-pointer">支付宝</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="wechat" id="wechat" />
                    <Label htmlFor="wechat" className="flex-grow cursor-pointer">微信支付</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-grow cursor-pointer">银行卡支付</Label>
                  </div>
                </RadioGroup>
                
                {paymentMethod === 'card' && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">卡号</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardHolder">持卡人姓名</Label>
                      <Input
                        id="cardHolder"
                        name="cardHolder"
                        placeholder="张三"
                        value={formData.cardHolder}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryMonth">到期月份</Label>
                        <Select
                          value={formData.expiryMonth}
                          onValueChange={(value) => 
                            setFormData(prev => ({ ...prev, expiryMonth: value }))
                          }
                        >
                          <SelectTrigger id="expiryMonth">
                            <SelectValue placeholder="月" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => {
                              const month = i + 1
                              return (
                                <SelectItem key={month} value={month.toString().padStart(2, '0')}>
                                  {month.toString().padStart(2, '0')}
                                </SelectItem>
                              )
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="expiryYear">到期年份</Label>
                        <Select
                          value={formData.expiryYear}
                          onValueChange={(value) => 
                            setFormData(prev => ({ ...prev, expiryYear: value }))
                          }
                        >
                          <SelectTrigger id="expiryYear">
                            <SelectValue placeholder="年" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 10 }, (_, i) => {
                              const year = new Date().getFullYear() + i
                              return (
                                <SelectItem key={year} value={year.toString()}>
                                  {year}
                                </SelectItem>
                              )
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cvv">安全码</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          maxLength={3}
                          value={formData.cvv}
                          onChange={handleChange}
                          required={paymentMethod === 'card'}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isProcessing}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  {isProcessing ? "处理中..." : `支付 ¥${template.price}`}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>订单摘要</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">模板</span>
                <span className="font-medium">{template.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">分类</span>
                <span>
                  {template.category === 'business' && '企业网站'}
                  {template.category === 'ecommerce' && '电子商务'}
                  {template.category === 'blog' && '博客'}
                  {template.category === 'portfolio' && '作品集'}
                  {template.category === 'news' && '新闻媒体'}
                </span>
              </div>
              <div className="pt-4 border-t flex justify-between font-medium">
                <span>总计</span>
                <span>¥{template.price}</span>
              </div>
              <div className="text-xs text-muted-foreground pt-2">
                <p>支付成功后，您将可以开始配置您的网站</p>
                <p>我们提供30天无理由退款保证</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 