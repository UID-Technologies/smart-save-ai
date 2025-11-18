import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Heart, TrendingDown, DollarSign, AlertCircle, Calendar, Trash2, Clock, Tag, Archive, ArrowRight, ExternalLink, Boxes, ShoppingCart, Layers, TrendingUp, Target, Camera, Monitor, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">BUC-EE'S Store</h1>
            <p className="mt-2 text-muted-foreground">
              Smart retail solutions powered by AI and ESL technology
            </p>
          </div>
          <Button className="bg-gradient-primary shadow-elevated">
            <Calendar className="mr-2 h-4 w-4" />
            Today's Report
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link to="/management/waste-tracking" className="transition-transform hover:scale-105">
            <StatCard
              title="Waste This Week"
              value="142 kg"
              subtitle="Food & perishables"
              icon={Trash2}
              variant="warning"
              trend={{ value: "23% from last week", positive: false }}
            />
          </Link>
          <Link to="/management/expiring-items" className="transition-transform hover:scale-105">
            <StatCard
              title="Items Near Expiry"
              value="48"
              subtitle="Within 3 days"
              icon={Clock}
              variant="warning"
              trend={{ value: "12 items added today", positive: false }}
            />
          </Link>
          <Link to="/management/donations" className="transition-transform hover:scale-105">
            <StatCard
              title="Waste Prevented"
              value="$12,340"
              subtitle="Through donations & discounts"
              icon={Heart}
              variant="success"
              trend={{ value: "18% increase", positive: true }}
            />
          </Link>
          <Link to="/management/low-salability" className="transition-transform hover:scale-105">
            <StatCard
              title="Low Salability Items"
              value="382"
              subtitle="Across all categories"
              icon={AlertCircle}
              variant="warning"
              trend={{ value: "18% from yesterday", positive: false }}
            />
          </Link>
        </div>

        {/* New KPI Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Store Footfall</p>
                  <p className="text-3xl font-bold text-foreground">28,456</p>
                  <p className="text-sm text-accent mt-1">↑ 15.3% vs last week</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Daily Revenue</p>
                  <p className="text-3xl font-bold text-foreground">$42,890</p>
                  <p className="text-sm text-primary mt-1">↑ 8.2% vs yesterday</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <p className="text-3xl font-bold text-foreground">3.8%</p>
                  <p className="text-sm text-accent mt-1">↑ 0.4% vs last week</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inventory Overview */}
        <Card className="shadow-card border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Boxes className="h-5 w-5 text-accent" />
              Inventory Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <Package className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">12,485</p>
                <p className="text-sm text-muted-foreground mt-1">Total Items</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <Layers className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">24</p>
                <p className="text-sm text-muted-foreground mt-1">Categories</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <ShoppingCart className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">$284,562</p>
                <p className="text-sm text-muted-foreground mt-1">Total Inventory Value</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <TrendingDown className="h-8 w-8 text-warning mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">348</p>
                <p className="text-sm text-muted-foreground mt-1">Out of Stock</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/30">
                <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">156</p>
                <p className="text-sm text-muted-foreground mt-1">Low Stock Alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Food Expiry Alert - Priority Section */}
        <Card className="shadow-card border-destructive/50 bg-destructive/5">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-destructive" />
              Food Items Near Expiry - Urgent Action Required
            </CardTitle>
            <Button asChild variant="outline" size="sm">
              <Link to="/management/expiring-items">
                View All <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { name: "Organic Milk", qty: "24 units", expiry: "2 days", category: "Dairy", mrp: "$3.99", currentPrice: "$3.59", suggestedPrice: "$2.79" },
                { name: "Fresh Bread", qty: "18 units", expiry: "1 day", category: "Bakery", mrp: "$2.49", currentPrice: "$2.49", suggestedPrice: "$1.25" },
                { name: "Greek Yogurt", qty: "32 units", expiry: "3 days", category: "Dairy", mrp: "$4.99", currentPrice: "$4.49", suggestedPrice: "$3.99" },
                { name: "Mixed Salad Greens", qty: "15 units", expiry: "1 day", category: "Produce", mrp: "$3.49", currentPrice: "$2.99", suggestedPrice: "$1.50" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-destructive/20 bg-card p-4 transition-colors hover:bg-muted/30"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.category} • {item.qty}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Expires in</p>
                      <p className="text-lg font-bold text-destructive whitespace-nowrap">{item.expiry}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">MRP</p>
                        <p className="text-sm text-muted-foreground line-through">{item.mrp}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Current</p>
                        <p className="text-sm font-medium text-foreground">{item.currentPrice}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-accent">Suggested Price</p>
                      <p className="text-lg font-bold text-accent">{item.suggestedPrice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              <Button variant="destructive" className="flex-1">
                Apply Suggested Pricing
              </Button>
              <Button asChild variant="outline">
                <Link to="/management/expiring-items">
                  View All Items <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Waste Management & Action Items */}
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-accent" />
                Recommended for Discount
              </CardTitle>
              <Button asChild variant="ghost" size="sm">
                <Link to="/management/discounts">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Summer Fashion Collection", discount: "40%", reason: "Season ending", value: "$2,099" },
                { name: "iPhone 13 Pro", discount: "25%", reason: "New model released", value: "$1,349" },
                { name: "Anti-Aging Serum", discount: "30%", reason: "6 months old", value: "$979" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:bg-muted/50"
                >
                  <div>
                    <p className="font-medium text-sm text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.reason}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-accent">{item.discount}</p>
                    <p className="text-xs text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Apply Discounts
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/management/discounts">
                    View All
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-accent" />
                Ready for Donation
              </CardTitle>
              <Button asChild variant="ghost" size="sm">
                <Link to="/management/donations">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Canned Vegetables", qty: "45 units", partner: "Food Bank", weight: "28 kg" },
                { name: "Winter Coats (Last Season)", qty: "18 units", partner: "Shelter", weight: "15 kg" },
                { name: "School Supplies", qty: "32 sets", partner: "Youth Center", weight: "8 kg" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:bg-muted/50"
                >
                  <div>
                    <p className="font-medium text-sm text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.qty} • {item.weight}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{item.partner}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Schedule Pickup
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/management/donations">
                    View All
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Archive className="h-5 w-5 text-accent" />
                Low Salability Items
              </CardTitle>
              <Button asChild variant="ghost" size="sm">
                <Link to="/management/low-salability">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Samsung Galaxy S22", salability: "32%", age: "8 months", action: "Clearance" },
                { name: "Gaming Console Accessories", salability: "52%", age: "5 months", action: "Bundle deal" },
                { name: "Luxury Perfume Set", salability: "45%", age: "5 months", action: "Promote" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:bg-muted/50"
                >
                  <div>
                    <p className="font-medium text-sm text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">Age: {item.age}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-warning">{item.salability}</p>
                    <p className="text-xs text-accent">{item.action}</p>
                  </div>
                </div>
              ))}
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/management/low-salability">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-accent" />
              Waste Prevention Activity - Last 7 Days
            </CardTitle>
            <Button asChild variant="outline" size="sm">
              <Link to="/management/waste-tracking">
                View All Activity <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { action: "Donated to Local Food Bank", items: "45 items", impact: "28 kg waste prevented", time: "2 hours ago", type: "donation" },
              { action: "Applied 50% discount on bakery", items: "32 items", impact: "$156 recovered", time: "5 hours ago", type: "discount" },
              { action: "Donated to Community Kitchen", items: "28 items", impact: "19 kg waste prevented", time: "1 day ago", type: "donation" },
              { action: "Clearance sale on electronics", items: "12 items", impact: "$2,340 recovered", time: "2 days ago", type: "discount" },
            ].map((activity, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4 transition-colors hover:bg-muted/50"
              >
                <div>
                  <p className="font-medium text-foreground">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.items}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-accent">{activity.impact}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
