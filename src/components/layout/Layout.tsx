import { ReactNode } from 'react';
import { ModernSidebar } from './ModernSidebar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <ModernSidebar>
      {children}
    </ModernSidebar>
  );
}