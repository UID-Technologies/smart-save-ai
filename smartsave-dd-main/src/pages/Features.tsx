import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Calendar, 
  Package, 
  BarChart3, 
  Truck, 
  GraduationCap, 
  Clock, 
  Heart,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/navigation/Header";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              <Sparkles className="inline h-12 w-12 text-primary mb-2" /> Powerful Features
            </h1>
            <p className="mb-10 max-w-3xl mx-auto text-xl text-muted-foreground">
              Comprehensive toolkit for modern retail management that drives efficiency, 
              reduces waste, and maximizes profitability
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  Inventory Forecasting
                </h3>
                <p className="mb-4 text-muted-foreground">
                  AI-powered predictions to optimize stock levels and reduce overordering. 
                  Our advanced algorithms analyze historical data, seasonal trends, and market 
                  conditions to provide accurate demand forecasts.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Reduce overstock by up to 40%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Minimize stockouts and lost sales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Optimize ordering schedules</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  Expiration Tracking
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Automated alerts and smart rotation to ensure product freshness. 
                  Track expiration dates across your entire inventory with real-time 
                  notifications and automated FIFO management.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Real-time expiration monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Automated FIFO rotation alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Smart markdown triggers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  Waste Reduction
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Smart markdowns and donations to minimize environmental impact. 
                  Automatically identify products at risk and implement strategic 
                  pricing or donation programs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Reduce waste by up to 60%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Automated donation management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Environmental impact tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  Analytics & Insights
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Comprehensive dashboards and reports for data-driven decisions. 
                  Get real-time visibility into your operations with customizable 
                  reports and actionable insights.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Real-time performance metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Customizable dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Predictive analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  Supply Chain Visibility
                </h3>
                <p className="mb-4 text-muted-foreground">
                  End-to-end tracking from farm to shelf for better planning. 
                  Monitor product journey, temperature controls, and delivery 
                  schedules in real-time.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Real-time shipment tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Temperature monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Supplier performance analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  <GraduationCap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  Staff Training
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Built-in guides and best practices to empower your team. 
                  Interactive training modules and real-time guidance ensure 
                  your staff maximizes platform capabilities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Interactive training modules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Best practice documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Performance tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  Faster Time to Market
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Streamlined processes to get products on shelves faster. 
                  Automate receiving, pricing, and merchandising workflows 
                  to reduce time from delivery to sale.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Automated receiving workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Quick price updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Instant shelf-ready labeling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  Community Donations
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Connect surplus food with local organizations in need. 
                  Automated matching, scheduling, and tracking of donations 
                  to maximize community impact.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Automated donation matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Tax deduction tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Impact reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
            Ready to transform your retail operations?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Start leveraging these powerful features today to reduce waste and increase profitability
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary shadow-elevated">
              <Link to="/management">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/solutions">View Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
