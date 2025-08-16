import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Package, Truck, CheckCircle, Clock, AlertTriangle, MapPin } from 'lucide-react';

const inventoryItems = [
  {
    id: 'INV-001',
    name: 'Cotton T-Shirt White (M)',
    category: 'Tops',
    quantity: 234,
    reserved: 45,
    available: 189,
    location: 'Warehouse A-1',
    status: 'in-stock',
    reorderLevel: 50
  },
  {
    id: 'INV-002',
    name: 'Denim Jeans Blue (32W)',
    category: 'Bottoms',
    quantity: 67,
    reserved: 12,
    available: 55,
    location: 'Warehouse B-2',
    status: 'low-stock',
    reorderLevel: 100
  },
  {
    id: 'INV-003',
    name: 'Summer Dress Floral (L)',
    category: 'Dresses',
    quantity: 145,
    reserved: 28,
    available: 117,
    location: 'Warehouse A-3',
    status: 'in-stock',
    reorderLevel: 30
  },
  {
    id: 'INV-004',
    name: 'Winter Coat Black (XL)',
    category: 'Outerwear',
    quantity: 23,
    reserved: 8,
    available: 15,
    location: 'Warehouse C-1',
    status: 'critical',
    reorderLevel: 25
  },
  {
    id: 'INV-005',
    name: 'Athletic Shorts Gray (L)',
    category: 'Activewear',
    quantity: 89,
    reserved: 15,
    available: 74,
    location: 'Warehouse B-1',
    status: 'in-stock',
    reorderLevel: 40
  }
];

const shipments = [
  {
    id: 'SHP-001',
    destination: 'New York Store',
    items: 45,
    status: 'delivered',
    estimatedDelivery: '2024-03-10',
    trackingNumber: 'TRK123456789'
  },
  {
    id: 'SHP-002',
    destination: 'Los Angeles Distribution',
    items: 127,
    status: 'in-transit',
    estimatedDelivery: '2024-03-16',
    trackingNumber: 'TRK987654321'
  },
  {
    id: 'SHP-003',
    destination: 'Chicago Retail',
    items: 89,
    status: 'processing',
    estimatedDelivery: '2024-03-18',
    trackingNumber: 'TRK456789123'
  },
  {
    id: 'SHP-004',
    destination: 'Miami Outlet',
    items: 67,
    status: 'delayed',
    estimatedDelivery: '2024-03-20',
    trackingNumber: 'TRK789123456'
  }
];

function getStockStatus(status: string) {
  switch (status) {
    case 'in-stock':
      return { badge: <Badge className="status-approved"><CheckCircle className="w-3 h-3 mr-1" />In Stock</Badge>, color: 'text-success' };
    case 'low-stock':
      return { badge: <Badge className="status-pending"><Clock className="w-3 h-3 mr-1" />Low Stock</Badge>, color: 'text-warning' };
    case 'critical':
      return { badge: <Badge className="status-draft"><AlertTriangle className="w-3 h-3 mr-1" />Critical</Badge>, color: 'text-destructive' };
    default:
      return { badge: <Badge className="status-draft">Unknown</Badge>, color: 'text-muted-foreground' };
  }
}

function getShipmentStatus(status: string) {
  switch (status) {
    case 'delivered':
      return { badge: <Badge className="status-approved"><CheckCircle className="w-3 h-3 mr-1" />Delivered</Badge>, icon: CheckCircle };
    case 'in-transit':
      return { badge: <Badge className="status-pending"><Truck className="w-3 h-3 mr-1" />In Transit</Badge>, icon: Truck };
    case 'processing':
      return { badge: <Badge className="bg-blue-100 text-blue-800"><Package className="w-3 h-3 mr-1" />Processing</Badge>, icon: Package };
    case 'delayed':
      return { badge: <Badge className="status-draft"><AlertTriangle className="w-3 h-3 mr-1" />Delayed</Badge>, icon: AlertTriangle };
    default:
      return { badge: <Badge className="status-draft">Unknown</Badge>, icon: Clock };
  }
}

export default function Logistics() {
  return (
    <Layout>
      <PageHeader
        title="Logistics Department"
        description="Monitor inventory levels, track shipments, and optimize supply chain operations"
      >
        <Button className="btn-hero">
          <Plus className="w-4 h-4 mr-2" />
          New Shipment
        </Button>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Inventory', value: '2,847', color: 'departments-logistics' },
            { label: 'In Transit', value: '156', color: 'primary' },
            { label: 'Low Stock Items', value: '23', color: 'warning' },
            { label: 'Critical Items', value: '7', color: 'destructive' }
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inventory Table */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-foreground">Inventory Overview</h2>
              <Button variant="outline" size="sm">Manage Stock</Button>
            </div>

            <div className="dept-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Item</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Available</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {inventoryItems.map((item, index) => {
                      const statusInfo = getStockStatus(item.status);
                      return (
                        <tr 
                          key={item.id}
                          className="hover:bg-secondary/30 transition-colors animate-fade-in"
                          style={{ animationDelay: `${index * 0.05}s` }}
                        >
                          <td className="px-4 py-3">
                            <div className="font-medium text-foreground text-sm">{item.name}</div>
                            <div className="text-xs text-muted-foreground flex items-center mt-1">
                              <MapPin className="w-3 h-3 mr-1" />
                              {item.location}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="text-sm font-medium text-foreground">{item.available}</div>
                            <div className="text-xs text-muted-foreground">of {item.quantity}</div>
                          </td>
                          <td className="px-4 py-3">{statusInfo.badge}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Delivery Tracker */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-foreground">Delivery Tracker</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>

            <div className="space-y-4">
              {shipments.map((shipment, index) => {
                const statusInfo = getShipmentStatus(shipment.status);
                return (
                  <div 
                    key={shipment.id}
                    className="dept-card p-4 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <statusInfo.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{shipment.destination}</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {shipment.items} items • Due {shipment.estimatedDelivery}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Tracking: {shipment.trackingNumber}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        {statusInfo.badge}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}