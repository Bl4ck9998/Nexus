import { ReactNode } from 'react';
import { cn } from '@/app/lib/utils';

interface PageSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  fullWidth?: boolean;
}

export function PageSection({
  title,
  description,
  children,
  className,
  contentClassName,
  fullWidth = false,
}: PageSectionProps) {
  return (
    <div className={cn('page-section', className)}>
      {(title || description) && (
        <div className="section-header">
          {title && <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      
      <div className={cn(!fullWidth && 'content-wrapper', contentClassName)}>
        {children}
      </div>
    </div>
  );
}
