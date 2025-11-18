import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Monitor, Wifi, Settings, PlayCircle, Activity, ArrowLeft, RefreshCw } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function DisplayManagement() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdminWorkspace = location.pathname.includes('/admin/');

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(isAdminWorkspace ? '/admin/media-management' : '/management/media-management')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Display Management</h1>
              <p className="mt-2 text-muted-foreground">
                Monitor and control all connected LCD and ESL displays
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Status
            </Button>
            <Button className="bg-gradient-primary shadow-elevated">
              <PlayCircle className="mr-2 h-4 w-4" />
              Push Content
            </Button>
          </div>
        </div>

        {/* Real-time Status */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Online</p>
                  <p className="text-3xl font-bold text-foreground">46</p>
                  <p className="text-sm text-accent mt-1">95.8% uptime</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-warning/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Updating</p>
                  <p className="text-3xl font-bold text-foreground">2</p>
                  <p className="text-sm text-warning mt-1">In progress</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">LCD Displays</p>
                  <p className="text-3xl font-bold text-foreground">48</p>
                  <p className="text-sm text-primary mt-1">Large format</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">ESL Edge</p>
                  <p className="text-3xl font-bold text-foreground">124</p>
                  <p className="text-sm text-accent mt-1">Shelf displays</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Wifi className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Display Control Zones */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Display Zones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { zone: "Entrance Zone", displays: 8, type: "65\" LCD", online: 8, offline: 0 },
                { zone: "Grocery Aisles", displays: 32, type: "ESL Edge", online: 30, offline: 2 },
                { zone: "Checkout Area", displays: 12, type: "42\" LCD", online: 12, offline: 0 },
                { zone: "Produce Section", displays: 16, type: "55\" LCD", online: 15, offline: 1 },
              ].map((zone, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{zone.zone}</h3>
                        <p className="text-sm text-muted-foreground">{zone.displays} displays • {zone.type}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Online</span>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-accent" 
                              style={{ width: `${(zone.online / zone.displays) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-foreground">{zone.online}</span>
                        </div>
                      </div>
                      {zone.offline > 0 && (
                        <Badge variant="destructive">
                          {zone.offline} display{zone.offline > 1 ? 's' : ''} offline
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Individual Display Management */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>All Connected Displays</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "LCD-ENT-001", name: "Main Entrance Display", type: "65\" LCD", zone: "Entrance", ip: "192.168.1.101", status: "online", content: "Summer Sale Campaign", lastUpdate: "2 mins ago" },
                { id: "ESL-GRO-024", name: "Aisle 3 Shelf Display", type: "ESL Edge LCD", zone: "Grocery", ip: "192.168.1.124", status: "online", content: "Product Info Display", lastUpdate: "5 mins ago" },
                { id: "LCD-CHK-008", name: "Checkout Area Display", type: "42\" LCD", zone: "Checkout", ip: "192.168.1.108", status: "online", content: "Promotion Banner", lastUpdate: "1 min ago" },
                { id: "LCD-PRO-015", name: "Produce Section Display", type: "55\" LCD", zone: "Produce", ip: "192.168.1.115", status: "updating", content: "Loading content...", lastUpdate: "Just now" },
                { id: "ESL-GRO-056", name: "Aisle 7 Edge Display", type: "ESL Edge LCD", zone: "Grocery", ip: "192.168.1.156", status: "offline", content: "Connection lost", lastUpdate: "15 mins ago" },
              ].map((display, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`mt-1 h-3 w-3 rounded-full flex-shrink-0 ${
                          display.status === "online" ? "bg-accent animate-pulse" :
                          display.status === "updating" ? "bg-warning animate-pulse" :
                          "bg-destructive"
                        }`} />
                        <div className="space-y-2">
                          <div>
                            <p className="font-medium text-foreground">{display.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {display.id} • {display.type} • {display.zone}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>IP: {display.ip}</span>
                            <span>•</span>
                            <span>Updated: {display.lastUpdate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={display.status === "online" ? "default" : display.status === "updating" ? "secondary" : "destructive"}>
                              {display.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {display.content}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Settings className="mr-2 h-4 w-4" />
                          Configure
                        </Button>
                        <Button size="sm">
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Push Content
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Display Configuration */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="display-select">Select Display</Label>
                  <Input id="display-select" placeholder="Enter display ID or name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="content-select">Content to Push</Label>
                  <Input id="content-select" placeholder="Select from media library" className="mt-2" />
                </div>
                <Button className="w-full">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Deploy Content
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="zone-select">Select Zone</Label>
                  <Input id="zone-select" placeholder="Enter zone name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="schedule">Schedule</Label>
                  <Input id="schedule" type="datetime-local" className="mt-2" />
                </div>
                <Button variant="outline" className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Advanced Settings
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
