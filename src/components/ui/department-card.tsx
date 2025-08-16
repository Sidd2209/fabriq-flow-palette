import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color: string;
}

export function DepartmentCard({ title, description, icon: Icon, path, color }: DepartmentCardProps) {
  return (
    <Link
      to={path}
      className="dept-card p-6 block group cursor-pointer"
    >
      <div className="flex items-start space-x-4">
        <div 
          className={`p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
          style={{ backgroundColor: `hsl(${color} / 0.1)` }}
        >
          <Icon 
            className="w-6 h-6" 
            style={{ color: `hsl(${color})` }}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}