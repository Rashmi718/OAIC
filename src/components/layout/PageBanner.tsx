import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageBanner({ title, subtitle, breadcrumbs }: PageBannerProps) {
  return (
    <section className="relative bg-dark-800 border-b border-earth-800 py-14 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-900/60 to-dark-900" />
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_right,#ffb347,transparent_60%)]" />
      {/* Left gold border accent — code.html pattern */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C5A359] via-glow-amber to-transparent" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-4 text-sm font-mono text-earth-500">
            <Link href="/" className="hover:text-glow-amber transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-earth-700" />
                {crumb.href && i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-glow-amber transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-earth-300">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-earth-100 mb-3 leading-tight">
          {title}
        </h1>
        {/* Gold accent underline — matching code.html border-l accent style */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-0.5 w-20 bg-[#C5A359] rounded-full" />
          <div className="h-0.5 w-6 bg-[#C5A359]/30 rounded-full" />
        </div>
        {subtitle && (
          <p className="font-body text-earth-300 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
