import { Layout } from '@/components/layout/Layout';
import { DepartmentCard } from '@/components/ui/department-card';
import { Button } from '@/components/ui/button';
import { Palette, Package, ShoppingCart, Truck, DollarSign, BarChart3, ArrowRight, Users, Zap, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-plm.jpg';

const departments = [
  {
    title: 'Design',
    description: 'Create and manage design sketches, mood boards, and creative assets with collaborative tools.',
    icon: Palette,
    path: '/design',
    color: '280 83% 57%'
  },
  {
    title: 'Sampling',
    description: 'Track sample development, manage revisions, and coordinate feedback across teams.',
    icon: Package,
    path: '/sampling',
    color: '142 71% 45%'
  },
  {
    title: 'Merchandising',
    description: 'Manage product catalogs, pricing strategies, and market insights in one place.',
    icon: ShoppingCart,
    path: '/merchandising',
    color: '38 92% 50%'
  },
  {
    title: 'Logistics',
    description: 'Monitor inventory levels, track shipments, and optimize supply chain operations.',
    icon: Truck,
    path: '/logistics',
    color: '221 83% 53%'
  },
  {
    title: 'Procurement',
    description: 'Manage supplier relationships, purchase orders, and vendor performance metrics.',
    icon: DollarSign,
    path: '/procurement',
    color: '280 83% 57%'
  },
  {
    title: 'Management',
    description: 'Access comprehensive dashboards, KPIs, and analytics for strategic decision making.',
    icon: BarChart3,
    path: '/management',
    color: '17 88% 40%'
  }
];

const features = [
  {
    icon: Users,
    title: 'Collaborative Workflow',
    description: 'Connect teams across departments with seamless collaboration tools and real-time updates.'
  },
  {
    icon: Zap,
    title: 'Streamlined Process',
    description: 'Automate routine tasks and optimize workflows to reduce time-to-market significantly.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with reliable data protection and backup systems.'
  }
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Streamline Your{' '}
                  <span className="bg-gradient-to-r from-primary via-accent to-departments-design bg-clip-text text-transparent">
                    Apparel Lifecycle
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  From initial design concepts to final delivery, manage every aspect of your apparel production with our comprehensive PLM platform.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="btn-hero"
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="PLM Dashboard Preview"
                  className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-glow transition-shadow duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Our PLM Platform?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for the apparel industry with features that matter most to your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Explore Departments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access specialized tools and workflows designed for each department in your organization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={dept.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DepartmentCard {...dept} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}