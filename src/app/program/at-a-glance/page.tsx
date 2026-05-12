import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import ScheduleGrid from '@/components/sections/ScheduleGrid';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Program At a Glance',
  description: 'Full 3-day schedule of OAIC 2026 — keynotes, workshops, panels, and social events.',
};

export default function AtAGlancePage() {
  return (
    <>
      <PageBanner
        title="Program At a Glance"
        subtitle="Three days of world-class AI research, workshops, and networking."
        breadcrumbs={[{ label: 'Program' }, { label: 'At a Glance' }]}
      />
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title="Conference Schedule" subtitle="October 15–17, 2026 · KIIT University, Bhubaneswar" />

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { label: 'Keynote', color: 'bg-glow-amber/20 text-glow-amber' },
              { label: 'Workshop', color: 'bg-forest-500/20 text-forest-300' },
              { label: 'Panel / Session', color: 'bg-glow-teal/20 text-glow-teal' },
              { label: 'Break', color: 'bg-earth-700/40 text-earth-400' },
              { label: 'Social', color: 'bg-glow-indigo/20 text-purple-300' },
            ].map((l) => (
              <span key={l.label} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${l.color}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {l.label}
              </span>
            ))}
          </div>

          <ScheduleGrid />
        </div>
      </section>
    </>
  );
}
