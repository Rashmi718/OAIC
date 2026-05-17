import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { topics, submissionTypes } from '@/data/callForPapers';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Button } from '@/components/ui/Button';
import { FileText, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Call for Papers',
  description:
    'OAIC 2026 invites original research contributions across all areas of artificial intelligence.',
};

export default function CallForPapersPage() {
  return (
    <>
      <PageHeader
        title="Call for Papers"
        description="OAIC 2026 invites original, unpublished research contributions across all areas of artificial intelligence."
        breadcrumbs={[
          { href: '/authors/call-for-papers', label: 'Call for Papers' },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-6xl py-6">
          {/* Intro Box */}
          <div className="mb-14 bg-primary-50 border-none border-l-4 border-l-primary-600 rounded-r-xl p-8 shadow-sm">
            <p className="text-lg md:text-xl text-primary-950 leading-relaxed font-medium">
              The conference solicits contributions that present original and
              unpublished work on all aspects of AI, Machine Learning, and
              it is not limited to these topics. All accepted papers will be published in the
              IEEE Xplore .
            </p>
          </div>

          <SectionHeader
            title="Topics of Interest"
            subtitle="We invite submissions on a wide range of topics, including but not limited to:"
          />
          <div className="mb-16 mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <div key={t.category} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-primary-900 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{t.category}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-400 stroke-[3]" />
                        <span className="text-gray-700 font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <SectionHeader
            title="Submission Types"
            subtitle="Choose the format that best fits your contribution."
          />
          <div className="mb-16 mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {submissionTypes.map((type) => (
              <div
                key={type.type}
                className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:border-primary-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 group-hover:bg-primary-400 transition-colors duration-300">
                  <FileText className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{type.type}</h3>
                <div className="mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {type.pages}
                  </span>
                </div>
                <p className="text-gray-600 font-medium flex-1">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pb-8">
            <Button as="a" href="#" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-500 text-white text-lg px-8 py-6 shadow-md transition-transform hover:-translate-y-1 rounded-md border-none font-bold">
              Submit via EasyChair
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
