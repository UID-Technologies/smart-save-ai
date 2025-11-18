import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, DollarSign, ShoppingCart, Package, TrendingUp, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FilterBar } from "@/components/esl/FilterBar";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const hourlyData = [
  { hour: "6AM", sales: 2340, transactions: 42, basket: 55.71 },
  { hour: "8AM", sales: 4580, transactions: 89, basket: 51.46 },
  { hour: "10AM", sales: 5530, transactions: 103, basket: 53.69 },
  { hour: "12PM", sales: 8920, transactions: 187, basket: 47.70 },
  { hour: "2PM", sales: 6420, transactions: 134, basket: 47.91 },
  { hour: "4PM", sales: 5680, transactions: 121, basket: 46.94 },
  { hour: "6PM", sales: 4340, transactions: 91, basket: 47.69 },
  { hour: "8PM", sales: 3000, transactions: 68, basket: 44.12 },
];

const priceUpdateActivity = [
  { date: "Jun 1", updates: 127, successful: 125, failed: 2 },
  { date: "Jun 2", updates: 143, successful: 141, failed: 2 },
  { date: "Jun 3", updates: 156, successful: 154, failed: 2 },
  { date: "Jun 4", updates: 134, successful: 132, failed: 2 },
  { date: "Jun 5", updates: 167, successful: 165, failed: 2 },
  { date: "Jun 6", updates: 189, successful: 186, failed: 3 },
  { date: "Jun 7", updates: 145, successful: 143, failed: 2 },
];

const recentPriceChanges = [
  { product: "Nescafe French Roast 12oz", sku: "123688", oldPrice: 12.99, newPrice: 10.99, time: "10 min ago", reason: "Promotion", status: "Applied" },
  { product: "Folgers Columbian 12oz", sku: "123841", oldPrice: 11.99, newPrice: 10.49, time: "25 min ago", reason: "Competitor Match", status: "Applied" },
  { product: "Maxwell House Dark Roast", sku: "123874", oldPrice: 10.99, newPrice: 9.99, time: "1 hour ago", reason: "Clearance", status: "Applied" },
  { product: "Starbucks Pike Place", sku: "123912", oldPrice: 13.99, newPrice: 11.99, time: "1 hour ago", reason: "Dynamic Pricing", status: "Applied" },
  { product: "Dunkin' Original Blend", sku: "123945", oldPrice: 10.49, newPrice: 8.99, time: "2 hours ago", reason: "Flash Sale", status: "Applied" },
];

const lowStockItems = [
  { product: "Coca-Cola 12pk", bay: "1", shelf: "3", current: 12, reorder: 50, category: "Beverages" },
  { product: "Lay's Classic Chips", bay: "2", shelf: "4", current: 8, reorder: 40, category: "Snacks" },
  { product: "M&M's Chocolate", bay: "2", shelf: "2", current: 15, reorder: 45, category: "Candy" },
  { product: "Wonder Bread", bay: "3", shelf: "1", current: 6, reorder: 30, category: "Bakery" },
  { product: "2% Milk Gallon", bay: "5", shelf: "2", current: 9, reorder: 35, category: "Dairy" },
];

export default function StoreOpsDetails() {
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
            <h1 className="text-xl font-bold text-foreground">Store Operations Details</h1>
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
                  <p className="text-sm text-muted-foreground">Today's Total Sales</p>
                  <p className="text-3xl font-bold text-accent">$40.7K</p>
                  <p className="text-sm text-accent mt-1">↑ 5.2% vs yesterday</p>
                </div>
                <DollarSign className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Transactions</p>
                  <p className="text-3xl font-bold text-foreground">835</p>
                  <p className="text-sm text-primary mt-1">↑ 3.8% vs yesterday</p>
                </div>
                <ShoppingCart className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Basket Size</p>
                  <p className="text-3xl font-bold text-foreground">$48.74</p>
                  <p className="text-sm text-accent mt-1">↑ 2.1% vs yesterday</p>
                </div>
                <TrendingUp className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Price Updates Today</p>
                  <p className="text-3xl font-bold text-foreground">189</p>
                  <p className="text-sm text-muted-foreground mt-1">3 failed</p>
                </div>
                <Clock className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hourly Sales Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Hourly Sales Performance</CardTitle>
            <CardDescription>Sales and transaction metrics throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="sales" stroke="hsl(var(--accent))" strokeWidth={2} name="Sales ($)" />
                <Line yAxisId="right" type="monotone" dataKey="transactions" stroke="hsl(var(--primary))" strokeWidth={2} name="Transactions" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Price Update Activity */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Price Update Activity</CardTitle>
              <CardDescription>Daily ESL price change tracking (last 7 days)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={priceUpdateActivity}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                  <Bar dataKey="successful" stackId="a" fill="hsl(var(--accent))" name="Successful" />
                  <Bar dataKey="failed" stackId="a" fill="hsl(var(--destructive))" name="Failed" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Low Stock Alerts */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-warning" />
                Low Stock Alerts
              </CardTitle>
              <CardDescription>Items requiring immediate restocking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lowStockItems.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-warning/20 bg-warning/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-foreground">{item.product}</span>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Current: <span className="font-semibold text-warning">{item.current}</span> / Reorder: {item.reorder}
                      </span>
                      <span className="text-muted-foreground">Bay {item.bay}, Shelf {item.shelf}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Price Changes */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Price Changes</CardTitle>
            <CardDescription>Latest ESL price updates applied to products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentPriceChanges.map((change, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-lg border bg-card">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{change.product}</h4>
                      <Badge variant="secondary" className="text-xs">SKU: {change.sku}</Badge>
                      <Badge variant="default" className="text-xs">{change.status}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground line-through">${change.oldPrice}</span>
                      <span className="text-accent font-bold">${change.newPrice}</span>
                      <span className="text-muted-foreground">• {change.reason}</span>
                      <span className="text-muted-foreground">• {change.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
