"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CreditCard, Search, Filter } from "lucide-react"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// 模拟模板数据
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

export default function TemplatesPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")
  
  // 过滤模板
  const filteredTemplates = websiteTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || template.category === categoryFilter
    const matchesTab = activeTab === "all" || 
                      (activeTab === "popular" && template.popular)
    return matchesSearch && matchesCategory && matchesTab
  })
  
  // 选择模板进入支付页面
  const handleSelectTemplate = (templateId: number) => {
    router.push(`/dashboard/templates/payment?templateId=${templateId}`)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">网站模板</h1>
        <p className="text-muted-foreground">选择一个模板开始构建您的网站</p>
      </div>

      <div className="flex flex-col space-y-4">
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">全部模板</TabsTrigger>
              <TabsTrigger value="popular">热门模板</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="搜索模板..."
                  className="pl-9 w-full md:w-[200px] lg:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select
                value={categoryFilter}
                onValueChange={setCategoryFilter}
              >
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="分类过滤" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">所有分类</SelectItem>
                  <SelectItem value="business">企业网站</SelectItem>
                  <SelectItem value="ecommerce">电子商务</SelectItem>
                  <SelectItem value="blog">博客</SelectItem>
                  <SelectItem value="portfolio">作品集</SelectItem>
                  <SelectItem value="news">新闻媒体</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <TemplateCard 
                  key={template.id}
                  template={template}
                  onSelect={handleSelectTemplate}
                />
              ))}
            </div>
            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">没有找到符合条件的模板</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <TemplateCard 
                  key={template.id}
                  template={template}
                  onSelect={handleSelectTemplate}
                />
              ))}
            </div>
            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">没有找到符合条件的模板</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface TemplateCardProps {
  template: typeof websiteTemplates[0]
  onSelect: (id: number) => void
}

function TemplateCard({ template, onSelect }: TemplateCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="aspect-video relative bg-muted">
        <img
          src={placeholderImage(template.name, template.id)}
          alt={template.name}
          className="object-cover w-full h-full"
        />
        {template.popular && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
            热门模板
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl">{template.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {template.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <div className="flex items-center text-sm text-muted-foreground">
          <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs">
            {template.category === "business" && "企业网站"}
            {template.category === "ecommerce" && "电子商务"}
            {template.category === "blog" && "博客"}
            {template.category === "portfolio" && "作品集"}
            {template.category === "news" && "新闻媒体"}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="font-medium">¥{template.price}</div>
        <Button onClick={() => onSelect(template.id)}>
          <CreditCard className="mr-2 h-4 w-4" />
          选择并支付
        </Button>
      </CardFooter>
    </Card>
  )
} 