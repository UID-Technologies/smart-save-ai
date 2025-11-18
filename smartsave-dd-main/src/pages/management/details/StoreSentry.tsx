import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Store, Users, TrendingUp, Clock, MapPin, Eye, Activity, AlertCircle, BarChart3, Flame, ShoppingCart, Timer, Download, Settings, RefreshCw } from "lucide-react";

export default function StoreSentry() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground flex items-center gap-3">
              <Store className="h-10 w-10 text-accent" />
              Store Sentry
            </h1>
            <p className="mt-2 text-muted-foreground">
              Store operations & customer behavior analytics system
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Analytics
            </Button>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Configure Zones
            </Button>
            <Button className="bg-gradient-primary">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Data
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="shadow-card border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Customer Traffic</p>
                  <p className="text-3xl font-bold text-foreground">3,842</p>
                  <p className="text-sm text-accent mt-1">Today's count</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Dwell Time</p>
                  <p className="text-3xl font-bold text-foreground">12.4m</p>
                  <p className="text-sm text-accent mt-1">↑ 8% vs avg</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <p className="text-3xl font-bold text-foreground">3.8%</p>
                  <p className="text-sm text-accent mt-1">↑ 0.4% today</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-warning/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Queue Alerts</p>
                  <p className="text-3xl font-bold text-foreground">3</p>
                  <p className="text-sm text-warning mt-1">Active now</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="heatmap">Heat Map</TabsTrigger>
            <TabsTrigger value="traffic">Traffic Flow</TabsTrigger>
            <TabsTrigger value="zones">Zone Analysis</TabsTrigger>
            <TabsTrigger value="alerts">Queue Alerts</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Real-time Occupancy */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-accent" />
                    Real-Time Store Occupancy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Current Occupancy</span>
                      <Badge variant="outline" className="border-accent text-accent">Normal</Badge>
                    </div>
                    <div className="h-4 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-accent" style={{ width: '62%' }} />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">0</span>
                      <span className="text-sm font-medium text-foreground">487 / 800 customers</span>
                      <span className="text-xs text-muted-foreground">Max capacity</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="text-center p-3 rounded-lg bg-accent/10">
                      <p className="text-2xl font-bold text-foreground">312</p>
                      <p className="text-xs text-muted-foreground mt-1">Browsing</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-primary/10">
                      <p className="text-2xl font-bold text-foreground">143</p>
                      <p className="text-xs text-muted-foreground mt-1">Shopping</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-warning/10">
                      <p className="text-2xl font-bold text-foreground">32</p>
                      <p className="text-xs text-muted-foreground mt-1">In Queue</p>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <p className="text-sm font-medium text-foreground">Peak Hours Today</p>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <div>
                        <p className="text-sm font-medium text-foreground">2:00 PM - 5:00 PM</p>
                        <p className="text-xs text-muted-foreground">Average 620 customers</p>
                      </div>
                      <Badge variant="outline" className="border-primary text-primary">78% capacity</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Behavior */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Customer Behavior Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Avg Visit Duration</span>
                        <span className="text-sm font-bold text-foreground">12.4 minutes</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: '76%' }} />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">↑ 8% vs store average</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Path to Purchase</span>
                        <span className="text-sm font-bold text-foreground">4.2 aisles</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '68%' }} />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Average aisles visited</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Return Visit Rate</span>
                        <span className="text-sm font-bold text-foreground">34.8%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: '34.8%' }} />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">↑ 2.3% vs last week</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-3">Top Customer Flows</p>
                    <div className="space-y-2">
                      {[
                        { path: "Entrance → Produce → Dairy → Checkout", count: 456 },
                        { path: "Entrance → Bakery → Beverages → Checkout", count: 312 },
                        { path: "Entrance → Frozen → Snacks → Checkout", count: 289 },
                      ].map((flow, i) => (
                        <div key={i} className="flex items-center justify-between text-sm p-2 rounded hover:bg-muted/30">
                          <span className="text-muted-foreground text-xs">{flow.path}</span>
                          <Badge variant="secondary">{flow.count}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Hot Zones */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-accent" />
                  High Traffic Zones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                  {[
                    { zone: "Produce Section", traffic: 2847, dwell: "8.2m", conversion: "42%" },
                    { zone: "Bakery Area", traffic: 2134, dwell: "6.4m", conversion: "38%" },
                    { zone: "Dairy Aisle", traffic: 1892, dwell: "5.1m", conversion: "45%" },
                    { zone: "Checkout Area", traffic: 3842, dwell: "3.8m", conversion: "95%" },
                  ].map((zone, i) => (
                    <div key={i} className="rounded-lg border border-border bg-card p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-4 w-4 text-accent" />
                        <p className="text-sm font-medium text-foreground">{zone.zone}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Traffic</span>
                          <span className="font-medium text-foreground">{zone.traffic}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Dwell Time</span>
                          <span className="font-medium text-foreground">{zone.dwell}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Conversion</span>
                          <span className="font-medium text-accent">{zone.conversion}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Heat Map Tab */}
          <TabsContent value="heatmap" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Store Traffic Heat Map</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Today</Button>
                    <Button variant="ghost" size="sm">This Week</Button>
                    <Button variant="ghost" size="sm">This Month</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg border border-border flex items-center justify-center">
                  <div className="text-center">
                    <Flame className="h-12 w-12 text-accent mx-auto mb-4" />
                    <p className="text-lg font-medium text-foreground">Interactive Heat Map Visualization</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Real-time customer traffic density across store zones
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 p-4 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-accent" />
                      <span className="text-xs text-muted-foreground">High Traffic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-primary" />
                      <span className="text-xs text-muted-foreground">Medium Traffic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-muted" />
                      <span className="text-xs text-muted-foreground">Low Traffic</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export Heat Map
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Traffic Flow Tab */}
          <TabsContent value="traffic" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Customer Traffic Flow Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-5 w-5 text-accent" />
                      <p className="text-sm font-medium text-foreground">Total Entries</p>
                    </div>
                    <p className="text-3xl font-bold text-foreground">3,842</p>
                    <p className="text-xs text-accent mt-1">↑ 12.3% vs yesterday</p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <ShoppingCart className="h-5 w-5 text-primary" />
                      <p className="text-sm font-medium text-foreground">Converted</p>
                    </div>
                    <p className="text-3xl font-bold text-foreground">1,460</p>
                    <p className="text-xs text-accent mt-1">38% conversion rate</p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Timer className="h-5 w-5 text-accent" />
                      <p className="text-sm font-medium text-foreground">Avg Time</p>
                    </div>
                    <p className="text-3xl font-bold text-foreground">12.4m</p>
                    <p className="text-xs text-accent mt-1">↑ 1.2 min vs average</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Hourly Traffic Pattern</p>
                  <div className="aspect-[2/1] bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg border border-border flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-accent mx-auto mb-4" />
                      <p className="text-lg font-medium text-foreground">Traffic Flow Chart</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Hourly customer entry and exit patterns
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Zone Analysis Tab */}
          <TabsContent value="zones" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Zone Performance Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { zone: "Produce Section", traffic: 2847, dwell: "8.2m", conversion: "42%", revenue: "$12,450", trend: "up" },
                    { zone: "Dairy Aisle", traffic: 1892, dwell: "5.1m", conversion: "45%", revenue: "$8,920", trend: "up" },
                    { zone: "Bakery Area", traffic: 2134, dwell: "6.4m", conversion: "38%", revenue: "$6,780", trend: "up" },
                    { zone: "Frozen Foods", traffic: 1456, dwell: "4.8m", conversion: "32%", revenue: "$5,340", trend: "down" },
                    { zone: "Snacks & Beverages", traffic: 1789, dwell: "5.6m", conversion: "36%", revenue: "$7,120", trend: "up" },
                    { zone: "Health & Beauty", traffic: 892, dwell: "7.2m", conversion: "28%", revenue: "$4,560", trend: "down" },
                  ].map((zone, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          <p className="font-medium text-foreground">{zone.zone}</p>
                          {zone.trend === 'up' ? (
                            <TrendingUp className="h-4 w-4 text-accent ml-auto" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-warning ml-auto" />
                          )}
                        </div>
                        <div className="grid grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-xs text-muted-foreground">Traffic</p>
                            <p className="font-medium text-foreground">{zone.traffic}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Dwell Time</p>
                            <p className="font-medium text-foreground">{zone.dwell}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Conversion</p>
                            <p className="font-medium text-accent">{zone.conversion}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Revenue</p>
                            <p className="font-medium text-primary">{zone.revenue}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Queue Management & Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { location: "Checkout Lane 3", issue: "Queue length exceeds 8 customers", severity: "warning", waitTime: "12 mins", time: "2 mins ago" },
                    { location: "Checkout Lane 5", issue: "Queue length exceeds 10 customers", severity: "critical", waitTime: "15 mins", time: "Just now" },
                    { location: "Customer Service", issue: "Queue length exceeds 6 customers", severity: "warning", waitTime: "18 mins", time: "5 mins ago" },
                  ].map((alert, i) => (
                    <div key={i} className={`flex items-start gap-3 rounded-lg border p-4 ${alert.severity === 'critical' ? 'border-destructive/50 bg-destructive/5' : 'border-warning/50 bg-warning/5'}`}>
                      <AlertCircle className={`h-5 w-5 mt-0.5 ${alert.severity === 'critical' ? 'text-destructive' : 'text-warning'}`} />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-foreground">{alert.location}</p>
                            <p className="text-sm text-foreground mt-1">{alert.issue}</p>
                          </div>
                          <Badge variant={alert.severity === 'critical' ? 'destructive' : 'outline'} className={alert.severity === 'warning' ? 'border-warning text-warning' : ''}>
                            {alert.severity}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Wait time: {alert.waitTime}
                          </div>
                          <span>•</span>
                          <span>{alert.time}</span>
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm">Open Lane</Button>
                          <Button variant="outline" size="sm">Alert Staff</Button>
                          <Button variant="ghost" size="sm">Dismiss</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-muted/30">
                  <p className="text-sm font-medium text-foreground mb-2">Queue Management Recommendations</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Open Checkout Lane 7 to reduce wait times</li>
                    <li>• Deploy staff to assist with self-checkout area</li>
                    <li>• Consider implementing express lane for small baskets</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
