import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Archive, TrendingDown, Package, AlertCircle, Search, DollarSign } from "lucide-react";

const lowSalabilityItems = [
  { id: 1, name: "Samsung Galaxy S22", category: "Electronics", salability: 32, stock: 12, age: 240, value: 7188, action: "Clearance sale", reason: "New model available" },
  { id: 2, name: "Gaming Console Accessories", category: "Electronics", salability: 52, stock: 34, age: 150, value: 1734, action: "Bundle deal", reason: "Slow moving" },
  { id: 3, name: "Luxury Perfume Set", category: "Beauty", salability: 45, stock: 18, age: 150, value: 2376, action: "Promote", reason: "Seasonal decline" },
  { id: 4, name: "Designer Sunglasses", category: "Fashion", salability: 38, stock: 22, age: 200, value: 4356, action: "Clearance", reason: "Style change" },
  { id: 5, name: "Fitness Tracker Gen 2", category: "Electronics", salability: 41, stock: 28, age: 180, value: 3360, action: "Bundle", reason: "New generation" },
  { id: 6, name: "Premium Coffee Maker", category: "Appliances", salability: 48, stock: 15, age: 120, value: 2235, action: "Discount", reason: "Competition" },
  { id: 7, name: "Leather Handbag Collection", category: "Fashion", salability: 35, stock: 26, age: 210, value: 6448, action: "Clearance", reason: "Trend shift" },
  { id: 8, name: "Wireless Earbuds V1", category: "Electronics", salability: 29, stock: 45, age: 270, value: 3375, action: "Clear out", reason: "Upgraded model" },
];

export default function LowSalability() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [salabilityFilter, setSalabilityFilter] = useState("all");

  const filteredItems = lowSalabilityItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    const matchesSalability = salabilityFilter === "all" || 
      (salabilityFilter === "low" && item.salability < 35) ||
      (salabilityFilter === "medium" && item.salability >= 35 && item.salability < 50) ||
      (salabilityFilter === "high" && item.salability >= 50);
    return matchesSearch && matchesCategory && matchesSalability;
  });

  const totalValue = filteredItems.reduce((sum, item) => sum + item.value, 0);
  const totalStock = filteredItems.reduce((sum, item) => sum + item.stock, 0);
  const avgSalability = Math.round(filteredItems.reduce((sum, item) => sum + item.salability, 0) / filteredItems.length);
  const criticalItems = filteredItems.filter(item => item.salability < 35).length;

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-foreground">Low Salability Items</h1>
          <p className="mt-2 text-muted-foreground">
            Monitor and manage slow-moving inventory to optimize turnover and prevent losses
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Low Salability Items</p>
                  <p className="text-2xl font-bold text-foreground">{filteredItems.length}</p>
                </div>
                <Archive className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Critical Items</p>
                  <p className="text-2xl font-bold text-destructive">{criticalItems}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Stock Value</p>
                  <p className="text-2xl font-bold text-foreground">${totalValue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Salability</p>
                  <p className="text-2xl font-bold text-warning">{avgSalability}%</p>
                </div>
                <TrendingDown className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Salability Distribution */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Salability Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-foreground">Critical (&lt;35%)</h3>
                  <Badge variant="destructive">{lowSalabilityItems.filter(i => i.salability < 35).length} items</Badge>
                </div>
                <p className="text-2xl font-bold text-destructive">
                  ${lowSalabilityItems.filter(i => i.salability < 35).reduce((sum, i) => sum + i.value, 0).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-1">Immediate action required</p>
              </div>

              <div className="rounded-lg border border-warning/20 bg-warning/5 p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-foreground">Medium (35-50%)</h3>
                  <Badge variant="secondary">{lowSalabilityItems.filter(i => i.salability >= 35 && i.salability < 50).length} items</Badge>
                </div>
                <p className="text-2xl font-bold text-warning">
                  ${lowSalabilityItems.filter(i => i.salability >= 35 && i.salability < 50).reduce((sum, i) => sum + i.value, 0).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-1">Monitor closely</p>
              </div>

              <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-foreground">Moderate (50%+)</h3>
                  <Badge variant="outline">{lowSalabilityItems.filter(i => i.salability >= 50).length} items</Badge>
                </div>
                <p className="text-2xl font-bold text-accent">
                  ${lowSalabilityItems.filter(i => i.salability >= 50).reduce((sum, i) => sum + i.value, 0).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-1">Standard action</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Electronics">Electronics</SelectItem>
                  <SelectItem value="Beauty">Beauty</SelectItem>
                  <SelectItem value="Fashion">Fashion</SelectItem>
                  <SelectItem value="Appliances">Appliances</SelectItem>
                </SelectContent>
              </Select>

              <Select value={salabilityFilter} onValueChange={setSalabilityFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Salability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="low">Critical (&lt;35%)</SelectItem>
                  <SelectItem value="medium">Medium (35-50%)</SelectItem>
                  <SelectItem value="high">Moderate (50%+)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Items Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Items Requiring Action ({filteredItems.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Salability</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Age (Days)</TableHead>
                  <TableHead>Stock Value</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Recommended Action</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              item.salability < 35 ? 'bg-destructive' : 
                              item.salability < 50 ? 'bg-warning' : 'bg-accent'
                            }`}
                            style={{ width: `${item.salability}%` }}
                          />
                        </div>
                        <span className={`text-sm font-medium ${
                          item.salability < 35 ? 'text-destructive' : 
                          item.salability < 50 ? 'text-warning' : 'text-accent'
                        }`}>
                          {item.salability}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{item.stock} units</TableCell>
                    <TableCell className="text-muted-foreground">{item.age} days</TableCell>
                    <TableCell className="font-medium">${item.value.toLocaleString()}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{item.reason}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{item.action}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        Take Action
                      </Button>
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
