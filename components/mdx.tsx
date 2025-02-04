import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"

interface MdxProps {
  code: string
  className?: string
}

export function Mdx({ code, className }: MdxProps) {
  return (
    <ReactMarkdown
      className={cn(
        "prose prose-lg max-w-none dark:prose-invert",
        "prose-headings:scroll-mt-20",
        "prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-4",
        "prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-4",
        "prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3",
        "prose-p:mb-4 prose-p:leading-7",
        "prose-ul:mb-4 prose-ol:mb-4 prose-li:mb-2",
        "prose-code:rounded-md prose-code:bg-muted prose-code:p-1",
        "prose-pre:rounded-lg prose-pre:bg-muted",
        className
      )}
    >
      {code}
    </ReactMarkdown>
  )
} 