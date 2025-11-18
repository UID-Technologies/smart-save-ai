import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Activity, AlertTriangle, Battery, Wifi, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FilterBar } from "@/components/esl/FilterBar";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const uptimeData = [
  { day: "Mon", uptime: 99.8, incidents: 2 },
  { day: "Tue", uptime: 99.9, incidents: 1 },
  { day: "Wed", uptime: 99.7, incidents: 3 },
  { day: "Thu", uptime: 99.9, incidents: 1 },
  { day: "Fri", uptime: 99.8, incidents: 2 },
  { day: "Sat", uptime: 100, incidents: 0 },
  { day: "Sun", uptime: 99.9, incidents: 1 },
];

const storeIssues = [
  { store: "London Central", total: 1420, offline: 3, lowBattery: 12, noComms: 2, faulty: 1, status: "warning" },
  { store: "Manchester", total: 1248, offline: 1, lowBattery: 8, noComms: 1, faulty: 0, status: "good" },
  { store: "Birmingham", total: 1156, offline: 5, lowBattery: 15, noComms: 3, faulty: 2, status: "critical" },
  { store: "Edinburgh", total: 1098, offline: 2, lowBattery: 10, noComms: 1, faulty: 1, status: "warning" },
  { store: "Glasgow", total: 1024, offline: 0, lowBattery: 6, noComms: 0, faulty: 0, status: "good" },
  { store: "Leeds", total: 982, offline: 4, lowBattery: 14, noComms: 2, faulty: 1, status: "warning" },
  { store: "Liverpool", total: 856, offline: 1, lowBattery: 7, noComms: 1, faulty: 0, status: "good" },
  { store: "Bristol", total: 798, offline: 2, lowBattery: 9, noComms: 1, faulty: 1, status: "warning" },
];

const criticalAlerts = [
  { id: 1, store: "Birmingham", issue: "5 Labels Offline", location: "Aisle 7", time: "5 mins ago", priority: "high" },
  { id: 2, store: "Birmingham", issue: "Communication Lost", location: "Gateway 3", time: "12 mins ago", priority: "high" },
  { id: 3, store: "London Central", issue: "3 Labels Offline", location: "Aisle 12", time: "18 mins ago", priority: "high" },
  { id: 4, store: "Leeds", issue: "4 Labels Offline", location: "Aisle 4", time: "23 mins ago", priority: "high" },
  { id: 5, store: "Edinburgh", issue: "Low Battery Alert", location: "Aisle 9", time: "35 mins ago", priority: "medium" },
  { id: 6, store: "London Central", issue: "Gateway Reboot Required", location: "Gateway 1", time: "42 mins ago", priority: "medium" },
];

export default function SystemHealthDetails() {
  const navigate = useNavigate();

  const getStatusBadge = (status: string) => {
    const config = {
      good: { variant: "secondary" as const, label: "Healthy" },
      warning: { variant: "warning" as const, label: "Warning" },
      critical: { variant: "destructive" as const, label: "Critical" },
    };
    const { variant, label } = config[status as keyof typeof config] || config.good;
    return <Badge variant={variant}>{label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-bold text-foreground">System Health & Monitoring</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-6">
        <FilterBar />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">System Uptime</p>
                  <p className="text-3xl font-bold text-accent">99.8%</p>
                  <p className="text-sm text-accent mt-1">Last 7 days</p>
                </div>
                <Activity className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-destructive/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Labels Offline</p>
                  <p className="text-3xl font-bold text-destructive">18</p>
                  <p className="text-sm text-muted-foreground mt-1">0.01% of total</p>
                </div>
                <Wifi className="h-10 w-10 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-warning/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Low Battery</p>
                  <p className="text-3xl font-bold text-warning">81</p>
                  <p className="text-sm text-muted-foreground mt-1">Replacement needed</p>
                </div>
                <Battery className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-warning/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Alerts</p>
                  <p className="text-3xl font-bold text-warning">12</p>
                  <p className="text-sm text-destructive mt-1">6 high priority</p>
                </div>
                <AlertTriangle className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Uptime Trend */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>System Uptime Trend</CardTitle>
            <CardDescription>Daily uptime percentage over the last week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={uptimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis domain={[99, 100]} stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="uptime" stroke="hsl(var(--accent))" strokeWidth={2} name="Uptime %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Critical Alerts */}
          <Card className="shadow-card border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Critical Alerts
              </CardTitle>
              <CardDescription>Active issues requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {criticalAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg border ${
                      alert.priority === "high"
                        ? "border-destructive/30 bg-destructive/5"
                        : "border-warning/30 bg-warning/5"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-foreground">{alert.issue}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {alert.store} - {alert.location}
                        </p>
                      </div>
                      <Badge variant={alert.priority === "high" ? "destructive" : "warning"}>
                        {alert.priority.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                      <Button size="sm" variant="outline">
                        Resolve
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Store Status */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Store System Status</CardTitle>
              <CardDescription>Label health by store location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {storeIssues.map((store, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-border bg-muted/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-foreground">{store.store}</span>
                      {getStatusBadge(store.status)}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Total Labels:</span>
                        <span className="font-medium text-foreground">{store.total}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Offline:</span>
                        <span className={`font-medium ${store.offline > 0 ? "text-destructive" : "text-accent"}`}>
                          {store.offline}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Low Battery:</span>
                        <span className={`font-medium ${store.lowBattery > 10 ? "text-warning" : "text-foreground"}`}>
                          {store.lowBattery}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">No Comms:</span>
                        <span className={`font-medium ${store.noComms > 0 ? "text-warning" : "text-accent"}`}>
                          {store.noComms}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
