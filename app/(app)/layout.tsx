import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap'  // 优化字体加载
})

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
