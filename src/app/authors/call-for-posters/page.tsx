import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';

export const metadata: Metadata = {
  title: 'Call for Poster Presentations',
  description: 'Submit your poster abstract for OAIC 2026. Share your work-in-progress and get feedback from the community.',
};

export default function CallForPostersPage() {
  return (
    <>
      <PageBanner
        title="Call for Poster Presentations"
        subtitle="Share your research in progress and engage directly with the AI community."
        breadcrumbs={[{ label: 'Authors' }, { label: 'Call for Poster Presentations' }]}
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <div className="border-l-4 border-l-[#C5A359] pl-8 mb-12">
            <h2 className="font-display text-2xl font-semibold text-earth-100 mb-3">About Poster Presentations</h2>
            <p className="font-body text-earth-300 leading-relaxed">
              Poster presentations at OAIC 2026 offer an excellent opportunity to present your early-stage
              or work-in-progress research to a diverse audience of AI researchers and practitioners.
              The interactive format encourages direct discussion and valuable feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dark-800 border border-earth-700 rounded-xl p-6">
              <h3 className="font-display font-semibold text-[#C5A359] mb-4">Poster Format Requirements</h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  'Size: A0 Portrait (841 × 1189 mm)',
                  'Language: English',
                  'Include: Title, authors, abstract, methodology, results',
                  'QR code linking to paper/preprint (optional)',
                  'High-contrast colours for readability',
                  'Font size: minimum 24pt for body text',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-earth-300 text-sm font-body">
                    <span className="text-[#C5A359] mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-800 border border-earth-700 rounded-xl p-6">
              <h3 className="font-display font-semibold text-[#C5A359] mb-4">Submission Instructions</h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  'Submit a 2–4 page extended abstract',
                  'IEEE double-column format required',
                  'Submit via EasyChair portal',
                  'Include "Poster:" prefix in the title',
                  'Accepted posters receive participation certificate',
                  'Best Poster Award presented at closing ceremony',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-earth-300 text-sm font-body">
                    <span className="text-[#C5A359] mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-dark-800 border border-earth-700 border-l-4 border-l-[#C5A359] rounded-xl p-6 mb-8">
            <h3 className="font-display font-semibold text-earth-100 mb-2">Key Date</h3>
            <p className="text-earth-300 font-body">
              Poster Submission Deadline: <span className="text-[#C5A359] font-mono font-semibold">August 1, 2026</span>
            </p>
          </div>

          <div className="flex justify-center">
            <a href="#" className="inline-flex items-center gap-2 px-8 py-3 rounded text-sm font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors shadow-md">
              Submit Poster Abstract →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
