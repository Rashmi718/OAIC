import type { Metadata } from 'next';
import { DM_Serif_Display, Playfair_Display, Nunito, DM_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | OAIC 2026',
    default: '2026 1st Odisha AI Conference (OAIC) — Bhubaneswar, India',
  },
  description:
    'The 2026 1st Odisha AI Conference (OAIC) brings together AI researchers, industry leaders, and innovators in Bhubaneswar, Odisha, India. October 15–17, 2026.',
  keywords: ['OAIC 2026', 'Odisha AI Conference', 'artificial intelligence', 'Bhubaneswar', 'India', 'machine learning'],
  authors: [{ name: 'OAIC 2026 Organizing Committee' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://oaic2026.in',
    siteName: '2026 1st Odisha AI Conference',
    title: '2026 1st Odisha AI Conference (OAIC)',
    description: 'Premier AI conference in Odisha, India. October 15–17, 2026.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 1st Odisha AI Conference (OAIC)',
    description: 'Premier AI conference in Odisha, India. October 15–17, 2026.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${playfair.variable} ${nunito.variable} ${dmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: '2026 1st Odisha AI Conference',
              startDate: '2026-10-15',
              endDate: '2026-10-17',
              location: { '@type': 'Place', name: 'KIIT University, Bhubaneswar, Odisha, India' },
              organizer: { '@type': 'Organization', name: 'OAIC 2026 Organizing Committee' },
              url: 'https://oaic2026.in',
            }),
          }}
        />
      </head>
      <body className="bg-dark-900 text-earth-100 font-body antialiased">
        <Navbar />
        <main id="main-content" className="flex-grow pt-[88px] md:pt-[108px] min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
