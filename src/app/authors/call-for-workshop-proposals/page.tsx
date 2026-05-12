import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import { Calendar, FileDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Call for Industry Workshop Proposals',
  description: 'Submit your workshop proposal for OAIC 2026. We welcome industry and academic workshops on AI topics.',
};

export default function WorkshopProposalsPage() {
  return (
    <>
      <PageBanner
        title="Call for Industry Workshop Proposals"
        subtitle="Organise a focused workshop at OAIC 2026 on your AI research area or industry application."
        breadcrumbs={[{ label: 'Authors' }, { label: 'Call for Workshop Proposals' }]}
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">

          <div className="border-l-4 border-l-[#C5A359] pl-8 mb-12">
            <h2 className="font-display text-2xl font-semibold text-earth-100 mb-3">What is a Workshop?</h2>
            <p className="font-body text-earth-300 leading-relaxed">
              Workshops at OAIC 2026 are half-day or full-day focused events co-located with the main
              conference. They provide a platform for in-depth discussions on emerging or specialised AI
              topics, bringing together researchers and practitioners with shared interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dark-800 border border-earth-700 rounded-xl p-6">
              <h3 className="font-display font-semibold text-[#C5A359] mb-4">Proposal Format</h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  'Workshop title and acronym',
                  'Organiser names, affiliations, and contact details',
                  'Workshop scope and topics (500 words max)',
                  'Format: half-day or full-day, invited speakers, papers',
                  'Target audience and expected attendance',
                  'Brief organiser biographies',
                  'Workshop website URL (if available)',
                  'History of previous editions (if applicable)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-earth-300 text-sm font-body">
                    <span className="text-[#C5A359] mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-800 border border-earth-700 rounded-xl p-6">
              <h3 className="font-display font-semibold text-[#C5A359] mb-4">Key Dates</h3>
              <div className="flex flex-col gap-3">
                {[
                  { date: 'June 30, 2026', event: 'Workshop Proposal Deadline' },
                  { date: 'July 20, 2026', event: 'Acceptance Notification' },
                  { date: 'August 15, 2026', event: 'Workshop Paper Deadline' },
                  { date: 'September 15, 2026', event: 'Workshop Camera-Ready' },
                  { date: 'Oct 15–17, 2026', event: 'Workshop Days' },
                ].map((d) => (
                  <div key={d.event} className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-[#C5A359] flex-shrink-0" />
                    <span className="text-[#C5A359] font-mono w-36 flex-shrink-0">{d.date}</span>
                    <span className="text-earth-300 font-body">{d.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded text-sm font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors shadow-md"
            >
              Submit Workshop Proposal →
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-body font-semibold border border-earth-600 text-earth-300 hover:border-[#C5A359] hover:text-earth-100 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              Download Template
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
