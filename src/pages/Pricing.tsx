import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, X, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "Perfect for getting started with your fitness journey",
    monthlyPrice: 49,
    yearlyPrice: 39,
    featured: false,
    features: [
      { name: "Full gym access", included: true },
      { name: "Basic equipment usage", included: true },
      { name: "Locker room access", included: true },
      { name: "Mobile app access", included: true },
      { name: "Group classes", included: false },
      { name: "Personal training", included: false },
      { name: "Nutrition planning", included: false },
      { name: "Recovery zone access", included: false },
    ],
  },
  {
    name: "Pro",
    description: "Most popular choice for serious fitness enthusiasts",
    monthlyPrice: 99,
    yearlyPrice: 79,
    featured: true,
    features: [
      { name: "Full gym access", included: true },
      { name: "Premium equipment", included: true },
      { name: "Locker room + towel service", included: true },
      { name: "Mobile app + analytics", included: true },
      { name: "Unlimited group classes", included: true },
      { name: "2 PT sessions/month", included: true },
      { name: "Basic nutrition guidance", included: true },
      { name: "Recovery zone access", included: false },
    ],
  },
  {
    name: "Elite",
    description: "The ultimate package for maximum results",
    monthlyPrice: 199,
    yearlyPrice: 159,
    featured: false,
    features: [
      { name: "24/7 gym access", included: true },
      { name: "All premium equipment", included: true },
      { name: "VIP locker + amenities", included: true },
      { name: "Full app suite + coaching", included: true },
      { name: "Unlimited group classes", included: true },
      { name: "8 PT sessions/month", included: true },
      { name: "Custom nutrition plan", included: true },
      { name: "Full recovery zone access", included: true },
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                Pricing Plans
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-4 mb-6">
                INVEST IN <span className="text-gradient">YOURSELF</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-10">
                Choose the plan that fits your goals. All plans include access to our world-class facility 
                and expert support. No hidden fees, cancel anytime.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <Switch checked={isYearly} onCheckedChange={setIsYearly} />
                <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Yearly
                </span>
                {isYearly && (
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    Save 20%
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 pb-24">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                variant={plan.featured ? "pricingFeatured" : "pricing"}
                className="relative"
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-2 rounded-full text-sm font-bold text-primary-foreground uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pt-10">
                  <CardTitle className="text-3xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-muted-foreground text-lg">$</span>
                      <span className="font-display text-6xl text-foreground">
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground text-sm mb-2">/month</span>
                    </div>
                    {isYearly && (
                      <p className="text-primary text-sm mt-2">
                        Billed annually at ${plan.yearlyPrice * 12}/year
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                            <X className="w-3 h-3 text-muted-foreground" />
                          </div>
                        )}
                        <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant={plan.featured ? "hero" : "outline"} 
                    size="lg" 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-2xl mx-auto text-center mt-16">
            <p className="text-muted-foreground">
              All plans include a 7-day money-back guarantee. No contracts required. 
              Need a custom corporate plan? <a href="/contact" className="text-primary hover:underline">Contact us</a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
