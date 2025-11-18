import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, TrendingDown, TrendingUp, Package, DollarSign, Calendar } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const wasteData = [
  { date: "2024-01-15", category: "Dairy", items: 45, weight: 28, value: 234.50, reason: "Expired", action: "Donated" },
  { date: "2024-01-14", category: "Bakery", items: 32, weight: 15, value: 156.00, reason: "Near expiry", action: "Discounted" },
  { date: "2024-01-14", category: "Produce", items: 28, weight: 19, value: 189.30, reason: "Expired", action: "Donated" },
  { date: "2024-01-13", category: "Meat", items: 12, weight: 8, value: 342.00, reason: "Near expiry", action: "Discounted" },
  { date: "2024-01-13", category: "Deli", items: 18, weight: 12, value: 198.40, reason: "Expired", action: "Donated" },
  { date: "2024-01-12", category: "Dairy", items: 22, weight: 14, value: 176.80, reason: "Near expiry", action: "Discounted" },
  { date: "2024-01-11", category: "Bakery", items: 28, weight: 13, value: 142.10, reason: "Expired", action: "Discounted" },
  { date: "2024-01-10", category: "Produce", items: 35, weight: 22, value: 267.50, reason: "Quality issues", action: "Composted" },
];

const categoryStats = [
  { category: "Dairy", waste: 42, trend: 12, value: 1234.50 },
  { category: "Bakery", waste: 38, trend: -8, value: 892.30 },
  { category: "Produce", waste: 35, trend: 15, value: 1456.80 },
  { category: "Meat", waste: 15, trend: -5, value: 2340.00 },
  { category: "Deli", waste: 12, trend: 3, value: 567.90 },
];

export default function WasteTracking() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Waste Tracking & Analytics</h1>
            <p className="mt-2 text-muted-foreground">
              Monitor waste patterns, trends, and recovery actions across all categories
            </p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="7days">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="90days">Last 90 Days</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-gradient-primary">
              <Calendar className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Weekly Summary Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Waste</p>
                  <p className="text-3xl font-bold text-foreground">142 kg</p>
                  <p className="text-sm text-destructive mt-1">↑ 23% from last week</p>
                </div>
                <Trash2 className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Items Wasted</p>
                  <p className="text-3xl font-bold text-foreground">220</p>
                  <p className="text-sm text-destructive mt-1">↑ 18% from last week</p>
                </div>
                <Package className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Value Lost</p>
                  <p className="text-3xl font-bold text-foreground">$6,789</p>
                  <p className="text-sm text-destructive mt-1">↑ 15% from last week</p>
                </div>
                <DollarSign className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Value Recovered</p>
                  <p className="text-3xl font-bold text-foreground">$12,340</p>
                  <p className="text-sm text-accent mt-1">↑ 18% from last week</p>
                </div>
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Waste by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Waste (kg)</TableHead>
                  <TableHead>Trend</TableHead>
                  <TableHead>Value Lost</TableHead>
                  <TableHead>% of Total</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categoryStats.map((stat) => {
                  const percentage = Math.round((stat.waste / 142) * 100);
                  return (
                    <TableRow key={stat.category}>
                      <TableCell className="font-medium">{stat.category}</TableCell>
                      <TableCell>{stat.waste} kg</TableCell>
                      <TableCell>
                        <span className={stat.trend > 0 ? "text-destructive" : "text-accent"}>
                          {stat.trend > 0 ? <TrendingUp className="inline h-4 w-4 mr-1" /> : <TrendingDown className="inline h-4 w-4 mr-1" />}
                          {Math.abs(stat.trend)}%
                        </span>
                      </TableCell>
                      <TableCell className="text-destructive font-medium">${stat.value.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div 
                              className="bg-warning h-2 rounded-full" 
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">{percentage}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View Details</Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Waste Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Waste Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Action Taken</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {wasteData.map((entry, i) => (
                  <TableRow key={i}>
                    <TableCell className="text-muted-foreground">{entry.date}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{entry.category}</Badge>
                    </TableCell>
                    <TableCell>{entry.items} items</TableCell>
                    <TableCell>{entry.weight} kg</TableCell>
                    <TableCell className="text-destructive font-medium">${entry.value.toFixed(2)}</TableCell>
                    <TableCell className="text-muted-foreground">{entry.reason}</TableCell>
                    <TableCell>
                      <Badge variant={entry.action === "Donated" ? "default" : "secondary"}>
                        {entry.action}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
