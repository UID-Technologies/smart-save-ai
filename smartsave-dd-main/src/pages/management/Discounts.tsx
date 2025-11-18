import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tag, TrendingDown, DollarSign, Package, Search } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const discountItems = [
  { id: 1, name: "Summer Fashion Collection", category: "Fashion", stock: 145, age: 180, mrp: 89.99, suggested: 53.99, discount: 40, reason: "Season ending", value: 2099 },
  { id: 2, name: "iPhone 13 Pro", category: "Electronics", stock: 8, age: 120, mrp: 999.99, suggested: 749.99, discount: 25, reason: "New model released", value: 1349 },
  { id: 3, name: "Anti-Aging Serum", category: "Beauty", stock: 32, age: 180, mrp: 45.99, suggested: 32.19, discount: 30, reason: "6 months old", value: 979 },
  { id: 4, name: "Winter Boots", category: "Fashion", stock: 56, age: 240, mrp: 129.99, suggested: 64.99, discount: 50, reason: "End of season", value: 3640 },
  { id: 5, name: "Gaming Headset", category: "Electronics", stock: 24, age: 150, mrp: 79.99, suggested: 55.99, discount: 30, reason: "Slow moving", value: 576 },
  { id: 6, name: "Vitamin Supplements", category: "Health", stock: 89, age: 200, mrp: 29.99, suggested: 20.99, discount: 30, reason: "Near expiry", value: 801 },
  { id: 7, name: "Yoga Mat Set", category: "Sports", stock: 41, age: 90, mrp: 49.99, suggested: 34.99, discount: 30, reason: "Low salability", value: 615 },
  { id: 8, name: "Smart Watch Series 3", category: "Electronics", stock: 15, age: 180, mrp: 299.99, suggested: 179.99, discount: 40, reason: "New model available", value: 1800 },
];

export default function Discounts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [discountFilter, setDiscountFilter] = useState("all");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const filteredItems = discountItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    const matchesDiscount = discountFilter === "all" || 
      (discountFilter === "25-35" && item.discount >= 25 && item.discount <= 35) ||
      (discountFilter === "36-45" && item.discount >= 36 && item.discount <= 45) ||
      (discountFilter === "46+" && item.discount >= 46);
    return matchesSearch && matchesCategory && matchesDiscount;
  });

  const totalValue = filteredItems.reduce((sum, item) => sum + item.value, 0);
  const totalItems = filteredItems.reduce((sum, item) => sum + item.stock, 0);
  const avgDiscount = Math.round(filteredItems.reduce((sum, item) => sum + item.discount, 0) / filteredItems.length);

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
          <h1 className="text-4xl font-bold text-foreground">Discount Recommendations</h1>
          <p className="mt-2 text-muted-foreground">
            Strategic pricing recommendations to move inventory and prevent waste
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Items for Discount</p>
                  <p className="text-2xl font-bold text-foreground">{filteredItems.length}</p>
                </div>
                <Tag className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Stock</p>
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
                  <p className="text-sm text-muted-foreground">Total Value</p>
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
                  <p className="text-sm text-muted-foreground">Avg. Discount</p>
                  <p className="text-2xl font-bold text-warning">{avgDiscount}%</p>
                </div>
                <TrendingDown className="h-8 w-8 text-warning" />
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
                    <SelectItem value="Fashion">Fashion</SelectItem>
                    <SelectItem value="Electronics">Electronics</SelectItem>
                    <SelectItem value="Beauty">Beauty</SelectItem>
                    <SelectItem value="Health">Health</SelectItem>
                    <SelectItem value="Sports">Sports</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={discountFilter} onValueChange={setDiscountFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Discount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Discounts</SelectItem>
                    <SelectItem value="25-35">25-35%</SelectItem>
                    <SelectItem value="36-45">36-45%</SelectItem>
                    <SelectItem value="46+">46%+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button size="sm" className="bg-gradient-primary" disabled={selectedItems.length === 0}>
                Apply Discounts ({selectedItems.length})
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Items Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recommended Items ({filteredItems.length})</span>
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
                  <TableHead>Category</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Age (Days)</TableHead>
                  <TableHead>MRP</TableHead>
                  <TableHead>Suggested Price</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Total Value</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item) => (
                  <TableRow key={item.id} className={selectedItems.includes(item.id) ? "bg-muted/50" : ""}>
                    <TableCell>
                      <Checkbox
                        checked={selectedItems.includes(item.id)}
                        onCheckedChange={() => toggleSelectItem(item.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.category}</Badge>
                    </TableCell>
                    <TableCell>{item.stock} units</TableCell>
                    <TableCell className="text-muted-foreground">{item.age} days</TableCell>
                    <TableCell className="text-muted-foreground line-through">${item.mrp}</TableCell>
                    <TableCell className="font-bold text-accent">${item.suggested}</TableCell>
                    <TableCell>
                      <Badge variant={item.discount >= 40 ? "destructive" : "secondary"}>
                        {item.discount}% off
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{item.reason}</TableCell>
                    <TableCell className="font-medium">${item.value.toLocaleString()}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        Apply
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
