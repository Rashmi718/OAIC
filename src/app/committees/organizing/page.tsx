import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import CommitteeMemberCard from '@/components/sections/CommitteeMemberCard';
import { organizingCommittee } from '@/data/committees';

export const metadata: Metadata = {
  title: 'Organizing Committee',
  description: 'Meet the organizing committee of OAIC 2026.',
};

export default function OrganizingCommitteePage() {
  return (
    <>
      <PageBanner
        title="Organizing Committee"
        subtitle="The dedicated team working to make OAIC 2026 a world-class conference."
        breadcrumbs={[{ label: 'Committees' }, { label: 'Organizing Committee' }]}
      />
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {organizingCommittee.map((member) => (
              <CommitteeMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
