import type { Metadata } from 'next';
import { Inter, Source_Serif_4, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-serif',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | OAIC 2026',
    default: '1st Odisha AI Conference (OAIC) 2026',
  },
  description:
    'The 2026 1st Odisha AI Conference (OAIC) is a premier platform for exchanging ideas and presenting research findings in AI. Join us in Bhubaneswar, India, December 19-20, 2026.',
  keywords: ['OAIC 2026', 'Odisha AI Conference', 'Artificial Intelligence', 'Bhubaneswar', 'SOA University'],
  authors: [{ name: "Siksha 'O' Anusandhan" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oaic2026.example.com/',
    siteName: 'OAIC 2026',
    title: '1st Odisha AI Conference (OAIC) 2026',
    description: 'Premier AI conference hosted at SOA University, Bhubaneswar, India. December 19-20, 2026.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '1st Odisha AI Conference (OAIC) 2026',
    description: 'Premier AI conference hosted at SOA University, Bhubaneswar, India. December 19-20, 2026.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sourceSerif.variable} ${robotoMono.variable}`}
    >
      <head>
        {/* Schema.org for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: '1st Odisha AI Conference (OAIC) 2026',
              startDate: '2026-12-19',
              endDate: '2026-12-20',
              location: { '@type': 'Place', name: "ITER, Siksha 'O' Anusandhan", address: 'Bhubaneswar, Odisha, India' },
              organizer: { '@type': 'Organization', name: "Siksha 'O' Anusandhan" },
              url: 'https://oaic2026.example.com/',
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-800 font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
