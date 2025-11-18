import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, DollarSign, Clock, Zap, Settings, Link as LinkIcon, Database, BarChart3, Scan } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function DynamicPricing() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdminWorkspace = location.pathname.includes('/admin/');

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Dynamic Pricing Algorithm</h1>
            <p className="mt-2 text-muted-foreground">
              AI-powered pricing across shelf life for waste reduction
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              className="bg-gradient-primary shadow-elevated"
              onClick={() => navigate('/admin/freshness-analysis')}
            >
              <Scan className="mr-2 h-4 w-4" />
              AI Freshness Analysis
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate(isAdminWorkspace ? '/admin/algorithm-settings' : '/management/details/algorithm-settings')}
            >
              <Settings className="mr-2 h-4 w-4" />
              Algorithm Settings
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                const toast = document.createElement('div');
                toast.textContent = 'Running optimization...';
                // This would trigger the actual optimization in a real system
              }}
            >
              <Zap className="mr-2 h-4 w-4" />
              Run Optimization
            </Button>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="shadow-card border-accent/20 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate('/admin/dynamic-pricing')}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Waste Reduced</p>
                  <p className="text-3xl font-bold text-foreground">34%</p>
                  <p className="text-sm text-accent mt-1">Since algorithm launch</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate('/admin/dynamic-pricing')}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Revenue Recovered</p>
                  <p className="text-3xl font-bold text-foreground">$18.2K</p>
                  <p className="text-sm text-primary mt-1">This month</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate('/admin/pricing-rules')}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Items Managed</p>
                  <p className="text-3xl font-bold text-foreground">1,248</p>
                  <p className="text-sm text-accent mt-1">Active pricing</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate('/admin/dynamic-pricing')}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Response Time</p>
                  <p className="text-3xl font-bold text-foreground">2.4s</p>
                  <p className="text-sm text-primary mt-1">Real-time updates</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MVP Features */}
        <Card className="shadow-card border-accent/20">
          <CardHeader>
            <CardTitle>MVP Algorithm Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Shelf Life Pricing</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dynamic pricing across day</li>
                  <li>• Time-based adjustments</li>
                  <li>• Multiple price points/day</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(isAdminWorkspace ? '/admin/algorithm-settings' : '/management/details/algorithm-settings')}>
                  Configure Times
                </Button>
              </div>

              <div className="rounded-lg border border-border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Algorithm Inputs</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Shelf life parameters</li>
                  <li>• Acceptable end qty</li>
                  <li>• Margin thresholds</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(isAdminWorkspace ? '/admin/algorithm-settings' : '/management/details/algorithm-settings')}>
                  Edit Parameters
                </Button>
              </div>

              <div className="rounded-lg border border-border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">ESL Integration</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time price updates</li>
                  <li>• Auto-sync to displays</li>
                  <li>• Instant deployment</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate('/admin/esl-solution')}>
                  ESL Status
                </Button>
              </div>

              <div className="rounded-lg border border-border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">POS Connection</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• POS system linked</li>
                  <li>• Sales data sync</li>
                  <li>• Inventory updates</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/management/inventory" target="_blank" rel="noopener noreferrer">POS Settings</a>
                </Button>
              </div>

              <div className="rounded-lg border border-border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Stock Data</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Start quantity tracking</li>
                  <li>• End of life dates</li>
                  <li>• Real-time monitoring</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/management/inventory" target="_blank" rel="noopener noreferrer">Data Sources</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Pricing Rules */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              Active Pricing Rules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { product: "Organic Milk", category: "Dairy", lifecycle: "Day 5 of 7", currentPrice: "$3.59", nextPrice: "$2.99", changeTime: "2:00 PM", status: "active" },
                { product: "Fresh Bread", category: "Bakery", lifecycle: "Day 1 of 3", currentPrice: "$2.49", nextPrice: "$1.99", changeTime: "5:00 PM", status: "active" },
                { product: "Mixed Greens", category: "Produce", lifecycle: "Day 2 of 5", currentPrice: "$2.99", nextPrice: "$2.49", changeTime: "4:00 PM", status: "active" },
                { product: "Greek Yogurt", category: "Dairy", lifecycle: "Day 6 of 10", currentPrice: "$4.49", nextPrice: "$3.99", changeTime: "Tomorrow 9:00 AM", status: "scheduled" },
              ].map((rule, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{rule.product}</p>
                      <p className="text-sm text-muted-foreground">{rule.category} • {rule.lifecycle}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-muted-foreground">Current: <span className="font-medium">{rule.currentPrice}</span></span>
                        <span className="text-xs text-accent">Next: <span className="font-bold">{rule.nextPrice}</span></span>
                        <Badge variant={rule.status === "active" ? "default" : "secondary"}>
                          {rule.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Price change at</p>
                    <p className="text-sm font-medium text-foreground">{rule.changeTime}</p>
                    <Button variant="ghost" size="sm" className="mt-2" onClick={() => navigate('/admin/pricing-rules')}>
                      Adjust Rule
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Algorithm Configuration */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Algorithm Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-border p-4">
                <h4 className="font-medium text-foreground mb-3">Time Windows</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Morning:</span>
                    <span className="font-medium">6:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Afternoon:</span>
                    <span className="font-medium">12:00 PM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Evening:</span>
                    <span className="font-medium">6:00 PM - Close</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h4 className="font-medium text-foreground mb-3">Price Adjustments</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Discount:</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max Discount:</span>
                    <span className="font-medium">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Step Size:</span>
                    <span className="font-medium">5%</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border p-4">
                <h4 className="font-medium text-foreground mb-3">Inventory Targets</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Target End Qty:</span>
                    <span className="font-medium">0-5 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Margin:</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Update Freq:</span>
                    <span className="font-medium">Hourly</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
