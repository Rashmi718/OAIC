import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export default function Card({ children, className, glowOnHover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-dark-700 border border-earth-700 rounded-xl p-6 transition-all duration-300',
        glowOnHover &&
          'hover:border-glow-amber hover:shadow-card-hover hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
