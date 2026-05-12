import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import CommitteeMemberCard from '@/components/sections/CommitteeMemberCard';
import { industryForumsCommittee } from '@/data/committees';

export const metadata: Metadata = { title: 'Industry Forums & Exhibition Committee', description: 'OAIC 2026 Industry Forums and Exhibition Committee.' };

export default function IndustryForumsCommitteePage() {
  return (
    <>
      <PageBanner title="Industry Forums & Exhibition Committee" subtitle="Connecting academia and industry through exhibitions, forums, and networking events." breadcrumbs={[{ label: 'Committees' }, { label: 'Industry Forums Committee' }]} />
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {industryForumsCommittee.map((member) => <CommitteeMemberCard key={member.name} member={member} />)}
          </div>
        </div>
      </section>
    </>
  );
}
