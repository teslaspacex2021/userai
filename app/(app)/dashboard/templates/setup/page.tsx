"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, Settings, Save } from "lucide-react"

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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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

// 网站设置表单验证
const formSchema = z.object({
  siteName: z.string().min(2, { message: "网站名称至少需要2个字符" }),
  description: z.string().min(10, { message: "网站描述至少需要10个字符" }),
  domainName: z.string().min(3, { message: "域名至少需要3个字符" }).regex(/^[a-z0-9-]+$/, {
    message: "域名只能包含小写字母、数字和连字符",
  }),
  industry: z.string().min(1, { message: "请选择所属行业" }),
  logoText: z.string().optional(),
  primaryColor: z.string().regex(/^#[0-9A-F]{6}$/i, {
    message: "请输入有效的十六进制颜色代码",
  }),
  contactEmail: z.string().email({ message: "请输入有效的电子邮件地址" }),
  contactPhone: z.string().optional(),
});

export default function SetupPage() {
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
      siteName: template?.name ? `我的${template.name}` : "",
      description: "",
      domainName: "",
      industry: "",
      logoText: "",
      primaryColor: "#0070F3",
      contactEmail: "",
      contactPhone: "",
    },
  })

  // 当模板加载后更新默认值
  useEffect(() => {
    if (template) {
      form.setValue("siteName", `我的${template.name}`)
    }
  }, [template, form])
  
  // 处理表单提交
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsLoading(true)
    
    // 模拟处理
    setTimeout(() => {
      router.push(`/dashboard/sites`)
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
      
      <div>
        <h1 className="text-3xl font-bold">设置您的网站</h1>
        <p className="text-muted-foreground mt-2">
          您已经选择了 <span className="font-medium">{template.name}</span>，现在配置您的网站信息
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            基本设置
          </CardTitle>
          <CardDescription>
            配置您网站的基本信息和外观
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="siteName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>网站名称</FormLabel>
                      <FormControl>
                        <Input placeholder="我的企业网站" {...field} />
                      </FormControl>
                      <FormDescription>
                        这将显示为您网站的标题
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="domainName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>网站域名</FormLabel>
                      <FormControl>
                        <div className="flex items-center">
                          <Input placeholder="mysite" {...field} />
                          <span className="ml-2 text-muted-foreground">.userai.cn</span>
                        </div>
                      </FormControl>
                      <FormDescription>
                        选择您网站的二级域名
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>网站描述</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="描述您的网站..." 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      简要描述您的网站内容，这将用于搜索引擎优化
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>所属行业</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="选择行业" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="tech">科技/IT</SelectItem>
                          <SelectItem value="finance">金融/投资</SelectItem>
                          <SelectItem value="education">教育/培训</SelectItem>
                          <SelectItem value="health">医疗/健康</SelectItem>
                          <SelectItem value="retail">零售/电商</SelectItem>
                          <SelectItem value="service">专业服务</SelectItem>
                          <SelectItem value="manufacturing">制造业</SelectItem>
                          <SelectItem value="food">餐饮/食品</SelectItem>
                          <SelectItem value="travel">旅游/酒店</SelectItem>
                          <SelectItem value="media">媒体/出版</SelectItem>
                          <SelectItem value="other">其他行业</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        选择最能代表您业务的行业
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="logoText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Logo文字 (可选)</FormLabel>
                      <FormControl>
                        <Input placeholder="公司名称" {...field} />
                      </FormControl>
                      <FormDescription>
                        如果没有Logo，将使用此文字作为Logo
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="primaryColor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>主题色</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Input 
                          type="color" 
                          className="w-12 h-10 p-1" 
                          {...field}
                        />
                        <Input 
                          value={field.value} 
                          onChange={field.onChange}
                          className="flex-1"
                          placeholder="#0070F3" 
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      选择网站的主要颜色，将用于按钮、链接等元素
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="contactEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>联系邮箱</FormLabel>
                      <FormControl>
                        <Input placeholder="contact@example.com" {...field} />
                      </FormControl>
                      <FormDescription>
                        访客将通过此邮箱联系您
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="contactPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>联系电话 (可选)</FormLabel>
                      <FormControl>
                        <Input placeholder="400-800-8888" {...field} />
                      </FormControl>
                      <FormDescription>
                        可选填写您的联系电话
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
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
                      <Save className="mr-2 h-4 w-4" />
                      保存并创建网站
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
} 