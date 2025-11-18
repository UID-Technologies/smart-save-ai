import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Heart, Package, Truck, Calendar, Search, DollarSign } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const donationItems = [
  { id: 1, name: "Canned Vegetables", category: "Food", qty: 45, weight: 28, partner: "Food Bank", status: "Ready", value: 234.50, expiry: "5 days" },
  { id: 2, name: "Winter Coats (Last Season)", category: "Clothing", qty: 18, weight: 15, partner: "Shelter", status: "Ready", value: 540.00, expiry: "N/A" },
  { id: 3, name: "School Supplies", category: "Education", qty: 32, weight: 8, partner: "Youth Center", status: "Ready", value: 256.00, expiry: "N/A" },
  { id: 4, name: "Baby Formula", category: "Food", qty: 24, weight: 12, partner: "Food Bank", status: "Scheduled", value: 456.00, expiry: "7 days" },
  { id: 5, name: "Blankets", category: "Household", qty: 40, weight: 25, partner: "Shelter", status: "Ready", value: 800.00, expiry: "N/A" },
  { id: 6, name: "Rice & Grains", category: "Food", qty: 60, weight: 45, partner: "Community Kitchen", status: "Ready", value: 345.00, expiry: "30 days" },
  { id: 7, name: "Toys & Games", category: "Children", qty: 28, weight: 10, partner: "Youth Center", status: "Scheduled", value: 420.00, expiry: "N/A" },
  { id: 8, name: "Personal Care Items", category: "Health", qty: 52, weight: 18, partner: "Shelter", status: "Ready", value: 312.00, expiry: "60 days" },
];

const partnerStats = [
  { name: "Food Bank", items: 129, weight: 85, donations: 24, value: 1035.50 },
  { name: "Shelter", items: 110, weight: 58, donations: 18, value: 1652.00 },
  { name: "Community Kitchen", items: 60, weight: 45, donations: 12, value: 345.00 },
  { name: "Youth Center", items: 60, weight: 18, donations: 9, value: 676.00 },
];

export default function Donations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const filteredItems = donationItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalValue = filteredItems.reduce((sum, item) => sum + item.value, 0);
  const totalWeight = filteredItems.reduce((sum, item) => sum + item.weight, 0);
  const readyItems = filteredItems.filter(item => item.status === "Ready").length;

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
          <h1 className="text-4xl font-bold text-foreground">Donation Management</h1>
          <p className="mt-2 text-muted-foreground">
            Coordinate donations to community partners and track social impact
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Ready for Donation</p>
                  <p className="text-2xl font-bold text-foreground">{readyItems}</p>
                </div>
                <Heart className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Weight</p>
                  <p className="text-2xl font-bold text-foreground">{totalWeight} kg</p>
                </div>
                <Package className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Social Value</p>
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
                  <p className="text-sm text-muted-foreground">Active Partners</p>
                  <p className="text-2xl font-bold text-foreground">4</p>
                </div>
                <Truck className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partner Stats */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Partner Organizations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {partnerStats.map((partner) => (
                <div key={partner.name} className="rounded-lg border border-border bg-muted/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-foreground">{partner.name}</h3>
                    <Badge variant="outline">{partner.donations} donations</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Items</p>
                      <p className="font-medium text-foreground">{partner.items}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Weight</p>
                      <p className="font-medium text-foreground">{partner.weight} kg</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Value</p>
                      <p className="font-medium text-accent">${partner.value.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
                    <SelectItem value="Food">Food</SelectItem>
                    <SelectItem value="Clothing">Clothing</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Household">Household</SelectItem>
                    <SelectItem value="Health">Health</SelectItem>
                    <SelectItem value="Children">Children</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Ready">Ready</SelectItem>
                    <SelectItem value="Scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button size="sm" className="bg-gradient-primary" disabled={selectedItems.length === 0}>
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Pickup ({selectedItems.length})
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Items Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Donation Items ({filteredItems.length})</span>
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
                  <TableHead>Item</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead>Partner</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>Social Value</TableHead>
                  <TableHead>Status</TableHead>
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
                    <TableCell>{item.qty} units</TableCell>
                    <TableCell>{item.weight} kg</TableCell>
                    <TableCell className="text-muted-foreground">{item.partner}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{item.expiry}</TableCell>
                    <TableCell className="font-medium text-accent">${item.value.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant={item.status === "Ready" ? "default" : "secondary"}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        Schedule
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
