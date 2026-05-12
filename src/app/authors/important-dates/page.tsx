import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import { importantDates } from '@/data/dates';
import Badge from '@/components/ui/Badge';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Important Dates',
  description: 'Key deadlines for paper submission, notification, camera-ready, and registration for OAIC 2026.',
};

const statusVariantMap = {
  open: 'open',
  closed: 'closed',
  upcoming: 'upcoming',
  extended: 'extended',
} as const;

export default function ImportantDatesPage() {
  return (
    <>
      <PageBanner
        title="Important Dates"
        subtitle="Plan ahead — these deadlines are firm. Mark them in your calendar."
        breadcrumbs={[{ label: 'Authors', href: '/authors/important-dates' }, { label: 'Important Dates' }]}
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <div className="flex flex-col gap-3">
            {importantDates.map((date, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row border border-earth-700 rounded-xl overflow-hidden bg-dark-800 hover:border-[#C5A359] transition-colors group"
              >
                <div className="sm:w-48 flex-shrink-0 bg-earth-800 group-hover:bg-earth-700 flex items-center justify-center px-4 py-5 transition-colors">
                  <div className="flex items-center gap-2 text-[#C5A359] font-mono text-sm font-semibold">
                    <Calendar className="w-4 h-4" />
                    {date.date}
                  </div>
                </div>
                <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 gap-3">
                  <span className="font-body font-semibold text-earth-100">{date.event}</span>
                  <Badge variant={statusVariantMap[date.status]}>
                    {date.status.charAt(0).toUpperCase() + date.status.slice(1)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-dark-800 border border-earth-700 border-l-4 border-l-[#C5A359] rounded-xl p-6">
            <h2 className="font-display font-semibold text-earth-100 mb-2">Note on Deadlines</h2>
            <p className="font-body text-earth-400 text-sm leading-relaxed">
              All deadlines are at <strong className="text-earth-200">11:59 PM AoE (Anywhere on Earth)</strong>.
              Extensions, if any, will be announced on this page and via email to registered authors.
              We strongly encourage early submissions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
