import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, TrendingDown, Clock, ArrowLeft, Plus, Edit, Pause, Play } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function PricingRules() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    sku: "",
    shelfLife: "",
    minDiscount: "",
    maxDiscount: "",
    targetQty: "",
    minMargin: "",
    updateFreq: "",
    priceStep: ""
  });
  const [pausedRules, setPausedRules] = useState<number[]>([]);

  const handleCreateRule = () => {
    if (!formData.sku || !formData.shelfLife) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least Product SKU and Shelf Life.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Rule Created",
      description: `New pricing rule created for SKU: ${formData.sku}`,
    });
    
    setFormData({
      sku: "",
      shelfLife: "",
      minDiscount: "",
      maxDiscount: "",
      targetQty: "",
      minMargin: "",
      updateFreq: "",
      priceStep: ""
    });
  };

  const handleTestRule = () => {
    toast({
      title: "Testing Rule",
      description: "Running simulation with current parameters...",
    });
  };

  const togglePause = (index: number) => {
    setPausedRules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
    toast({
      title: pausedRules.includes(index) ? "Rule Resumed" : "Rule Paused",
      description: pausedRules.includes(index) 
        ? "Pricing rule is now active again."
        : "Pricing rule has been paused.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/admin/dynamic-pricing')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Pricing Rules Management</h1>
              <p className="mt-2 text-muted-foreground">
                Configure and monitor AI-powered dynamic pricing rules
              </p>
            </div>
          </div>
          <Button 
            className="bg-gradient-primary shadow-elevated"
            onClick={() => {
              const element = document.getElementById('create-rule-form');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create New Rule
          </Button>
        </div>

        {/* Rule Performance */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Rules</p>
                  <p className="text-3xl font-bold text-foreground">24</p>
                  <p className="text-sm text-accent mt-1">All categories</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Play className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Revenue Impact</p>
                  <p className="text-3xl font-bold text-foreground">+12.4%</p>
                  <p className="text-sm text-primary mt-1">This month</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Waste Reduction</p>
                  <p className="text-3xl font-bold text-foreground">-28%</p>
                  <p className="text-sm text-accent mt-1">vs last period</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Update Time</p>
                  <p className="text-3xl font-bold text-foreground">1.8s</p>
                  <p className="text-sm text-primary mt-1">To ESL displays</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Pricing Rules - Detailed */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Active Pricing Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  product: "Organic Milk 1 Gallon", 
                  sku: "MLK-ORG-001",
                  category: "Dairy", 
                  lifecycle: "Day 5 of 7",
                  shelfLife: 7,
                  currentDay: 5,
                  originalPrice: "$4.99",
                  currentPrice: "$3.59", 
                  nextPrice: "$2.99", 
                  changeTime: "2:00 PM Today",
                  priceChanges: 3,
                  unitsSold: 45,
                  revenue: "$161.55",
                  status: "active"
                },
                { 
                  product: "Fresh Artisan Bread", 
                  sku: "BRD-ART-012",
                  category: "Bakery", 
                  lifecycle: "Day 1 of 3",
                  shelfLife: 3,
                  currentDay: 1,
                  originalPrice: "$3.99",
                  currentPrice: "$2.49", 
                  nextPrice: "$1.99", 
                  changeTime: "5:00 PM Today",
                  priceChanges: 1,
                  unitsSold: 28,
                  revenue: "$69.72",
                  status: "active"
                },
                { 
                  product: "Mixed Salad Greens", 
                  sku: "PRD-SAL-024",
                  category: "Produce", 
                  lifecycle: "Day 2 of 5",
                  shelfLife: 5,
                  currentDay: 2,
                  originalPrice: "$3.99",
                  currentPrice: "$2.99", 
                  nextPrice: "$2.49", 
                  changeTime: "4:00 PM Today",
                  priceChanges: 2,
                  unitsSold: 62,
                  revenue: "$185.38",
                  status: "active"
                },
                { 
                  product: "Greek Yogurt 4-Pack", 
                  sku: "YGT-GRK-008",
                  category: "Dairy", 
                  lifecycle: "Day 6 of 10",
                  shelfLife: 10,
                  currentDay: 6,
                  originalPrice: "$5.99",
                  currentPrice: "$4.49", 
                  nextPrice: "$3.99", 
                  changeTime: "Tomorrow 9:00 AM",
                  priceChanges: 2,
                  unitsSold: 34,
                  revenue: "$152.66",
                  status: "scheduled"
                },
              ].map((rule, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <DollarSign className="h-6 w-6 text-accent" />
                          </div>
                          <div className="flex-1 space-y-3">
                            <div>
                              <p className="font-medium text-foreground">{rule.product}</p>
                              <p className="text-sm text-muted-foreground">
                                {rule.sku} • {rule.category} • {rule.lifecycle}
                              </p>
                            </div>

                            {/* Lifecycle Progress Bar */}
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>Shelf Life Progress</span>
                                <span>{rule.currentDay} of {rule.shelfLife} days</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-accent to-warning transition-all" 
                                  style={{ width: `${(rule.currentDay / rule.shelfLife) * 100}%` }}
                                />
                              </div>
                            </div>

                            {/* Pricing Timeline */}
                            <div className="flex items-center gap-4 flex-wrap">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">Original:</span>
                                <span className="text-sm font-medium text-muted-foreground line-through">
                                  {rule.originalPrice}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">Current:</span>
                                <span className="text-lg font-bold text-foreground">
                                  {rule.currentPrice}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">Next:</span>
                                <span className="text-lg font-bold text-accent">
                                  {rule.nextPrice}
                                </span>
                              </div>
                            </div>

                            {/* Performance Metrics */}
                            <div className="flex items-center gap-6 text-xs border-t border-border pt-3">
                              <div>
                                <span className="text-muted-foreground">Price Changes: </span>
                                <span className="font-medium text-foreground">{rule.priceChanges}</span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Units Sold: </span>
                                <span className="font-medium text-foreground">{rule.unitsSold}</span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Revenue: </span>
                                <span className="font-medium text-accent">{rule.revenue}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <Badge variant={rule.status === "active" ? "default" : "secondary"}>
                                {rule.status}
                              </Badge>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                Next change: {rule.changeTime}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              const element = document.getElementById('create-rule-form');
                              element?.scrollIntoView({ behavior: 'smooth' });
                              toast({
                                title: "Edit Mode",
                                description: "You can now modify the rule parameters below.",
                              });
                            }}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Rule
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => togglePause(i)}
                          >
                            {pausedRules.includes(i) ? (
                              <>
                                <Play className="mr-2 h-4 w-4" />
                                Resume
                              </>
                            ) : (
                              <>
                                <Pause className="mr-2 h-4 w-4" />
                                Pause
                              </>
                            )}
                          </Button>
                          <Button 
                            size="sm"
                            asChild
                          >
                            <a href={`/management/details/rule-history?product=${encodeURIComponent(rule.product)}`} target="_blank" rel="noopener noreferrer">
                              View History
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Create New Rule */}
        <Card className="shadow-card" id="create-rule-form">
          <CardHeader>
            <CardTitle>Create New Pricing Rule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="product-sku">Product SKU</Label>
                  <Input 
                    id="product-sku" 
                    placeholder="Enter product SKU" 
                    className="mt-2"
                    value={formData.sku}
                    onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="shelf-life">Total Shelf Life (days)</Label>
                  <Input 
                    id="shelf-life" 
                    type="number" 
                    placeholder="7" 
                    className="mt-2"
                    value={formData.shelfLife}
                    onChange={(e) => setFormData({ ...formData, shelfLife: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="min-discount">Minimum Discount %</Label>
                  <Input 
                    id="min-discount" 
                    type="number" 
                    placeholder="15" 
                    className="mt-2"
                    value={formData.minDiscount}
                    onChange={(e) => setFormData({ ...formData, minDiscount: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="max-discount">Maximum Discount %</Label>
                  <Input 
                    id="max-discount" 
                    type="number" 
                    placeholder="70" 
                    className="mt-2"
                    value={formData.maxDiscount}
                    onChange={(e) => setFormData({ ...formData, maxDiscount: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="target-qty">Target End Quantity</Label>
                  <Input 
                    id="target-qty" 
                    type="number" 
                    placeholder="0-5 units" 
                    className="mt-2"
                    value={formData.targetQty}
                    onChange={(e) => setFormData({ ...formData, targetQty: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="min-margin">Minimum Margin %</Label>
                  <Input 
                    id="min-margin" 
                    type="number" 
                    placeholder="20" 
                    className="mt-2"
                    value={formData.minMargin}
                    onChange={(e) => setFormData({ ...formData, minMargin: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="update-freq">Update Frequency</Label>
                  <Input 
                    id="update-freq" 
                    placeholder="Hourly, Daily, etc." 
                    className="mt-2"
                    value={formData.updateFreq}
                    onChange={(e) => setFormData({ ...formData, updateFreq: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="price-step">Price Step Size %</Label>
                  <Input 
                    id="price-step" 
                    type="number" 
                    placeholder="5" 
                    className="mt-2"
                    value={formData.priceStep}
                    onChange={(e) => setFormData({ ...formData, priceStep: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button 
                className="flex-1 bg-gradient-primary shadow-elevated"
                onClick={handleCreateRule}
              >
                <Plus className="mr-2 h-4 w-4" />
                Create Rule
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={handleTestRule}
              >
                Test Rule
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
