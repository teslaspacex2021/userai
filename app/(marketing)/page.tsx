import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, Play, Building, ShoppingCart, Video } from "lucide-react"
import Link from "next/link"
import { Icons } from "@/components/icons"
import Image from "next/image"

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section with Animated Background */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-pink-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                UserAI - 一站式营销SaaS平台
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                整合AI创作、社媒管理、独立站管理等功能，帮助用户提高营销效率，实现业务增长
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
                  免费开始使用
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="h-12 px-8">
                  了解更多
                </Button>
              </Link>
            </div>
            {/* Stats with Animation */}
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="text-4xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">活跃客户</div>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="text-4xl font-bold text-primary">200%</div>
                <div className="text-sm text-muted-foreground">平均效率提升</div>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">AI模型</div>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">技术支持</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo with Floating Elements */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                产品功能
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                智能化的营销工作台
              </h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                通过直观的界面，轻松管理所有营销任务。AI 助手全程指导，让营销工作更轻松。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm transition-transform hover:-translate-y-1">
                  <Icons.check className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-semibold">智能内容创作建议</h3>
                    <p className="text-sm text-gray-500">AI分析热点，智能推荐创作方向</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm transition-transform hover:-translate-y-1">
                  <Icons.check className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-semibold">多平台一键发布</h3>
                    <p className="text-sm text-gray-500">支持各大主流平台，一键分发内容</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm transition-transform hover:-translate-y-1">
                  <Icons.check className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-semibold">实时数据分析</h3>
                    <p className="text-sm text-gray-500">多维度数据分析，助力决策优化</p>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 gap-2 group"
              >
                <Play className="w-4 h-4 group-hover:text-primary transition-colors" />
                观看演示视频
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl blur-2xl" />
              <div className="relative space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/dashboard-preview.png"
                    alt="UserAI 工作台预览"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/content-creation.png"
                      alt="内容创作界面"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/analytics-dashboard.png"
                      alt="数据分析界面"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions with Interactive Cards */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              解决方案
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              为不同行业提供专业解决方案
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              根据您的行业特点，提供量身定制的营销方案
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* 电商解决方案 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">电商营销方案</h3>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex items-center gap-2">
                    <Icons.check className="w-4 h-4 text-green-500" />
                    产品描述 AI 生成
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.check className="w-4 h-4 text-green-500" />
                    多平台选品分析
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.check className="w-4 h-4 text-green-500" />
                    竞品监控分析
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.check className="w-4 h-4 text-green-500" />
                    智能定价策略
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/solutions/ecommerce">
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      了解更多
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* 自媒体解决方案 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Video className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">自媒体方案</h3>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex items-center gap-2">
                    <Icons.check className="w-4 h-4 text-green-500" />
                    内容创意生成
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.check className="w-4 h-4 text-green-500" />
                    热点话题发现
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.check className="w-4 h-4 text-green-500" />
                    粉丝互动管理
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.check className="w-4 h-4 text-green-500" />
                    数据增长分析
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/solutions/media">
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      了解更多
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* 企业品牌解决方案 */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">企业品牌方案</h3>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex items-center gap-2">
                    <Icons.check className="w-4 h-4 text-green-500" />
                    品牌形象塑造
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.check className="w-4 h-4 text-green-500" />
                    舆情监控分析
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.check className="w-4 h-4 text-green-500" />
                    营销活动策划
                  </li>
                  <li className="flex items-center gap-2">
                    <Icons.check className="w-4 h-4 text-green-500" />
                    品牌声量分析
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/solutions/brand">
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      了解更多
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners with Animated Logos - Fixed Layout */}
      <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              合作伙伴
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              支持多平台集成
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              无缝对接主流社交媒体和电商平台
            </p>
          </div>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-gray-900 z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-gray-900 z-10" />
            <div className="flex overflow-hidden">
              <div className="flex space-x-8 animate-scroll-slow">
                {[
                  { src: "/images/platforms/twitter.svg", alt: "X (Twitter)" },
                  { src: "/images/platforms/facebook.svg", alt: "Facebook" },
                  { src: "/images/platforms/instagram.svg", alt: "Instagram" },
                  { src: "/images/platforms/tiktok.svg", alt: "TikTok" },
                  { src: "/images/platforms/linkedin.svg", alt: "LinkedIn" },
                  { src: "/images/platforms/youtube.svg", alt: "YouTube" },
                  { src: "/images/platforms/pinterest.svg", alt: "Pinterest" },
                ].map((platform, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-20 h-20 bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:scale-105"
                  >
                    <Image
                      src={platform.src}
                      alt={platform.alt}
                      width={40}
                      height={40}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
              <div className="flex space-x-8 animate-scroll-slow" aria-hidden="true">
                {[
                  { src: "/images/platforms/twitter.svg", alt: "X (Twitter)" },
                  { src: "/images/platforms/facebook.svg", alt: "Facebook" },
                  { src: "/images/platforms/instagram.svg", alt: "Instagram" },
                  { src: "/images/platforms/tiktok.svg", alt: "TikTok" },
                  { src: "/images/platforms/linkedin.svg", alt: "LinkedIn" },
                  { src: "/images/platforms/youtube.svg", alt: "YouTube" },
                  { src: "/images/platforms/pinterest.svg", alt: "Pinterest" },
                ].map((platform, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-20 h-20 bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:scale-105"
                  >
                    <Image
                      src={platform.src}
                      alt={platform.alt}
                      width={40}
                      height={40}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:gap-16">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">核心功能</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                我们提供全方位的营销解决方案，助力您的业务增长
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* AI辅助创作 */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icons.brain className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI辅助创作</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  通过AI技术快速生产高质量内容，降低内容创作成本。适合自媒体职业者和企业运营人员。
                </p>
              </div>

              {/* 多平台管理 */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icons.share2 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">多平台管理</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  一站式管理多个社交媒体平台，提高内容发布效率。特别适合外贸从业者和企业运营人员。
                </p>
              </div>

              {/* 数据分析 */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icons.laptop className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">数据分析</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  整合多平台数据，提供统一的分析界面，助力决策。对创业者和企业运营人员尤为有用。
                </p>
              </div>

              {/* 工作流简化 */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icons.zap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">工作流简化</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  打通各平台账号，实现单点登录，简化工作流程。为所有用户提高工作效率。
                </p>
              </div>

              {/* 独立站点搭建 */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icons.rocket className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">独立站点搭建</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  快速搭建独立站点，2小时内部署上线，支持定制需求。适合外贸从业者和创业者。
                </p>
              </div>

              {/* 广告咨询服务 */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icons.users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">广告咨询服务</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  提供Google、X等平台的广告咨询服务，合理规划广告投入。帮助企业优化营销策略。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">如何使用 UserAI</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              简单三步，开启智能营销之旅
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold">注册账号</h3>
              <p className="text-gray-500">
                简单注册，即可获得14天免费试用期，体验完整功能
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold">连接账号</h3>
              <p className="text-gray-500">
                一键连接您的社交媒体账号，实现统一管理
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold">开始使用</h3>
              <p className="text-gray-500">
                使用AI助手创作内容，一键发布到多个平台
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">用户评价</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              看看其他用户如何评价 UserAI
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">L</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">李女士</h4>
                  <p className="text-sm text-gray-500">电商运营总监</p>
                </div>
              </div>
              <p className="text-gray-500">
                "UserAI 帮助我们将内容创作和发布效率提升了 3 倍，团队工作更加高效，ROI 显著提升。"
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">W</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">王先生</h4>
                  <p className="text-sm text-gray-500">跨境电商创始人</p>
                </div>
              </div>
              <p className="text-gray-500">
                "独立站建设和运营一直是我们的痛点，通过 UserAI 2小时完成建站，大大节省了时间和成本。"
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">Z</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">张女士</h4>
                  <p className="text-sm text-gray-500">自媒体博主</p>
                </div>
              </div>
              <p className="text-gray-500">
                "AI 创作功能太赞了，不仅能快速生成高质量内容，还能自动优化 SEO，为我节省了大量时间。"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">最新动态</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              了解产品更新和营销趋势
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/ai-marketing-trends" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/images/blog/ai-marketing-trends.jpg"
                    alt="AI营销趋势"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold group-hover:text-primary transition-colors">
                    2024年AI营销趋势分析
                  </h3>
                  <p className="text-gray-500 mt-2">
                    探讨AI如何改变营销格局，以及企业如何利用AI提升营销效果
                  </p>
                  <div className="flex items-center mt-4 text-sm text-gray-500">
                    <time>2024-03-15</time>
                    <span className="mx-2">•</span>
                    <span>5 分钟阅读</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/blog/social-media-strategy" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/images/blog/social-media-strategy.jpg"
                    alt="社交媒体营销策略"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold group-hover:text-primary transition-colors">
                    社交媒体营销策略指南
                  </h3>
                  <p className="text-gray-500 mt-2">
                    如何制定有效的社交媒体营销策略，提高品牌影响力
                  </p>
                  <div className="flex items-center mt-4 text-sm text-gray-500">
                    <time>2024-03-10</time>
                    <span className="mx-2">•</span>
                    <span>4 分钟阅读</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/blog/ecommerce-optimization" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/images/blog/ecommerce-optimization.jpg"
                    alt="电商网站优化"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold group-hover:text-primary transition-colors">
                    电商网站优化技巧
                  </h3>
                  <p className="text-gray-500 mt-2">
                    提升网站转化率的实用技巧和最佳实践
                  </p>
                  <div className="flex items-center mt-4 text-sm text-gray-500">
                    <time>2024-03-05</time>
                    <span className="mx-2">•</span>
                    <span>6 分钟阅读</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/blog">
              <Button variant="outline" size="lg" className="h-12 px-8">
                查看更多文章
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                准备开始您的营销之旅？
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                立即注册，获得14天免费试用，体验一站式AI营销解决方案
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
