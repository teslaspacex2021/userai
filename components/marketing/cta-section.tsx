import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-4 rounded-lg bg-muted px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">准备开始了吗？</h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg">
          立即体验我们的服务。
        </p>
        <div className="space-x-4">
          <Link href="/login">
            <Button size="lg">开始使用</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              联系我们
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 