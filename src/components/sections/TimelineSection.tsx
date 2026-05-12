import Link from 'next/link';
import { importantDates } from '@/data/dates';
import Badge from '@/components/ui/Badge';
import SectionHeading from '@/components/ui/SectionHeading';
import { Calendar } from 'lucide-react';

const statusVariantMap = {
  open: 'open',
  closed: 'closed',
  upcoming: 'upcoming',
  extended: 'extended',
} as const;

export default function TimelineSection() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="container-wide">
        <SectionHeading
          title="Important Dates"
          subtitle="Mark your calendar — these deadlines are critical for your participation."
        />

        <div className="flex flex-col gap-3 max-w-3xl mx-auto">
          {importantDates.map((date, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row border border-earth-700 rounded-xl overflow-hidden bg-dark-800 hover:border-[#C5A359] transition-colors group"
            >
              {/* Date column — code.html date sidebar pattern */}
              <div className="sm:w-44 flex-shrink-0 bg-earth-800 group-hover:bg-earth-700 flex items-center justify-center px-4 py-4 transition-colors">
                <div className="flex items-center gap-2 text-glow-amber font-mono text-sm font-semibold whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  {date.date}
                </div>
              </div>
              {/* Event column */}
              <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 py-4 gap-3">
                <span className="font-body font-semibold text-earth-100">{date.event}</span>
                <Badge variant={statusVariantMap[date.status]}>
                  {date.status.charAt(0).toUpperCase() + date.status.slice(1)}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/authors/important-dates"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-sm font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors shadow-sm"
          >
            View All Dates →
          </Link>
        </div>
      </div>
    </section>
  );
}
