import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "注册 - UserAI",
  description: "注册 UserAI 账号，开始使用智能营销工具",
}

export default function RegisterPage({
  searchParams,
}: {
  searchParams: { plan?: string }
}) {
  const plan = searchParams.plan || "basic"

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="flex items-center space-x-2">
            <span>UserAI</span>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "UserAI 帮助我们将内容创作和发布效率提升了 3 倍，团队工作更加高效，ROI 显著提升。"
            </p>
            <footer className="text-sm">李女士 - 电商运营总监</footer>
          </blockquote>
        </div>
      </div>
      <div className="p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">创建账号</h1>
            <p className="text-sm text-muted-foreground">
              {plan === "pro"
                ? "您选择了专业版，可免费试用14天"
                : plan === "basic"
                ? "您选择了基础版，可免费试用14天"
                : "选择套餐并开始免费试用"}
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                邮箱
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-medium">
                密码
              </label>
              <input
                id="password"
                type="password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Button>注册</Button>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            点击"注册"，即表示您同意我们的{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
              服务条款
            </Link>{" "}
            和{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
              隐私政策
            </Link>
            。
          </p>
          <p className="px-8 text-center text-sm text-muted-foreground">
            已有账号？{" "}
            <Link href="/login" className="underline underline-offset-4 hover:text-primary">
              登录
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 