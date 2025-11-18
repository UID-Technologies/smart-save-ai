import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Users, TrendingUp, Wrench, Tag, Store as StoreIcon, Megaphone } from "lucide-react";
import displayDataLogo from "@/assets/displaydata-logo.png";
import smartSaveLogo from "@/assets/smartsave-logo.png";

const roles = [
  { 
    id: "senior-management", 
    name: "Senior Management", 
    description: "Executive dashboard with revenue and strategic metrics",
    icon: TrendingUp,
    color: "text-accent"
  },
  { 
    id: "support", 
    name: "IT Support", 
    description: "System health, alerts, and technical monitoring",
    icon: Wrench,
    color: "text-warning"
  },
  { 
    id: "marketing", 
    name: "Marketing Team", 
    description: "Campaign management and promotional insights",
    icon: Megaphone,
    color: "text-primary"
  },
  { 
    id: "merchandising", 
    name: "Merchandising Team", 
    description: "Planogram compliance and product placement",
    icon: Tag,
    color: "text-success"
  },
  { 
    id: "store-ops", 
    name: "Store Operations", 
    description: "Daily operations and store management",
    icon: StoreIcon,
    color: "text-info"
  },
];

export default function ESLLogin() {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (selectedRole) {
      localStorage.setItem("eslRole", selectedRole);
      navigate("/esl/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-elevated">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src={smartSaveLogo} alt="SmartSave" className="h-8 w-auto object-contain" />
            <img src={displayDataLogo} alt="DisplayData" className="h-7 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-8 w-8 text-accent" />
            <CardTitle className="text-3xl font-bold">ESL Management Dashboard</CardTitle>
          </div>
          <CardDescription className="text-base">
            Select your role to access the AI-enabled Intelligent Shelf Label dashboard
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="role" className="text-base font-medium">Select Your Role</Label>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger id="role" className="h-12">
                <SelectValue placeholder="Choose your access level" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role.id} value={role.id}>
                    <div className="flex items-center gap-2">
                      <role.icon className={`h-4 w-4 ${role.color}`} />
                      <span>{role.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedRole && (
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="pt-6">
                {(() => {
                  const role = roles.find(r => r.id === selectedRole);
                  if (!role) return null;
                  const Icon = role.icon;
                  return (
                    <div className="flex items-start gap-3">
                      <Icon className={`h-5 w-5 mt-0.5 ${role.color}`} />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{role.name}</h4>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </div>
                    </div>
                  );
                })()}
              </CardContent>
            </Card>
          )}

          <Button 
            onClick={handleLogin} 
            disabled={!selectedRole}
            className="w-full h-12 text-base"
            size="lg"
          >
            Access Dashboard
          </Button>

          <div className="pt-4 border-t">
            <p className="text-xs text-center text-muted-foreground">
              This is a demonstration dashboard with mock authentication for showcasing role-based access control
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
