import Link from 'next/link';
import Image from 'next/image';
import { X as Twitter, Briefcase as Linkedin, MessageSquare as Facebook, PlaySquare as Youtube, Camera as Instagram, Globe, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const footerNav = {
  program: [
    { label: 'Workshops', href: '/program/workshops' },
    { label: 'Tutorials', href: '#' },
    { label: 'Keynotes', href: '#' },
    { label: 'Panels', href: '#' },
  ],
  committees: [
    { label: 'Organizing', href: '/committees/organizing' },
    { label: 'Technical Program', href: '/committees/technical-program' },
  ],
  about: [
    { label: 'About OAIC', href: '/about/about-us' },
    { label: 'Siksha \'O\' Anusandhan', href: 'https://www.soa.ac.in/' },
  ],
  contact: [
    { label: 'Contact Us', href: '/about/contact' },
    { label: 'Venue', href: '/travel/attractions' },
  ],
};

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#08283C] text-white overflow-hidden" role="contentinfo">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0C527D] rounded-full blur-[150px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#3A8EC2] rounded-full blur-[120px] -ml-48 -mb-48 opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-10"></div>
      </div>

      {/* Main Footer Section */}
      <div className="relative pt-8 pb-5">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">

            {/* Branding Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-3">
                <Link href="/" className="inline-block group">
                  <Image src="/images/logo.png" alt="OAIC 2026 Logo" className="h-12 w-auto brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100" width={130} height={42} priority />
                </Link>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#3A8EC2] font-bold">
                  <Globe className="w-3 h-3" />
                  Bhubaneswar, India / 2026
                </div>
              </div>

              <div className="space-y-3">
                <Link href="/authors/submission-guidelines" className="group inline-flex items-center gap-4 py-3 px-6 border border-white/10 hover:border-[#aad5f0] hover:bg-white/5 transition-all duration-500">
                  <span className="text-[12px] uppercase tracking-[0.12em] text-[#aad5f0] font-bold">Submit a Paper</span>
                  <ArrowUpRight className="w-3 text-[#aad5f0] h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <p className="text-[12px] text-gray-400 max-w-xs leading-relaxed italic opacity-80">
                  2026 1st Odisha AI Conference
                </p>
              </div>
            </div>

            {/* Navigation Columns */}
            {Object.entries(footerNav).map(([key, links]) => (
              <div key={key} className="space-y-5">
                <div className="relative inline-block">
                  <h3 className="text-[14px] uppercase tracking-[0.12em] text-[#aad5f0] font-bold">{key}</h3>
                  <div className="absolute -bottom-1 left-0 w-4 h-0.5 bg-white/20"></div>
                </div>
                <ul className="space-y-2.5">
                  {links.map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[14px] text-gray-400 hover:text-white transition-all duration-300 flex items-center group">
                        <span className="w-0 group-hover:w-3 h-px bg-[#3A8EC2] mr-0 group-hover:mr-1.5 transition-all duration-300"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social & Meta Bar */}
      <div className="relative border-t border-white/5 py-3">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex gap-4">
            {socialLinks.map(social => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3A8EC2] hover:bg-white/5 transition-all duration-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-[12px] uppercase tracking-[0.12em] font-bold text-gray-500">
            <Link href="#" className="hover:text-[#aad5f0] transition-colors">Accessibility</Link>
            <Link href="#" className="hover:text-[#aad5f0] transition-colors">Sitemap</Link>
            <Link href="#" className="hover:text-[#aad5f0] transition-colors">Contact & Support</Link>
            <Link href="#" className="hover:text-[#aad5f0] transition-colors">Home</Link>
          </div>
        </div>
      </div>

      {/* Final Institutional Bar */}
      <div className="relative bg-black/15 border-t border-white/5 py-3">
        <div className="container-wide flex flex-col lg:flex-row justify-between items-center gap-2 text-[11.5px] uppercase tracking-[0.04em] text-gray-500 font-medium">
          <p>&copy; {currentYear} Siksha &apos;O&apos; Anusandhan &amp; OAIC – All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-0.5 h-0.5 rounded-full bg-gray-700"></div>
            <span>Published by IEEE</span>
            <div className="w-0.5 h-0.5 rounded-full bg-gray-700"></div>
            <span>Bhubaneswar, Odisha</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


