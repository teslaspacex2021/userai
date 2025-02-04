import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { pricingPlans } from "@/config/marketing"

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricingPlans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-lg border p-6 ${
            plan.popular
              ? "border-primary bg-primary/5 shadow-lg"
              : "bg-background"
          }`}
        >
          <h3 className="text-2xl font-semibold">{plan.name}</h3>
          <p className="mt-2 text-muted-foreground">{plan.description}</p>
          <div className="mt-4">
            <span className="text-4xl font-bold">{plan.price}</span>
            {plan.price.includes("¥") && <span className="text-muted-foreground">/月</span>}
          </div>
          <ul className="mt-6 space-y-4">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            className="mt-8 w-full"
            variant={plan.popular ? "default" : "outline"}
          >
            {plan.cta}
          </Button>
        </div>
      ))}
    </div>
  )
} 