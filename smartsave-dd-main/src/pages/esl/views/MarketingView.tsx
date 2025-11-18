import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Megaphone, TrendingUp, Users, DollarSign, Calendar, Tag } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FilterBar } from "@/components/esl/FilterBar";
import { useNavigate } from "react-router-dom";

const activeCampaigns = [
  { 
    id: 1, 
    name: "Summer Sale 2024", 
    status: "active", 
    stores: 89, 
    products: 1247, 
    revenue: 89400,
    startDate: "Jun 1",
    endDate: "Jun 30"
  },
  { 
    id: 2, 
    name: "Fresh Produce Promo", 
    status: "active", 
    stores: 127, 
    products: 456, 
    revenue: 34200,
    startDate: "Jun 15",
    endDate: "Jun 22"
  },
  { 
    id: 3, 
    name: "Weekend Flash Deals", 
    status: "scheduled", 
    stores: 65, 
    products: 892, 
    revenue: 0,
    startDate: "Jun 24",
    endDate: "Jun 26"
  },
];

const promotionalInsights = [
  { category: "Beverages", uplift: 23.4, revenue: 45200 },
  { category: "Snacks", uplift: 18.7, revenue: 38900 },
  { category: "Dairy", uplift: 15.2, revenue: 29800 },
  { category: "Bakery", uplift: 12.8, revenue: 24600 },
];

export default function MarketingView() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">Marketing Dashboard</h2>
          <p className="text-muted-foreground">Campaign management and promotional performance</p>
        </div>
        <Button>
          <Megaphone className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      <FilterBar />

      {/* Marketing KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Campaign Revenue"
          value="$123.6K"
          subtitle="This month"
          icon={DollarSign}
          trend={{ value: "15.3%", positive: true }}
          variant="success"
          onClick={() => navigate("/esl/details/campaigns")}
        />
        <StatCard
          title="Active Campaigns"
          value="12"
          subtitle="Running promotions"
          icon={Megaphone}
          variant="success"
          onClick={() => navigate("/esl/details/campaigns")}
        />
        <StatCard
          title="Customer Reach"
          value="847K"
          subtitle="Unique shoppers"
          icon={Users}
          trend={{ value: "8.7%", positive: true }}
          onClick={() => navigate("/esl/details/campaigns")}
        />
        <StatCard
          title="Avg. Uplift"
          value="17.5%"
          subtitle="Sales increase"
          icon={TrendingUp}
          variant="success"
          onClick={() => navigate("/esl/details/campaigns")}
        />
      </div>

      {/* Active Campaigns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-accent" />
            Active & Scheduled Campaigns
          </CardTitle>
          <CardDescription>Manage promotional activities across stores</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-foreground text-lg">{campaign.name}</h4>
                    <Badge variant={campaign.status === "active" ? "default" : "secondary"}>
                      {campaign.status === "active" ? "Live" : "Scheduled"}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Stores:</span>
                      <span className="ml-2 font-medium text-foreground">{campaign.stores}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Products:</span>
                      <span className="ml-2 font-medium text-foreground">{campaign.products}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Revenue:</span>
                      <span className="ml-2 font-medium text-accent">${(campaign.revenue / 1000).toFixed(1)}K</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Period:</span>
                      <span className="ml-2 font-medium text-foreground">{campaign.startDate} - {campaign.endDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm" onClick={() => navigate("/esl/details/campaigns")}>View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Promotional Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-accent" />
              Category Performance
            </CardTitle>
            <CardDescription>Sales uplift by product category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {promotionalInsights.map((insight, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-card border">
                  <div className="flex-1">
                    <div className="font-medium text-foreground mb-1">{insight.category}</div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">
                        Uplift: <span className="text-accent font-semibold">+{insight.uplift}%</span>
                      </span>
                      <span className="text-muted-foreground">
                        Revenue: <span className="text-foreground font-semibold">${(insight.revenue / 1000).toFixed(1)}K</span>
                      </span>
                    </div>
                  </div>
                  <div className="w-24">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent rounded-full transition-all"
                        style={{ width: `${Math.min(insight.uplift * 4, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Campaign Scheduling</CardTitle>
            <CardDescription>Upcoming promotional activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span className="font-semibold text-foreground">This Week</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Weekend Flash Deals</span>
                    <span className="font-medium text-foreground">Jun 24-26</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Fresh Produce Promo End</span>
                    <span className="font-medium text-foreground">Jun 22</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-card border">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold text-foreground">Next Week</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Summer Sale Ends</span>
                    <span className="font-medium text-foreground">Jun 30</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">July 4th Specials</span>
                    <span className="font-medium text-foreground">Jul 1-5</span>
                  </li>
                </ul>
              </div>

              <Button variant="outline" className="w-full">
                View Full Calendar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
