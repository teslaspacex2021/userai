import { features } from "@/config/marketing"

export function FeaturesList() {
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