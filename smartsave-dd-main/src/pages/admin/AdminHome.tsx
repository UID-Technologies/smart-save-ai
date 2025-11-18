import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Radio, Shield, Eye, Grid3x3, Monitor, TrendingUp, Settings, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Admin Configuration</h1>
            <p className="mt-2 text-muted-foreground">
              Configure and manage all retail solutions
            </p>
          </div>
          <Button asChild variant="outline">
            <a href="/management" target="_blank" rel="noopener noreferrer">
              <ArrowRight className="mr-2 h-4 w-4" />
              Go to Operations
            </a>
          </Button>
        </div>

        {/* Solution Configuration Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* ESL Solution */}
          <Card className="shadow-card border-primary/30 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Radio className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">ESL Solution</CardTitle>
                  <p className="text-sm text-muted-foreground">Electronic shelf label configuration</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Configure ESL devices, manage system health, and monitor battery levels across all stores.
              </p>
              <div className="flex gap-2">
                <Button onClick={() => navigate('/admin/esl-solution')} size="sm" variant="default">
                  Overview
                </Button>
                <Button onClick={() => navigate('/admin/retail-sentry')} size="sm" variant="outline">
                  <Shield className="mr-2 h-4 w-4" />
                  Retail Sentry
                </Button>
                <Button onClick={() => navigate('/admin/store-sentry')} size="sm" variant="outline">
                  <Eye className="mr-2 h-4 w-4" />
                  Store Sentry
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Planogram Compliance */}
          <Card className="shadow-card border-accent/30 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Grid3x3 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">Planogram Compliance</CardTitle>
                  <p className="text-sm text-muted-foreground">Camera & shelf monitoring setup</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Set up cameras, configure detection zones, and manage planogram compliance rules.
              </p>
              <div className="flex gap-2">
                <Button onClick={() => navigate('/admin/planogram-compliance')} size="sm" variant="default">
                  Overview
                </Button>
                <Button onClick={() => navigate('/admin/camera-feeds')} size="sm" variant="outline">
                  Camera Feeds
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* In-Store Advertising */}
          <Card className="shadow-card border-primary/30 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">In-Store Advertising</CardTitle>
                  <p className="text-sm text-muted-foreground">Digital signage & content management</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Configure displays, schedule content, and manage advertising campaigns across all screens.
              </p>
              <div className="flex gap-2">
                <Button onClick={() => navigate('/admin/media-management')} size="sm" variant="default">
                  Overview
                </Button>
                <Button onClick={() => navigate('/admin/display-management')} size="sm" variant="outline">
                  Displays
                </Button>
                <Button onClick={() => navigate('/admin/content-scheduler')} size="sm" variant="outline">
                  Scheduler
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Dynamic Pricing */}
          <Card className="shadow-card border-accent/30 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">Dynamic Pricing</CardTitle>
                  <p className="text-sm text-muted-foreground">Pricing automation & rules</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Configure pricing rules, set automation triggers, and manage discount strategies.
              </p>
              <div className="flex gap-2">
                <Button onClick={() => navigate('/admin/dynamic-pricing')} size="sm" variant="default">
                  Overview
                </Button>
                <Button onClick={() => navigate('/admin/pricing-rules')} size="sm" variant="outline">
                  Pricing Rules
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Administration */}
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-muted/50 flex items-center justify-center">
                <Settings className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <CardTitle className="text-xl">System Administration</CardTitle>
                <p className="text-sm text-muted-foreground">Manage users, stores, and global settings</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Button onClick={() => navigate('/admin/staff')} size="sm" variant="outline">
                Staff Management
              </Button>
              <Button onClick={() => navigate('/admin/stores')} size="sm" variant="outline">
                Store Configuration
              </Button>
              <Button onClick={() => navigate('/admin/settings')} size="sm" variant="outline">
                System Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
