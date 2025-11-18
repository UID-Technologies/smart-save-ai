import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingDown, TrendingUp } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

export default function RuleHistory() {
  const [searchParams] = useSearchParams();
  const productName = searchParams.get("product") || "Product";

  const historyData = [
    { date: "2024-01-15 14:00", price: "$4.99", discount: "0%", unitsSold: 12, revenue: "$59.88", action: "Initial Price" },
    { date: "2024-01-15 18:00", price: "$4.49", discount: "10%", unitsSold: 8, revenue: "$35.92", action: "Evening Discount" },
    { date: "2024-01-16 09:00", price: "$3.99", discount: "20%", unitsSold: 15, revenue: "$59.85", action: "Day 2 Adjustment" },
    { date: "2024-01-16 14:00", price: "$3.59", discount: "28%", unitsSold: 18, revenue: "$64.62", action: "Afternoon Boost" },
    { date: "2024-01-16 18:00", price: "$2.99", discount: "40%", unitsSold: 24, revenue: "$71.76", action: "Final Push" },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-center gap-4">
          <Link to="/management/details/pricing-rules">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Rule History</h1>
            <p className="mt-2 text-muted-foreground">
              {productName} - Complete pricing timeline and performance
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-3xl font-bold text-foreground">$292.03</p>
              <p className="text-sm text-accent mt-1 flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                +18% vs standard pricing
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Units Sold</p>
              <p className="text-3xl font-bold text-foreground">77</p>
              <p className="text-sm text-primary mt-1">5 price changes</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Waste Prevented</p>
              <p className="text-3xl font-bold text-foreground">100%</p>
              <p className="text-sm text-accent mt-1 flex items-center gap-1">
                <TrendingDown className="h-4 w-4" />
                0 units wasted
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Price Change Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {historyData.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-sm text-muted-foreground min-w-[140px]">
                      {item.date}
                    </div>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-lg font-bold text-foreground">{item.price}</p>
                        <p className="text-xs text-muted-foreground">{item.action}</p>
                      </div>
                      <Badge variant={i === 0 ? "secondary" : "default"}>
                        {item.discount}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 text-sm">
                    <div>
                      <span className="text-muted-foreground">Units: </span>
                      <span className="font-medium text-foreground">{item.unitsSold}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Revenue: </span>
                      <span className="font-medium text-accent">{item.revenue}</span>
                    </div>
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
