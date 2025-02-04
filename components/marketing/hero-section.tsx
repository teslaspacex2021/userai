import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container">
      <div className="flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          构建下一代应用程序
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          高性能、可扩展、安全可靠的应用开发平台，助力您快速实现业务目标。
        </p>
        <div className="space-x-4">
          <Link href="/login">
            <Button size="lg">免费开始</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="lg">
              了解价格
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 