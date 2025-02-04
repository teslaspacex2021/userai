import { type ReactNode } from "react"
import Link from "next/link"
import { NavMain } from "@/components/marketing/nav-main"
import { Footer } from "@/components/marketing/footer"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"

interface MarketingLayoutProps {
  children: ReactNode
}

export default function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
      
      {/* Gradient Blob */}
      <div className="fixed top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl" />
      <div className="fixed bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-primary/20 blur-3xl" />

      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto w-full max-w-screen-xl px-6 md:px-8">
          <NavMain items={marketingConfig.mainNav} />
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-screen-xl">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  )
} 