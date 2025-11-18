import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, DollarSign, Target, Award, MapPin, Building2, ExternalLink } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { FilterBar } from "@/components/esl/FilterBar";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const revenueData = [
  { month: "Jan", revenue: 245000, savings: 18000 },
  { month: "Feb", revenue: 268000, savings: 21000 },
  { month: "Mar", revenue: 295000, savings: 24500 },
  { month: "Apr", revenue: 312000, savings: 27800 },
  { month: "May", revenue: 341000, savings: 31200 },
  { month: "Jun", revenue: 368000, savings: 35400 },
];

const storePerformance = [
  { store: "London Central", revenue: 89000, efficiency: 94 },
  { store: "Manchester", revenue: 76000, efficiency: 91 },
  { store: "Birmingham", revenue: 71000, efficiency: 88 },
  { store: "Edinburgh", revenue: 68000, efficiency: 92 },
  { store: "Glasgow", revenue: 64000, efficiency: 87 },
];

export default function SeniorManagementView() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">Executive Overview</h2>
        <p className="text-muted-foreground">Strategic insights and performance metrics</p>
      </div>

      <FilterBar />

      {/* Key Executive Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Additional Revenue"
          value="$368K"
          subtitle="This month"
          icon={DollarSign}
          trend={{ value: "12.4%", positive: true }}
          variant="success"
          onClick={() => navigate("/esl/details/revenue")}
        />
        <StatCard
          title="Cost Savings"
          value="$35.4K"
          subtitle="Operational efficiency"
          icon={Target}
          trend={{ value: "8.2%", positive: true }}
          variant="success"
          onClick={() => navigate("/esl/details/revenue")}
        />
        <StatCard
          title="System Uptime"
          value="99.8%"
          subtitle="Across all stores"
          icon={Award}
          variant="success"
          onClick={() => navigate("/esl/details/system-health")}
        />
        <StatCard
          title="Active Stores"
          value="127"
          subtitle="ESL-enabled locations"
          icon={Building2}
          onClick={() => navigate("/esl/details/revenue")}
        />
      </div>

      {/* Revenue & Savings Trend */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Revenue Impact & Savings Trend</CardTitle>
              <CardDescription>Additional revenue generated through dynamic pricing (6-month view)</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/esl/details/revenue">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Line type="monotone" dataKey="revenue" stroke="hsl(var(--accent))" strokeWidth={2} name="Additional Revenue" />
              <Line type="monotone" dataKey="savings" stroke="hsl(var(--primary))" strokeWidth={2} name="Cost Savings" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Store Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Stores</CardTitle>
            <CardDescription>Revenue and operational efficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={storePerformance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis type="category" dataKey="store" stroke="hsl(var(--muted-foreground))" width={120} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Bar dataKey="revenue" fill="hsl(var(--accent))" name="Revenue ($K)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Strategic Initiatives */}
        <Card>
          <CardHeader>
            <CardTitle>Strategic Initiatives Impact</CardTitle>
            <CardDescription>Key program outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/20">
                <TrendingUp className="h-5 w-5 text-accent mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">Dynamic Pricing ROI</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    342% return on ESL investment through intelligent price optimization
                  </p>
                  <div className="text-2xl font-bold text-accent">342%</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">Waste Reduction Value</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Operational savings from waste prevention programs
                  </p>
                  <div className="text-2xl font-bold text-primary">$127K</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-success/5 border border-success/20">
                <Award className="h-5 w-5 text-success mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">Customer Satisfaction</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Price accuracy and real-time updates improving experience
                  </p>
                  <div className="text-2xl font-bold text-success">94.3%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Geographic Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            Geographic Distribution
          </CardTitle>
          <CardDescription>ESL deployment across regions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-card border">
              <div className="text-sm font-medium text-muted-foreground mb-1">England</div>
              <div className="text-2xl font-bold text-foreground mb-2">89 Stores</div>
              <div className="text-sm text-muted-foreground">126,305 Labels • 11 Screens/Store</div>
            </div>
            <div className="p-4 rounded-lg bg-card border">
              <div className="text-sm font-medium text-muted-foreground mb-1">Scotland</div>
              <div className="text-2xl font-bold text-foreground mb-2">24 Stores</div>
              <div className="text-sm text-muted-foreground">34,896 Labels • 11 Screens/Store</div>
            </div>
            <div className="p-4 rounded-lg bg-card border">
              <div className="text-sm font-medium text-muted-foreground mb-1">Wales</div>
              <div className="text-2xl font-bold text-foreground mb-2">14 Stores</div>
              <div className="text-sm text-muted-foreground">20,384 Labels • 11 Screens/Store</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
