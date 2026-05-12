'use client';

import PageBanner from '@/components/layout/PageBanner';
import Tabs from '@/components/ui/Tabs';
import { FileDown } from 'lucide-react';

function GeneralGuidelines() {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-l-[#C5A359] pl-6">
        <p className="font-body text-earth-300 leading-relaxed">
          All papers submitted to OAIC 2026 must be original, unpublished work not currently under
          review at any other venue. Submissions must be in English and comply with the IEEE double-column
          conference format.
        </p>
      </div>
      <ul className="flex flex-col gap-3">
        {[
          'Papers must not exceed the specified page limits (excluding references)',
          'All submissions will undergo double-blind peer review',
          'Authors must anonymize their submissions (remove author names, affiliations, acknowledgements)',
          'Self-citations should be minimized and written in the third person',
          'Submitted papers must not be under review elsewhere simultaneously',
          'At least one author must register and present the paper at the conference',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 text-earth-300 text-sm font-body bg-dark-800 border border-earth-800 rounded-lg px-4 py-3">
            <span className="text-[#C5A359] font-bold mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FormattingGuidelines() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { label: 'Format', value: 'IEEE double-column, A4 paper' },
          { label: 'Full Paper Length', value: '8–10 pages (+ 2 for references)' },
          { label: 'Short Paper Length', value: '4–6 pages (+ 1 for references)' },
          { label: 'Font', value: 'Times New Roman, 10pt' },
          { label: 'File Format', value: 'PDF only' },
          { label: 'File Size Limit', value: '10 MB maximum' },
        ].map((spec) => (
          <div key={spec.label} className="bg-dark-800 border border-earth-700 rounded-xl px-5 py-4 flex justify-between items-center">
            <span className="font-mono text-earth-500 text-sm">{spec.label}</span>
            <span className="font-body font-semibold text-earth-200 text-sm">{spec.value}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors">
          <FileDown className="w-4 h-4" /> LaTeX Template
        </a>
        <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-body font-semibold border border-earth-600 text-earth-300 hover:border-[#C5A359] transition-colors">
          <FileDown className="w-4 h-4" /> Word Template
        </a>
      </div>
    </div>
  );
}

function EthicsPolicy() {
  return (
    <div className="space-y-5">
      <div className="border-l-4 border-l-[#C5A359] pl-6">
        <p className="font-body text-earth-300 leading-relaxed">
          OAIC 2026 is committed to the highest standards of publication ethics and takes all
          forms of misconduct seriously, including plagiarism, data fabrication, and improper authorship.
        </p>
      </div>
      {[
        { title: 'Plagiarism', desc: 'All submissions are checked using plagiarism detection software. Papers with significant overlap with published work will be rejected.' },
        { title: 'Authorship', desc: 'All listed authors must have made a substantial contribution to the work. Ghostwriting and honorary authorship are not permitted.' },
        { title: 'AI-Assisted Writing', desc: 'Authors must disclose use of AI writing tools. AI tools may not be listed as authors.' },
        { title: 'Data Integrity', desc: 'Authors must preserve research data and provide access upon reasonable request by reviewers.' },
      ].map((item) => (
        <div key={item.title} className="bg-dark-800 border border-earth-700 rounded-xl p-5">
          <h4 className="font-display font-semibold text-[#C5A359] mb-2">{item.title}</h4>
          <p className="font-body text-earth-400 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

function CameraReady() {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-l-[#C5A359] pl-6">
        <p className="font-body text-earth-300 leading-relaxed">
          After acceptance, authors must prepare and submit the camera-ready version by September 10, 2026.
        </p>
      </div>
      <ul className="flex flex-col gap-3">
        {[
          'Address all reviewer comments in the final version',
          'Include author names and affiliations (no longer anonymized)',
          'Add acknowledgements section if applicable',
          'Ensure PDF is IEEE Xplore compliant (use IEEE PDF eXpress)',
          'Submit signed IEEE Copyright Form',
          'Upload via the submission system by the deadline',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 text-earth-300 text-sm font-body bg-dark-800 border border-earth-800 rounded-lg px-4 py-3">
            <span className="text-[#C5A359] font-bold mt-0.5">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SubmissionGuidelinesPage() {
  const tabs = [
    { label: 'General Guidelines', content: <GeneralGuidelines /> },
    { label: 'Formatting', content: <FormattingGuidelines /> },
    { label: 'Ethics Policy', content: <EthicsPolicy /> },
    { label: 'Camera-Ready', content: <CameraReady /> },
  ];

  return (
    <>
      <PageBanner
        title="Submission Guidelines"
        subtitle="Everything you need to know to prepare and submit your paper to OAIC 2026."
        breadcrumbs={[{ label: 'Authors' }, { label: 'Submission Guidelines' }]}
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Tabs tabs={tabs} />
        </div>
      </section>
    </>
  );
}
