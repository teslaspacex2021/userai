import { Button } from "@/components/ui/button"
import { ArrowRight, Building, ShoppingCart, Video, Check, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "解决方案 - UserAI",
  description: "探索 UserAI 为不同行业提供的专业营销解决方案",
}

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20" />
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                专业的营销解决方案
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                为不同行业量身定制的一站式营销方案，助力企业实现业务增长
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          {/* E-commerce Solution */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm text-blue-600">
                电商解决方案
              </div>
              <h2 className="text-3xl font-bold">跨境电商营销方案</h2>
              <p className="text-gray-500 text-lg">
                针对跨境电商企业的全方位营销解决方案，从选品到营销，助力品牌出海。
              </p>
              <div className="grid gap-4">
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI 智能选品</h3>
                    <p className="text-gray-500">基于大数据分析，智能推荐热销品类和产品，降低选品风险</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">多语言内容生成</h3>
                    <p className="text-gray-500">一键生成多语言产品描述、营销文案，确保内容本地化</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">竞品分析</h3>
                    <p className="text-gray-500">实时监控竞品动态，分析竞品策略，制定差异化竞争方案</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    免费咨询
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/cases/ecommerce">
                  <Button variant="outline" size="lg">
                    查看案例
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/solutions/ecommerce.jpg"
                alt="电商解决方案"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Media Solution */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl order-last lg:order-first">
              <Image
                src="/images/solutions/media.jpg"
                alt="自媒体解决方案"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-purple-50 px-3 py-1 text-sm text-purple-600">
                自媒体解决方案
              </div>
              <h2 className="text-3xl font-bold">自媒体创作方案</h2>
              <p className="text-gray-500 text-lg">
                为自媒体创作者提供一站式内容创作和发布解决方案，提升创作效率和内容质量。
              </p>
              <div className="grid gap-4">
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">智能创意生成</h3>
                    <p className="text-gray-500">基于热点分析，智能推荐创作主题和方向</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">一键多平台发布</h3>
                    <p className="text-gray-500">支持多平台内容同步发布，提高发布效率</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">数据分析优化</h3>
                    <p className="text-gray-500">全面的数据分析，助力内容持续优化</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    免费咨询
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/cases/media">
                  <Button variant="outline" size="lg">
                    查看案例
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Enterprise Solution */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-green-50 px-3 py-1 text-sm text-green-600">
                企业品牌方案
              </div>
              <h2 className="text-3xl font-bold">企业品牌营销方案</h2>
              <p className="text-gray-500 text-lg">
                为企业提供全方位的品牌营销解决方案，助力品牌建设和市场拓展。
              </p>
              <div className="grid gap-4">
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">品牌形象塑造</h3>
                    <p className="text-gray-500">专业的品牌策划和设计，打造独特品牌形象</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">全渠道营销</h3>
                    <p className="text-gray-500">整合线上线下渠道，实现全方位品牌曝光</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">舆情监控</h3>
                    <p className="text-gray-500">实时监控品牌声量，及时应对市场反馈</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    免费咨询
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/cases/enterprise">
                  <Button variant="outline" size="lg">
                    查看案例
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/solutions/enterprise.jpg"
                alt="企业品牌解决方案"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold">寻找适合您的解决方案</h2>
            <p className="text-gray-500 max-w-[600px]">
              我们的专业顾问团队将为您提供个性化的解决方案建议
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg">
                  免费咨询
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 