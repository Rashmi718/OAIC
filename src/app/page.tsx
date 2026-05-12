import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import DatesTicker from '@/components/sections/DatesTicker';
import StatsBar from '@/components/sections/StatsBar';
import TimelineSection from '@/components/sections/TimelineSection';
import SpeakerCard from '@/components/sections/SpeakerCard';
import VenueSection from '@/components/sections/VenueSection';
import SponsorGrid from '@/components/sections/SponsorGrid';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Divider from '@/components/ui/Divider';
import { keynoteSpeakers } from '@/data/speakers';
import { topics } from '@/data/callForPapers';
import Link from 'next/link';
import { Megaphone } from 'lucide-react';

export const metadata: Metadata = {
  title: '2026 1st Odisha AI Conference (OAIC) — Bhubaneswar, India',
  description:
    'OAIC 2026 is the first dedicated AI conference in Odisha, India. Join researchers, industry leaders, and innovators in Bhubaneswar, October 15–17, 2026.',
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Key Dates Ticker */}
      <DatesTicker />

      {/* 3. News & Announcements — code.html campaign/announcement card */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16 py-10">
        <div className="bg-dark-800 border border-earth-700 border-l-4 border-l-[#C5A359] rounded-xl p-6 md:p-8 shadow-card">
          <h2 className="font-display text-xl font-semibold text-earth-100 mb-3 flex items-center gap-3">
            <Megaphone className="w-5 h-5 text-[#C5A359]" />
            News and Announcements
          </h2>
          <a
            href="/authors/call-for-papers"
            className="font-display text-lg text-[#C5A359] hover:text-glow-amber hover:underline transition-colors block"
          >
            OAIC 2026 Call for Papers Now Open — Submit Your Research
          </a>
          <p className="text-earth-400 text-sm font-body mt-2">
            Paper submission deadline: July 15, 2026. We welcome full papers, short papers, industry papers, and demos.
          </p>
        </div>
      </section>

      {/* 4. About Conference — code.html welcome section with gold border-l */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="border-l-4 border-l-[#C5A359] pl-8 py-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-100 mb-5 leading-tight">
              Welcome to OAIC 2026!
            </h2>
            <p className="font-body text-earth-300 text-lg leading-relaxed mb-5">
              The 2026 1st Odisha AI Conference (OAIC) is a premier platform for AI researchers,
              industry practitioners, and policymakers across India and beyond. Hosted in the vibrant
              city of Bhubaneswar, OAIC brings together the brightest minds in artificial intelligence
              to share groundbreaking research, foster collaboration, and shape the future of AI.
            </p>
            <p className="font-body text-earth-400 leading-relaxed mb-6">
              From large language models to AI for social good, from healthcare to agriculture — OAIC
              2026 covers the full spectrum of AI research and applications with a special focus on
              India&apos;s unique opportunities and challenges.
            </p>
            <Link
              href="/about/about-us"
              className="inline-flex items-center gap-2 text-[#C5A359] font-body font-semibold hover:underline text-sm"
            >
              About OAIC 2026 →
            </Link>
          </div>
          {/* Stats summary card */}
          <div className="bg-dark-800 border border-earth-700 rounded-xl p-8 space-y-5">
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: 'Conference Days', value: '3' },
                { label: 'Technical Tracks', value: '5+' },
                { label: 'Expected Papers', value: '200+' },
                { label: 'Countries', value: '20+' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-serif text-3xl font-bold text-[#C5A359]">{s.value}</div>
                  <div className="text-earth-500 text-xs font-mono mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <Divider />
            <p className="text-earth-400 text-sm font-body text-center">October 15–17, 2026 · Bhubaneswar</p>
          </div>
        </div>
      </section>

      {/* 5. Stats Bar */}
      <StatsBar />

      {/* 6. Call for Papers Teaser */}
      <section className="section-padding bg-dark-900">
        <div className="container-wide">
          <SectionHeading
            title="Call for Papers"
            subtitle="We invite submissions across all major AI research areas and applications."
          />
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {topics.flatMap((t) => t.items).slice(0, 16).map((topic) => (
              <Badge key={topic} variant="earth" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/authors/call-for-papers"
              className="inline-flex items-center gap-2 px-8 py-3 rounded text-sm font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors shadow-md"
            >
              View Full Call for Papers →
            </Link>
          </div>
        </div>
      </section>

      <Divider />

      {/* 7. Keynote Speakers Teaser */}
      <section className="section-padding bg-dark-900">
        <div className="container-wide">
          <SectionHeading
            title="Keynote Speakers"
            subtitle="World-class researchers and industry leaders sharing their vision for the future of AI."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {keynoteSpeakers.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/program/at-a-glance"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-sm font-body font-semibold border border-[#C5A359] text-[#C5A359] hover:bg-[#C5A359]/10 transition-colors"
            >
              View Full Program →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Important Dates Timeline */}
      <TimelineSection />

      {/* 9. Venue */}
      <VenueSection />

      {/* 10. Sponsors */}
      <SponsorGrid />
    </>
  );
}
