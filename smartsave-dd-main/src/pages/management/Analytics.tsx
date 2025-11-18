import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Leaf,
  Heart,
  Package,
  Calendar,
  Download,
  Filter,
} from "lucide-react";

export default function Analytics() {
  // Waste Trend Data
  const wasteTrendData = [
    { month: "Jan", waste: 168, prevented: 142, donated: 45, discounted: 97 },
    { month: "Feb", waste: 145, prevented: 165, donated: 52, discounted: 113 },
    { month: "Mar", waste: 142, prevented: 178, donated: 58, discounted: 120 },
    { month: "Apr", waste: 128, prevented: 195, donated: 68, discounted: 127 },
    { month: "May", waste: 112, prevented: 208, donated: 72, discounted: 136 },
    { month: "Jun", waste: 98, prevented: 225, donated: 80, discounted: 145 },
  ];

  // Financial Impact Data
  const financialData = [
    { month: "Jan", recovered: 8450, saved: 4200, donated: 2100 },
    { month: "Feb", recovered: 9200, saved: 4800, donated: 2400 },
    { month: "Mar", recovered: 10100, saved: 5100, donated: 2650 },
    { month: "Apr", recovered: 11200, saved: 5600, donated: 2900 },
    { month: "May", recovered: 11800, saved: 6200, donated: 3100 },
    { month: "Jun", recovered: 12450, saved: 6800, donated: 3400 },
  ];

  // Category Performance Data
  const categoryData = [
    { name: "Dairy", waste: 28, value: 3200, items: 156 },
    { name: "Produce", waste: 35, value: 4100, items: 203 },
    { name: "Bakery", waste: 22, value: 2800, items: 178 },
    { name: "Meat", waste: 18, value: 5600, items: 98 },
    { name: "Deli", waste: 15, value: 2100, items: 124 },
    { name: "Beverages", waste: 12, value: 1800, items: 186 },
    { name: "Frozen", waste: 8, value: 1200, items: 142 },
    { name: "Other", waste: 4, value: 640, items: 98 },
  ];

  // Discount Effectiveness Data
  const discountData = [
    { range: "10-20%", sold: 145, revenue: 4200 },
    { range: "20-30%", sold: 198, revenue: 5800 },
    { range: "30-40%", sold: 256, revenue: 6400 },
    { range: "40-50%", sold: 312, revenue: 7200 },
    { range: "50%+", sold: 189, revenue: 4100 },
  ];

  // Environmental Impact Data
  const environmentalData = [
    { month: "Jan", co2Saved: 420, wasteReduced: 168 },
    { month: "Feb", co2Saved: 458, wasteReduced: 183 },
    { month: "Mar", co2Saved: 498, wasteReduced: 199 },
    { month: "Apr", co2Saved: 542, wasteReduced: 217 },
    { month: "May", co2Saved: 580, wasteReduced: 232 },
    { month: "Jun", co2Saved: 625, wasteReduced: 250 },
  ];

  // Donation Impact by Organization
  const donationOrgsData = [
    { name: "Food Bank", items: 245, weight: 156 },
    { name: "Community Kitchen", items: 198, weight: 124 },
    { name: "Youth Center", items: 142, weight: 89 },
    { name: "Shelter", items: 118, weight: 74 },
    { name: "Senior Center", items: 95, weight: 58 },
  ];

  const COLORS = [
    "hsl(var(--primary))",
    "hsl(var(--accent))",
    "hsl(var(--warning))",
    "hsl(var(--destructive))",
    "hsl(var(--secondary))",
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Analytics Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
              Comprehensive insights for data-driven decision making
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button className="bg-gradient-primary shadow-elevated">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics Summary */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Waste Prevented</p>
                  <p className="text-3xl font-bold text-foreground">1,113 kg</p>
                  <p className="text-sm text-accent mt-1">↑ 45% vs last period</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Revenue Recovery</p>
                  <p className="text-3xl font-bold text-foreground">$63,200</p>
                  <p className="text-sm text-primary mt-1">↑ 32% vs last period</p>
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
                  <p className="text-sm text-muted-foreground">Items Donated</p>
                  <p className="text-3xl font-bold text-foreground">798</p>
                  <p className="text-sm text-accent mt-1">↑ 28% vs last period</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">CO₂ Saved</p>
                  <p className="text-3xl font-bold text-foreground">3,123 kg</p>
                  <p className="text-sm text-primary mt-1">↑ 38% vs last period</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Analytics Tabs */}
        <Tabs defaultValue="waste" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="waste">Waste Analytics</TabsTrigger>
            <TabsTrigger value="financial">Financial Impact</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="discounts">Discount Strategy</TabsTrigger>
            <TabsTrigger value="environment">Environmental</TabsTrigger>
          </TabsList>

          {/* Waste Analytics Tab */}
          <TabsContent value="waste" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Waste Prevention Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={wasteTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="waste" stroke="hsl(var(--destructive))" name="Waste (kg)" />
                      <Line type="monotone" dataKey="prevented" stroke="hsl(var(--accent))" name="Prevented (kg)" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Waste Prevention Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={wasteTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="donated" stackId="1" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" name="Donated (kg)" />
                      <Area type="monotone" dataKey="discounted" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" name="Discounted (kg)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Category-wise Waste Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="waste" fill="hsl(var(--warning))" name="Waste (kg)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financial Impact Tab */}
          <TabsContent value="financial" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Revenue Recovery Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={financialData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="recovered" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" name="Revenue Recovered ($)" />
                      <Area type="monotone" dataKey="saved" stackId="1" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" name="Cost Saved ($)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Financial Impact Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div>
                        <p className="font-medium text-foreground">Total Revenue Recovered</p>
                        <p className="text-sm text-muted-foreground">From discounted sales</p>
                      </div>
                      <p className="text-2xl font-bold text-primary">$63,200</p>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div>
                        <p className="font-medium text-foreground">Total Cost Saved</p>
                        <p className="text-sm text-muted-foreground">Waste disposal avoided</p>
                      </div>
                      <p className="text-2xl font-bold text-accent">$32,700</p>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div>
                        <p className="font-medium text-foreground">Donation Tax Benefits</p>
                        <p className="text-sm text-muted-foreground">Estimated tax deductions</p>
                      </div>
                      <p className="text-2xl font-bold text-accent">$16,250</p>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <div>
                        <p className="font-medium text-foreground">Total Financial Impact</p>
                        <p className="text-sm text-muted-foreground">Combined savings & recovery</p>
                      </div>
                      <p className="text-3xl font-bold text-primary">$112,150</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Categories Tab */}
          <TabsContent value="categories" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Waste by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="waste"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Category Performance Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={categoryData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="items" fill="hsl(var(--primary))" name="Items Managed" />
                      <Bar dataKey="value" fill="hsl(var(--accent))" name="Value ($)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Category Insights & Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {categoryData.slice(0, 6).map((cat, i) => (
                    <div key={i} className="p-4 rounded-lg border border-border bg-muted/30">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{cat.name}</h4>
                        <span className="text-sm text-warning">{cat.waste}kg waste</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {cat.items} items • ${cat.value} at risk
                      </p>
                      <p className="text-xs text-accent">
                        {cat.waste > 25
                          ? "⚠️ High waste - Consider reducing order quantity"
                          : cat.waste > 15
                          ? "✓ Moderate - Monitor closely"
                          : "✓ Good performance - Maintain current strategy"}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Discount Strategy Tab */}
          <TabsContent value="discounts" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Discount Effectiveness by Range</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={discountData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="range" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="sold" fill="hsl(var(--primary))" name="Items Sold" />
                      <Bar yAxisId="right" dataKey="revenue" fill="hsl(var(--accent))" name="Revenue ($)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Discount Strategy Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                      <h4 className="font-semibold text-foreground mb-2">Optimal Discount Range</h4>
                      <p className="text-2xl font-bold text-accent mb-1">40-50%</p>
                      <p className="text-sm text-muted-foreground">
                        Highest conversion rate with 312 items sold and $7,200 recovered
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2">Average Recovery Rate</h4>
                      <p className="text-2xl font-bold text-primary mb-1">68%</p>
                      <p className="text-sm text-muted-foreground">
                        Of potential waste value recovered through discounts
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2">Customer Engagement</h4>
                      <p className="text-2xl font-bold text-primary mb-1">1,100</p>
                      <p className="text-sm text-muted-foreground">
                        Unique customers attracted by discount programs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Increase 40-50% Discounts
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      This range shows highest effectiveness. Consider expanding to more categories.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-accent/20 bg-accent/5">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      Early Discounting
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Apply discounts 3-5 days before expiry for better results.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Package className="h-4 w-4 text-primary" />
                      Bundle Deals
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Combine slow-moving items with popular ones for faster turnover.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Environmental Impact Tab */}
          <TabsContent value="environment" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Environmental Impact Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={environmentalData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="wasteReduced" stroke="hsl(var(--accent))" name="Waste Reduced (kg)" />
                      <Line yAxisId="right" type="monotone" dataKey="co2Saved" stroke="hsl(var(--primary))" name="CO₂ Saved (kg)" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Donation Impact by Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={donationOrgsData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={120} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="items" fill="hsl(var(--primary))" name="Items Donated" />
                      <Bar dataKey="weight" fill="hsl(var(--accent))" name="Weight (kg)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-card border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-accent" />
                  Sustainability Impact Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center p-4 rounded-lg bg-background">
                    <p className="text-sm text-muted-foreground mb-2">Total CO₂ Saved</p>
                    <p className="text-3xl font-bold text-accent">3,123 kg</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Equivalent to 687 trees planted
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background">
                    <p className="text-sm text-muted-foreground mb-2">Water Saved</p>
                    <p className="text-3xl font-bold text-primary">48,500 L</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Through waste prevention
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background">
                    <p className="text-sm text-muted-foreground mb-2">Meals Provided</p>
                    <p className="text-3xl font-bold text-accent">2,394</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Through donation programs
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background">
                    <p className="text-sm text-muted-foreground mb-2">Landfill Diverted</p>
                    <p className="text-3xl font-bold text-primary">1,249 kg</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Waste prevented from landfills
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
