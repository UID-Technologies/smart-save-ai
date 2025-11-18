import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, AlertCircle, Package, Grid3x3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FilterBar } from "@/components/esl/FilterBar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const complianceTrend = [
  { month: "Jan", compliance: 87.5, mismatches: 245 },
  { month: "Feb", compliance: 88.2, mismatches: 232 },
  { month: "Mar", compliance: 89.1, mismatches: 214 },
  { month: "Apr", compliance: 89.7, mismatches: 202 },
  { month: "May", compliance: 90.2, mismatches: 192 },
  { month: "Jun", compliance: 90.4, mismatches: 185 },
];

const storeDetails = [
  { store: "London Central", compliance: 94, mismatches: 23, items: 1856, lastAudit: "2 hours ago" },
  { store: "Manchester", compliance: 91, mismatches: 34, items: 1742, lastAudit: "4 hours ago" },
  { store: "Birmingham", compliance: 88, mismatches: 47, items: 1689, lastAudit: "6 hours ago" },
  { store: "Edinburgh", compliance: 92, mismatches: 29, items: 1798, lastAudit: "3 hours ago" },
  { store: "Glasgow", compliance: 87, mismatches: 52, items: 1623, lastAudit: "5 hours ago" },
  { store: "Leeds", compliance: 89, mismatches: 41, items: 1701, lastAudit: "4 hours ago" },
  { store: "Liverpool", compliance: 90, mismatches: 38, items: 1734, lastAudit: "3 hours ago" },
  { store: "Bristol", compliance: 93, mismatches: 27, items: 1812, lastAudit: "2 hours ago" },
];

const categoryCompliance = [
  { category: "Beverages", compliance: 96, items: 2847, mismatches: 114 },
  { category: "Snacks", compliance: 93, items: 1923, mismatches: 135 },
  { category: "Dairy", compliance: 89, items: 1456, mismatches: 160 },
  { category: "Bakery", compliance: 91, items: 1234, mismatches: 111 },
  { category: "Produce", compliance: 85, items: 1678, mismatches: 252 },
  { category: "Frozen", compliance: 92, items: 1345, mismatches: 108 },
];

export default function ComplianceDetails() {
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
            <h1 className="text-xl font-bold text-foreground">Planogram Compliance Analysis</h1>
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
                  <p className="text-sm text-muted-foreground">Overall Compliance</p>
                  <p className="text-3xl font-bold text-accent">90.4%</p>
                  <p className="text-sm text-accent mt-1">↑ 2.3% vs last month</p>
                </div>
                <CheckCircle2 className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-warning/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Mismatches</p>
                  <p className="text-3xl font-bold text-warning">185</p>
                  <p className="text-sm text-warning mt-1">↓ 7 vs yesterday</p>
                </div>
                <AlertCircle className="h-10 w-10 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Products Tracked</p>
                  <p className="text-3xl font-bold text-foreground">12,021</p>
                  <p className="text-sm text-muted-foreground mt-1">Across all categories</p>
                </div>
                <Package className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">ESL Deployment</p>
                  <p className="text-3xl font-bold text-foreground">10,155</p>
                  <p className="text-sm text-accent mt-1">84.5% coverage</p>
                </div>
                <Grid3x3 className="h-10 w-10 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Trend Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Compliance Trend Analysis</CardTitle>
            <CardDescription>6-month compliance rate and mismatch tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={complianceTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="compliance" stroke="hsl(var(--accent))" strokeWidth={2} name="Compliance %" />
                <Line yAxisId="right" type="monotone" dataKey="mismatches" stroke="hsl(var(--warning))" strokeWidth={2} name="Mismatches" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Store Breakdown */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Store Compliance Breakdown</CardTitle>
              <CardDescription>Detailed compliance metrics by location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {storeDetails.map((store, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-border bg-muted/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{store.store}</span>
                      <Badge variant={store.compliance >= 90 ? "default" : "secondary"}>
                        {store.compliance}%
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <Progress value={store.compliance} className="h-2" />
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Mismatches: {store.mismatches}</span>
                        <span className="text-muted-foreground">Items: {store.items}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Last audit: {store.lastAudit}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Category Performance */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Category Compliance</CardTitle>
              <CardDescription>Compliance rates by product category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={categoryCompliance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={100} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="compliance" fill="hsl(var(--accent))" name="Compliance %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
