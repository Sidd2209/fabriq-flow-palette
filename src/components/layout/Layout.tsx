import { ReactNode } from 'react';
import { NavigationLayout } from './NavigationLayout';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <NavigationLayout>
      <div className="min-h-screen bg-background">
        {children}
      </div>
    </NavigationLayout>
  );
}