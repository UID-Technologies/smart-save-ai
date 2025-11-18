import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Activity, AlertTriangle, ArrowLeft, Maximize2, RefreshCw } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function CameraFeeds() {
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
              onClick={() => navigate(isAdminWorkspace ? '/admin/planogram-compliance' : '/management/planogram-compliance')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Live Camera Feeds</h1>
              <p className="mt-2 text-muted-foreground">
                Real-time HD camera streams for shelf monitoring and compliance
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh All
            </Button>
            <Button className="bg-gradient-primary shadow-elevated">
              <Camera className="mr-2 h-4 w-4" />
              Capture Snapshot
            </Button>
          </div>
        </div>

        {/* Camera Status Overview */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Cameras</p>
                  <p className="text-3xl font-bold text-foreground">24</p>
                  <p className="text-sm text-accent mt-1">HD streaming</p>
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
                  <p className="text-sm text-muted-foreground">Alerts Today</p>
                  <p className="text-3xl font-bold text-foreground">18</p>
                  <p className="text-sm text-warning mt-1">Detected issues</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Shelf Edge</p>
                  <p className="text-3xl font-bold text-foreground">16</p>
                  <p className="text-sm text-primary mt-1">Fixed cameras</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">HHT Devices</p>
                  <p className="text-3xl font-bold text-foreground">8</p>
                  <p className="text-sm text-accent mt-1">Mobile cameras</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Camera Grid */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-accent" />
              Shelf Edge Camera Feeds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { id: "CAM-001", location: "Bay A-12, Shelf 3", zone: "Cereal", status: "online", fps: "30", lastAlert: "15 mins ago", alertType: "gap" },
                { id: "CAM-003", location: "Bay B-08, Shelf 2", zone: "Snacks", status: "online", fps: "30", lastAlert: "8 mins ago", alertType: "misplaced" },
                { id: "CAM-005", location: "Bay C-15, Shelf 1", zone: "Bread", status: "online", fps: "30", lastAlert: "3 mins ago", alertType: "stock" },
                { id: "CAM-002", location: "Bay A-03, Shelf 4", zone: "Dairy", status: "online", fps: "30", lastAlert: "28 mins ago", alertType: "facings" },
              ].map((camera, i) => (
                <Card key={i} className="border-border overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    {/* Simulated camera feed placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Live Feed: {camera.id}</p>
                      </div>
                    </div>
                    {/* Status indicators */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded">
                        <div className="h-2 w-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-xs text-white font-medium">LIVE</span>
                      </div>
                      <Badge className="bg-black/60 backdrop-blur-sm border-0">
                        {camera.fps} FPS
                      </Badge>
                    </div>
                    {/* Alert indicator */}
                    {camera.lastAlert && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="destructive" className="bg-destructive/90 backdrop-blur-sm">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Alert: {camera.alertType}
                        </Badge>
                      </div>
                    )}
                    {/* Controls overlay */}
                    <div className="absolute bottom-3 right-3">
                      <Button size="sm" variant="secondary" className="bg-black/60 backdrop-blur-sm hover:bg-black/80">
                        <Maximize2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">{camera.location}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {camera.zone}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant={camera.status === "online" ? "default" : "destructive"}>
                            {camera.status}
                          </Badge>
                          {camera.lastAlert && (
                            <span className="text-xs text-muted-foreground">
                              Last alert: {camera.lastAlert}
                            </span>
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* HHT Mobile Devices */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              HHT Mobile Device Cameras
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { id: "HHT-001", user: "Store Associate #1", currentLocation: "Bay D-05", status: "scanning", battery: "85%", lastScan: "2 mins ago" },
                { id: "HHT-002", user: "Store Associate #2", currentLocation: "Bay A-18", status: "idle", battery: "62%", lastScan: "12 mins ago" },
                { id: "HHT-003", user: "Store Manager", currentLocation: "Bay B-22", status: "scanning", battery: "94%", lastScan: "1 min ago" },
                { id: "HHT-004", user: "Store Associate #3", currentLocation: "Bay C-09", status: "idle", battery: "41%", lastScan: "25 mins ago" },
              ].map((device, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Camera className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <div>
                            <p className="font-medium text-foreground">{device.id}</p>
                            <p className="text-sm text-muted-foreground">{device.user}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={device.status === "scanning" ? "default" : "secondary"}>
                              {device.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Battery: {device.battery}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            Current: {device.currentLocation}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Last scan: {device.lastScan}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Track Device
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Captures */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Captures & Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { camera: "CAM-005", location: "Bay C-15, Shelf 1", issue: "Low stock detected", time: "3 mins ago", severity: "high" },
                { camera: "CAM-003", location: "Bay B-08, Shelf 2", issue: "Product misplacement", time: "8 mins ago", severity: "medium" },
                { camera: "CAM-001", location: "Bay A-12, Shelf 3", issue: "Gap detected", time: "15 mins ago", severity: "high" },
                { camera: "HHT-003", location: "Bay B-22", issue: "Manual scan completed", time: "1 min ago", severity: "info" },
                { camera: "CAM-002", location: "Bay A-03, Shelf 4", issue: "Missing facings", time: "28 mins ago", severity: "medium" },
              ].map((alert, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Camera className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{alert.issue}</p>
                          <p className="text-xs text-muted-foreground">
                            {alert.camera} • {alert.location} • {alert.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          alert.severity === "high" ? "destructive" :
                          alert.severity === "medium" ? "secondary" :
                          "default"
                        }>
                          {alert.severity}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View Capture
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
