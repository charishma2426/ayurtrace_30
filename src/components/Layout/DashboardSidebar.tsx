import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation, NavLink } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Home,
  MapPin,
  TestTube,
  Factory,
  Package,
  BarChart3,
  Settings,
  FileText,
  Users,
  Shield,
  Leaf,
  QrCode,
  Database,
  CheckCircle
} from 'lucide-react';

const navigationConfig = {
  farmer: [
    { title: 'Dashboard', url: '/dashboard', icon: Home },
    { title: 'Collection Events', url: '/dashboard/collection', icon: MapPin },
    { title: 'Harvest Records', url: '/dashboard/harvest', icon: Leaf },
    { title: 'My Batches', url: '/dashboard/batches', icon: Package },
    { title: 'Reports', url: '/dashboard/reports', icon: FileText },
  ],
  testing: [
    { title: 'Dashboard', url: '/dashboard', icon: Home },
    { title: 'Lab Tests', url: '/dashboard/tests', icon: TestTube },
    { title: 'Quality Reports', url: '/dashboard/quality', icon: CheckCircle },
    { title: 'Pending Samples', url: '/dashboard/samples', icon: Package },
    { title: 'Analytics', url: '/dashboard/analytics', icon: BarChart3 },
  ],
  manufacturer: [
    { title: 'Dashboard', url: '/dashboard', icon: Home },
    { title: 'Processing', url: '/dashboard/processing', icon: Factory },
    { title: 'Batch Management', url: '/dashboard/batches', icon: Package },
    { title: 'Quality Control', url: '/dashboard/quality', icon: CheckCircle },
    { title: 'Supply Chain', url: '/dashboard/supply-chain', icon: Database },
  ],
  packaging: [
    { title: 'Dashboard', url: '/dashboard', icon: Home },
    { title: 'QR Code Generation', url: '/dashboard/qr-codes', icon: QrCode },
    { title: 'Product Labels', url: '/dashboard/labels', icon: Package },
    { title: 'Batch Tracking', url: '/dashboard/tracking', icon: BarChart3 },
    { title: 'Inventory', url: '/dashboard/inventory', icon: Database },
  ],
  admin: [
    { title: 'Dashboard', url: '/dashboard', icon: Home },
    { title: 'User Management', url: '/dashboard/users', icon: Users },
    { title: 'System Analytics', url: '/dashboard/analytics', icon: BarChart3 },
    { title: 'Compliance', url: '/dashboard/compliance', icon: Shield },
    { title: 'Network Health', url: '/dashboard/network', icon: Database },
    { title: 'Settings', url: '/dashboard/settings', icon: Settings },
  ],
};

export const DashboardSidebar: React.FC = () => {
  const { user } = useAuth();
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();

  if (!user) return null;

  const navItems = navigationConfig[user.role] || [];
  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-lg font-semibold text-foreground">AyurTrace</h2>
                <p className="text-xs text-muted-foreground">Blockchain Traceability</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center space-x-2 ${
                          isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                        }`
                      }
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

        {user.role === 'admin' && (
          <SidebarGroup>
            <SidebarGroupLabel>System</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <NavLink to="/dashboard/blockchain" className="flex items-center space-x-2">
                      <Database className="h-4 w-4" />
                      {!collapsed && <span>Blockchain</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
};