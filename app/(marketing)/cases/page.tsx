import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "客户案例 - UserAI",
  description: "探索 UserAI 的成功客户案例，了解我们如何帮助企业提升营销效率",
}

export default function CasesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                客户成功案例
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                探索我们如何帮助不同行业的客户实现营销目标，提升业务增长
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {/* Case 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  电商行业
                </div>
                <h2 className="text-3xl font-bold">某跨境电商品牌增长案例</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  通过 UserAI 的一站式营销解决方案，该品牌在3个月内实现了：
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>• 社交媒体粉丝增长300%</li>
                  <li>• 内容创作效率提升200%</li>
                  <li>• 营销成本降低40%</li>
                  <li>• 转化率提升35%</li>
                </ul>
                <Button variant="outline" className="mt-4">
                  查看详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg overflow-hidden dark:from-blue-900 dark:to-indigo-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-blue-500">案例图片</div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg overflow-hidden dark:from-purple-900 dark:to-pink-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-purple-500">案例图片</div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  自媒体行业
                </div>
                <h2 className="text-3xl font-bold">知名博主效率提升案例</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  借助 UserAI 的AI创作和多平台管理功能，该博主实现了：
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>• 内容产出量提升5倍</li>
                  <li>• 发布时间节省80%</li>
                  <li>• 粉丝互动率提升50%</li>
                  <li>• 月收入增长200%</li>
                </ul>
                <Button variant="outline" className="mt-4">
                  查看详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Case 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  企业服务
                </div>
                <h2 className="text-3xl font-bold">某科技公司营销转型案例</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  使用 UserAI 的全套营销解决方案后，该公司达成：
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>• 营销团队效率提升150%</li>
                  <li>• 广告投放ROI提升60%</li>
                  <li>• 潜在客户增长400%</li>
                  <li>• 品牌知名度显著提升</li>
                </ul>
                <Button variant="outline" className="mt-4">
                  查看详情
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-green-100 to-teal-100 rounded-lg overflow-hidden dark:from-green-900 dark:to-teal-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-green-500">案例图片</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                想要实现类似的成功？
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                立即开始使用 UserAI，让我们帮助您实现营销目标
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8">
                  免费咨询
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="h-12 px-8">
                  查看价格
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 