import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Icons } from "@/components/icons"
import Image from "next/image"

export const metadata = {
  title: "产品功能 - UserAI",
  description: "探索 UserAI 强大的AI营销功能，助力企业实现业务增长",
}

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20" />
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                强大的AI营销功能
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                集成AI创作、多平台管理、数据分析等功能，让营销工作更高效
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* AI Content Creation */}
            <div className="flex flex-col space-y-4">
              <div className="p-4 bg-primary/5 rounded-2xl">
                <Icons.brain className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">AI内容创作</h2>
              <p className="text-gray-500">
                智能生成高质量营销文案、产品描述、社媒内容等，大幅提升内容创作效率
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center gap-2">
                  <Icons.check className="h-5 w-5 text-green-500" />
                  多语言内容生成
                </li>
                <li className="flex items-center gap-2">
                  <Icons.check className="h-5 w-5 text-green-500" />
                  SEO优化建议
                </li>
                <li className="flex items-center gap-2">
                  <Icons.check className="h-5 w-5 text-green-500" />
                  智能改写与优化
                </li>
              </ul>
            </div>

            {/* Multi-platform Management */}
            <div className="flex flex-col space-y-4">
              <div className="p-4 bg-primary/5 rounded-2xl">
                <Icons.share2 className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">多平台管理</h2>
              <p className="text-gray-500">
                统一管理各大社交媒体平台，实现内容一键发布，提高运营效率
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center gap-2">
                  <Icons.check className="h-5 w-5 text-green-500" />
                  一键多平台发布
                </li>
                <li className="flex items-center gap-2">
                  <Icons.check className="h-5 w-5 text-green-500" />
                  互动消息管理
                </li>
                <li className="flex items-center gap-2">
                  <Icons.check className="h-5 w-5 text-green-500" />
                  自动发布排程
                </li>
              </ul>
            </div>

            {/* Data Analytics */}
            <div className="flex flex-col space-y-4">
              <div className="p-4 bg-primary/5 rounded-2xl">
                <Icons.laptop className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">数据分析</h2>
              <p className="text-gray-500">
                全面的数据分析功能，帮助您了解营销效果，优化营销策略
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center gap-2">
                  <Icons.check className="h-5 w-5 text-green-500" />
                  多平台数据整合
                </li>
                <li className="flex items-center gap-2">
                  <Icons.check className="h-5 w-5 text-green-500" />
                  自定义报表
                </li>
                <li className="flex items-center gap-2">
                  <Icons.check className="h-5 w-5 text-green-500" />
                  AI分析建议
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          {/* AI Content Creation */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                AI内容创作
              </div>
              <h2 className="text-3xl font-bold">智能化的内容创作助手</h2>
              <p className="text-gray-500 text-lg">
                基于先进的AI模型，为您提供专业的内容创作建议和优化方案
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Icons.check className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">智能文案生成</h3>
                    <p className="text-gray-500">根据场景自动生成符合品牌调性的营销文案</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icons.check className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">多语言支持</h3>
                    <p className="text-gray-500">支持多语言内容生成和翻译，助力品牌出海</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icons.check className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">SEO优化</h3>
                    <p className="text-gray-500">智能分析关键词，提供SEO优化建议</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/features/ai-content.jpg"
                alt="AI内容创作"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Multi-platform Management */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl order-last lg:order-first">
              <Image
                src="/images/features/multi-platform.jpg"
                alt="多平台管理"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                多平台管理
              </div>
              <h2 className="text-3xl font-bold">统一的社媒管理平台</h2>
              <p className="text-gray-500 text-lg">
                一站式管理所有社交媒体账号，提高运营效率
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Icons.check className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">一键发布</h3>
                    <p className="text-gray-500">同时发布到多个平台，节省时间和精力</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icons.check className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">消息管理</h3>
                    <p className="text-gray-500">统一管理各平台的评论和私信</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icons.check className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">发布排程</h3>
                    <p className="text-gray-500">提前安排内容发布时间，自动执行</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                数据分析
              </div>
              <h2 className="text-3xl font-bold">全面的数据分析工具</h2>
              <p className="text-gray-500 text-lg">
                深入分析营销数据，助您做出明智决策
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Icons.check className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">数据整合</h3>
                    <p className="text-gray-500">整合各平台数据，提供统一的分析视图</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icons.check className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">自定义报表</h3>
                    <p className="text-gray-500">根据需求生成个性化数据报表</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icons.check className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">AI洞察</h3>
                    <p className="text-gray-500">智能分析数据趋势，提供优化建议</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/features/data-analytics.jpg"
                alt="数据分析"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                开始使用 UserAI
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                立即注册，体验强大的AI营销功能
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-white text-primary hover:bg-white/90"
                >
                  免费开始使用
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 border-white text-white hover:bg-white hover:text-primary"
                >
                  联系我们
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
