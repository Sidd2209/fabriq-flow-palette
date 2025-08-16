import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Palette, 
  Package, 
  ShoppingCart, 
  Truck, 
  DollarSign, 
  BarChart3, 
  Home,
  ChevronRight
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

const navigationItems = [
  { name: 'Home', path: '/', icon: Home, color: 'departments-management' },
  { name: 'Design', path: '/design', icon: Palette, color: 'departments-design' },
  { name: 'Sampling', path: '/sampling', icon: Package, color: 'departments-sampling' },
  { name: 'Merchandising', path: '/merchandising', icon: ShoppingCart, color: 'departments-merchandising' },
  { name: 'Logistics', path: '/logistics', icon: Truck, color: 'departments-logistics' },
  { name: 'Procurement', path: '/procurement', icon: DollarSign, color: 'departments-procurement' },
  { name: 'Management', path: '/management', icon: BarChart3, color: 'departments-management' },
];

function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Sidebar className={`${isCollapsed ? 'w-16' : 'w-72'} transition-all duration-300`} collapsible="icon">
      <SidebarContent className="bg-card/95 backdrop-blur-md border-r border-border/50">
        {/* Logo Section */}
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-bold text-lg">PLM</span>
            </div>
            {!isCollapsed && (
              <div className="animate-fade-in">
                <h2 className="font-bold text-lg text-foreground">Apparel PLM</h2>
                <p className="text-xs text-muted-foreground">Product Lifecycle Management</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="px-4 py-6">
          <SidebarGroupLabel className="text-muted-foreground font-semibold mb-4">
            {!isCollapsed ? 'Departments' : ''}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = isActivePath(item.path);
                
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.path}
                        className={`
                          group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300
                          ${isActive 
                            ? 'bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 shadow-md' 
                            : 'hover:bg-secondary/60 hover:shadow-sm'
                          }
                        `}
                      >
                        <div 
                          className={`
                            p-2 rounded-lg transition-all duration-300 group-hover:scale-110
                            ${isActive 
                              ? 'shadow-md' 
                              : 'group-hover:shadow-sm'
                            }
                          `}
                          style={{ 
                            backgroundColor: isActive 
                              ? `hsl(var(--${item.color}) / 0.15)` 
                              : `hsl(var(--${item.color}) / 0.1)`
                          }}
                        >
                          <Icon 
                            className="w-5 h-5 transition-colors duration-300" 
                            style={{ 
                              color: isActive 
                                ? `hsl(var(--${item.color}))` 
                                : `hsl(var(--${item.color}) / 0.7)`
                            }}
                          />
                        </div>
                        
                        {!isCollapsed && (
                          <div className="flex-1 flex items-center justify-between">
                            <span className={`font-medium transition-colors duration-300 ${
                              isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                            }`}>
                              {item.name}
                            </span>
                            {isActive && (
                              <ChevronRight className="w-4 h-4 text-primary animate-pulse" />
                            )}
                          </div>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        <div className="mt-auto p-4 border-t border-border/50">
          {!isCollapsed && (
            <div className="animate-fade-in">
              <p className="text-xs text-muted-foreground text-center">
                © 2024 Apparel PLM System
              </p>
            </div>
          )}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

interface NavigationLayoutProps {
  children: React.ReactNode;
}

export function NavigationLayout({ children }: NavigationLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        {/* Global Sidebar Trigger */}
        <SidebarTrigger className="sidebar-trigger">
          <Menu className="w-5 h-5" />
        </SidebarTrigger>
        
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}