import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  TrendingDown, 
  Users, 
  ArrowRight, 
  Calendar, 
  DollarSign, 
  Package, 
  TrendingUp,
  Truck,
  GraduationCap,
  Clock,
  Store,
  Heart,
  Leaf,
  Monitor,
  BarChart3,
  Target,
  Video,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  LineChart
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/navigation/Header";
import smartSaveLogo from "@/assets/smartsave-logo.png";
import displayDataLogo from "@/assets/displaydata-logo.png";

const valuePropositions = [
  {
    title: "Reduce Food Waste by 40%",
    subtitle: "AI-Powered Freshness Management",
    description: "Our intelligent system tracks product freshness in real-time, enabling dynamic pricing and proactive waste reduction strategies.",
    icon: Leaf,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Increase Profit Margins by 25%",
    subtitle: "Smart Dynamic Pricing",
    description: "Optimize pricing strategies based on freshness, demand, and inventory levels to maximize revenue while minimizing waste.",
    icon: TrendingUp,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "100% Price Accuracy",
    subtitle: "Electronic Shelf Labels",
    description: "Real-time digital price updates across all locations eliminate pricing errors and enable instant promotional changes.",
    icon: Monitor,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Boost Customer Engagement",
    subtitle: "Interactive Digital Displays",
    description: "Transform shopping experiences with targeted content, promotions, and product information at the point of decision.",
    icon: Video,
    gradient: "from-orange-500/20 to-red-500/20"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % valuePropositions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Carousel */}
      <section className="relative overflow-hidden px-6 py-24 lg:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        </div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Static Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center gap-4 flex-wrap">
                <img src={smartSaveLogo} alt="SmartSave" className="h-16 w-auto object-contain" />
                <img src={displayDataLogo} alt="DisplayData" className="h-10 w-auto object-contain" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight">
                  Transform Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Retail Operations
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Drive freshness, reduce waste, and maximize profitability with DisplayData's intelligent retail solutions.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80 shadow-lg hover:shadow-xl transition-all">
                  <Link to="/management">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2">
                  <a href="#solutions">View Solutions</a>
                </Button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div>
                  <div className="text-3xl font-bold text-foreground">40%</div>
                  <div className="text-sm text-muted-foreground">Waste Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">25%</div>
                  <div className="text-sm text-muted-foreground">Profit Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Price Accuracy</div>
                </div>
              </div>
            </div>

            {/* Right Column - Carousel */}
            <div className="relative h-[500px] lg:h-[600px]">
              {valuePropositions.map((prop, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <Card className={`h-full shadow-2xl border-2 bg-gradient-to-br ${prop.gradient} backdrop-blur-sm`}>
                    <CardContent className="h-full flex flex-col justify-between p-8 lg:p-12">
                      <div className="space-y-6">
                        <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-background/80 shadow-lg">
                          <prop.icon className="h-10 w-10 text-primary" />
                        </div>
                        
                        <div className="space-y-3">
                          <div className="inline-block px-4 py-1 bg-background/60 rounded-full">
                            <p className="text-sm font-semibold text-primary">{prop.subtitle}</p>
                          </div>
                          <h3 className="text-4xl font-bold text-foreground leading-tight">
                            {prop.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {prop.description}
                          </p>
                        </div>
                      </div>

                      {/* Carousel Indicators */}
                      <div className="flex gap-2 mt-8">
                        {valuePropositions.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-2 rounded-full transition-all ${
                              idx === currentSlide ? 'w-12 bg-primary' : 'w-2 bg-primary/30'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Main Solutions Section */}
      <section id="solutions" className="px-6 py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Complete Solution Suite</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
              Everything You Need to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Revolutionize Retail
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Four powerful integrated solutions designed to transform your retail operations, 
              maximize efficiency, and drive profitability
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* ESL Solution */}
            <Card className="group shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500" />
              <CardHeader className="relative z-10">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-bold">Electronic Shelf Labels (ESL)</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
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
            <Card className="group shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-background overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-2xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500" />
              <CardHeader className="relative z-10">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <DollarSign className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-bold">Dynamic Pricing</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
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
            <Card className="group shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-background overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500" />
              <CardHeader className="relative z-10">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-bold">Planogram Compliance</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
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
            <Card className="group shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-background overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-500" />
              <CardHeader className="relative z-10">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <Video className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-bold">In-Store Media Management</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
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

      {/* Additional Features Section */}
      <section id="features" className="px-6 py-24 bg-muted/20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-accent">Powerful Features</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive toolkit for modern retail management that drives results
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Inventory Forecasting
                </h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered predictions to optimize stock levels and reduce overordering
                </p>
              </CardContent>
            </Card>

            <Card className="group shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-accent/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Expiration Tracking
                </h3>
                <p className="text-sm text-muted-foreground">
                  Automated alerts and smart rotation to ensure product freshness
                </p>
              </CardContent>
            </Card>

            <Card className="group shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Waste Reduction
                </h3>
                <p className="text-sm text-muted-foreground">
                  Smart markdowns and donations to minimize environmental impact
                </p>
              </CardContent>
            </Card>

            <Card className="group shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-accent/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Analytics & Insights
                </h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive dashboards and reports for data-driven decisions
                </p>
              </CardContent>
            </Card>

            <Card className="group shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Supply Chain Visibility
                </h3>
                <p className="text-sm text-muted-foreground">
                  End-to-end tracking from farm to shelf for better planning
                </p>
              </CardContent>
            </Card>

            <Card className="group shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-accent/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Staff Training
                </h3>
                <p className="text-sm text-muted-foreground">
                  Built-in guides and best practices to empower your team
                </p>
              </CardContent>
            </Card>

            <Card className="group shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Faster Time to Market
                </h3>
                <p className="text-sm text-muted-foreground">
                  Streamlined processes to get products on shelves faster
                </p>
              </CardContent>
            </Card>

            <Card className="group shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-accent/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Community Donations
                </h3>
                <p className="text-sm text-muted-foreground">
                  Connect surplus food with local organizations in need
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits by Stakeholder Section */}
      <section id="benefits" className="px-6 py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">For Everyone</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
              Benefits for Every Stakeholder
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating value across the entire food supply chain
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Retailers */}
            <Card className="group shadow-lg transition-all duration-300 hover:shadow-2xl border-2 border-primary/20 hover:border-primary/40">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Store className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  For Retailers
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Reduce waste by up to 60% with smart expiration tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Increase profit margins through dynamic pricing strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Improve customer satisfaction with fresher products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Enhance brand reputation through sustainability efforts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Consumers */}
            <Card className="group shadow-lg transition-all duration-300 hover:shadow-2xl border-2 border-accent/20 hover:border-accent/40">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  For Consumers
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Access to fresher products with clear expiration information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Save money with dynamic discounts on near-expiry items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Support sustainability by purchasing imperfect produce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>Contribute to community welfare through donation programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Communities */}
            <Card className="group shadow-lg transition-all duration-300 hover:shadow-2xl border-2 border-primary/20 hover:border-primary/40">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Leaf className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  For Communities
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Reduce environmental impact through less food waste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Support local food banks with surplus donations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Create jobs in sustainable food management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Build a more resilient local food system</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section id="impact" className="relative overflow-hidden px-6 py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-16 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <LineChart className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Impact</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
              Real Results, Measurable Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Making a difference every day across our retail partners
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            <Card className="text-center p-8 shadow-lg border-2 hover:border-primary/40 transition-all">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <TrendingDown className="h-8 w-8 text-primary" />
              </div>
              <p className="mb-2 text-5xl font-bold text-primary">542kg</p>
              <p className="text-muted-foreground font-medium">Food Saved This Week</p>
            </Card>
            <Card className="text-center p-8 shadow-lg border-2 hover:border-accent/40 transition-all">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <DollarSign className="h-8 w-8 text-accent" />
              </div>
              <p className="mb-2 text-5xl font-bold text-accent">$8,421</p>
              <p className="text-muted-foreground font-medium">Revenue Recovered</p>
            </Card>
            <Card className="text-center p-8 shadow-lg border-2 hover:border-primary/40 transition-all">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="mb-2 text-5xl font-bold text-primary">1,247</p>
              <p className="text-muted-foreground font-medium">Families Helped</p>
            </Card>
            <Card className="text-center p-8 shadow-lg border-2 hover:border-accent/40 transition-all">
              <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <p className="mb-2 text-5xl font-bold text-accent">2.1T</p>
              <p className="text-muted-foreground font-medium">CO₂ Emissions Prevented</p>
            </Card>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden px-6 py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
              Ready to Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Retail Operations?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Join leading retailers who are reducing waste, increasing profits, and building a sustainable future with DisplayData's intelligent solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80 shadow-lg hover:shadow-xl transition-all text-lg px-8">
                <Link to="/management">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 text-lg px-8">
                <Link to="/solutions">View All Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </section>
    </div>
  );
};

export default Index;
