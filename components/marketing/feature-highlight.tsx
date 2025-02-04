import { Icons } from "@/components/icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureHighlight() {
  return (
    <section className="container">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-8 w-8 mb-2" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

const features = [
  {
    title: "高性能",
    description: "优化的性能表现，为用户提供极致体验",
    icon: Icons.zap,
  },
  {
    title: "安全可靠",
    description: "企业级安全保障，数据加密传输",
    icon: Icons.shield,
  },
  {
    title: "快速部署",
    description: "自动化部署流程，快速上线应用",
    icon: Icons.rocket,
  },
] 