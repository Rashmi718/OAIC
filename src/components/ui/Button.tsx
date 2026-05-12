'use client';

import { cn } from '@/lib/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, href, external, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-body font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-glow-amber focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-gradient-to-r from-earth-400 to-glow-amber text-dark-900 rounded-full shadow-glow-amber-sm hover:shadow-glow-amber hover:scale-105 active:scale-95',
      secondary:
        'bg-earth-700 text-earth-100 border border-earth-600 rounded-lg hover:bg-earth-600 hover:border-earth-400 hover:shadow-glow-amber-sm',
      ghost:
        'bg-transparent text-earth-200 border border-earth-700/50 rounded-full hover:border-glow-amber hover:text-glow-amber hover:shadow-glow-amber-sm',
      outline:
        'bg-transparent text-glow-amber border border-glow-amber rounded-lg hover:bg-glow-amber/10 hover:shadow-glow-amber-sm',
    };

    const sizes = {
      sm: 'px-4 py-1.5 text-sm gap-1.5',
      md: 'px-6 py-2.5 text-base gap-2',
      lg: 'px-8 py-3.5 text-lg gap-2.5',
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
