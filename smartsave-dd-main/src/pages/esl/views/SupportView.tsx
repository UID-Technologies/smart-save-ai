import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, Battery, WifiOff, Monitor, Server, Activity, ExternalLink } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { FilterBar } from "@/components/esl/FilterBar";
import { Link, useNavigate } from "react-router-dom";

const systemHealthData = [
  { time: "22:30", failures: 12, cpu: 45, memory: 62 },
  { time: "23:00", failures: 18, cpu: 48, memory: 65 },
  { time: "23:30", failures: 23, cpu: 52, memory: 68 },
  { time: "00:00", failures: 15, cpu: 43, memory: 61 },
  { time: "00:30", failures: 9, cpu: 41, memory: 59 },
  { time: "01:00", failures: 7, cpu: 39, memory: 57 },
  { time: "01:30", failures: 11, cpu: 44, memory: 63 },
  { time: "02:00", failures: 14, cpu: 47, memory: 66 },
];

const alerts = [
  { id: 1, severity: "critical", message: "12 ESLs disconnected - Store #6467", time: "5 min ago", store: "Aberdeen Woodend" },
  { id: 2, severity: "warning", message: "Low battery warning - 359 displays below 20%", time: "15 min ago", store: "Multiple" },
  { id: 3, severity: "critical", message: "Communicator offline - Store #2025", time: "23 min ago", store: "Aldershot" },
  { id: 4, severity: "warning", message: "Azure CPU utilization above 80%", time: "35 min ago", store: "Infrastructure" },
  { id: 5, severity: "info", message: "Firmware update available for 2,456 labels", time: "1 hour ago", store: "System" },
];

export default function SupportView() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">IT Support Dashboard</h2>
        <p className="text-muted-foreground">System health monitoring and technical alerts</p>
      </div>

      <FilterBar />

      {/* Critical Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Missing Displays"
          value="2,780"
          subtitle="Requires attention"
          icon={WifiOff}
          variant="warning"
          onClick={() => navigate("/esl/details/system-health")}
        />
        <StatCard
          title="Low Battery"
          value="359"
          subtitle="Below 20% charge"
          icon={Battery}
          variant="warning"
          onClick={() => navigate("/esl/details/system-health")}
        />
        <StatCard
          title="Total Labels"
          value="126,305"
          subtitle="Across all stores"
          icon={Monitor}
          onClick={() => navigate("/esl/details/system-health")}
        />
        <StatCard
          title="System Uptime"
          value="99.8%"
          subtitle="Last 30 days"
          icon={Activity}
          variant="success"
          onClick={() => navigate("/esl/details/system-health")}
        />
      </div>

      {/* System Health Chart */}
      <Card>
        <CardHeader>
          <CardTitle>System Health Monitoring</CardTitle>
          <CardDescription>Image update failures and resource utilization (last 12 hours)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={systemHealthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Area type="monotone" dataKey="failures" stackId="1" stroke="hsl(var(--destructive))" fill="hsl(var(--destructive))" fillOpacity={0.6} name="Update Failures" />
              <Area type="monotone" dataKey="cpu" stackId="2" stroke="hsl(var(--warning))" fill="hsl(var(--warning))" fillOpacity={0.4} name="CPU %" />
              <Area type="monotone" dataKey="memory" stackId="3" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.3} name="Memory %" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Active Alerts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Active System Alerts
              </CardTitle>
              <CardDescription>Real-time notifications requiring attention</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/esl/details/system-health">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  {alert.severity === "critical" && (
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  )}
                  {alert.severity === "warning" && (
                    <AlertTriangle className="h-5 w-5 text-warning" />
                  )}
                  {alert.severity === "info" && (
                    <Activity className="h-5 w-5 text-accent" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant={alert.severity === "critical" ? "destructive" : "secondary"}>
                      {alert.severity.toUpperCase()}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{alert.time}</span>
                  </div>
                  <p className="font-medium text-foreground">{alert.message}</p>
                  <p className="text-sm text-muted-foreground mt-1">Location: {alert.store}</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => navigate("/esl/details/system-health")}>
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Infrastructure Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-accent" />
              Azure Infrastructure
            </CardTitle>
            <CardDescription>Cloud resource utilization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-card border">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">CPU Utilization</div>
                  <div className="text-2xl font-bold text-foreground mt-1">47%</div>
                </div>
                <Badge variant="secondary">Normal</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-card border">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Memory Usage</div>
                  <div className="text-2xl font-bold text-foreground mt-1">66%</div>
                </div>
                <Badge variant="secondary">Normal</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-card border">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Active Connections</div>
                  <div className="text-2xl font-bold text-foreground mt-1">3,847</div>
                </div>
                <Badge className="bg-success text-success-foreground">Healthy</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Communicator Status</CardTitle>
            <CardDescription>Gateway health across stores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-card border">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Online Communicators</div>
                  <div className="text-2xl font-bold text-foreground mt-1">122 / 127</div>
                </div>
                <Badge className="bg-success text-success-foreground">96.1%</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-card border">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Offline Communicators</div>
                  <div className="text-2xl font-bold text-destructive mt-1">5</div>
                </div>
                <Badge variant="destructive">Attention</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-card border">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Avg Response Time</div>
                  <div className="text-2xl font-bold text-foreground mt-1">127ms</div>
                </div>
                <Badge variant="secondary">Good</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
