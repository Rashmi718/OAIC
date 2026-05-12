import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import { topics, submissionTypes } from '@/data/callForPapers';
import Badge from '@/components/ui/Badge';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Call for Papers',
  description: 'OAIC 2026 invites original research contributions across all areas of artificial intelligence.',
};

export default function CallForPapersPage() {
  return (
    <>
      <PageBanner
        title="Call for Papers"
        subtitle="OAIC 2026 invites original, unpublished research contributions across all areas of artificial intelligence."
        breadcrumbs={[{ label: 'Authors', href: '/authors/call-for-papers' }, { label: 'Call for Papers' }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          {/* Intro — code.html border-l pattern */}
          <div className="border-l-4 border-l-[#C5A359] pl-8 mb-14 max-w-3xl">
            <p className="font-body text-earth-300 text-lg leading-relaxed">
              The conference solicits contributions that present original and unpublished work on all
              aspects of AI, machine learning, and their applications. All accepted papers will be
              published in the conference proceedings and archived in major academic databases.
            </p>
          </div>

          {/* Topics */}
          <SectionHeading title="Topics of Interest" centered={false} className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {topics.map((t) => (
              <Card key={t.category}>
                <h3 className="font-display font-semibold text-[#C5A359] text-sm mb-3">{t.category}</h3>
                <ul className="flex flex-col gap-1.5">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-earth-300 text-sm font-body">
                      <span className="text-[#C5A359] mt-1 text-xs">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Submission types */}
          <SectionHeading title="Submission Types" centered={false} className="mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {submissionTypes.map((type) => (
              <div key={type.type} className="bg-dark-800 border border-earth-700 rounded-xl p-5 hover:border-[#C5A359] transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#C5A359]/15 flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5 text-[#C5A359]" />
                </div>
                <h3 className="font-display font-semibold text-earth-100 mb-1">{type.type}</h3>
                <Badge variant="amber" className="mb-2 text-xs">{type.pages}</Badge>
                <p className="font-body text-earth-400 text-sm">{type.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded text-base font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors shadow-md"
            >
              Submit via EasyChair →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
