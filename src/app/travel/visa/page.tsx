import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Visa Information',
  description: 'Visa requirements and application guide for attending OAIC 2026 in Bhubaneswar, India.',
};

const visaCategories = [
  { country: 'USA, UK, EU, Canada, Australia', type: 'e-Visa', notes: 'Apply online at indianvisaonline.gov.in. Typically granted in 3–5 business days.' },
  { country: 'SAARC Countries (Bangladesh, Nepal, Sri Lanka, etc.)', type: 'Visa on Arrival / e-Visa', notes: 'Check country-specific requirements. Nepal and Bhutan citizens generally do not require a visa.' },
  { country: 'China, Japan, South Korea', type: 'e-Visa', notes: 'e-Visa available. Apply at least 4 days in advance.' },
  { country: 'All other countries', type: 'Regular Visa', notes: 'Apply at your nearest Indian embassy/consulate. Allow 2–4 weeks processing time.' },
];

export default function VisaPage() {
  return (
    <>
      <PageBanner
        title="Visa Information"
        subtitle="Planning your travel to OAIC 2026 in Bhubaneswar, India."
        breadcrumbs={[{ label: 'Travel' }, { label: 'Visa Information' }]}
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <div className="border-l-4 border-l-[#C5A359] pl-8 mb-12">
            <p className="font-body text-earth-300 leading-relaxed">
              Most international visitors to India require a visa. The Indian government offers
              e-Visa services for citizens of 165+ countries. We recommend applying at least
              4 weeks before your travel date.
            </p>
          </div>

          {/* Visa table */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-earth-700 bg-dark-800">
                  <th className="text-left py-3 px-4 font-mono text-earth-400 text-xs uppercase tracking-wide">Country/Region</th>
                  <th className="text-left py-3 px-4 font-mono text-earth-400 text-xs uppercase tracking-wide">Visa Type</th>
                  <th className="text-left py-3 px-4 font-mono text-earth-400 text-xs uppercase tracking-wide">Notes</th>
                </tr>
              </thead>
              <tbody>
                {visaCategories.map((row) => (
                  <tr key={row.country} className="border-b border-earth-800 hover:bg-dark-700/50 transition-colors">
                    <td className="py-4 px-4 font-body text-earth-200 font-medium">{row.country}</td>
                    <td className="py-4 px-4"><span className="px-2 py-1 rounded text-xs font-mono bg-[#C5A359]/15 text-[#C5A359]">{row.type}</span></td>
                    <td className="py-4 px-4 text-earth-400 font-body">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Steps */}
          <h2 className="font-display text-xl font-semibold text-earth-100 mb-5">Step-by-Step Application Guide</h2>
          <div className="flex flex-col gap-3 mb-10">
            {[
              'Visit the official Indian e-Visa portal: indianvisaonline.gov.in',
              'Select "e-Visa" and choose your nationality',
              'Fill in personal details, travel dates, and purpose of visit (Conference/Business)',
              'Upload required documents: passport copy, photo, and letter of invitation',
              'Pay the visa fee online',
              'Receive e-Visa approval via email (usually within 3–5 business days)',
              'Print your e-Visa and carry it with your passport',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-dark-800 border border-earth-800 rounded-xl px-5 py-4">
                <span className="w-7 h-7 rounded-full bg-[#C5A359]/20 border border-[#C5A359]/40 flex-shrink-0 flex items-center justify-center text-[#C5A359] font-mono text-xs font-bold">{i + 1}</span>
                <span className="font-body text-earth-300 text-sm">{step}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://indianvisaonline.gov.in" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors">
              <ExternalLink className="w-4 h-4" /> Indian e-Visa Portal
            </a>
            <a href="mailto:info@oaic2026.in?subject=Invitation Letter Request"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-body font-semibold border border-earth-600 text-earth-300 hover:border-[#C5A359] transition-colors">
              Request Invitation Letter
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
