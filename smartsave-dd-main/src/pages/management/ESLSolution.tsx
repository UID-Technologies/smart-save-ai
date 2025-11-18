import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Shield, Store, Activity, AlertCircle, CheckCircle, Radio, Battery, Signal, MapPin, Clock, TrendingUp, Users, Eye, Zap, ArrowRight } from "lucide-react";

export default function ESLSolution() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">ESL Solution Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
              Electronic Shelf Label Management with Retail Sentry & Store Sentry
            </p>
          </div>
          <Button className="bg-gradient-primary shadow-elevated">
            <Activity className="mr-2 h-4 w-4" />
            System Health Check
          </Button>
        </div>

        {/* Main Solutions Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Retail Sentry Card */}
          <Card 
            className="shadow-card border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 cursor-pointer transition-all hover:shadow-elevated hover:border-primary"
            onClick={() => navigate('/management/details/retail-sentry')}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Shield className="h-6 w-6 text-primary" />
                  Retail Sentry
                </CardTitle>
                <Badge variant="outline" className="border-primary text-primary">Active</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Price accuracy monitoring & compliance tracking
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-card p-4">
                  <p className="text-sm text-muted-foreground">Total ESL Devices</p>
                  <p className="text-3xl font-bold text-foreground">2,847</p>
                  <p className="text-xs text-accent mt-1">↑ 98.5% online</p>
                </div>
                <div className="rounded-lg bg-card p-4">
                  <p className="text-sm text-muted-foreground">Price Updates Today</p>
                  <p className="text-3xl font-bold text-foreground">1,248</p>
                  <p className="text-xs text-accent mt-1">Avg 2.3s latency</p>
                </div>
                <div className="rounded-lg bg-card p-4">
                  <p className="text-sm text-muted-foreground">Price Accuracy</p>
                  <p className="text-3xl font-bold text-foreground">99.7%</p>
                  <p className="text-xs text-accent mt-1">Target: 99.5%</p>
                </div>
                <div className="rounded-lg bg-card p-4">
                  <p className="text-sm text-muted-foreground">Compliance Rate</p>
                  <p className="text-3xl font-bold text-foreground">97.2%</p>
                  <p className="text-xs text-accent mt-1">↑ 2.1% this week</p>
                </div>
              </div>
              
              <div className="space-y-2 pt-2">
                <p className="text-sm font-medium text-foreground">Key Features:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Real-time price synchronization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Automated compliance monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Price verification audits
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    POS integration & validation
                  </li>
                </ul>
              </div>

              <Button className="w-full" variant="outline">
                View Retail Sentry Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Store Sentry Card */}
          <Card 
            className="shadow-card border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 cursor-pointer transition-all hover:shadow-elevated hover:border-accent"
            onClick={() => navigate('/management/details/store-sentry')}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Store className="h-6 w-6 text-accent" />
                  Store Sentry
                </CardTitle>
                <Badge variant="outline" className="border-accent text-accent">Active</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Store operations & customer behavior analytics
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-card p-4">
                  <p className="text-sm text-muted-foreground">Customer Traffic</p>
                  <p className="text-3xl font-bold text-foreground">3,842</p>
                  <p className="text-xs text-accent mt-1">Today's count</p>
                </div>
                <div className="rounded-lg bg-card p-4">
                  <p className="text-sm text-muted-foreground">Peak Hours</p>
                  <p className="text-3xl font-bold text-foreground">2-5PM</p>
                  <p className="text-xs text-accent mt-1">78% capacity</p>
                </div>
                <div className="rounded-lg bg-card p-4">
                  <p className="text-sm text-muted-foreground">Dwell Time</p>
                  <p className="text-3xl font-bold text-foreground">12.4m</p>
                  <p className="text-xs text-accent mt-1">↑ 8% vs avg</p>
                </div>
                <div className="rounded-lg bg-card p-4">
                  <p className="text-sm text-muted-foreground">Hot Zones</p>
                  <p className="text-3xl font-bold text-foreground">8</p>
                  <p className="text-xs text-accent mt-1">High traffic areas</p>
                </div>
              </div>
              
              <div className="space-y-2 pt-2">
                <p className="text-sm font-medium text-foreground">Key Features:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Customer traffic analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Heat map generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Queue management alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Occupancy monitoring
                  </li>
                </ul>
              </div>

              <Button className="w-full" variant="outline">
                View Store Sentry Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* System Health Overview */}
        <Card className="shadow-card border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-accent" />
              ESL System Health Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <Radio className="h-5 w-5 text-accent" />
                  <Badge variant="outline" className="border-accent text-accent">Excellent</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Network Signal</p>
                <p className="text-2xl font-bold text-foreground">98.5%</p>
                <p className="text-xs text-muted-foreground mt-1">Avg signal strength</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <Battery className="h-5 w-5 text-accent" />
                  <Badge variant="outline" className="border-accent text-accent">Good</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Battery Health</p>
                <p className="text-2xl font-bold text-foreground">94.2%</p>
                <p className="text-xs text-muted-foreground mt-1">Devices above 50%</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <Signal className="h-5 w-5 text-accent" />
                  <Badge variant="outline" className="border-accent text-accent">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Communication</p>
                <p className="text-2xl font-bold text-foreground">2.3s</p>
                <p className="text-xs text-muted-foreground mt-1">Avg response time</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  <Badge variant="outline" className="border-warning text-warning">Review</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Alerts</p>
                <p className="text-2xl font-bold text-foreground">23</p>
                <p className="text-xs text-muted-foreground mt-1">Require attention</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity & Alerts */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Critical Alerts */}
          <Card className="shadow-card border-warning/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-warning" />
                Priority Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { device: "ESL-A-342", issue: "Low battery (18%)", location: "Aisle 4 - Shelf B", time: "12 mins ago", severity: "warning" },
                { device: "ESL-B-127", issue: "Signal weak (2 bars)", location: "Aisle 8 - Shelf C", time: "45 mins ago", severity: "warning" },
                { device: "ESL-C-891", issue: "Price mismatch detected", location: "Aisle 2 - Shelf A", time: "2 hours ago", severity: "error" },
                { device: "ESL-D-456", issue: "Not responding", location: "Aisle 6 - Shelf D", time: "3 hours ago", severity: "error" },
              ].map((alert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:bg-muted/50"
                >
                  <AlertCircle className={`h-5 w-5 mt-0.5 ${alert.severity === 'error' ? 'text-destructive' : 'text-warning'}`} />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">{alert.device}</p>
                        <p className="text-sm text-muted-foreground">{alert.issue}</p>
                      </div>
                      <Badge variant={alert.severity === 'error' ? 'destructive' : 'outline'} className="ml-2">
                        {alert.severity === 'error' ? 'Critical' : 'Warning'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {alert.location}
                      <span>•</span>
                      <Clock className="h-3 w-3" />
                      {alert.time}
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Alerts
              </Button>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="shadow-card border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground">Update Success Rate</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">99.8%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: '99.8%' }} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Customer Engagement</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">87.3%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '87.3%' }} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground">Staff Response Time</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">4.2 min</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: '75%' }} />
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">System Uptime (30 days)</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: '99.95%' }} />
                  </div>
                  <span className="text-sm font-bold text-foreground">99.95%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
