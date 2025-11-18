import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  variant?: "default" | "warning" | "success";
  onClick?: () => void;
}

export function StatCard({ title, value, subtitle, icon: Icon, trend, variant = "default", onClick }: StatCardProps) {
  const variantClasses = {
    default: "bg-card",
    warning: "bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20",
    success: "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20",
  };

  const iconVariantClasses = {
    default: "bg-accent/10 text-accent",
    warning: "bg-warning/10 text-warning",
    success: "bg-accent/10 text-accent",
  };

  return (
    <Card 
      className={`shadow-card transition-all hover:shadow-elevated ${variantClasses[variant]} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-card-foreground">{value}</p>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
            {trend && (
              <p className={`text-sm font-medium ${trend.positive ? "text-accent" : "text-destructive"}`}>
                {trend.positive ? "↑" : "↓"} {trend.value}
              </p>
            )}
          </div>
          <div className={`rounded-lg p-3 ${iconVariantClasses[variant]}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
