import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Eye, Edit, Download } from 'lucide-react';

const designSketches = [
  {
    id: 1,
    title: 'Summer Collection - Dress Design',
    status: 'approved',
    lastModified: '2 hours ago',
    thumbnail: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Casual Wear - T-Shirt Series',
    status: 'pending',
    lastModified: '5 hours ago',
    thumbnail: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Formal Collection - Blazer',
    status: 'draft',
    lastModified: '1 day ago',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Athletic Wear - Running Shorts',
    status: 'approved',
    lastModified: '2 days ago',
    thumbnail: 'https://images.unsplash.com/photo-1544966503-7cc22cd73d14?w=300&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Winter Collection - Coat Design',
    status: 'pending',
    lastModified: '3 days ago',
    thumbnail: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=300&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'Accessories - Handbag Collection',
    status: 'draft',
    lastModified: '4 days ago',
    thumbnail: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop'
  }
];

function getStatusBadge(status: string) {
  switch (status) {
    case 'approved':
      return <Badge className="status-approved">Approved</Badge>;
    case 'pending':
      return <Badge className="status-pending">Pending</Badge>;
    case 'draft':
      return <Badge className="status-draft">Draft</Badge>;
    default:
      return <Badge className="status-draft">Unknown</Badge>;
  }
}

export default function Design() {
  return (
    <Layout>
      <PageHeader
        title="Design Department"
        description="Create and manage design sketches, mood boards, and creative assets"
      >
        <Button className="btn-hero">
          <Plus className="w-4 h-4 mr-2" />
          New Design
        </Button>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Designs', value: '156', color: 'departments-design' },
            { label: 'Approved', value: '89', color: 'success' },
            { label: 'Pending Review', value: '34', color: 'warning' },
            { label: 'In Draft', value: '33', color: 'muted' }
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

        {/* Design Sketches Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-foreground">Recent Design Sketches</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Filter</Button>
              <Button variant="outline" size="sm">Sort</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designSketches.map((sketch, index) => (
              <div 
                key={sketch.id}
                className="dept-card overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted rounded-t-xl overflow-hidden">
                  <img 
                    src={sketch.thumbnail} 
                    alt={sketch.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-foreground line-clamp-2">{sketch.title}</h3>
                    {getStatusBadge(sketch.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Modified {sketch.lastModified}
                  </p>
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}