import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "定价 - UserAI",
  description: "探索 UserAI 的定价方案，选择最适合您的套餐",
}

const plans = [
  {
    name: "基础版",
    price: "199",
    description: "适合个人创作者和小型团队",
    features: [
      "AI内容创作（每月1000次）",
      "2个社交媒体账号",
      "基础数据分析",
      "邮件支持",
      "1个用户账号",
    ],
    cta: "开始使用",
    href: "/login",
  },
  {
    name: "专业版",
    price: "499",
    description: "适合成长期企业和专业团队",
    features: [
      "AI内容创作（每月5000次）",
      "10个社交媒体账号",
      "高级数据分析",
      "优先邮件支持",
      "5个用户账号",
      "自定义报表",
      "API访问",
    ],
    cta: "开始使用",
    href: "/login",
    popular: true,
  },
  {
    name: "企业版",
    price: "联系我们",
    description: "适合大型企业和品牌",
    features: [
      "无限AI内容创作",
      "无限社交媒体账号",
      "企业级数据分析",
      "24/7专属支持",
      "无限用户账号",
      "自定义功能开发",
      "专属客户成功经理",
      "SLA保障",
    ],
    cta: "联系我们",
    href: "/contact",
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20" />
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                简单透明的定价方案
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                选择最适合您的方案，所有方案均可免费试用14天
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg ${
                  plan.popular
                    ? "border-2 border-primary"
                    : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm rounded-full">
                    最受欢迎
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">{plan.name}</h2>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">¥{plan.price}</span>
                    {plan.price !== "联系我们" && (
                      <span className="text-gray-500 dark:text-gray-400">
                        /月
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.href}>
                  <Button
                    size="lg"
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : ""
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">常见问题</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              了解更多关于我们的定价和服务
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2">如何开始免费试用？</h3>
              <p className="text-gray-500">
                注册账号后即可获得14天免费试用期，无需信用卡，试用期结束前可随时取消。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2">可以更换套餐吗？</h3>
              <p className="text-gray-500">
                可以随时升级或降级您的套餐，费用会按实际使用天数计算。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2">有长期优惠吗？</h3>
              <p className="text-gray-500">
                年付可享受8.5折优惠，如需更多优惠可联系我们的销售团队。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2">发票如何开具？</h3>
              <p className="text-gray-500">
                支持开具增值税专用发票和普通发票，可在账单中心自助申请。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2">如何获取技术支持？</h3>
              <p className="text-gray-500">
                基础版提供邮件支持，专业版和企业版提供优先支持和专属客服。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold mb-2">是否支持退款？</h3>
              <p className="text-gray-500">
                如对服务不满意，可在购买后7天内申请全额退款，无需任何理由。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                准备开始使用了吗？
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                立即开始14天免费试用，体验所有专业功能
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/login">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-white text-primary hover:bg-white/90"
                >
                  开始使用
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 border-white text-white hover:bg-white hover:text-primary"
                >
                  联系销售
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
