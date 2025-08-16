import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, MessageCircle, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const sampleItems = [
  {
    id: 'SPL-001',
    name: 'Summer Dress Prototype',
    designer: 'Sarah Chen',
    status: 'approved',
    feedback: 'Excellent fit and fabric quality',
    dueDate: '2024-03-15',
    priority: 'high'
  },
  {
    id: 'SPL-002',
    name: 'Casual T-Shirt V1',
    designer: 'Mike Johnson',
    status: 'pending',
    feedback: 'Waiting for fabric sourcing',
    dueDate: '2024-03-18',
    priority: 'medium'
  },
  {
    id: 'SPL-003',
    name: 'Athletic Shorts Sample',
    designer: 'Emily Rodriguez',
    status: 'in-revision',
    feedback: 'Adjust waistband sizing',
    dueDate: '2024-03-20',
    priority: 'high'
  },
  {
    id: 'SPL-004',
    name: 'Winter Coat Proto',
    designer: 'David Kim',
    status: 'approved',
    feedback: 'Ready for production',
    dueDate: '2024-03-12',
    priority: 'low'
  },
  {
    id: 'SPL-005',
    name: 'Formal Blazer Sample',
    designer: 'Anna Watson',
    status: 'pending',
    feedback: 'Material selection in progress',
    dueDate: '2024-03-25',
    priority: 'medium'
  }
];

function getStatusInfo(status: string) {
  switch (status) {
    case 'approved':
      return { 
        badge: <Badge className="status-approved"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>,
        icon: CheckCircle,
        color: 'text-success'
      };
    case 'pending':
      return { 
        badge: <Badge className="status-pending"><Clock className="w-3 h-3 mr-1" />Pending</Badge>,
        icon: Clock,
        color: 'text-warning'
      };
    case 'in-revision':
      return { 
        badge: <Badge className="status-draft"><AlertCircle className="w-3 h-3 mr-1" />In Revision</Badge>,
        icon: AlertCircle,
        color: 'text-destructive'
      };
    default:
      return { 
        badge: <Badge className="status-draft">Unknown</Badge>,
        icon: Clock,
        color: 'text-muted-foreground'
      };
  }
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case 'high':
      return 'text-destructive';
    case 'medium':
      return 'text-warning';
    case 'low':
      return 'text-success';
    default:
      return 'text-muted-foreground';
  }
}

export default function Sampling() {
  return (
    <Layout>
      <PageHeader
        title="Sampling Department"
        description="Track sample development, manage revisions, and coordinate feedback"
      >
        <Button className="btn-hero">
          <Plus className="w-4 h-4 mr-2" />
          New Sample
        </Button>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Samples', value: '23', color: 'departments-sampling' },
            { label: 'Approved', value: '12', color: 'success' },
            { label: 'Pending Review', value: '8', color: 'warning' },
            { label: 'In Revision', value: '3', color: 'destructive' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="dept-card p-6 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: `hsl(var(--${stat.color}))` }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Sample Items Table */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-foreground">Sample Items</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Filter by Status</Button>
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </div>

          <div className="dept-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Item ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Sample Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Designer</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Due Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Priority</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sampleItems.map((item, index) => {
                    const statusInfo = getStatusInfo(item.status);
                    return (
                      <tr 
                        key={item.id}
                        className="hover:bg-secondary/30 transition-colors animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <td className="px-6 py-4">
                          <code className="text-sm font-mono bg-secondary px-2 py-1 rounded">
                            {item.id}
                          </code>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-foreground">{item.name}</div>
                          <div className="text-sm text-muted-foreground mt-1">{item.feedback}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground">{item.designer}</td>
                        <td className="px-6 py-4">{statusInfo.badge}</td>
                        <td className="px-6 py-4 text-sm text-foreground">{item.dueDate}</td>
                        <td className="px-6 py-4">
                          <span className={`text-sm font-medium capitalize ${getPriorityColor(item.priority)}`}>
                            {item.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <MessageCircle className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}