"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, CreditCard, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

// 模拟模板数据 - 与templates页面中的数据保持一致
const websiteTemplates = [
  {
    id: 1,
    name: "企业官网模板",
    description: "适合公司官方网站，包含关于我们、服务、联系方式等页面",
    image: "/placeholder-template.jpg",
    price: 599,
    category: "business",
    popular: true,
  },
  {
    id: 2,
    name: "电子商务模板",
    description: "完整的在线商店解决方案，包含产品展示、购物车、结账流程",
    image: "/placeholder-template.jpg",
    price: 799,
    category: "ecommerce",
    popular: true,
  },
  {
    id: 3,
    name: "个人博客模板",
    description: "简洁的博客设计，专注于内容展示，适合个人创作者",
    image: "/placeholder-template.jpg",
    price: 399,
    category: "blog",
    popular: false,
  },
  {
    id: 4,
    name: "作品集展示模板",
    description: "适合设计师、摄影师等创意人士展示作品",
    image: "/placeholder-template.jpg",
    price: 499,
    category: "portfolio",
    popular: false,
  },
  {
    id: 5,
    name: "外贸企业模板",
    description: "针对外贸企业优化，多语言支持，产品展示",
    image: "/placeholder-template.jpg",
    price: 699,
    category: "business",
    popular: true,
  },
  {
    id: 6,
    name: "新闻媒体模板",
    description: "内容密集型网站设计，适合新闻、杂志网站",
    image: "/placeholder-template.jpg",
    price: 599,
    category: "news",
    popular: false,
  },
]

// 占位图片
const placeholderImage = (name: string, seed = 1) => {
  return `https://picsum.photos/seed/${seed}/600/400`
}

// 支付表单验证
const formSchema = z.object({
  cardName: z.string().min(1, { message: "请输入持卡人姓名" }),
  cardNumber: z.string().min(16, { message: "请输入有效的卡号" }).max(19),
  expiryDate: z.string().min(5, { message: "请输入有效的到期日期 (MM/YY)" }),
  cvc: z.string().min(3, { message: "请输入有效的安全码" }).max(4),
  paymentMethod: z.enum(["credit", "alipay", "wechat"], {
    required_error: "请选择支付方式",
  }),
})

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [template, setTemplate] = useState<typeof websiteTemplates[0] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  // 获取URL参数中的模板ID
  useEffect(() => {
    const templateId = searchParams.get("templateId")
    if (templateId) {
      const found = websiteTemplates.find(t => t.id === parseInt(templateId))
      if (found) {
        setTemplate(found)
      } else {
        // 如果没有找到模板，返回模板列表页
        router.push("/dashboard/templates")
      }
    } else {
      router.push("/dashboard/templates")
    }
  }, [searchParams, router])
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
      paymentMethod: "credit",
    },
  })
  
  // 处理支付提交
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsLoading(true)
    
    // 模拟支付处理
    setTimeout(() => {
      router.push(`/dashboard/templates/setup?templateId=${template?.id}`)
    }, 1500)
  }
  
  if (!template) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="animate-pulse">加载中...</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          className="mr-2" 
          onClick={() => router.push("/dashboard/templates")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回模板列表
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>支付详情</CardTitle>
              <CardDescription>完成支付以开始使用所选模板</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>支付方式</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="credit" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                信用卡支付
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="alipay" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                支付宝
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="wechat" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                微信支付
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {form.watch("paymentMethod") === "credit" && (
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="cardName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>持卡人姓名</FormLabel>
                            <FormControl>
                              <Input placeholder="请输入持卡人姓名" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>卡号</FormLabel>
                            <FormControl>
                              <Input placeholder="请输入卡号" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="expiryDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>到期日期</FormLabel>
                              <FormControl>
                                <Input placeholder="MM/YY" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cvc"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>安全码</FormLabel>
                              <FormControl>
                                <Input placeholder="CVC" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        处理中...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4" />
                        支付 ¥{template.price}
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <div className="aspect-video relative">
              <img
                src={placeholderImage(template.name, template.id)}
                alt={template.name}
                className="object-cover w-full h-full rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{template.name}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-muted-foreground">模板价格</span>
                  <span className="font-medium">¥{template.price}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">模板包含：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                      <span>WordPress网站一键部署</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                      <span>模板永久使用授权</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                      <span>免费SSL证书</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                      <span>30天技术支持</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                      <span>1年域名服务</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 