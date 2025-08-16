import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-background to-secondary/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-foreground">{title}</h1>
            {description && (
              <p className="mt-2 text-lg text-muted-foreground">{description}</p>
            )}
          </div>
          {children && (
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}