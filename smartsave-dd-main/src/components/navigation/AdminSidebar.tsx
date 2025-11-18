import { NavLink, useLocation } from "react-router-dom";
import {
  Settings,
  Store,
  Users,
  Home,
  Radio,
  Shield,
  Eye,
  Grid3x3,
  Monitor,
  Video,
  Calendar,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import buceesLogo from "@/assets/bucees-logo.webp";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const homeNavItem = { title: "Home", url: "/admin", icon: Home };

const eslSolutionItems = [
  { title: "Overview", url: "/admin/esl-solution", icon: Radio },
  { title: "Retail Sentry", url: "/admin/retail-sentry", icon: Shield },
  { title: "Store Sentry", url: "/admin/store-sentry", icon: Eye },
];

const planogramItems = [
  { title: "Overview", url: "/admin/planogram-compliance", icon: Grid3x3 },
  { title: "Camera Feeds", url: "/admin/camera-feeds", icon: Video },
];

const advertisingItems = [
  { title: "Overview", url: "/admin/media-management", icon: Monitor },
  { title: "Display Management", url: "/admin/display-management", icon: Monitor },
  { title: "Content Scheduler", url: "/admin/content-scheduler", icon: Calendar },
];

const pricingItems = [
  { title: "Overview", url: "/admin/dynamic-pricing", icon: TrendingUp },
  { title: "Pricing Rules", url: "/admin/pricing-rules", icon: DollarSign },
];

const adminItems = [
  { title: "Staff", url: "/admin/staff", icon: Users },
  { title: "Stores", url: "/admin/stores", icon: Store },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const getNavCls = (active: boolean) =>
    active
      ? "bg-sidebar-accent text-sidebar-primary font-medium"
      : "hover:bg-sidebar-accent/50";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"}>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex flex-col items-center gap-2">
          <img src={buceesLogo} alt="BUC-EE'S" className="h-12 w-auto object-contain" />
          {!collapsed && (
            <div className="text-center">
              <span className="text-lg font-bold text-sidebar-foreground">Admin</span>
              <p className="text-xs text-muted-foreground">Configuration</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={homeNavItem.url}
                    end
                    className={getNavCls(isActive(homeNavItem.url))}
                  >
                    <homeNavItem.icon className="h-4 w-4" />
                    {!collapsed && <span>{homeNavItem.title}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>ESL Solution</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {eslSolutionItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={getNavCls(isActive(item.url))}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Planogram Compliance</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {planogramItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={getNavCls(isActive(item.url))}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>In-Store Advertising</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {advertisingItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={getNavCls(isActive(item.url))}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Dynamic Pricing</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pricingItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={getNavCls(isActive(item.url))}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={getNavCls(isActive(item.url))}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
