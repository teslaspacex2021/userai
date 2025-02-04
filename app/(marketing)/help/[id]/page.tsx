import { notFound } from "next/navigation"
import { helpArticles, helpCategories } from "@/config/marketing"
import { Metadata } from "next"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface HelpArticlePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params,
}: HelpArticlePageProps): Promise<Metadata> {
  // 使用 Promise.all 正确等待参数
  const [article] = await Promise.all([
    Promise.resolve(helpArticles[params.id])
  ])

  if (!article) {
    return {
      title: "文章未找到",
      description: "抱歉，您请求的文章不存在"
    }
  }

  // 提取文章第一段作为描述
  const firstParagraph = article.content
    .split('\n')
    .find(line => line.trim() && !line.trim().match(/^(\d+[\.\)、]|\-)/) )?.trim() || article.description

  return {
    title: `${article.title} - UserAI 帮助中心`,
    description: firstParagraph,
    openGraph: {
      title: article.title,
      description: firstParagraph,
      type: 'article',
      publishedTime: article.lastUpdated,
      authors: ['UserAI'],
    },
    keywords: [article.category, 'UserAI', '帮助文档', article.title],
  }
}

export default async function HelpArticlePage({
  params,
}: HelpArticlePageProps) {
  const [article] = await Promise.all([
    Promise.resolve(helpArticles[params.id])
  ])

  if (!article) {
    notFound()
  }

  // 提取标题作为目录
  const titles = article.content.split('\n')
    .filter(line => line.trim().match(/^(\d+(\.\d+)?[\.\)、])\s*(.+)$/))
    .map(line => {
      const match = line.trim().match(/^(\d+(\.\d+)?[\.\)、])\s*(.+)$/)
      return {
        number: match![1],
        text: match![3],
        level: match![1].includes('.') ? 2 : 1
      }
    })

  // 所有分类
  const allCategories = [
    { title: "快速入门", articles: helpCategories.find(c => c.title === "快速入门")?.articles || [] },
    { title: "账户与计费", articles: helpCategories.find(c => c.title === "账户与计费")?.articles || [] },
    { title: "热门主题", articles: Object.keys(helpArticles).filter(id => helpArticles[id].category === "热门主题") },
    { title: "最新博文", articles: Object.keys(helpArticles).filter(id => helpArticles[id].category === "最新文章") },
    { title: "常见问题", articles: helpCategories.find(c => c.title === "常见问题")?.articles || [] }
  ]

  return (
    <div className="grid grid-cols-[280px_1fr_240px] h-screen">
      {/* Left Sidebar */}
      <aside className="border-r border-border/10">
        <div className="flex flex-col h-full">
          <div className="h-14 flex items-center px-4 border-b border-border/10">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground/50" />
              <Input
                placeholder="搜索文档..."
                className="pl-8 text-sm border-0 focus-visible:ring-0 bg-muted/50"
              />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-6">
              {allCategories.map((category) => (
                <div key={category.title} className="space-y-1">
                  <h4 className="text-sm font-medium text-foreground/70 px-2">
                    {category.title}
                  </h4>
                  <div className="grid grid-flow-row auto-rows-max text-sm">
                    {category.articles.map((articleId) => {
                      const articleItem = helpArticles[articleId]
                      if (!articleItem) return null
                      return (
                        <Link
                          key={articleItem.id}
                          href={`/help/${articleItem.id}`}
                          className={cn(
                            "flex w-full items-center rounded-md px-2 py-1.5 hover:bg-muted/50 transition-colors",
                            params.id === articleItem.id
                              ? "font-medium text-foreground bg-muted/50"
                              : "text-muted-foreground/70"
                          )}
                        >
                          {articleItem.title}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </aside>

      {/* Main Content */}
      <main className="h-screen overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border/40 hover:[&::-webkit-scrollbar-thumb]:bg-border/60">
        <article className="max-w-3xl mx-auto px-8 py-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground/80">
              {article.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground/60 border-t border-border/10 mt-4 pt-4">
              <time dateTime={article.lastUpdated}>
                更新于 {new Date(article.lastUpdated).toLocaleDateString('zh-CN')}
              </time>
              <div className="px-2 py-0.5 rounded-full bg-muted/50 text-xs">
                {article.type === 'article' ? '文章' : article.type === 'doc' ? '文档' : '问答'}
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            {article.content.split('\n').map((line, index) => {
              const titleMatch = line.trim().match(/^(\d+(\.\d+)?[\.\)、])\s*(.+)$/)
              if (titleMatch) {
                const level = titleMatch[1].includes('.') ? 'h3' : 'h2'
                const Component = level
                return (
                  <Component
                    key={index}
                    id={`heading-${index}`}
                    className={cn(
                      "font-semibold tracking-tight",
                      level === 'h2' ? "text-2xl" : "text-xl"
                    )}
                  >
                    {titleMatch[1]} {titleMatch[3]}
                  </Component>
                )
              } else if (line.trim().startsWith('-')) {
                return (
                  <div key={index} className="flex gap-2 text-muted-foreground/80 pl-4">
                    <span>•</span>
                    {line.trim().slice(1).trim()}
                  </div>
                )
              } else if (line.trim()) {
                return (
                  <p key={index} className="leading-7 text-muted-foreground/80">
                    {line}
                  </p>
                )
              }
              return null
            })}
          </div>
        </article>
      </main>

      {/* Right Sidebar - TOC */}
      <aside className="border-l border-border/10">
        <ScrollArea className="h-full">
          <nav className="p-4">
            <h5 className="text-xs font-medium text-foreground/70 mb-2">
              目录
            </h5>
            <div className="space-y-1">
              {titles.map((title, index) => (
                <a
                  key={index}
                  href={`#heading-${index}`}
                  className={cn(
                    "block text-sm py-1 text-muted-foreground/70 hover:text-foreground transition-colors",
                    title.level === 1 ? "pl-0" : "pl-4"
                  )}
                >
                  {title.text}
                </a>
              ))}
            </div>
          </nav>
        </ScrollArea>
      </aside>
    </div>
  )
} 