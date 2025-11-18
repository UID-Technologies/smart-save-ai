import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter } from "lucide-react";

export default function Inventory() {
  const inventoryItems = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      category: "Electronics",
      quantity: 8,
      unit: "units",
      age: "6 months",
      marketFit: "Low",
      salability: 42,
      status: "warning",
      price: 899.99,
    },
    {
      id: 2,
      name: "Samsung Galaxy S22",
      category: "Electronics",
      quantity: 15,
      unit: "units",
      age: "8 months",
      marketFit: "Very Low",
      salability: 32,
      status: "critical",
      price: 649.99,
    },
    {
      id: 3,
      name: "Summer Fashion Collection",
      category: "Fashion",
      quantity: 42,
      unit: "units",
      age: "4 months",
      marketFit: "Low",
      salability: 28,
      status: "critical",
      price: 49.99,
    },
    {
      id: 4,
      name: "Winter Coats 2024",
      category: "Fashion",
      quantity: 24,
      unit: "units",
      age: "2 months",
      marketFit: "High",
      salability: 85,
      status: "good",
      price: 129.99,
    },
    {
      id: 5,
      name: "Anti-Aging Serum",
      category: "Cosmetics",
      quantity: 28,
      unit: "units",
      age: "5 months",
      marketFit: "Medium",
      salability: 45,
      status: "warning",
      price: 34.99,
    },
    {
      id: 6,
      name: "Luxury Perfume Set",
      category: "Cosmetics",
      quantity: 12,
      unit: "units",
      age: "1 month",
      marketFit: "High",
      salability: 92,
      status: "good",
      price: 89.99,
    },
    {
      id: 7,
      name: "Organic Milk",
      category: "Food",
      quantity: 24,
      unit: "units",
      age: "2 days",
      marketFit: "Medium",
      salability: 68,
      status: "warning",
      price: 3.99,
    },
    {
      id: 8,
      name: "Fresh Bread",
      category: "Food",
      quantity: 18,
      unit: "units",
      age: "1 day",
      marketFit: "High",
      salability: 55,
      status: "critical",
      price: 2.49,
    },
    {
      id: 9,
      name: "Kitchen Appliances",
      category: "Home & Garden",
      quantity: 10,
      unit: "units",
      age: "3 months",
      marketFit: "Medium",
      salability: 58,
      status: "warning",
      price: 159.99,
    },
    {
      id: 10,
      name: "Smart Watch Series 7",
      category: "Electronics",
      quantity: 20,
      unit: "units",
      age: "1 month",
      marketFit: "High",
      salability: 88,
      status: "good",
      price: 399.99,
    },
    {
      id: 11,
      name: "Yoga Mats Premium",
      category: "Sports",
      quantity: 35,
      unit: "units",
      age: "2 weeks",
      marketFit: "High",
      salability: 95,
      status: "good",
      price: 29.99,
    },
    {
      id: 12,
      name: "Gaming Console Accessories",
      category: "Electronics",
      quantity: 16,
      unit: "units",
      age: "5 months",
      marketFit: "Medium",
      salability: 52,
      status: "warning",
      price: 79.99,
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      critical: "destructive",
      warning: "warning",
      good: "secondary",
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || "secondary"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };


  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Buc-ee's - Inventory Management</h1>
            <p className="mt-2 text-muted-foreground">
              Multi-category inventory tracking with salability intelligence
            </p>
          </div>
          <Button className="bg-gradient-primary shadow-elevated">
            <Plus className="mr-2 h-4 w-4" />
            Add Item
          </Button>
        </div>

        {/* Filters */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search inventory..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Inventory Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>All Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border bg-muted/30">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                      Item Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                      Category
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                      Quantity
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                      Age
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                      Market Fit
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                      Salability
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                      Price
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {inventoryItems.map((item) => (
                    <tr key={item.id} className="transition-colors hover:bg-muted/30">
                      <td className="px-4 py-4 text-sm font-medium text-foreground">
                        {item.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-muted-foreground">
                        {item.category}
                      </td>
                      <td className="px-4 py-4 text-sm text-foreground">
                        {item.quantity} {item.unit}
                      </td>
                      <td className="px-4 py-4 text-sm text-foreground">
                        {item.age}
                      </td>
                      <td className="px-4 py-4 text-sm text-foreground">
                        {item.marketFit}
                      </td>
                      <td className="px-4 py-4 text-sm text-foreground">
                        <span className={`font-medium ${
                          item.salability >= 70 ? 'text-accent' : 
                          item.salability >= 50 ? 'text-warning' : 
                          'text-destructive'
                        }`}>
                          {item.salability}%
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        {getStatusBadge(item.status)}
                      </td>
                      <td className="px-4 py-4 text-sm text-foreground">
                        ${item.price}
                      </td>
                      <td className="px-4 py-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
