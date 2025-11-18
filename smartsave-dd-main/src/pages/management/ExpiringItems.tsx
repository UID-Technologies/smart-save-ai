import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock, Search, Filter, Download, DollarSign, TrendingDown, Package } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const expiringItems = [
  { id: 1, name: "Organic Milk", category: "Dairy", qty: 24, unit: "units", expiry: "2 days", mrp: 3.99, current: 3.59, suggested: 2.79, potential: 19.20, sku: "DRY-001" },
  { id: 2, name: "Fresh Bread", category: "Bakery", qty: 18, unit: "units", expiry: "1 day", mrp: 2.49, current: 2.49, suggested: 1.25, potential: 22.32, sku: "BKY-045" },
  { id: 3, name: "Greek Yogurt", category: "Dairy", qty: 32, unit: "units", expiry: "3 days", mrp: 4.99, current: 4.49, suggested: 3.99, potential: 16.00, sku: "DRY-023" },
  { id: 4, name: "Mixed Salad Greens", category: "Produce", qty: 15, unit: "units", expiry: "1 day", mrp: 3.49, current: 2.99, suggested: 1.50, potential: 22.35, sku: "PRD-112" },
  { id: 5, name: "Chicken Breast", category: "Meat", qty: 20, unit: "units", expiry: "2 days", mrp: 8.99, current: 7.99, suggested: 5.39, potential: 52.00, sku: "MET-067" },
  { id: 6, name: "Strawberries", category: "Produce", qty: 28, unit: "units", expiry: "2 days", mrp: 5.99, current: 5.49, suggested: 3.89, potential: 44.80, sku: "PRD-089" },
  { id: 7, name: "Fresh Pasta", category: "Deli", qty: 22, unit: "units", expiry: "3 days", mrp: 6.49, current: 5.99, suggested: 4.87, potential: 24.64, sku: "DLI-034" },
  { id: 8, name: "Cottage Cheese", category: "Dairy", qty: 16, unit: "units", expiry: "2 days", mrp: 3.99, current: 3.59, suggested: 2.79, potential: 12.80, sku: "DRY-015" },
  { id: 9, name: "Sliced Turkey", category: "Deli", qty: 12, unit: "units", expiry: "1 day", mrp: 7.99, current: 7.99, suggested: 4.00, potential: 47.88, sku: "DLI-078" },
  { id: 10, name: "Fresh Juice", category: "Beverages", qty: 30, unit: "units", expiry: "3 days", mrp: 4.49, current: 4.49, suggested: 3.59, potential: 27.00, sku: "BEV-123" },
];

export default function ExpiringItems() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [expiryFilter, setExpiryFilter] = useState("all");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const filteredItems = expiringItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    const matchesExpiry = expiryFilter === "all" || item.expiry === expiryFilter;
    return matchesSearch && matchesCategory && matchesExpiry;
  });

  const totalPotentialLoss = filteredItems.reduce((sum, item) => sum + item.potential, 0);
  const totalItems = filteredItems.reduce((sum, item) => sum + item.qty, 0);
  const urgentItems = filteredItems.filter(item => item.expiry === "1 day").length;

  const toggleSelectAll = () => {
    if (selectedItems.length === filteredItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredItems.map(item => item.id));
    }
  };

  const toggleSelectItem = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-foreground">Items Near Expiry</h1>
          <p className="mt-2 text-muted-foreground">
            Manage items approaching expiration to minimize waste and maximize recovery
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Items</p>
                  <p className="text-2xl font-bold text-foreground">{totalItems}</p>
                </div>
                <Package className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Urgent (1 day)</p>
                  <p className="text-2xl font-bold text-destructive">{urgentItems}</p>
                </div>
                <Clock className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Potential Loss</p>
                  <p className="text-2xl font-bold text-warning">${totalPotentialLoss.toFixed(2)}</p>
                </div>
                <TrendingDown className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Discount</p>
                  <p className="text-2xl font-bold text-accent">38%</p>
                </div>
                <DollarSign className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Actions */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or SKU..."
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
                    <SelectItem value="Dairy">Dairy</SelectItem>
                    <SelectItem value="Bakery">Bakery</SelectItem>
                    <SelectItem value="Produce">Produce</SelectItem>
                    <SelectItem value="Meat">Meat</SelectItem>
                    <SelectItem value="Deli">Deli</SelectItem>
                    <SelectItem value="Beverages">Beverages</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={expiryFilter} onValueChange={setExpiryFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Expiry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Expiry</SelectItem>
                    <SelectItem value="1 day">1 Day</SelectItem>
                    <SelectItem value="2 days">2 Days</SelectItem>
                    <SelectItem value="3 days">3 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button size="sm" className="bg-gradient-primary" disabled={selectedItems.length === 0}>
                  Apply Prices ({selectedItems.length})
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Items Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Expiring Items ({filteredItems.length})</span>
              {filteredItems.length > 0 && (
                <Button variant="ghost" size="sm" onClick={toggleSelectAll}>
                  {selectedItems.length === filteredItems.length ? "Deselect All" : "Select All"}
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>MRP</TableHead>
                  <TableHead>Current</TableHead>
                  <TableHead>Suggested</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Potential Loss</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item) => {
                  const discount = Math.round(((item.current - item.suggested) / item.current) * 100);
                  return (
                    <TableRow key={item.id} className={selectedItems.includes(item.id) ? "bg-muted/50" : ""}>
                      <TableCell>
                        <Checkbox
                          checked={selectedItems.includes(item.id)}
                          onCheckedChange={() => toggleSelectItem(item.id)}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="text-muted-foreground text-sm">{item.sku}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{item.category}</Badge>
                      </TableCell>
                      <TableCell>{item.qty} {item.unit}</TableCell>
                      <TableCell>
                        <Badge variant={item.expiry === "1 day" ? "destructive" : "secondary"}>
                          {item.expiry}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground line-through">${item.mrp}</TableCell>
                      <TableCell className="font-medium">${item.current}</TableCell>
                      <TableCell className="font-bold text-accent">${item.suggested}</TableCell>
                      <TableCell className="text-warning font-medium">{discount}%</TableCell>
                      <TableCell className="text-destructive font-medium">${item.potential.toFixed(2)}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          Apply Price
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
