import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor,
  DollarSign,
  Target,
  Video,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/navigation/Header";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Complete Retail Solutions Suite
            </h1>
            <p className="mb-10 max-w-3xl mx-auto text-xl text-muted-foreground">
              Four powerful integrated solutions designed to transform your retail operations, 
              maximize efficiency, and drive profitability
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* ESL Solution */}
            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl">Electronic Shelf Labels (ESL)</CardTitle>
                <CardDescription className="text-base">
                  Real-time digital price management for dynamic retail environments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Transform your store with cutting-edge digital pricing that updates instantly across all locations. 
                  Eliminate manual price changes, reduce errors, and enable dynamic pricing strategies that respond 
                  to market conditions in real-time.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Real-time price updates across all store locations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Automated compliance with pricing regulations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Integration with inventory and POS systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Reduce labor costs by up to 80%</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link to="/esl/login">
                    Explore ESL Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Dynamic Pricing */}
            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-background">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  <DollarSign className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl">Dynamic Pricing</CardTitle>
                <CardDescription className="text-base">
                  AI-powered pricing optimization to maximize revenue and minimize waste
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Leverage advanced algorithms to automatically adjust prices based on expiration dates, demand patterns, 
                  inventory levels, and competitor pricing. Maximize sell-through while maintaining optimal margins.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">Automated markdown schedules based on freshness</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">AI-driven demand forecasting and pricing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">Competitor price monitoring and matching</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">Increase profit margins by 15-25%</span>
                  </div>
                </div>
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/management/dynamic-pricing">
                    Explore Dynamic Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Planogram Compliance */}
            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl">Planogram Compliance</CardTitle>
                <CardDescription className="text-base">
                  Vision-based monitoring to ensure perfect product placement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Use AI-powered computer vision to automatically verify shelf layouts match planograms. 
                  Identify compliance issues, out-of-stock situations, and misplaced items in real-time 
                  to optimize product visibility and sales.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">AI vision-based shelf analysis and monitoring</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Real-time alerts for compliance violations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Automated reporting and analytics dashboard</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Increase sales by up to 30% through optimal placement</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link to="/management/planogram-compliance">
                    Explore Planogram Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* In-Store Media & Advertising */}
            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-background">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  <Video className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl">In-Store Media Management</CardTitle>
                <CardDescription className="text-base">
                  Dynamic digital content to engage customers and drive purchases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Transform your store into an interactive shopping experience with targeted digital displays. 
                  Schedule promotions, showcase products, and deliver personalized content that resonates 
                  with shoppers at the perfect moment.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">Centralized content management across locations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">Time-based and event-triggered content scheduling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">Integration with promotions and pricing engines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">Drive impulse purchases and increase basket size</span>
                  </div>
                </div>
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/management/media-management">
                    Explore Media Management
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
            Integrated Solutions, Unified Platform
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Our solutions work seamlessly together, sharing data and insights across your entire retail operation. 
            Get the full picture with a single, unified platform that grows with your business.
          </p>
          <Button asChild size="lg" className="bg-gradient-primary shadow-elevated">
            <Link to="/management">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
