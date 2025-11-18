import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Marketplace from "./pages/Marketplace";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import Benefits from "./pages/Benefits";
import About from "./pages/About";
import { ManagementLayout } from "./components/layouts/ManagementLayout";
import { AdminLayout } from "./components/layouts/AdminLayout";
import AdminHome from "./pages/admin/AdminHome";
import Home from "./pages/management/Home";
import Dashboard from "./pages/management/Dashboard";
import Analytics from "./pages/management/Analytics";
import Inventory from "./pages/management/Inventory";
import ExpiringItems from "./pages/management/ExpiringItems";
import WasteTracking from "./pages/management/WasteTracking";
import Discounts from "./pages/management/Discounts";
import Donations from "./pages/management/Donations";
import LowSalability from "./pages/management/LowSalability";
import PlanogramCompliance from "./pages/management/PlanogramCompliance";
import MediaManagement from "./pages/management/MediaManagement";
import DynamicPricing from "./pages/management/DynamicPricing";
import ESLLogin from "./pages/esl/ESLLogin";
import ESLDashboard from "./pages/esl/ESLDashboard";
import RevenueDetails from "./pages/esl/details/RevenueDetails";
import SystemHealthDetails from "./pages/esl/details/SystemHealthDetails";
import CampaignsDetails from "./pages/esl/details/CampaignsDetails";
import ComplianceDetails from "./pages/esl/details/ComplianceDetails";
import StoreOpsDetails from "./pages/esl/details/StoreOpsDetails";
import DisplayManagement from "./pages/management/details/DisplayManagement";
import ContentScheduler from "./pages/management/details/ContentScheduler";
import PricingRules from "./pages/management/details/PricingRules";
import AlgorithmSettings from "./pages/management/details/AlgorithmSettings";
import RuleHistory from "./pages/management/details/RuleHistory";
import FreshnessAnalysis from "./pages/management/details/FreshnessAnalysis";
import CameraFeeds from "./pages/management/details/CameraFeeds";
import ESLSolution from "./pages/management/ESLSolution";
import RetailSentry from "./pages/management/details/RetailSentry";
import StoreSentry from "./pages/management/details/StoreSentry";
import FreshnessAnalysisDemo from "./pages/demo/FreshnessAnalysisDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route path="/landing" element={<Index />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/features" element={<Features />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/about" element={<About />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout><AdminHome /></AdminLayout>} />
          <Route path="/admin/esl-solution" element={<AdminLayout><ESLSolution /></AdminLayout>} />
          <Route path="/admin/retail-sentry" element={<AdminLayout><RetailSentry /></AdminLayout>} />
          <Route path="/admin/store-sentry" element={<AdminLayout><StoreSentry /></AdminLayout>} />
          <Route path="/admin/planogram-compliance" element={<AdminLayout><PlanogramCompliance /></AdminLayout>} />
          <Route path="/admin/camera-feeds" element={<AdminLayout><CameraFeeds /></AdminLayout>} />
          <Route path="/admin/media-management" element={<AdminLayout><MediaManagement /></AdminLayout>} />
          <Route path="/admin/display-management" element={<AdminLayout><DisplayManagement /></AdminLayout>} />
          <Route path="/admin/content-scheduler" element={<AdminLayout><ContentScheduler /></AdminLayout>} />
          <Route path="/admin/dynamic-pricing" element={<AdminLayout><DynamicPricing /></AdminLayout>} />
          <Route path="/admin/pricing-rules" element={<AdminLayout><PricingRules /></AdminLayout>} />
          <Route path="/admin/algorithm-settings" element={<AdminLayout><AlgorithmSettings /></AdminLayout>} />
          <Route path="/admin/freshness-analysis" element={<AdminLayout><FreshnessAnalysis /></AdminLayout>} />
          <Route path="/esl/login" element={<ESLLogin />} />
          <Route path="/esl/dashboard" element={<ESLDashboard />} />
          <Route path="/esl/details/revenue" element={<RevenueDetails />} />
          <Route path="/esl/details/system-health" element={<SystemHealthDetails />} />
          <Route path="/esl/details/campaigns" element={<CampaignsDetails />} />
          <Route path="/esl/details/compliance" element={<ComplianceDetails />} />
          <Route path="/esl/details/store-operations" element={<StoreOpsDetails />} />
          <Route path="/management" element={<ManagementLayout><Home /></ManagementLayout>} />
          <Route path="/management/dashboard" element={<ManagementLayout><Dashboard /></ManagementLayout>} />
          <Route path="/management/analytics" element={<ManagementLayout><Analytics /></ManagementLayout>} />
          <Route path="/management/inventory" element={<ManagementLayout><Inventory /></ManagementLayout>} />
          <Route path="/management/expiring-items" element={<ManagementLayout><ExpiringItems /></ManagementLayout>} />
          <Route path="/management/waste-tracking" element={<ManagementLayout><WasteTracking /></ManagementLayout>} />
          <Route path="/management/discounts" element={<ManagementLayout><Discounts /></ManagementLayout>} />
          <Route path="/management/donations" element={<ManagementLayout><Donations /></ManagementLayout>} />
          <Route path="/management/low-salability" element={<ManagementLayout><LowSalability /></ManagementLayout>} />
          <Route path="/management/dynamic-pricing" element={<ManagementLayout><DynamicPricing /></ManagementLayout>} />
          <Route path="/management/details/pricing-rules" element={<ManagementLayout><PricingRules /></ManagementLayout>} />
          <Route path="/management/details/algorithm-settings" element={<ManagementLayout><AlgorithmSettings /></ManagementLayout>} />
          <Route path="/management/details/rule-history" element={<ManagementLayout><RuleHistory /></ManagementLayout>} />
          
          {/* Demo Routes */}
          <Route path="/demo/freshness-analysis" element={<FreshnessAnalysisDemo />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
