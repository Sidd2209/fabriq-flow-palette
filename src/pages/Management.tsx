import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Users, Package, DollarSign, Calendar, Download, Filter } from 'lucide-react';

const kpiData = [
  {
    title: 'Total Designs',
    value: '156',
    change: '+12%',
    trend: 'up',
    color: 'departments-design',
    icon: BarChart3
  },
  {
    title: 'Active Samples',
    value: '23',
    change: '+8%',
    trend: 'up',
    color: 'departments-sampling',
    icon: Package
  },
  {
    title: 'Inventory Items',
    value: '2,847',
    change: '-3%',
    trend: 'down',
    color: 'departments-logistics',
    icon: Package
  },
  {
    title: 'Monthly Revenue',
    value: '$245.8K',
    change: '+15%',
    trend: 'up',
    color: 'success',
    icon: DollarSign
  },
  {
    title: 'Active Suppliers',
    value: '34',
    change: '+2%',
    trend: 'up',
    color: 'departments-procurement',
    icon: Users
  },
  {
    title: 'Products Catalog',
    value: '1,247',
    change: '+7%',
    trend: 'up',
    color: 'departments-merchandising',
    icon: Package
  }
];

const recentActivity = [
  {
    id: 1,
    type: 'design',
    title: 'New summer collection approved',
    description: 'Design team completed review of 12 new pieces',
    timestamp: '2 hours ago',
    department: 'Design'
  },
  {
    id: 2,
    type: 'procurement',
    title: 'Purchase order PO-2024-002 pending approval',
    description: 'Metal buttons order worth $890.50 awaiting confirmation',
    timestamp: '4 hours ago',
    department: 'Procurement'
  },
  {
    id: 3,
    type: 'logistics',
    title: 'Low stock alert for Winter Coat Black',
    description: 'Only 15 units remaining, below reorder level',
    timestamp: '6 hours ago',
    department: 'Logistics'
  },
  {
    id: 4,
    type: 'sampling',
    title: 'Sample SPL-003 requires revision',
    description: 'Athletic shorts sample needs waistband adjustment',
    timestamp: '8 hours ago',
    department: 'Sampling'
  },
  {
    id: 5,
    type: 'merchandising',
    title: 'Price update for Denim Jeans collection',
    description: 'Margin optimization completed for 15 SKUs',
    timestamp: '1 day ago',
    department: 'Merchandising'
  }
];

const departmentPerformance = [
  { name: 'Design', completion: 87, target: 90, color: 'departments-design' },
  { name: 'Sampling', completion: 92, target: 85, color: 'departments-sampling' },
  { name: 'Merchandising', completion: 78, target: 80, color: 'departments-merchandising' },
  { name: 'Logistics', completion: 95, target: 90, color: 'departments-logistics' },
  { name: 'Procurement', completion: 83, target: 85, color: 'departments-procurement' }
];

export default function Management() {
  return (
    <Layout>
      <PageHeader
        title="Senior Management Dashboard"
        description="Comprehensive overview of all departments and key performance indicators"
      >
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="btn-hero">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Review
          </Button>
        </div>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <div 
              key={kpi.title}
              className="dept-card p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-muted-foreground">{kpi.title}</h3>
                    <kpi.icon 
                      className="w-5 h-5"
                      style={{ color: `hsl(var(--${kpi.color}))` }}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span 
                      className="text-2xl font-bold"
                      style={{ color: `hsl(var(--${kpi.color}))` }}
                    >
                      {kpi.value}
                    </span>
                    <div className={`flex items-center text-sm ${
                      kpi.trend === 'up' ? 'text-success' : 'text-destructive'
                    }`}>
                      <TrendingUp className={`w-4 h-4 mr-1 ${
                        kpi.trend === 'down' ? 'rotate-180' : ''
                      }`} />
                      {kpi.change}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Department Performance */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Department Performance</h2>
            
            <div className="dept-card p-6 space-y-6">
              {departmentPerformance.map((dept, index) => (
                <div 
                  key={dept.name}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{dept.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {dept.completion}% / {dept.target}% target
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-1000 relative"
                      style={{ 
                        width: `${dept.completion}%`,
                        backgroundColor: `hsl(var(--${dept.color}))`
                      }}
                    >
                      {dept.completion >= dept.target && (
                        <div className="absolute right-0 top-0 h-3 w-3 rounded-full bg-success animate-pulse" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Placeholders */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="dept-card p-6">
                <h3 className="font-semibold text-foreground mb-4">Revenue Trend</h3>
                <div className="chart-placeholder h-48">
                  <BarChart3 className="w-12 h-12" />
                  <p className="mt-2 text-sm">Revenue chart will be displayed here</p>
                </div>
              </div>
              
              <div className="dept-card p-6">
                <h3 className="font-semibold text-foreground mb-4">Department Distribution</h3>
                <div className="chart-placeholder h-48">
                  <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                  <p className="mt-2 text-sm">Pie chart will be displayed here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Recent Activity</h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div 
                  key={activity.id}
                  className="dept-card p-4 animate-fade-in"
                  style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-foreground line-clamp-2 pr-2">
                        {activity.title}
                      </h4>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {activity.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {activity.department}
                      </span>
                      <Button size="sm" variant="ghost" className="text-xs h-6 px-2">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}