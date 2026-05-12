import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';

export const metadata: Metadata = {
  title: 'About OAIC 2026',
  description: 'Learn about the 2026 1st Odisha AI Conference — its vision, mission, and organizing institutions.',
};

export default function AboutUsPage() {
  return (
    <>
      <PageBanner
        title="About OAIC 2026"
        subtitle="India's premier AI conference, rooted in Odisha's rich intellectual tradition."
        breadcrumbs={[{ label: 'About' }, { label: 'About Us' }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="border-l-4 border-l-[#C5A359] pl-8 mb-8">
                <h2 className="font-display text-2xl font-semibold text-earth-100 mb-4">Our Vision</h2>
                <p className="font-body text-earth-300 leading-relaxed text-lg">
                  To establish Odisha as a leading hub for artificial intelligence research and
                  innovation in India, connecting regional talent with global AI leadership.
                </p>
              </div>

              <div className="bg-dark-800 border border-earth-700 border-l-4 border-l-[#C5A359] rounded-xl p-6 mb-8">
                <blockquote className="font-display text-xl text-earth-200 italic leading-relaxed">
                  &ldquo;AI is not just a technology — it is a means to uplift communities, preserve cultures,
                  and solve the challenges unique to our region and our time.&rdquo;
                </blockquote>
                <cite className="font-mono text-earth-500 text-sm mt-3 block">— OAIC 2026 Mission Statement</cite>
              </div>

              <div>
                <h3 className="font-display font-semibold text-earth-100 mb-3">About the Conference</h3>
                <p className="font-body text-earth-400 leading-relaxed mb-4">
                  The 2026 1st Odisha AI Conference (OAIC) is a pioneering initiative to establish
                  Odisha as a globally recognized center for AI research. Organized by leading academic
                  institutions from across Odisha, OAIC brings together researchers, industry practitioners,
                  policymakers, and students for three days of intensive knowledge exchange.
                </p>
                <p className="font-body text-earth-400 leading-relaxed">
                  With a focus on both cutting-edge AI research and its practical applications in
                  Indian contexts — from agriculture to healthcare, from vernacular NLP to smart governance —
                  OAIC reflects both global ambitions and local responsibilities.
                </p>
              </div>
            </div>

            {/* Organizer institutions */}
            <div>
              <h3 className="font-display font-semibold text-earth-100 mb-6">Organizing Institutions</h3>
              <div className="flex flex-col gap-4">
                {[
                  { name: 'KIIT University', desc: 'A leading deemed university in Bhubaneswar with 30,000+ students across engineering, management, and sciences.', role: 'Lead Organizer' },
                  { name: 'IIIT Bhubaneswar', desc: 'Indian Institute of Information Technology Bhubaneswar — a premier institution for CS and IT research.', role: 'Technical Co-organizer' },
                  { name: 'NIT Rourkela', desc: 'National Institute of Technology, Rourkela — one of India\'s top engineering institutions.', role: 'Program Co-organizer' },
                  { name: 'C.V. Raman Global University', desc: 'A multi-disciplinary university with strong industry connections across Odisha.', role: 'Co-organizer' },
                ].map((inst) => (
                  <div key={inst.name} className="bg-dark-800 border border-earth-700 rounded-xl p-5 hover:border-[#C5A359] transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-display font-semibold text-earth-100">{inst.name}</h4>
                      <span className="text-xs font-mono text-[#C5A359] bg-[#C5A359]/10 px-2 py-0.5 rounded">{inst.role}</span>
                    </div>
                    <p className="font-body text-earth-400 text-sm leading-relaxed">{inst.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
