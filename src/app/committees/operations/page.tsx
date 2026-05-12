import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import CommitteeMemberCard from '@/components/sections/CommitteeMemberCard';
import { operationsCommittee } from '@/data/committees';

export const metadata: Metadata = { title: 'Operations Committee', description: 'OAIC 2026 Operations Committee.' };

export default function OperationsCommitteePage() {
  return (
    <>
      <PageBanner title="Operations Committee" subtitle="The team managing logistics, venues, and day-to-day conference operations." breadcrumbs={[{ label: 'Committees' }, { label: 'Operations Committee' }]} />
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {operationsCommittee.map((member) => <CommitteeMemberCard key={member.name} member={member} />)}
          </div>
        </div>
      </section>
    </>
  );
}
