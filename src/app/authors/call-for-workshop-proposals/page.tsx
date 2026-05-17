import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import {
  Calendar,
  FileDown,
  Check,

} from 'lucide-react';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Call for Workshop Proposals',
  description:
    'Submit your workshop proposal for OAIC 2026. We welcome industry and academic workshops on AI topics.',
};

const proposalTopics = [
  'Workshop title and acronym',
  'Organiser names, affiliations, and contact details',
  'Workshop scope and topics (500 words max)',
  'Format: half-day or full-day, invited speakers, papers',
  'Target audience and expected attendance',
  'Brief organiser biographies',
  'Workshop website URL (if available)',
  'History of previous editions (if applicable)',
];

const keyDates = [
  { date: 'June 30, 2026', event: 'Workshop Proposal Deadline' },
  { date: 'July 20, 2026', event: 'Acceptance Notification' },
  { date: 'October 15–17, 2026', event: 'Workshop Days' },
];

export default function WorkshopProposalsPage() {
  return (
    <>
      <PageHeader
        title="Call for Workshop Proposals"
        description="Organise a focused workshop at OAIC 2026 on your AI research area or industry application."
        breadcrumbs={[
          {
            href: '/authors/call-for-workshop-proposals',
            label: 'Call for Workshop Proposals',
          },
        ]}
      />
      <Section className="pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 bg-primary-50 border-none border-l-4 border-l-primary-600 rounded-r-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">What is a Workshop?</h3>
            <p className="text-lg md:text-xl text-primary-950 leading-relaxed font-medium">
              Workshops at OAIC 2026 are half-day or full-day focused events
              co-located with the main conference. They provide a platform for
              in-depth discussions on emerging or specialised AI topics,
              bringing together researchers and practitioners with shared
              interests.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SectionHeader
                title="Proposal Guidelines"
                subtitle="What to include"
                className="mb-6"
              />
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
                <ul className="space-y-5">
                  {proposalTopics.map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="mr-4 mt-0.5">
                        <Check className="h-5 w-5 text-primary-400 stroke-[3]" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <SectionHeader
                title="Key Dates"
                subtitle="Timeline"
                className="mb-6"
              />
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  {keyDates.map((d) => (
                    <div key={d.event} className="flex items-start group">
                      <div className="mr-4 mt-1 bg-primary-50 p-3 rounded-full group-hover:bg-primary-100 transition-colors">
                        <Calendar className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-primary-900 text-lg mb-1">{d.event}</p>
                        <p className="font-semibold text-gray-600">
                          {d.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <Button as="a" href="#" className="bg-primary-600 hover:bg-primary-500 text-white text-lg px-8 py-6 shadow-md transition-transform hover:-translate-y-1 rounded-md border-none font-bold">
                Submit Workshop Proposal
              </Button>
              <Button as="a" href="#" variant="outline" className="text-primary-600 border-2 border-primary-600 hover:bg-primary-50 text-lg px-8 py-6 shadow-sm transition-transform hover:-translate-y-1 rounded-md font-bold">
                <FileDown className="mr-3 h-5 w-5" />
                Download Template
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
