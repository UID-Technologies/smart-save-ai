import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Package, CheckCircle2, AlertCircle, TrendingDown, BarChart3, Grid3x3 } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FilterBar } from "@/components/esl/FilterBar";
import { useNavigate } from "react-router-dom";

const planogramStatus = [
  { store: "London Central", compliance: 94, mismatches: 23, lastAudit: "2 hours ago" },
  { store: "Manchester", compliance: 91, mismatches: 34, lastAudit: "4 hours ago" },
  { store: "Birmingham", compliance: 88, mismatches: 47, lastAudit: "6 hours ago" },
  { store: "Edinburgh", compliance: 92, mismatches: 29, lastAudit: "3 hours ago" },
  { store: "Glasgow", compliance: 87, mismatches: 52, lastAudit: "5 hours ago" },
];

const categoryCompliance = [
  { category: "Beverages", compliance: 96, items: 2847 },
  { category: "Snacks", compliance: 93, items: 1923 },
  { category: "Dairy", compliance: 89, items: 1456 },
  { category: "Bakery", compliance: 91, items: 1234 },
  { category: "Produce", compliance: 85, items: 1678 },
];

export default function MerchandisingView() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">Merchandising Dashboard</h2>
          <p className="text-muted-foreground">Planogram compliance and product placement optimization</p>
        </div>
        <Button>
          <Grid3x3 className="h-4 w-4 mr-2" />
          Upload Planogram
        </Button>
      </div>

      <FilterBar />

      {/* Merchandising KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Avg. Compliance"
          value="90.4%"
          subtitle="Across all stores"
          icon={CheckCircle2}
          trend={{ value: "2.3%", positive: true }}
          variant="success"
          onClick={() => navigate("/esl/details/compliance")}
        />
        <StatCard
          title="Total Mismatches"
          value="185"
          subtitle="Requires correction"
          icon={AlertCircle}
          variant="warning"
          onClick={() => navigate("/esl/details/compliance")}
        />
        <StatCard
          title="Products Tracked"
          value="12,021"
          subtitle="ESL-enabled items"
          icon={Package}
          onClick={() => navigate("/esl/details/compliance")}
        />
        <StatCard
          title="ESL Deployment"
          value="10,155"
          subtitle="Active labels"
          icon={BarChart3}
          variant="success"
          onClick={() => navigate("/esl/details/compliance")}
        />
      </div>

      {/* Planogram Compliance by Store */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Grid3x3 className="h-5 w-5 text-accent" />
            Store Planogram Compliance
          </CardTitle>
          <CardDescription>Real-time compliance monitoring across locations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {planogramStatus.map((store, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg border bg-card"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{store.store}</h4>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Last audit: {store.lastAudit}</span>
                      <Badge variant={store.compliance >= 90 ? "default" : "secondary"}>
                        {store.compliance}%
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Compliance Rate</span>
                      <span className="font-medium text-foreground">{store.compliance}%</span>
                    </div>
                    <Progress value={store.compliance} className="h-2" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Mismatches Found</span>
                      <span className="font-medium text-warning">{store.mismatches} items</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => navigate("/esl/details/compliance")}>
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Category Compliance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-accent" />
              Category Compliance
            </CardTitle>
            <CardDescription>Compliance rates by product category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryCompliance.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{category.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{category.items} items</span>
                      <Badge variant={category.compliance >= 90 ? "default" : "secondary"}>
                        {category.compliance}%
                      </Badge>
                    </div>
                  </div>
                  <Progress value={category.compliance} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Insights</CardTitle>
            <CardDescription>Actions and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-warning/5 border border-warning/20">
                <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">Produce Section Attention</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    85% compliance in produce category. 15% of items not matching planogram across 8 stores.
                  </p>
                  <Button variant="outline" size="sm">
                    Generate Report
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/20">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">Beverages Performing Well</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    96% compliance maintained. Best performing category with consistent placement.
                  </p>
                  <Button variant="outline" size="sm">
                    View Best Practices
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border">
                <TrendingDown className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">Scheduled Audits</h4>
                  <p className="text-sm text-muted-foreground">
                    Next automated audit: <span className="font-medium text-foreground">Tomorrow at 6:00 AM</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
