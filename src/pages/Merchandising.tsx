import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/ui/page-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, TrendingUp, TrendingDown, Star, DollarSign, Package } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Summer Floral Dress',
    category: 'Dresses',
    price: 79.99,
    cost: 32.50,
    margin: 59.4,
    stock: 150,
    rating: 4.8,
    sales: 234,
    trend: 'up',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Classic White T-Shirt',
    category: 'Tops',
    price: 24.99,
    cost: 8.75,
    margin: 65.0,
    stock: 89,
    rating: 4.6,
    sales: 567,
    trend: 'up',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Athletic Running Shorts',
    category: 'Activewear',
    price: 39.99,
    cost: 18.20,
    margin: 54.5,
    stock: 45,
    rating: 4.7,
    sales: 189,
    trend: 'down',
    image: 'https://images.unsplash.com/photo-1544966503-7cc22cd73d14?w=200&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Formal Business Blazer',
    category: 'Outerwear',
    price: 129.99,
    cost: 52.30,
    margin: 59.8,
    stock: 67,
    rating: 4.9,
    sales: 123,
    trend: 'up',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Denim Skinny Jeans',
    category: 'Bottoms',
    price: 69.99,
    cost: 28.80,
    margin: 58.9,
    stock: 123,
    rating: 4.5,
    sales: 345,
    trend: 'up',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Winter Wool Coat',
    category: 'Outerwear',
    price: 199.99,
    cost: 89.50,
    margin: 55.3,
    stock: 34,
    rating: 4.8,
    sales: 78,
    trend: 'down',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200&h=300&fit=crop'
  }
];

const marketInsights = [
  { category: 'Dresses', growth: '+12.5%', color: 'success' },
  { category: 'Activewear', growth: '+8.3%', color: 'success' },
  { category: 'Outerwear', growth: '-2.1%', color: 'destructive' },
  { category: 'Tops', growth: '+5.7%', color: 'success' }
];

export default function Merchandising() {
  return (
    <Layout>
      <PageHeader
        title="Merchandising Department"
        description="Manage product catalogs, pricing strategies, and market insights"
      >
        <Button className="btn-hero">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Products', value: '1,247', color: 'departments-merchandising', icon: Package },
            { label: 'Revenue (MTD)', value: '$45.2K', color: 'success', icon: DollarSign },
            { label: 'Avg. Margin', value: '58.7%', color: 'primary', icon: TrendingUp },
            { label: 'Top Rated', value: '4.7★', color: 'warning', icon: Star }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="dept-card p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div 
                    className="text-3xl font-bold mb-1"
                    style={{ color: `hsl(var(--${stat.color}))` }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
                <stat.icon 
                  className="w-8 h-8"
                  style={{ color: `hsl(var(--${stat.color}))` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Product Catalog */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-foreground">Product Catalog</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Sort by Sales</Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className="dept-card overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex space-x-4 p-4">
                    <div className="w-20 h-28 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0 space-y-2">
                      <div>
                        <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>
                        <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Price: </span>
                          <span className="font-medium text-foreground">${product.price}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Margin: </span>
                          <span className="font-medium text-success">{product.margin}%</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Stock: </span>
                          <span className="font-medium text-foreground">{product.stock}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 fill-warning text-warning mr-1" />
                          <span className="font-medium text-foreground">{product.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center space-x-1">
                          {product.trend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-success" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-destructive" />
                          )}
                          <span className="text-sm text-muted-foreground">{product.sales} sales</span>
                        </div>
                        <Button size="sm" variant="outline">View</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Insights Sidebar */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Market Insights</h2>
            
            {/* Category Performance */}
            <div className="dept-card p-6 space-y-4">
              <h3 className="font-semibold text-foreground">Category Performance</h3>
              <div className="space-y-3">
                {marketInsights.map((insight, index) => (
                  <div 
                    key={insight.category}
                    className="flex justify-between items-center animate-fade-in"
                    style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                  >
                    <span className="text-sm text-foreground">{insight.category}</span>
                    <span 
                      className={`text-sm font-medium ${
                        insight.color === 'success' ? 'text-success' : 'text-destructive'
                      }`}
                    >
                      {insight.growth}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="dept-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Sales Trend</h3>
              <div className="chart-placeholder h-48">
                <TrendingUp className="w-12 h-12" />
                <p className="mt-2 text-sm">Chart will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}