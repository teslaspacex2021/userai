'use client'

import { cn } from "@/lib/utils"

interface TocItemProps {
  heading: {
    level: number
    text: string
    id: string
  }
}

export function TocItem({ heading }: TocItemProps) {
  return (
    <a
      href={`#${heading.id}`}
      className={cn(
        "block py-1 text-sm transition-colors hover:text-foreground",
        heading.level === 1 ? "pl-2" :
        heading.level === 2 ? "pl-4" : "pl-6",
        "text-muted-foreground hover:text-foreground"
      )}
      onClick={(e) => {
        e.preventDefault()
        const element = document.querySelector(`#${heading.id}`)
        if (element) {
          const yOffset = -100 // 调整滚动位置的偏移量
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }}
    >
      {heading.text}
    </a>
  )
} 