import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'amber' | 'teal' | 'forest' | 'earth' | 'open' | 'closed' | 'upcoming' | 'extended';
  className?: string;
}

export default function Badge({ children, variant = 'amber', className }: BadgeProps) {
  const variants = {
    amber: 'bg-glow-amber/15 text-glow-amber border border-glow-amber/30',
    teal: 'bg-glow-teal/15 text-glow-teal border border-glow-teal/30',
    forest: 'bg-forest-500/20 text-forest-300 border border-forest-500/30',
    earth: 'bg-earth-700/40 text-earth-300 border border-earth-600/50',
    open: 'bg-forest-500/20 text-forest-300 border border-forest-500/30',
    closed: 'bg-red-900/30 text-red-400 border border-red-700/30',
    upcoming: 'bg-glow-amber/15 text-glow-amber border border-glow-amber/30',
    extended: 'bg-glow-indigo/20 text-purple-300 border border-purple-700/30',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
