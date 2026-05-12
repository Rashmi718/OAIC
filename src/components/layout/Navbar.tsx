'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navConfig } from '@/data/nav';
import { cn } from '@/lib/cn';
import type { NavItem } from '@/types';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    // Clear any pending hover-close timer on route change
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isActive = (item: NavItem): boolean => {
    if (item.href) return pathname === item.href || pathname.startsWith(item.href + '/');
    if (item.children) return item.children.some((child) => child.href && pathname.startsWith(child.href));
    return false;
  };

  return (
    <>
      {/* Skip to main content */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-dark-900/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)]'
            : 'bg-dark-900/90 backdrop-blur-sm'
        )}
        role="banner"
      >
        {/* Top utility bar */}
        <div className="hidden md:flex bg-earth-900 border-b border-earth-800 px-6 py-1 justify-between items-center text-xs font-mono text-earth-400">
          <div className="flex gap-6">
            <span>2026 1st Odisha AI Conference</span>
            <span>Bhubaneswar, Odisha, India</span>
            <span>October 15–17, 2026</span>
          </div>
          <div className="flex gap-4">
            <a href="mailto:info@oaic2026.in" className="hover:text-glow-amber transition-colors">
              info@oaic2026.in
            </a>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="flex items-center justify-between px-6 md:px-8 lg:px-16 py-3.5 max-w-[1280px] mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow-amber rounded"
            aria-label="OAIC 2026 - Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-earth-400 to-glow-amber flex items-center justify-center text-dark-900 font-mono font-bold text-sm shadow-glow-amber-sm group-hover:shadow-glow-amber transition-shadow">
              AI
            </div>
            <div className="leading-tight">
              <div className="text-xs font-mono text-earth-400 tracking-widest uppercase">OAIC</div>
              <div className="font-display font-bold text-earth-100 text-base leading-none">
                Odisha AI Conference
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {navConfig.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 rounded text-sm font-body font-semibold transition-colors duration-200',
                      isActive(item)
                        ? 'text-glow-amber border-b-2 border-glow-amber'
                        : 'text-earth-300 hover:text-earth-100 hover:bg-earth-800/50'
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 rounded text-sm font-body font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-glow-amber focus-visible:outline-none',
                      isActive(item)
                        ? 'text-glow-amber'
                        : 'text-earth-300 hover:text-earth-100 hover:bg-earth-800/50'
                    )}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-200',
                        activeDropdown === item.label ? 'rotate-180' : ''
                      )}
                    />
                  </button>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 min-w-[240px] bg-dark-800 border border-earth-700 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden animate-slide-down"
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href!}
                        role="menuitem"
                        className={cn(
                          'flex items-center gap-2 px-4 py-3 text-sm font-body transition-all duration-150 border-l-2 border-transparent hover:border-glow-amber hover:bg-dark-700 hover:text-earth-100',
                          pathname === child.href
                            ? 'border-glow-amber bg-dark-700 text-glow-amber'
                            : 'text-earth-300'
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/authors/call-for-papers"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-body font-semibold transition-all duration-200 bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 shadow-sm hover:shadow-glow-amber-sm"
            >
              Submit Paper
            </a>
            <button
              className="lg:hidden p-2 rounded text-earth-300 hover:text-earth-100 hover:bg-earth-800/50 focus-visible:ring-2 focus-visible:ring-glow-amber focus-visible:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-0 z-40 bg-dark-900/98 backdrop-blur-lg overflow-y-auto">
            <div className="flex flex-col min-h-full">
              {/* Mobile header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-earth-800">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-earth-400 to-glow-amber flex items-center justify-center text-dark-900 font-mono font-bold text-xs">
                    AI
                  </div>
                  <span className="font-display font-bold text-earth-100">OAIC 2026</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-earth-300 hover:text-earth-100 focus-visible:ring-2 focus-visible:ring-glow-amber focus-visible:outline-none"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile nav items */}
              <nav className="flex flex-col flex-1 px-4 py-6 gap-1" aria-label="Mobile navigation">
                {navConfig.map((item) => (
                  <MobileNavItem key={item.label} item={item} pathname={pathname} />
                ))}

                <div className="mt-6 pt-6 border-t border-earth-800">
                  <a
                    href="/authors/call-for-papers"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors"
                  >
                    Submit Paper
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function MobileNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const isActive = item.href
    ? pathname.startsWith(item.href)
    : item.children?.some((c) => c.href && pathname.startsWith(c.href));

  if (!item.children) {
    return (
      <Link
        href={item.href!}
        className={cn(
          'flex items-center px-4 py-3 rounded-lg text-base font-body font-semibold transition-colors',
          isActive ? 'text-glow-amber bg-earth-900/50' : 'text-earth-300 hover:text-earth-100 hover:bg-earth-800/50'
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        className={cn(
          'w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-body font-semibold transition-colors',
          isActive ? 'text-glow-amber bg-earth-900/50' : 'text-earth-300 hover:text-earth-100 hover:bg-earth-800/50'
        )}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', open ? 'rotate-180' : '')} />
      </button>
      {open && (
        <div className="ml-4 mt-1 border-l-2 border-earth-700 pl-3 flex flex-col gap-1">
          {item.children!.map((child) => (
            <Link
              key={child.label}
              href={child.href!}
              className={cn(
                'px-3 py-2.5 rounded text-sm font-body transition-colors',
                pathname === child.href
                  ? 'text-glow-amber'
                  : 'text-earth-400 hover:text-earth-100'
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
