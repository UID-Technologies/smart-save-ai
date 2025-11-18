import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Store, Package, DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FilterBar } from "@/components/esl/FilterBar";
import { useNavigate } from "react-router-dom";

const todaysSales = [
  { time: "Morning (6-12)", sales: 12450, transactions: 234, avgBasket: 53.21 },
  { time: "Afternoon (12-6)", sales: 18920, transactions: 412, avgBasket: 45.92 },
  { time: "Evening (6-10)", sales: 9340, transactions: 189, avgBasket: 49.42 },
];

const priceUpdates = [
  { product: "Nescafe French Roast 12oz", sku: "123688", oldPrice: 12.99, newPrice: 10.99, time: "10 min ago", reason: "Promotion" },
  { product: "Folgers Columbian 12oz", sku: "123841", oldPrice: 11.99, newPrice: 10.49, time: "25 min ago", reason: "Competitor Match" },
  { product: "Maxwell House Dark Roast", sku: "123874", oldPrice: 10.99, newPrice: 9.99, time: "1 hour ago", reason: "Clearance" },
];

const lowStockAlerts = [
  { product: "Soft Drinks - Aisle 1", quantity: 12, reorderPoint: 50, bay: "1", shelf: "3" },
  { product: "Chips - Aisle 2", quantity: 8, reorderPoint: 40, bay: "2", shelf: "4" },
  { product: "Candy - Aisle 2", quantity: 15, reorderPoint: 45, bay: "2", shelf: "2" },
];

export default function StoreOpsView() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">Store Operations</h2>
          <p className="text-muted-foreground">Daily operations and real-time store management</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-success mr-2 animate-pulse" />
            Live Updates
          </Badge>
        </div>
      </div>

      <FilterBar />

      {/* Daily Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Today's Sales"
          value="$40.7K"
          subtitle="835 transactions"
          icon={DollarSign}
          trend={{ value: "5.2%", positive: true }}
          variant="success"
          onClick={() => navigate("/esl/details/store-operations")}
        />
        <StatCard
          title="Avg. Basket"
          value="$48.74"
          subtitle="Per transaction"
          icon={ShoppingCart}
          trend={{ value: "2.1%", positive: true }}
          onClick={() => navigate("/esl/details/store-operations")}
        />
        <StatCard
          title="Active Products"
          value="1,456"
          subtitle="With ESL labels"
          icon={Package}
          onClick={() => navigate("/esl/details/store-operations")}
        />
        <StatCard
          title="Customer Flow"
          value="847"
          subtitle="Shoppers today"
          icon={Users}
          trend={{ value: "8.3%", positive: true }}
          onClick={() => navigate("/esl/details/store-operations")}
        />
      </div>

      {/* Sales by Time Period */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            Sales Performance by Time Period
          </CardTitle>
          <CardDescription>Today's sales breakdown and transaction metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {todaysSales.map((period, index) => (
              <div key={index} className="p-4 rounded-lg border bg-card">
                <div className="text-sm font-medium text-muted-foreground mb-3">{period.time}</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Sales</span>
                    <span className="text-lg font-bold text-accent">${(period.sales / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Transactions</span>
                    <span className="font-medium text-foreground">{period.transactions}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg. Basket</span>
                    <span className="font-medium text-foreground">${period.avgBasket}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Price Updates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-accent" />
            Recent Price Updates
          </CardTitle>
          <CardDescription>Real-time price changes from ESL system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {priceUpdates.map((update, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg border bg-card"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground">{update.product}</h4>
                    <Badge variant="secondary" className="text-xs">SKU: {update.sku}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground line-through">${update.oldPrice}</span>
                    <span className="text-accent font-bold">${update.newPrice}</span>
                    <span className="text-muted-foreground">• {update.reason}</span>
                    <span className="text-muted-foreground">• {update.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Low Stock & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-warning" />
              Low Stock Alerts
            </CardTitle>
            <CardDescription>Items requiring restocking attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lowStockAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg border bg-warning/5 border-warning/20"
                >
                  <div className="flex-1">
                    <div className="font-medium text-foreground mb-1">{alert.product}</div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>Qty: <span className="font-semibold text-warning">{alert.quantity}</span></span>
                      <span>•</span>
                      <span>Reorder: {alert.reorderPoint}</span>
                      <span>•</span>
                      <span>Bay {alert.bay}, Shelf {alert.shelf}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Restock
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Store className="h-5 w-5 text-accent" />
              Quick Product Search
            </CardTitle>
            <CardDescription>Find products and view ESL status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="Search by product name or SKU..."
                className="h-10"
              />
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between p-3 rounded-lg bg-card border">
                  <span className="text-muted-foreground">Total Products</span>
                  <span className="font-bold text-foreground">1,456</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-card border">
                  <span className="text-muted-foreground">ESL Labels Active</span>
                  <span className="font-bold text-success">1,442</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-card border">
                  <span className="text-muted-foreground">Pending Updates</span>
                  <span className="font-bold text-warning">14</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View Full Inventory
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
