import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "产品服务 - UserAI",
  description: "探索 UserAI 的产品服务，了解如何通过我们的解决方案提升您的营销效果",
}

export default function ProductPage() {
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          一站式营销解决方案
        </h1>
        <p className="text-xl text-muted-foreground">
          从内容创作到渠道管理，我们提供全方位的营销服务支持
        </p>
      </div>

      {/* Product Solutions */}
      <div className="grid gap-16 mb-16">
        {/* Quick Website Building */}
        <section className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">快捷建站服务</h2>
              <p className="text-lg text-muted-foreground mb-6">
                2小时快速上线，打造专业独立站点
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icons.check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">专业模板库</h3>
                    <p className="text-muted-foreground">
                      多种行业模板可选，快速找到适合您的设计
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">定制开发</h3>
                    <p className="text-muted-foreground">
                      根据需求定制功能，确保网站独特性
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">全程技术支持</h3>
                    <p className="text-muted-foreground">
                      专业团队提供部署、维护、优化等服务
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 h-[400px] flex items-center justify-center">
              <Icons.monitor className="w-32 h-32 text-blue-500" />
            </div>
          </div>
        </section>

        {/* Multi-channel Publishing */}
        <section className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 h-[400px] flex items-center justify-center order-last md:order-first">
              <Icons.share2 className="w-32 h-32 text-purple-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">多渠道内容发布</h2>
              <p className="text-lg text-muted-foreground mb-6">
                一键发布到主流社交平台，提高内容触达
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icons.check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">主流平台支持</h3>
                    <p className="text-muted-foreground">
                      支持X、Facebook、TikTok等平台一键发布
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">智能发布调度</h3>
                    <p className="text-muted-foreground">
                      智能分析最佳发布时间，提高内容效果
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">数据分析</h3>
                    <p className="text-muted-foreground">
                      全面的数据分析，优化发布策略
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Content Generation */}
        <section className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">AI内容生成</h2>
              <p className="text-lg text-muted-foreground mb-6">
                智能生成高质量内容，提升独立站权重
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icons.check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">智能文案生成</h3>
                    <p className="text-muted-foreground">
                      基于AI快速生成营销文案、产品描述等内容
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">SEO优化</h3>
                    <p className="text-muted-foreground">
                      自动优化内容关键词，提升搜索排名
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">批量生成</h3>
                    <p className="text-muted-foreground">
                      支持批量生成不同主题的内容
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 h-[400px] flex items-center justify-center">
              <Icons.brain className="w-32 h-32 text-green-500" />
            </div>
          </div>
        </section>

        {/* Professional Services */}
        <section className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-8 h-[400px] flex items-center justify-center order-last md:order-first">
              <Icons.users className="w-32 h-32 text-orange-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">专业服务支持</h2>
              <p className="text-lg text-muted-foreground mb-6">
                一对一项目经理服务，助力业务增长
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icons.check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">广告投放咨询</h3>
                    <p className="text-muted-foreground">
                      提供Google、X等平台的广告投放策略
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">营销方案定制</h3>
                    <p className="text-muted-foreground">
                      根据行业特点定制营销解决方案
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">成长规划</h3>
                    <p className="text-muted-foreground">
                      制定长期发展规划，持续优化营销效果
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">开启您的营销之旅</h2>
        <p className="text-muted-foreground mb-6">
          立即联系我们，获取专属解决方案
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/login">
            <Button size="lg">免费咨询</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="lg">查看价格</Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 