import Link from 'next/link';
import { navConfig } from '@/data/nav';
import { contactInfo } from '@/data/contact';
import { Mail, Phone, MapPin } from 'lucide-react';

const socialIcons = {
  twitter: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  linkedin: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  instagram: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  youtube: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-earth-800 mt-auto" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-3 group" aria-label="OAIC 2026 - Home">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-earth-400 to-glow-amber flex items-center justify-center text-dark-900 font-mono font-bold shadow-glow-amber-sm">
              AI
            </div>
            <div>
              <div className="text-xs font-mono text-earth-500 tracking-widest uppercase">OAIC 2026</div>
              <div className="font-display font-bold text-earth-100 text-sm leading-tight">
                Odisha AI Conference
              </div>
            </div>
          </Link>
          <p className="text-earth-400 text-sm font-body leading-relaxed">
            Advancing artificial intelligence research and innovation in Odisha and across India.
          </p>
          {/* Social icons */}
          <div className="flex gap-3">
            {([
              { key: 'twitter' as const, href: contactInfo.social.twitter, label: 'Twitter' },
              { key: 'linkedin' as const, href: contactInfo.social.linkedin, label: 'LinkedIn' },
              { key: 'instagram' as const, href: contactInfo.social.instagram, label: 'Instagram' },
              { key: 'youtube' as const, href: contactInfo.social.youtube, label: 'YouTube' },
            ] as const).map((s) => (
              <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={`Follow OAIC 2026 on ${s.label}`}
                className="w-9 h-9 rounded-lg bg-earth-800 hover:bg-earth-700 flex items-center justify-center text-earth-400 hover:text-glow-amber transition-all">
                {socialIcons[s.key]}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links col 1 */}
        <div>
          <h3 className="font-display font-semibold text-earth-200 mb-4 text-sm uppercase tracking-wide">Authors</h3>
          <ul className="flex flex-col gap-2.5">
            {navConfig[0].children?.map((item) => (
              <li key={item.label}>
                <Link href={item.href!} className="text-earth-400 hover:text-glow-amber text-sm font-body transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links col 2 */}
        <div>
          <h3 className="font-display font-semibold text-earth-200 mb-4 text-sm uppercase tracking-wide">Conference</h3>
          <ul className="flex flex-col gap-2.5">
            {navConfig.slice(2, 6).map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link href={item.href} className="text-earth-400 hover:text-glow-amber text-sm font-body transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <Link href={item.children?.[0]?.href ?? '#'} className="text-earth-400 hover:text-glow-amber text-sm font-body transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link href="/about/about-us" className="text-earth-400 hover:text-glow-amber text-sm font-body transition-colors">
                About OAIC
              </Link>
            </li>
            <li>
              <Link href="/about/contact" className="text-earth-400 hover:text-glow-amber text-sm font-body transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-semibold text-earth-200 mb-4 text-sm uppercase tracking-wide">Contact</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2 text-earth-400 text-sm font-body">
              <MapPin className="w-4 h-4 text-glow-amber mt-0.5 flex-shrink-0" />
              <span>
                {contactInfo.address.line1}<br />
                {contactInfo.address.line2}<br />
                {contactInfo.address.city}<br />
                {contactInfo.address.country}
              </span>
            </li>
            <li>
              <a href={`mailto:${contactInfo.generalEmail}`} className="flex items-center gap-2 text-earth-400 hover:text-glow-amber text-sm font-body transition-colors">
                <Mail className="w-4 h-4 text-glow-amber" />
                {contactInfo.generalEmail}
              </a>
            </li>
            <li>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-earth-400 hover:text-glow-amber text-sm font-body transition-colors">
                <Phone className="w-4 h-4 text-glow-amber" />
                {contactInfo.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar — matching code.html tertiary-container bottom bar */}
      <div className="bg-earth-900 border-t border-earth-800 py-4 px-6 md:px-8 lg:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-mono text-earth-500">
          <div>© {currentYear} 2026 1st Odisha AI Conference (OAIC). All rights reserved.</div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 justify-center">
            {[
              ['Privacy Policy', '/about/contact'],
              ['Accessibility', '/about/contact'],
              ['Sitemap', '/sitemap.xml'],
              ['Contact & Support', '/about/contact'],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-glow-amber transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
