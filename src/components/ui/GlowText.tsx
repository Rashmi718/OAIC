import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

interface GlowTextProps {
  children: ReactNode;
  className?: string;
  color?: 'amber' | 'teal' | 'gold';
}

export default function GlowText({ children, className, color = 'amber' }: GlowTextProps) {
  const colors = {
    amber: 'text-glow-amber [text-shadow:0_0_20px_rgba(255,179,71,0.6),_0_0_40px_rgba(255,179,71,0.3)]',
    teal: 'text-glow-teal [text-shadow:0_0_20px_rgba(0,229,192,0.6),_0_0_40px_rgba(0,229,192,0.3)]',
    gold: 'text-glow-gold [text-shadow:0_0_20px_rgba(255,215,0,0.6),_0_0_40px_rgba(255,215,0,0.3)]',
  };

  return <span className={cn(colors[color], className)}>{children}</span>;
}
