import { ReactNode } from 'react';
import { cn } from '@/app/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  breadcrumb?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  icon,
  action,
  breadcrumb,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('page-header border-b border-border/50 bg-gradient-to-r from-card via-card to-muted/5 sticky top-16 z-40', className)}>
      <div className="content-wrapper p-6 md:p-8">
        {breadcrumb && (
          <div className="mb-4">
            {breadcrumb}
          </div>
        )}
        
        <div className="flex-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              {icon && <div className="text-2xl">{icon}</div>}
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
                {title}
              </h1>
            </div>
            {description && (
              <p className="text-base text-muted-foreground max-w-2xl">
                {description}
              </p>
            )}
          </div>
          
          {action && (
            <div className="flex-shrink-0">
              {action}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
