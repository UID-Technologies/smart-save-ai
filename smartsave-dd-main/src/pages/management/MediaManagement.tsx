import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monitor, Wifi, Image, Calendar, PlayCircle, Settings, Upload, Link as LinkIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function MediaManagement() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdminWorkspace = location.pathname.includes('/admin/');

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">In-Store Advertising</h1>
            <p className="mt-2 text-muted-foreground">
              Manage media displays, content scheduling, and ESL media connections
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <LinkIcon className="mr-2 h-4 w-4" />
              Connect CMS
            </Button>
            <Button className="bg-gradient-primary shadow-elevated">
              <Upload className="mr-2 h-4 w-4" />
              Upload Media
            </Button>
          </div>
        </div>

        {/* Display Status Overview */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="shadow-card border-accent/20 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate(isAdminWorkspace ? '/admin/display-management' : '/management/details/display-management')}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Displays</p>
                  <p className="text-3xl font-bold text-foreground">48</p>
                  <p className="text-sm text-accent mt-1">All systems online</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate(isAdminWorkspace ? '/admin/display-management' : '/management/details/display-management')}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">ESL Media Links</p>
                  <p className="text-3xl font-bold text-foreground">124</p>
                  <p className="text-sm text-primary mt-1">Connected displays</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <LinkIcon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate(isAdminWorkspace ? '/admin/content-scheduler' : '/management/details/content-scheduler')}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Campaigns</p>
                  <p className="text-3xl font-bold text-foreground">12</p>
                  <p className="text-sm text-accent mt-1">8 scheduled</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <PlayCircle className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate(isAdminWorkspace ? '/admin/media-management' : '/management/media-management')}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Media Library</p>
                  <p className="text-3xl font-bold text-foreground">248</p>
                  <p className="text-sm text-primary mt-1">Images & videos</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Image className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MVP Features */}
        <Card className="shadow-card border-accent/20">
          <CardHeader>
            <CardTitle>MVP Integration Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">CMS Integration</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• External CMS linked</li>
                  <li>• Content sync enabled</li>
                  <li>• API connection active</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(isAdminWorkspace ? '/admin/media-management' : '/management/media-management')}>Configure CMS</Button>
              </div>

              <div className="rounded-lg border border-border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Image className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Media Store</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cloud storage configured</li>
                  <li>• 248 assets stored</li>
                  <li>• Auto-optimization enabled</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(isAdminWorkspace ? '/admin/media-management' : '/management/media-management')}>Manage Library</Button>
              </div>

              <div className="rounded-lg border border-border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">LCD Displays</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 48 large format displays</li>
                  <li>• Wi-Fi & Dynamic Central</li>
                  <li>• Media player links active</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(isAdminWorkspace ? '/admin/display-management' : '/management/details/display-management')}>Display Settings</Button>
              </div>

              <div className="rounded-lg border border-border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">ESL Edge Displays</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 124 shelf edge LCDs</li>
                  <li>• Wi-Fi connectivity</li>
                  <li>• Real-time content push</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(isAdminWorkspace ? '/admin/display-management' : '/management/details/display-management')}>ESL Settings</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Scheduler */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Content Scheduler
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Summer Sale Campaign", displays: "12 LCD + 24 ESL", schedule: "Today 9:00 AM - 9:00 PM", status: "active" },
                { name: "New Product Launch", displays: "8 LCD", schedule: "Tomorrow 6:00 AM", status: "scheduled" },
                { name: "Weekend Special", displays: "All displays", schedule: "Sat-Sun 8:00 AM - 8:00 PM", status: "scheduled" },
                { name: "Clearance Event", displays: "24 ESL edge displays", schedule: "Starts in 2 hours", status: "pending" },
              ].map((content, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <PlayCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{content.name}</p>
                      <p className="text-sm text-muted-foreground">{content.displays}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={content.status === "active" ? "default" : "secondary"}>
                          {content.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{content.schedule}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => navigate(isAdminWorkspace ? '/admin/content-scheduler' : '/management/details/content-scheduler')}>
                      Edit
                    </Button>
                    <Button size="sm" onClick={() => navigate(isAdminWorkspace ? '/admin/content-scheduler' : '/management/details/content-scheduler')}>
                      Preview
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Display Management */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5 text-primary" />
              Connected Displays
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { name: "Main Entrance Display", type: "65\" LCD", zone: "Entrance", status: "online", content: "Summer Sale" },
                { name: "Aisle 3 Shelf Display", type: "ESL Edge LCD", zone: "Grocery", status: "online", content: "Product Info" },
                { name: "Checkout Area Display", type: "42\" LCD", zone: "Checkout", status: "online", content: "Promotions" },
                { name: "Produce Section Display", type: "55\" LCD", zone: "Produce", status: "updating", content: "Loading..." },
              ].map((display, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${display.status === "online" ? "bg-accent" : "bg-warning"}`} />
                    <div>
                      <p className="font-medium text-foreground">{display.name}</p>
                      <p className="text-xs text-muted-foreground">{display.type} • {display.zone}</p>
                      <p className="text-xs text-accent mt-1">Playing: {display.content}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => navigate(isAdminWorkspace ? '/admin/display-management' : '/management/details/display-management')}>
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
