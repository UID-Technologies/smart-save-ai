import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Megaphone, TrendingUp, Users, DollarSign, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FilterBar } from "@/components/esl/FilterBar";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const campaignPerformance = [
  { campaign: "Summer Sale", revenue: 89400, reach: 234000, uplift: 23.4, stores: 89 },
  { campaign: "Fresh Produce", revenue: 34200, reach: 127000, uplift: 18.7, stores: 127 },
  { campaign: "Weekend Flash", revenue: 28900, reach: 98000, uplift: 15.2, stores: 65 },
  { campaign: "Back to School", revenue: 67800, reach: 189000, uplift: 21.3, stores: 112 },
  { campaign: "Holiday Special", revenue: 94500, reach: 256000, uplift: 25.8, stores: 127 },
];

const monthlyTrend = [
  { month: "Jan", campaigns: 8, revenue: 156000, reach: 432000 },
  { month: "Feb", campaigns: 9, revenue: 178000, reach: 489000 },
  { month: "Mar", campaigns: 11, revenue: 203000, reach: 567000 },
  { month: "Apr", campaigns: 10, revenue: 189000, reach: 523000 },
  { month: "May", campaigns: 13, revenue: 234000, reach: 645000 },
  { month: "Jun", campaigns: 12, revenue: 223000, reach: 612000 },
];

const activeCampaigns = [
  { 
    name: "Summer Sale 2024", 
    status: "active", 
    stores: 89, 
    products: 1247, 
    revenue: 89400,
    reach: 234000,
    startDate: "Jun 1",
    endDate: "Jun 30",
    performance: "Excellent"
  },
  { 
    name: "Fresh Produce Promo", 
    status: "active", 
    stores: 127, 
    products: 456, 
    revenue: 34200,
    reach: 127000,
    startDate: "Jun 15",
    endDate: "Jun 22",
    performance: "Good"
  },
  { 
    name: "Weekend Flash Deals", 
    status: "scheduled", 
    stores: 65, 
    products: 892, 
    revenue: 0,
    reach: 0,
    startDate: "Jun 24",
    endDate: "Jun 26",
    performance: "Pending"
  },
];

export default function CampaignsDetails() {
  const navigate = useNavigate();

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
            <h1 className="text-xl font-bold text-foreground">Campaign Performance Analysis</h1>
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
                  <p className="text-sm text-muted-foreground">Total Campaign Revenue</p>
                  <p className="text-3xl font-bold text-accent">$314.8K</p>
                  <p className="text-sm text-accent mt-1">↑ 18.4% vs last period</p>
                </div>
                <DollarSign className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Campaigns</p>
                  <p className="text-3xl font-bold text-foreground">12</p>
                  <p className="text-sm text-primary mt-1">2 ending this week</p>
                </div>
                <Megaphone className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Customer Reach</p>
                  <p className="text-3xl font-bold text-foreground">847K</p>
                  <p className="text-sm text-muted-foreground mt-1">Unique shoppers</p>
                </div>
                <Users className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Sales Uplift</p>
                  <p className="text-3xl font-bold text-foreground">20.9%</p>
                  <p className="text-sm text-accent mt-1">↑ 3.2% vs average</p>
                </div>
                <TrendingUp className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Campaign Trend Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Campaign Performance Trend</CardTitle>
            <CardDescription>Monthly campaign metrics and revenue impact</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={monthlyTrend}>
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
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--accent))" strokeWidth={2} name="Revenue ($)" />
                <Line type="monotone" dataKey="reach" stroke="hsl(var(--primary))" strokeWidth={2} name="Customer Reach" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Campaign Comparison */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Campaign Revenue Comparison</CardTitle>
              <CardDescription>Performance across active and recent campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={campaignPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="campaign" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={100} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="revenue" fill="hsl(var(--accent))" name="Revenue ($)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Active Campaign Details */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Active Campaign Details
              </CardTitle>
              <CardDescription>Current and scheduled promotional activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activeCampaigns.map((campaign, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-border bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{campaign.name}</span>
                      <Badge variant={campaign.status === "active" ? "default" : "secondary"}>
                        {campaign.status === "active" ? "Live" : "Scheduled"}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Stores: </span>
                        <span className="font-medium text-foreground">{campaign.stores}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Products: </span>
                        <span className="font-medium text-foreground">{campaign.products}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Revenue: </span>
                        <span className="font-medium text-accent">${(campaign.revenue / 1000).toFixed(1)}K</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Period: </span>
                        <span className="font-medium text-foreground">{campaign.startDate} - {campaign.endDate}</span>
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
