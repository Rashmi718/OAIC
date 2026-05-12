import { MapPin, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

export default function VenueSection() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map / Image placeholder */}
          <div className="rounded-xl overflow-hidden border border-earth-700 shadow-card bg-dark-800 aspect-video flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-earth-900 to-dark-800" />
            {/* Simulated map placeholder */}
            <div className="relative z-10 flex flex-col items-center gap-3 text-center px-8">
              <div className="w-16 h-16 rounded-full bg-[#C5A359]/20 border border-[#C5A359]/40 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#C5A359]" />
              </div>
              <p className="font-display font-semibold text-earth-200 text-lg">KIIT University</p>
              <p className="font-mono text-earth-400 text-sm">Bhubaneswar, Odisha, India</p>
              <a
                href="https://maps.google.com/?q=KIIT+University+Bhubaneswar"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-[#C5A359] hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Content — code.html border-l-[#C5A359] pattern */}
          <div className="border-l-4 border-[#C5A359] pl-8 py-4">
            <SectionHeading title="The Venue" subtitle="" centered={false} />
            <h3 className="font-display text-xl font-semibold text-glow-amber mb-1">KIIT University</h3>
            <p className="font-body text-earth-400 text-sm mb-5">Bhubaneswar, Odisha, India — October 15–17, 2026</p>
            <p className="font-body text-earth-300 leading-relaxed mb-6">
              Bhubaneswar, the &ldquo;Temple City of India,&rdquo; is also one of the fastest-growing tech hubs in
              eastern India. As the state capital of Odisha, it blends rich cultural heritage with a modern
              IT ecosystem, making it the perfect backdrop for India&apos;s first dedicated AI conference.
            </p>
            <p className="font-body text-earth-400 text-sm leading-relaxed mb-6">
              KIIT University&apos;s world-class campus facilities host the conference, with state-of-the-art
              auditoriums, seminar halls, and exhibition spaces just minutes from the city center.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/travel/attractions"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors shadow-sm"
              >
                Explore Bhubaneswar
              </Link>
              <Link
                href="/travel/visa"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold border border-earth-600 text-earth-300 hover:border-[#C5A359] hover:text-earth-100 transition-colors"
              >
                Visa Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
