import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Star, Phone, Mail, CheckCircle, Clock, FileText, DollarSign } from 'lucide-react';

const suppliers = [
  {
    id: 'SUP-001',
    name: 'Premium Textiles Co.',
    contact: 'John Smith',
    email: 'john@premiumtextiles.com',
    phone: '+1 (555) 123-4567',
    rating: 4.8,
    category: 'Fabrics',
    location: 'Mumbai, India',
    orders: 45,
    status: 'active'
  },
  {
    id: 'SUP-002',
    name: 'Global Fashion Supplies',
    contact: 'Maria Garcia',
    email: 'maria@globalfashion.com',
    phone: '+1 (555) 987-6543',
    rating: 4.6,
    category: 'Accessories',
    location: 'Guangzhou, China',
    orders: 32,
    status: 'active'
  },
  {
    id: 'SUP-003',
    name: 'Eco Thread Solutions',
    contact: 'David Chen',
    email: 'david@ecothread.com',
    phone: '+1 (555) 456-7890',
    rating: 4.9,
    category: 'Sustainable Materials',
    location: 'Barcelona, Spain',
    orders: 28,
    status: 'active'
  },
  {
    id: 'SUP-004',
    name: 'Quality Zipper Corp',
    contact: 'Sarah Wilson',
    email: 'sarah@qualityzipper.com',
    phone: '+1 (555) 321-0987',
    rating: 4.4,
    category: 'Hardware',
    location: 'Seoul, South Korea',
    orders: 67,
    status: 'pending'
  }
];

const purchaseOrders = [
  {
    id: 'PO-2024-001',
    supplier: 'Premium Textiles Co.',
    items: 'Cotton Fabric - White (500 yards)',
    amount: 2450.00,
    status: 'approved',
    orderDate: '2024-03-12',
    expectedDelivery: '2024-03-20',
    urgency: 'medium'
  },
  {
    id: 'PO-2024-002',
    supplier: 'Global Fashion Supplies',
    items: 'Metal Buttons - Gold (1000 pcs)',
    amount: 890.50,
    status: 'pending',
    orderDate: '2024-03-14',
    expectedDelivery: '2024-03-22',
    urgency: 'high'
  },
  {
    id: 'PO-2024-003',
    supplier: 'Eco Thread Solutions',
    items: 'Organic Cotton Thread (200 spools)',
    amount: 1250.75,
    status: 'processing',
    orderDate: '2024-03-13',
    expectedDelivery: '2024-03-25',
    urgency: 'low'
  },
  {
    id: 'PO-2024-004',
    supplier: 'Quality Zipper Corp',
    items: 'YKK Zippers - Black 12" (500 pcs)',
    amount: 675.25,
    status: 'delivered',
    orderDate: '2024-03-08',
    expectedDelivery: '2024-03-15',
    urgency: 'medium'
  }
];

function getOrderStatus(status: string) {
  switch (status) {
    case 'approved':
      return <Badge className="status-approved"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
    case 'pending':
      return <Badge className="status-pending"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
    case 'processing':
      return <Badge className="bg-blue-100 text-blue-800"><FileText className="w-3 h-3 mr-1" />Processing</Badge>;
    case 'delivered':
      return <Badge className="status-approved"><CheckCircle className="w-3 h-3 mr-1" />Delivered</Badge>;
    default:
      return <Badge className="status-draft">Unknown</Badge>;
  }
}

function getUrgencyColor(urgency: string) {
  switch (urgency) {
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

export default function Procurement() {
  return (
    <Layout>
      <PageHeader
        title="Procurement Department"
        description="Manage supplier relationships, purchase orders, and vendor performance"
      >
        <div className="flex space-x-2">
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add Supplier
          </Button>
          <Button className="btn-hero">
            <Plus className="w-4 h-4 mr-2" />
            New PO
          </Button>
        </div>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Suppliers', value: '34', color: 'departments-procurement' },
            { label: 'Monthly Orders', value: '127', color: 'primary' },
            { label: 'Total Spend', value: '$78.5K', color: 'success' },
            { label: 'Avg Rating', value: '4.7★', color: 'warning' }
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Supplier List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-foreground">Supplier Directory</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Export</Button>
              </div>
            </div>

            <div className="grid gap-4">
              {suppliers.map((supplier, index) => (
                <div 
                  key={supplier.id}
                  className="dept-card p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-foreground">{supplier.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-warning text-warning" />
                          <span className="font-medium text-foreground">{supplier.rating}</span>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex items-center text-muted-foreground">
                            <Mail className="w-4 h-4 mr-2" />
                            {supplier.email}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Phone className="w-4 h-4 mr-2" />
                            {supplier.phone}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <span className="text-muted-foreground">Category: </span>
                            <Badge variant="secondary">{supplier.category}</Badge>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Orders: </span>
                            <span className="font-medium text-foreground">{supplier.orders}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-sm text-muted-foreground">{supplier.location}</span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Contact</Button>
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Purchase Orders */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Recent Purchase Orders</h2>
            
            <div className="space-y-4">
              {purchaseOrders.map((order, index) => (
                <div 
                  key={order.id}
                  className="dept-card p-4 animate-fade-in"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <code className="text-sm font-mono bg-secondary px-2 py-1 rounded">
                          {order.id}
                        </code>
                        <h4 className="font-medium text-foreground mt-1">{order.supplier}</h4>
                      </div>
                      {getOrderStatus(order.status)}
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      {order.items}
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span className="font-medium">${order.amount.toFixed(2)}</span>
                      </div>
                      <div className={`font-medium capitalize ${getUrgencyColor(order.urgency)}`}>
                        {order.urgency} priority
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground border-t pt-2 mt-2">
                      Ordered: {order.orderDate} • Expected: {order.expectedDelivery}
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