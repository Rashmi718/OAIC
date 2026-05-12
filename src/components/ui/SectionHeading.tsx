import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  tag?: ReactNode;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  centered = true,
  tag,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered ? 'text-center' : 'text-left', 'mb-12', className)}>
      {tag && <div className="mb-3">{tag}</div>}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-earth-100 mb-4 leading-tight">
        {title}
      </h2>
      {/* Decorative underline */}
      <div className={cn('flex mb-5', centered ? 'justify-center' : 'justify-start')}>
        <div className="h-0.5 w-16 bg-gradient-to-r from-earth-400 to-glow-amber rounded-full" />
        <div className="h-0.5 w-4 bg-glow-amber/30 ml-1 rounded-full" />
      </div>
      {subtitle && (
        <p className="font-body text-earth-300 text-lg max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
