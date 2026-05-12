import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import { Trophy, Zap, Code2, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hackathons',
  description: 'Join the OAIC 2026 Hackathon — build AI solutions for real-world problems in Odisha and India.',
};

const timeline = [
  { icon: <Lightbulb className="w-5 h-5" />, label: 'Registration', date: 'July 1, 2026', desc: 'Team registration opens. Teams of 2–4.' },
  { icon: <Code2 className="w-5 h-5" />, label: 'Ideation Phase', date: 'October 14, 2026', desc: 'Submit your project idea and team details.' },
  { icon: <Zap className="w-5 h-5" />, label: 'Hacking Begins', date: 'October 15, 2026', desc: '24-hour build sprint begins at conference.' },
  { icon: <Trophy className="w-5 h-5" />, label: 'Demo Day & Awards', date: 'October 17, 2026', desc: 'Present to judges. Top 3 teams win prizes.' },
];

const prizes = [
  { rank: '🥇 1st Place', amount: '₹1,00,000', desc: 'Cash prize + incubation support' },
  { rank: '🥈 2nd Place', amount: '₹50,000', desc: 'Cash prize + mentorship' },
  { rank: '🥉 3rd Place', amount: '₹25,000', desc: 'Cash prize + certificates' },
];

export default function HackathonsPage() {
  return (
    <>
      <PageBanner
        title="Hackathons"
        subtitle="Build AI solutions for real-world challenges in 24 hours."
        breadcrumbs={[{ label: 'Program' }, { label: 'Hackathons' }]}
      />
      <section className="section-padding">
        <div className="container-wide">
          {/* Theme */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#C5A359]/15 border border-[#C5A359]/30 text-[#C5A359] text-sm font-mono mb-4">
              Hackathon Theme 2026
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-earth-100 mb-4">
              AI for <span className="text-gradient-amber">Odisha</span>
            </h2>
            <p className="font-body text-earth-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Build AI-powered solutions addressing real challenges in agriculture, healthcare,
              cultural heritage preservation, or rural development in Odisha.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-14">
            <h3 className="font-display text-2xl font-semibold text-earth-100 mb-8 text-center">Hackathon Timeline</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {timeline.map((step, i) => (
                <div key={i} className="relative bg-dark-800 border border-earth-700 rounded-xl p-6 hover:border-[#C5A359] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A359]/15 flex items-center justify-center text-[#C5A359] mb-4">
                    {step.icon}
                  </div>
                  <div className="text-[#C5A359] font-mono text-xs mb-1">{step.date}</div>
                  <h4 className="font-display font-semibold text-earth-100 mb-2">{step.label}</h4>
                  <p className="font-body text-earth-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prizes */}
          <div className="mb-12">
            <h3 className="font-display text-2xl font-semibold text-earth-100 mb-8 text-center">Prize Pool — ₹1,75,000</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
              {prizes.map((prize) => (
                <div key={prize.rank} className="bg-dark-800 border border-earth-700 rounded-xl p-6 text-center hover:border-[#C5A359] hover:shadow-glow-amber-sm transition-all">
                  <div className="font-display font-bold text-earth-100 mb-2 text-lg">{prize.rank}</div>
                  <div className="text-[#C5A359] font-mono text-2xl font-bold mb-2">{prize.amount}</div>
                  <p className="text-earth-500 text-xs font-body">{prize.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 rounded text-base font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors shadow-md">
              Register Your Team →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
