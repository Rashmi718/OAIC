import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import CommitteeMemberCard from '@/components/sections/CommitteeMemberCard';
import { technicalProgramCommittee } from '@/data/committees';

export const metadata: Metadata = {
  title: 'Technical Program Committee',
  description: 'Meet the technical program committee responsible for reviewing submissions to OAIC 2026.',
};

export default function TechnicalProgramCommitteePage() {
  return (
    <>
      <PageBanner
        title="Technical Program Committee"
        subtitle="Leading experts who review and curate the OAIC 2026 research program."
        breadcrumbs={[{ label: 'Committees' }, { label: 'Technical Program Committee' }]}
      />
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {technicalProgramCommittee.map((member) => (
              <CommitteeMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
