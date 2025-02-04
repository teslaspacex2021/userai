import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import { helpCategories, helpArticles } from "@/config/marketing"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "帮助中心 - UserAI",
  description: "获取 UserAI 的使用帮助和支持，快速解决您的问题",
}

export default function HelpPage() {
  // 获取最新文章
  const latestArticles = Object.values(helpArticles)
    .filter(article => article.category === "最新文章")
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())

  // 获取常见问题
  const faqArticles = helpCategories
    .find(c => c.title === "常见问题")
    ?.articles.map(id => helpArticles[id])
    .filter(Boolean) || []

  return (
    <div className="flex flex-col">
      {/* Hero Section with Search */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                需要帮助？
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                浏览我们的帮助文档，或搜索您的问题
              </p>
            </div>
            <div className="w-full max-w-[600px] flex items-center space-x-2">
              <Input
                placeholder="搜索您的问题..."
                className="h-12"
              />
              <Button size="lg" className="h-12 px-8">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {helpCategories.slice(0, 3).map((category) => (
              <div key={category.title} className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-3">
                  {category.articles.map((articleId) => {
                    const article = helpArticles[articleId]
                    if (!article) return null
                    return (
                      <li key={articleId}>
                        <Link href={`/help/${articleId}`} className="text-primary hover:underline">
                          • {article.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">最新文章</h2>
            <p className="text-muted-foreground">查看最新的使用指南和最佳实践</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {latestArticles.slice(0, 3).map(article => (
              <Link key={article.id} href={`/help/${article.id}`} className="block group">
                <Card className="h-full p-6 transition-all hover:shadow-md">
                  <h3 className="text-lg font-semibold group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {article.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <span>最后更新：{new Date(article.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Article List */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map(article => (
              <Link
                key={article.id}
                href={`/help/${article.id}`}
                className="flex items-center p-4 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm group-hover:text-primary truncate">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {new Date(article.lastUpdated).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-[1000px] mx-auto">
            {faqArticles.map(article => (
              <Link key={article.id} href={`/help/${article.id}`} className="block group">
                <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800 hover:shadow-md transition-all">
                  <h3 className="font-semibold mb-2 group-hover:text-primary">{article.title}</h3>
                  <p className="text-muted-foreground">
                    {article.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                没有找到答案？
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                联系我们的客服团队，获取专业支持
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8">
                  联系客服
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" size="lg" className="h-12 px-8">
                  查看文档
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 