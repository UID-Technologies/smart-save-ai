import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, DollarSign, Target, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FilterBar } from "@/components/esl/FilterBar";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const monthlyRevenue = [
  { month: "Jan", revenue: 245000, baseline: 227000, uplift: 18000, stores: 127 },
  { month: "Feb", revenue: 268000, baseline: 247000, uplift: 21000, stores: 127 },
  { month: "Mar", revenue: 295000, baseline: 270500, uplift: 24500, stores: 127 },
  { month: "Apr", revenue: 312000, baseline: 284200, uplift: 27800, stores: 127 },
  { month: "May", revenue: 341000, baseline: 309800, uplift: 31200, stores: 127 },
  { month: "Jun", revenue: 368000, baseline: 332600, uplift: 35400, stores: 127 },
];

const storeBreakdown = [
  { store: "London Central", baseline: 72000, revenue: 89000, uplift: 17000, percentage: 23.6 },
  { store: "Manchester", baseline: 62000, revenue: 76000, uplift: 14000, percentage: 22.6 },
  { store: "Birmingham", baseline: 58000, revenue: 71000, uplift: 13000, percentage: 22.4 },
  { store: "Edinburgh", baseline: 55000, revenue: 68000, uplift: 13000, percentage: 23.6 },
  { store: "Glasgow", baseline: 52000, revenue: 64000, uplift: 12000, percentage: 23.1 },
  { store: "Leeds", baseline: 48000, revenue: 59000, uplift: 11000, percentage: 22.9 },
  { store: "Liverpool", baseline: 45000, revenue: 55000, uplift: 10000, percentage: 22.2 },
  { store: "Bristol", baseline: 43000, revenue: 53000, uplift: 10000, percentage: 23.3 },
];

const categoryContribution = [
  { category: "Food & Beverage", baseline: 145000, revenue: 182000, uplift: 37000, items: 12500 },
  { category: "Electronics", baseline: 98000, revenue: 121000, uplift: 23000, items: 3200 },
  { category: "Fashion", baseline: 76000, revenue: 93000, uplift: 17000, items: 5400 },
  { category: "Health & Beauty", baseline: 54000, revenue: 68000, uplift: 14000, items: 4100 },
  { category: "Home & Garden", baseline: 42000, revenue: 52000, uplift: 10000, items: 2800 },
];

export default function RevenueDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-bold text-foreground">Additional Revenue Analysis</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-6">
        <FilterBar />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Additional Revenue</p>
                  <p className="text-3xl font-bold text-accent">$368K</p>
                  <p className="text-sm text-accent mt-1">↑ 12.4% vs last month</p>
                </div>
                <DollarSign className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Revenue Per Store</p>
                  <p className="text-3xl font-bold text-foreground">$2,898</p>
                  <p className="text-sm text-primary mt-1">↑ 11.8% vs last month</p>
                </div>
                <Store className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Revenue Uplift Rate</p>
                  <p className="text-3xl font-bold text-foreground">23.1%</p>
                  <p className="text-sm text-muted-foreground mt-1">vs baseline pricing</p>
                </div>
                <TrendingUp className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Top Performing Store</p>
                  <p className="text-2xl font-bold text-foreground">London</p>
                  <p className="text-sm text-accent mt-1">+$17K uplift</p>
                </div>
                <Target className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Trend Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Revenue Uplift Trend</CardTitle>
            <CardDescription>Monthly comparison of baseline vs dynamic pricing revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="baseline" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Baseline Revenue" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--accent))" strokeWidth={2} name="Actual Revenue" />
                <Line type="monotone" dataKey="uplift" stroke="hsl(var(--primary))" strokeWidth={2} name="Additional Revenue" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Store Performance */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Store Revenue Performance</CardTitle>
              <CardDescription>Top performing stores by additional revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {storeBreakdown.map((store, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-border bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{store.store}</span>
                      <span className="text-lg font-bold text-accent">${(store.uplift / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Baseline: ${(store.baseline / 1000).toFixed(0)}K → Actual: ${(store.revenue / 1000).toFixed(0)}K
                      </span>
                      <span className="text-accent font-medium">+{store.percentage}%</span>
                    </div>
                    <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent"
                        style={{ width: `${(store.percentage / 25) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Category Breakdown */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Category Revenue Contribution</CardTitle>
              <CardDescription>Additional revenue by product category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryContribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={100} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="uplift" fill="hsl(var(--accent))" name="Additional Revenue ($)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
