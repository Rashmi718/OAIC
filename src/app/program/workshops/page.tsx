import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import WorkshopCard from '@/components/sections/WorkshopCard';
import { workshops } from '@/data/program';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Workshops',
  description: 'Co-located workshops at OAIC 2026 covering hands-on AI topics.',
};

export default function WorkshopsPage() {
  return (
    <>
      <PageBanner
        title="Workshops"
        subtitle="Intensive, focused workshops on cutting-edge AI topics, co-located with the main conference."
        breadcrumbs={[{ label: 'Program' }, { label: 'Workshops' }]}
      />
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title="Co-located Workshops" subtitle="Hands-on sessions led by experts in their fields." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((w) => <WorkshopCard key={w.id} workshop={w} />)}
          </div>
        </div>
      </section>
    </>
  );
}
