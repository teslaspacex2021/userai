import Link from "next/link"
import { marketingConfig } from "@/config/marketing"

export function Footer() {
  const { footerNav } = marketingConfig
  const { branding } = footerNav

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  {branding.name[0]}
                </span>
              </div>
              <span className="text-xl font-bold">{branding.name}</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {branding.description}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-base font-medium">产品</h3>
            <ul className="mt-4 space-y-3">
              {footerNav.product.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-base font-medium">支持</h3>
            <ul className="mt-4 space-y-3">
              {footerNav.support.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base font-medium">公司</h3>
            <ul className="mt-4 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between border-t py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {branding.name}. All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-6 md:mt-0">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 