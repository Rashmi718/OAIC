import { sponsors } from '@/data/sponsors';
import type { Sponsor } from '@/types';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';

const tierOrder: Sponsor['tier'][] = ['platinum', 'gold', 'silver', 'bronze'];
const tierLabels: Record<Sponsor['tier'], string> = {
  platinum: 'Platinum',
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  exhibitor: 'Exhibitor',
};

export default function SponsorGrid() {
  return (
    <section className="section-padding bg-dark-800 border-t border-earth-800">
      <div className="container-wide">
        <SectionHeading
          title="Sponsors & Patrons"
          subtitle="We are grateful to our supporters who make OAIC 2026 possible."
        />

        <div className="flex flex-col gap-10">
          {tierOrder.map((tier) => {
            const tierSponsors = sponsors.filter((s) => s.tier === tier);
            if (tierSponsors.length === 0) return null;
            return (
              <div key={tier}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px flex-1 bg-earth-800" />
                  <Badge variant="amber">{tierLabels[tier]}</Badge>
                  <div className="h-px flex-1 bg-earth-800" />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {tierSponsors.map((sponsor) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.website ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${sponsor.name} website`}
                      className="flex items-center justify-center bg-dark-700 border border-earth-700 hover:border-[#C5A359] rounded-xl px-8 py-5 min-w-[160px] transition-all hover:shadow-glow-amber-sm group"
                    >
                      <span className="font-display font-semibold text-earth-300 group-hover:text-earth-100 text-sm text-center transition-colors">
                        {sponsor.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/patrons-exhibitors"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-sm font-body font-semibold border border-[#C5A359] text-[#C5A359] hover:bg-[#C5A359]/10 transition-colors"
          >
            Become a Patron →
          </Link>
        </div>
      </div>
    </section>
  );
}
