import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import SponsorGrid from '@/components/sections/SponsorGrid';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patrons & Exhibitors',
  description: 'Partner with OAIC 2026 — sponsorship and exhibition opportunities.',
};

const tiers = [
  {
    name: 'Platinum',
    price: '₹10,00,000',
    benefits: ['Keynote speaking slot', 'Logo on all materials', 'Booth space (3×3m)', '10 complimentary registrations', 'Social media promotion', 'Logo on conference bag'],
  },
  {
    name: 'Gold',
    price: '₹5,00,000',
    benefits: ['Panel session slot', 'Logo on select materials', 'Booth space (2×2m)', '5 complimentary registrations', 'Social media mention'],
  },
  {
    name: 'Silver',
    price: '₹2,50,000',
    benefits: ['Logo on website & proceedings', 'Booth space (2×2m)', '3 complimentary registrations', 'Program advertisement'],
  },
  {
    name: 'Bronze',
    price: '₹1,00,000',
    benefits: ['Logo on website', '1 complimentary registration', 'Program listing'],
  },
];

const whySponsor = [
  'Reach 500+ AI researchers, practitioners, and decision-makers',
  'Showcase your products to India\'s fastest-growing AI community',
  'Network with leading academics from 20+ institutions',
  'Brand visibility across Odisha\'s thriving tech ecosystem',
  'Recruit top AI talent from the conference attendees',
  'Support the growth of AI research in India',
];

export default function PatronsExhibitorsPage() {
  return (
    <>
      <PageBanner
        title="Patrons & Exhibitors"
        subtitle="Partner with OAIC 2026 and connect with India's AI research community."
        breadcrumbs={[{ label: 'Patrons & Exhibitors' }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          {/* Why sponsor */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="border-l-4 border-l-[#C5A359] pl-8">
              <h2 className="font-display text-2xl font-semibold text-earth-100 mb-4">Why Sponsor OAIC 2026?</h2>
              <ul className="flex flex-col gap-3">
                {whySponsor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-earth-300 font-body text-sm">
                    <CheckCircle className="w-4 h-4 text-[#C5A359] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sponsorship tiers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tiers.map((tier) => (
                <div key={tier.name} className="bg-dark-800 border border-earth-700 rounded-xl p-5 hover:border-[#C5A359] transition-all hover:shadow-card-hover">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display font-semibold text-earth-100">{tier.name}</h3>
                    <span className="text-[#C5A359] font-mono font-bold text-sm">{tier.price}</span>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {tier.benefits.map((b) => (
                      <li key={b} className="text-earth-400 text-xs font-body flex items-start gap-1.5">
                        <span className="text-[#C5A359] mt-0.5">▸</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Current sponsors */}
          <SponsorGrid />

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="#" className="inline-flex items-center gap-2 px-8 py-3 rounded text-sm font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors shadow-md">
              Download Sponsorship Brochure
            </a>
            <a href="mailto:sponsorship@oaic2026.in" className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-body font-semibold border border-earth-600 text-earth-300 hover:border-[#C5A359] transition-colors">
              Contact for Sponsorship
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
