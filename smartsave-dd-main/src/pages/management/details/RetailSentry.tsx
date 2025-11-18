import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Radio, Battery, Signal, AlertCircle, CheckCircle, DollarSign, TrendingUp, MapPin, Clock, RefreshCw, Download, Settings, Eye, Zap } from "lucide-react";

export default function RetailSentry() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground flex items-center gap-3">
              <Shield className="h-10 w-10 text-primary" />
              Retail Sentry
            </h1>
            <p className="mt-2 text-muted-foreground">
              Price accuracy monitoring & compliance tracking system
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Configure
            </Button>
            <Button className="bg-gradient-primary">
              <RefreshCw className="mr-2 h-4 w-4" />
              Sync All ESLs
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="shadow-card border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total ESL Devices</p>
                  <p className="text-3xl font-bold text-foreground">2,847</p>
                  <p className="text-sm text-accent mt-1">↑ 98.5% online</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Radio className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Price Accuracy</p>
                  <p className="text-3xl font-bold text-foreground">99.7%</p>
                  <p className="text-sm text-accent mt-1">Target: 99.5%</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Updates Today</p>
                  <p className="text-3xl font-bold text-foreground">1,248</p>
                  <p className="text-sm text-accent mt-1">Avg 2.3s latency</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-warning/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Alerts</p>
                  <p className="text-3xl font-bold text-foreground">23</p>
                  <p className="text-sm text-warning mt-1">8 critical</p>
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
            <TabsTrigger value="devices">Device Status</TabsTrigger>
            <TabsTrigger value="pricing">Price Monitoring</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* System Health */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Signal className="h-5 w-5 text-accent" />
                    System Health Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Radio className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Network Coverage</span>
                      </div>
                      <Badge variant="outline" className="border-accent text-accent">Excellent</Badge>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-accent" style={{ width: '98.5%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground">98.5% of devices have strong signal</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Battery className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Battery Health</span>
                      </div>
                      <Badge variant="outline" className="border-accent text-accent">Good</Badge>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-accent" style={{ width: '94.2%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground">94.2% devices above 50% battery</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Update Success</span>
                      </div>
                      <Badge variant="outline" className="border-accent text-accent">Optimal</Badge>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-accent" style={{ width: '99.8%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground">99.8% successful price updates</p>
                  </div>
                </CardContent>
              </Card>

              {/* Price Accuracy Stats */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Price Accuracy Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border border-border bg-muted/30 p-3">
                      <p className="text-xs text-muted-foreground">Correct Prices</p>
                      <p className="text-2xl font-bold text-accent">2,839</p>
                      <p className="text-xs text-muted-foreground mt-1">99.7% of total</p>
                    </div>
                    <div className="rounded-lg border border-border bg-muted/30 p-3">
                      <p className="text-xs text-muted-foreground">Mismatches</p>
                      <p className="text-2xl font-bold text-warning">8</p>
                      <p className="text-xs text-muted-foreground mt-1">0.3% of total</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <p className="text-sm font-medium text-foreground">Recent Price Updates</p>
                    {[
                      { category: "Dairy", items: 145, time: "5 mins ago", status: "success" },
                      { category: "Produce", items: 89, time: "12 mins ago", status: "success" },
                      { category: "Bakery", items: 67, time: "25 mins ago", status: "success" },
                      { category: "Beverages", items: 112, time: "38 mins ago", status: "success" },
                    ].map((update, i) => (
                      <div key={i} className="flex items-center justify-between text-sm p-2 rounded hover:bg-muted/30">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          <span className="text-foreground">{update.category}</span>
                          <span className="text-muted-foreground">({update.items} items)</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{update.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Compliance Metrics */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Compliance & Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">POS Sync Rate</p>
                      <Badge variant="outline" className="border-accent text-accent">Live</Badge>
                    </div>
                    <p className="text-3xl font-bold text-foreground">100%</p>
                    <p className="text-xs text-muted-foreground mt-1">All ESLs synced with POS</p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">Audit Pass Rate</p>
                      <Badge variant="outline" className="border-accent text-accent">Excellent</Badge>
                    </div>
                    <p className="text-3xl font-bold text-foreground">97.2%</p>
                    <p className="text-xs text-muted-foreground mt-1">↑ 2.1% vs last week</p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">Avg Response Time</p>
                      <Badge variant="outline" className="border-accent text-accent">Fast</Badge>
                    </div>
                    <p className="text-3xl font-bold text-foreground">2.3s</p>
                    <p className="text-xs text-muted-foreground mt-1">Price update latency</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Device Status Tab */}
          <TabsContent value="devices" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>ESL Device Status Monitor</CardTitle>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh Status
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Device ID</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Signal</TableHead>
                      <TableHead>Battery</TableHead>
                      <TableHead>Last Update</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "ESL-A-001", location: "Aisle 1 - Shelf A", status: "online", signal: 95, battery: 87, update: "2 mins ago" },
                      { id: "ESL-A-002", location: "Aisle 1 - Shelf B", status: "online", signal: 92, battery: 91, update: "3 mins ago" },
                      { id: "ESL-A-003", location: "Aisle 1 - Shelf C", status: "online", signal: 88, battery: 76, update: "5 mins ago" },
                      { id: "ESL-B-045", location: "Aisle 2 - Shelf D", status: "warning", signal: 65, battery: 34, update: "12 mins ago" },
                      { id: "ESL-C-127", location: "Aisle 3 - Shelf B", status: "online", signal: 94, battery: 82, update: "1 min ago" },
                      { id: "ESL-D-234", location: "Aisle 4 - Shelf C", status: "error", signal: 12, battery: 18, update: "45 mins ago" },
                    ].map((device) => (
                      <TableRow key={device.id}>
                        <TableCell className="font-medium">{device.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            {device.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={device.status === 'online' ? 'outline' : device.status === 'warning' ? 'outline' : 'destructive'}
                            className={device.status === 'online' ? 'border-accent text-accent' : device.status === 'warning' ? 'border-warning text-warning' : ''}
                          >
                            {device.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Signal className={`h-4 w-4 ${device.signal > 80 ? 'text-accent' : device.signal > 50 ? 'text-warning' : 'text-destructive'}`} />
                            <span className="text-sm">{device.signal}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Battery className={`h-4 w-4 ${device.battery > 50 ? 'text-accent' : device.battery > 20 ? 'text-warning' : 'text-destructive'}`} />
                            <span className="text-sm">{device.battery}%</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{device.update}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Price Monitoring Tab */}
          <TabsContent value="pricing" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Real-Time Price Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>ESL Price</TableHead>
                      <TableHead>POS Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Verified</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { product: "Organic Milk 2L", esl: "$4.99", pos: "$4.99", status: "match", verified: "Just now" },
                      { product: "Whole Wheat Bread", esl: "$3.49", pos: "$3.49", status: "match", verified: "2 mins ago" },
                      { product: "Greek Yogurt 500g", esl: "$5.99", pos: "$5.99", status: "match", verified: "5 mins ago" },
                      { product: "Fresh Salmon Fillet", esl: "$12.99", pos: "$13.99", status: "mismatch", verified: "8 mins ago" },
                      { product: "Orange Juice 1L", esl: "$3.99", pos: "$3.99", status: "match", verified: "12 mins ago" },
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.product}</TableCell>
                        <TableCell className="font-mono">{item.esl}</TableCell>
                        <TableCell className="font-mono">{item.pos}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === 'match' ? 'outline' : 'destructive'} className={item.status === 'match' ? 'border-accent text-accent' : ''}>
                            {item.status === 'match' ? <CheckCircle className="h-3 w-3 mr-1" /> : <AlertCircle className="h-3 w-3 mr-1" />}
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.verified}
                          </div>
                        </TableCell>
                        <TableCell>
                          {item.status === 'mismatch' && (
                            <Button variant="outline" size="sm">
                              Sync Now
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Compliance Tracking & Audit Logs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-border bg-card p-4">
                    <p className="text-sm text-muted-foreground mb-2">Today's Audits</p>
                    <p className="text-3xl font-bold text-foreground">48</p>
                    <p className="text-sm text-accent mt-1">↑ 12% vs yesterday</p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <p className="text-sm text-muted-foreground mb-2">Pass Rate</p>
                    <p className="text-3xl font-bold text-foreground">97.2%</p>
                    <p className="text-sm text-accent mt-1">Above 95% target</p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <p className="text-sm text-muted-foreground mb-2">Issues Resolved</p>
                    <p className="text-3xl font-bold text-foreground">34</p>
                    <p className="text-sm text-accent mt-1">Avg 4.2 min resolution</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm font-medium text-foreground mb-3">Recent Audit Results</p>
                  <div className="space-y-2">
                    {[
                      { time: "14:32", auditor: "System Auto-Check", items: 248, passed: 245, failed: 3, status: "completed" },
                      { time: "12:15", auditor: "Manager Review", items: 156, passed: 156, failed: 0, status: "completed" },
                      { time: "09:45", auditor: "System Auto-Check", items: 312, passed: 304, failed: 8, status: "completed" },
                      { time: "08:00", auditor: "Opening Audit", items: 2847, passed: 2839, failed: 8, status: "completed" },
                    ].map((audit, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/30">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground">Time</p>
                            <p className="text-sm font-medium text-foreground">{audit.time}</p>
                          </div>
                          <div className="h-8 w-px bg-border" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{audit.auditor}</p>
                            <p className="text-xs text-muted-foreground">{audit.items} items checked</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm text-accent">{audit.passed} passed</p>
                            {audit.failed > 0 && <p className="text-sm text-destructive">{audit.failed} failed</p>}
                          </div>
                          <Badge variant="outline" className="border-accent text-accent">
                            {audit.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Active Alerts & Notifications</CardTitle>
                  <Button variant="outline" size="sm">Mark All as Read</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { severity: "critical", device: "ESL-D-456", issue: "Device not responding", location: "Aisle 6 - Shelf D", time: "3 hours ago", action: "Replace battery" },
                    { severity: "critical", device: "ESL-C-891", issue: "Price mismatch detected", location: "Aisle 2 - Shelf A", time: "2 hours ago", action: "Sync required" },
                    { severity: "warning", device: "ESL-A-342", issue: "Low battery (18%)", location: "Aisle 4 - Shelf B", time: "12 mins ago", action: "Schedule maintenance" },
                    { severity: "warning", device: "ESL-B-127", issue: "Weak signal (2 bars)", location: "Aisle 8 - Shelf C", time: "45 mins ago", action: "Check gateway" },
                    { severity: "info", device: "System", issue: "Scheduled maintenance in 2 days", location: "All devices", time: "1 hour ago", action: "Review schedule" },
                  ].map((alert, i) => (
                    <div key={i} className={`flex items-start gap-3 rounded-lg border p-4 ${alert.severity === 'critical' ? 'border-destructive/50 bg-destructive/5' : alert.severity === 'warning' ? 'border-warning/50 bg-warning/5' : 'border-border bg-muted/30'}`}>
                      <AlertCircle className={`h-5 w-5 mt-0.5 ${alert.severity === 'critical' ? 'text-destructive' : alert.severity === 'warning' ? 'text-warning' : 'text-muted-foreground'}`} />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-foreground">{alert.device}</p>
                            <p className="text-sm text-foreground mt-1">{alert.issue}</p>
                          </div>
                          <Badge variant={alert.severity === 'critical' ? 'destructive' : alert.severity === 'warning' ? 'outline' : 'secondary'} className={alert.severity === 'warning' ? 'border-warning text-warning' : ''}>
                            {alert.severity}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {alert.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {alert.time}
                          </div>
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm">{alert.action}</Button>
                          <Button variant="ghost" size="sm">Dismiss</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
