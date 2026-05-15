import React from 'react';
import { cn } from '@/lib/cn';
import Link from 'next/link';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<
  HTMLElement,
  IButtonProps
>(({ as: Component = 'button', variant = 'primary', size = 'md', className, href, ...props }, ref) => {
  const base =
    'inline-flex items-center justify-center font-semibold tracking-wide rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500 border border-transparent',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:ring-gray-400 border border-transparent',
    outline: 'border-primary-600 text-primary-600 hover:bg-primary-50 hover:text-primary-700 focus-visible:ring-primary-500',
    ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-400 border border-transparent',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (Component === Link && href) {
    return <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>{props.children}</Link>;
  }

  if (Component === 'a' && href) {
    return <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>{props.children}</a>;
  }

  return <button className={classes} ref={ref as React.Ref<HTMLButtonElement>} {...props} />;
});

Button.displayName = 'Button';
