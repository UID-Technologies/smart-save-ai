import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Calendar, TrendingUp, TrendingDown, DollarSign, AlertCircle, CheckCircle, Clock, Settings, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Operations Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
              Daily store operations and waste management
            </p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <a href="/admin" target="_blank" rel="noopener noreferrer">
                <Settings className="mr-2 h-4 w-4" />
                Admin Configuration
              </a>
            </Button>
            <Button className="bg-gradient-primary shadow-elevated">
              <Calendar className="mr-2 h-4 w-4" />
              Today's Report
            </Button>
          </div>
        </div>

        {/* Quick Access */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-card border-accent/30 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="font-semibold text-lg text-foreground">Waste Management</h3>
                  <p className="text-sm text-muted-foreground">Monitor and reduce perishable waste</p>
                  <Button onClick={() => navigate('/management/dashboard')} variant="default" size="sm" className="w-full">
                    Open Dashboard
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/30 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="font-semibold text-lg text-foreground">Smart Discounting</h3>
                  <p className="text-sm text-muted-foreground">Manage discounts and donations</p>
                  <Button onClick={() => navigate('/management/discounts')} variant="default" size="sm" className="w-full">
                    Manage Discounts
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/30 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="font-semibold text-lg text-foreground">Expiring Items</h3>
                  <p className="text-sm text-muted-foreground">Track items near expiration</p>
                  <Button onClick={() => navigate('/management/expiring-items')} variant="default" size="sm" className="w-full">
                    View Items
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Waste Prevented</p>
                  <p className="text-3xl font-bold text-foreground">$12.3K</p>
                  <p className="text-sm text-primary mt-1 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> 18% increase
                  </p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Items Discounted</p>
                  <p className="text-3xl font-bold text-foreground">156</p>
                  <p className="text-sm text-accent mt-1 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> Today
                  </p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Near Expiry</p>
                  <p className="text-3xl font-bold text-foreground">48</p>
                  <p className="text-sm text-muted-foreground mt-1">Within 3 days</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Operational Details */}
        <Card className="shadow-card border-accent/30 hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">Perishable Waste Management</CardTitle>
                  <p className="text-sm text-muted-foreground">Today's operational metrics</p>
                </div>
              </div>
              <Button onClick={() => navigate('/management/dashboard')} variant="outline" size="sm">
                View Full Dashboard
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-muted/30 p-4 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Waste This Week</p>
                  <Clock className="h-4 w-4 text-warning" />
                </div>
                <p className="text-2xl font-bold text-foreground">142 kg</p>
                <p className="text-xs text-warning mt-1 flex items-center gap-1">
                  <TrendingDown className="h-3 w-3" /> 23% from last week
                </p>
              </div>

              <div className="rounded-lg bg-muted/30 p-4 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Near Expiry</p>
                  <AlertCircle className="h-4 w-4 text-destructive" />
                </div>
                <p className="text-2xl font-bold text-foreground">48 items</p>
                <p className="text-xs text-muted-foreground mt-1">Within 3 days</p>
              </div>

              <div className="rounded-lg bg-muted/30 p-4 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Discounts Applied</p>
                  <DollarSign className="h-4 w-4 text-accent" />
                </div>
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-xs text-accent mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> Today
                </p>
              </div>

              <div className="rounded-lg bg-muted/30 p-4 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Donations</p>
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">89 units</p>
                <p className="text-xs text-muted-foreground mt-1">This week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
