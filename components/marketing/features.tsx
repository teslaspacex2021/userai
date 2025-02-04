import { Icons } from "@/components/icons"
import { LucideIcon } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

export function Features() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.title} className="rounded-lg border p-6">
          <feature.icon className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

const features: Feature[] = [
  {
    title: "特性 1",
    description: "特性描述...",
    icon: Icons.laptop,
  },
  // ... 添加更多特性
]
