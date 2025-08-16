import { useState, useEffect } from 'react';
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
  ChevronRight,
  Sparkles
} from 'lucide-react';

const navigationItems = [
  { name: 'Home', path: '/', icon: Home, color: 'departments-management' },
  { name: 'Design', path: '/design', icon: Palette, color: 'departments-design' },
  { name: 'Sampling', path: '/sampling', icon: Package, color: 'departments-sampling' },
  { name: 'Merchandising', path: '/merchandising', icon: ShoppingCart, color: 'departments-merchandising' },
  { name: 'Logistics', path: '/logistics', icon: Truck, color: 'departments-logistics' },
  { name: 'Procurement', path: '/procurement', icon: DollarSign, color: 'departments-procurement' },
  { name: 'Management', path: '/management', icon: BarChart3, color: 'departments-management' },
];

interface ModernSidebarProps {
  children: React.ReactNode;
}

export function ModernSidebar({ children }: ModernSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="relative min-h-screen">
      {/* Floating Sidebar Trigger */}
      <button
        onClick={toggleSidebar}
        className={`sidebar-trigger ${isOpen ? 'open' : ''}`}
        aria-label="Toggle Navigation"
      >
        {isOpen ? (
          <X className="sidebar-trigger-icon" />
        ) : (
          <Menu className="sidebar-trigger-icon" />
        )}
      </button>

      {/* Backdrop Overlay */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
        onClick={closeSidebar}
      />

      {/* Sidebar Container */}
      <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          {/* Header Section */}
          <div className="p-8 border-b border-border/30">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-xl">PLM</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-accent to-departments-design rounded-full animate-pulse">
                  <Sparkles className="w-3 h-3 text-white m-0.5" />
                </div>
              </div>
              <div className="animate-fade-in">
                <h2 className="font-bold text-xl text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Apparel PLM
                </h2>
                <p className="text-sm text-muted-foreground">Product Lifecycle Management</p>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="p-6 flex-1">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Departments
              </h3>
              
              <nav className="space-y-2">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = isActivePath(item.path);
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`
                        nav-item ${isActive ? 'active' : ''}
                        group flex items-center space-x-4 px-4 py-4 
                        transition-all duration-300 ease-out
                        hover:shadow-md relative z-10
                      `}
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: 'both'
                      }}
                    >
                      <div 
                        className={`
                          nav-icon p-3 rounded-xl transition-all duration-300 
                          group-hover:scale-110 group-hover:shadow-lg
                          ${isActive ? 'shadow-lg scale-110' : 'group-hover:shadow-md'}
                        `}
                        style={{ 
                          backgroundColor: isActive 
                            ? `hsl(var(--${item.color}) / 0.2)` 
                            : `hsl(var(--${item.color}) / 0.1)`,
                          border: isActive 
                            ? `1px solid hsl(var(--${item.color}) / 0.3)`
                            : '1px solid transparent'
                        }}
                      >
                        <Icon 
                          className="w-5 h-5 transition-all duration-300" 
                          style={{ 
                            color: `hsl(var(--${item.color}))`,
                            filter: isActive ? 'drop-shadow(0 0 8px currentColor)' : 'none'
                          }}
                        />
                      </div>
                      
                      <div className="flex-1 flex items-center justify-between">
                        <span className={`font-medium transition-all duration-300 ${
                          isActive 
                            ? 'text-foreground font-semibold' 
                            : 'text-muted-foreground group-hover:text-foreground'
                        }`}>
                          {item.name}
                        </span>
                        {isActive && (
                          <ChevronRight 
                            className="w-5 h-5 animate-pulse" 
                            style={{ color: `hsl(var(--${item.color}))` }}
                          />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Footer Section */}
          <div className="p-6 border-t border-border/30 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                © 2024 Apparel PLM System
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Version 2.0.1
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-background">
        {children}
      </div>
    </div>
  );
}