import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Tag, Clock, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import buceesLogo from "@/assets/bucees-logo.webp";
import smartSaveLogo from "@/assets/smartsave-logo.png";
import displayDataLogo from "@/assets/displaydata-logo.png";

// Mock marketplace data
const marketplaceItems = [
  {
    id: 1,
    name: "Organic Bananas",
    category: "Produce",
    store: "Buc-ee's",
    location: "Downtown Store",
    originalPrice: 3.99,
    discountedPrice: 1.99,
    discount: 50,
    expiryDays: 2,
    stock: 25,
    image: "🍌"
  },
  {
    id: 2,
    name: "Fresh Bread Loaves",
    category: "Bakery",
    store: "Buc-ee's",
    location: "Main Street",
    originalPrice: 4.99,
    discountedPrice: 2.49,
    discount: 50,
    expiryDays: 1,
    stock: 15,
    image: "🍞"
  },
  {
    id: 3,
    name: "Milk (1 Gallon)",
    category: "Dairy",
    store: "Buc-ee's",
    location: "Downtown Store",
    originalPrice: 5.99,
    discountedPrice: 3.59,
    discount: 40,
    expiryDays: 3,
    stock: 30,
    image: "🥛"
  },
  {
    id: 4,
    name: "Mixed Salad Greens",
    category: "Produce",
    store: "Buc-ee's",
    location: "Westside",
    originalPrice: 4.49,
    discountedPrice: 2.24,
    discount: 50,
    expiryDays: 2,
    stock: 20,
    image: "🥗"
  },
  {
    id: 5,
    name: "Yogurt Multi-Pack",
    category: "Dairy",
    store: "Buc-ee's",
    location: "Main Street",
    originalPrice: 6.99,
    discountedPrice: 4.19,
    discount: 40,
    expiryDays: 4,
    stock: 18,
    image: "🥛"
  },
  {
    id: 6,
    name: "Croissants (6-pack)",
    category: "Bakery",
    store: "Buc-ee's",
    location: "Downtown Store",
    originalPrice: 7.99,
    discountedPrice: 3.99,
    discount: 50,
    expiryDays: 1,
    stock: 12,
    image: "🥐"
  }
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");

  const filteredItems = marketplaceItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    const matchesLocation = locationFilter === "all" || item.location === locationFilter;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={buceesLogo} alt="Buc-ee's" className="h-10" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Buc-ee's Marketplace</h1>
                <p className="text-sm text-muted-foreground">Fresh deals, less waste</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="outline">Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-primary py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Save Money, Reduce Waste</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Browse quality products at discounted prices and help us reduce food waste in your community
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Produce">Produce</SelectItem>
              <SelectItem value="Bakery">Bakery</SelectItem>
              <SelectItem value="Dairy">Dairy</SelectItem>
              <SelectItem value="Meat">Meat</SelectItem>
            </SelectContent>
          </Select>
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="Downtown Store">Downtown Store</SelectItem>
              <SelectItem value="Main Street">Main Street</SelectItem>
              <SelectItem value="Westside">Westside</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Tag className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{filteredItems.length}</p>
                  <p className="text-sm text-muted-foreground">Deals Available</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Up to 50%</p>
                  <p className="text-sm text-muted-foreground">Discount</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Fresh Daily</p>
                  <p className="text-sm text-muted-foreground">New Deals</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="text-6xl">{item.image}</div>
                  <Badge variant="destructive" className="text-lg font-bold">
                    -{item.discount}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-warning" />
                  <span className="text-warning font-medium">
                    {item.expiryDays} day{item.expiryDays > 1 ? 's' : ''} left
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">
                    ${item.discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${item.originalPrice.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.stock} items available
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No items found matching your filters</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Powered by</p>
            <div className="flex items-center justify-center gap-6 mb-4">
              <img src={smartSaveLogo} alt="SmartSave" className="h-8 w-auto object-contain" />
              <img src={displayDataLogo} alt="DisplayData" className="h-7 w-auto object-contain" />
            </div>
            <p className="text-sm text-muted-foreground">Helping reduce food waste, one deal at a time</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
