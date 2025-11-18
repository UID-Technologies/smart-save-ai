import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Users } from "lucide-react";
import SeniorManagementView from "./views/SeniorManagementView";
import SupportView from "./views/SupportView";
import MarketingView from "./views/MarketingView";
import MerchandisingView from "./views/MerchandisingView";
import StoreOpsView from "./views/StoreOpsView";
import displayDataLogo from "@/assets/displaydata-logo.png";
import smartSaveLogo from "@/assets/smartsave-logo.png";

const roleNames: Record<string, string> = {
  "senior-management": "Senior Management",
  "support": "IT Support",
  "marketing": "Marketing Team",
  "merchandising": "Merchandising Team",
  "store-ops": "Store Operations",
};

export default function ESLDashboard() {
  const [role, setRole] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedRole = localStorage.getItem("eslRole");
    if (!savedRole) {
      navigate("/esl/login");
    } else {
      setRole(savedRole);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("eslRole");
    navigate("/esl/login");
  };

  const handleSwitchRole = () => {
    navigate("/esl/login");
  };

  if (!role) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={displayDataLogo} alt="DisplayData" className="h-6 w-auto object-contain" />
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-bold text-foreground">ESL Management</h1>
            <div className="ml-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium flex items-center gap-2">
              <Users className="h-3.5 w-3.5" />
              {roleNames[role]}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={smartSaveLogo} alt="SmartSave" className="h-5 w-auto object-contain" />
            <Button variant="outline" size="sm" onClick={handleSwitchRole}>
              Switch Role
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {role === "senior-management" && <SeniorManagementView />}
        {role === "support" && <SupportView />}
        {role === "marketing" && <MarketingView />}
        {role === "merchandising" && <MerchandisingView />}
        {role === "store-ops" && <StoreOpsView />}
      </main>
    </div>
  );
}
