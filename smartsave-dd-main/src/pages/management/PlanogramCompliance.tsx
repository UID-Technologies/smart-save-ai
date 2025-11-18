import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, CheckCircle, XCircle, AlertTriangle, Upload, Settings, Eye } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function PlanogramCompliance() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdminWorkspace = location.pathname.includes('/admin/');

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Planogram Compliance</h1>
            <p className="mt-2 text-muted-foreground">
              AI-powered shelf compliance monitoring and gap detection
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Configure Algorithm
            </Button>
            <Button className="bg-gradient-primary shadow-elevated">
              <Upload className="mr-2 h-4 w-4" />
              Upload Planogram
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="shadow-card border-accent/20 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate(isAdminWorkspace ? '/admin/planogram-compliance' : '/management/planogram-compliance')}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overall Compliance</p>
                  <p className="text-3xl font-bold text-foreground">87.3%</p>
                  <p className="text-sm text-accent mt-1">↑ 3.2% vs last week</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-warning/20 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate(isAdminWorkspace ? '/admin/planogram-compliance' : '/management/planogram-compliance')}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Gaps Detected</p>
                  <p className="text-3xl font-bold text-foreground">24</p>
                  <p className="text-sm text-warning mt-1">Requires attention</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-destructive/20 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate(isAdminWorkspace ? '/admin/planogram-compliance' : '/management/planogram-compliance')}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Misplacements</p>
                  <p className="text-3xl font-bold text-foreground">12</p>
                  <p className="text-sm text-destructive mt-1">Wrong locations</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <XCircle className="h-6 w-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20 cursor-pointer hover:shadow-elevated transition-shadow" onClick={() => navigate(isAdminWorkspace ? '/admin/camera-feeds' : '/management/details/camera-feeds')}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">AI Scans Today</p>
                  <p className="text-3xl font-bold text-foreground">156</p>
                  <p className="text-sm text-primary mt-1">Auto-monitoring</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-primary" />
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
                  <MapPin className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Location References</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bay bar codes implemented</li>
                  <li>• Shelf bar codes mapped</li>
                  <li>• Zone tracking active</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(isAdminWorkspace ? '/admin/planogram-compliance' : '/management/planogram-compliance')}>Configure Locations</Button>
              </div>

              <div className="rounded-lg border border-border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Planogram Platform</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Integration configured</li>
                  <li>• Facing data synced</li>
                  <li>• Real-time updates enabled</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(isAdminWorkspace ? '/admin/planogram-compliance' : '/management/planogram-compliance')}>View Integration</Button>
              </div>

              <div className="rounded-lg border border-border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">AI Camera System</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• HD cameras on HHT devices</li>
                  <li>• Shelf edge cameras active</li>
                  <li>• Auto-gap detection running</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(isAdminWorkspace ? '/admin/camera-feeds' : '/management/details/camera-feeds')}>Camera Settings</Button>
              </div>

              <div className="rounded-lg border border-border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Tablet App</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• HHT app deployed</li>
                  <li>• Real-time alerts enabled</li>
                  <li>• Task assignment active</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(isAdminWorkspace ? '/admin/planogram-compliance' : '/management/planogram-compliance')}>App Settings</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gap Detection Results */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              AI-Detected Gaps & Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { location: "Bay A-12, Shelf 3", issue: "Gap detected", items: "Cereal section", severity: "high", image: "Camera 1" },
                { location: "Bay B-08, Shelf 2", issue: "Wrong placement", items: "Snacks misplaced", severity: "medium", image: "Camera 3" },
                { location: "Bay C-15, Shelf 1", issue: "Low stock", items: "Bread section", severity: "high", image: "Camera 5" },
                { location: "Bay A-03, Shelf 4", issue: "Missing facings", items: "Dairy products", severity: "medium", image: "Camera 2" },
              ].map((gap, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{gap.location}</p>
                      <p className="text-sm text-muted-foreground">{gap.items}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={gap.severity === "high" ? "destructive" : "secondary"}>
                          {gap.issue}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{gap.image}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => navigate(isAdminWorkspace ? '/admin/camera-feeds' : '/management/details/camera-feeds')}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Image
                    </Button>
                    <Button size="sm" onClick={() => navigate(isAdminWorkspace ? '/admin/planogram-compliance' : '/management/planogram-compliance')}>
                      Assign Task
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
