import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import PricingTable from '@/components/sections/PricingTable';

export const metadata: Metadata = {
  title: 'Registration Fees',
  description: 'View OAIC 2026 registration fees for students, academics, industry, and international attendees.',
};

export default function RegistrationFeesPage() {
  return (
    <>
      <PageBanner
        title="Registration Fees"
        subtitle="Register early for the best rates. Early Bird closes September 15, 2026."
        breadcrumbs={[{ label: 'Registration' }, { label: 'Registration Fees' }]}
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <PricingTable />

          <div className="mt-10 bg-dark-800 border border-earth-700 border-l-4 border-l-[#C5A359] rounded-xl p-6">
            <h3 className="font-display font-semibold text-earth-100 mb-3">Important Notes</h3>
            <ul className="flex flex-col gap-2">
              {[
                'GST at 18% applicable on all INR registrations.',
                'Payment accepted via NEFT/RTGS, credit/debit card, and UPI.',
                'Cancellations before September 30, 2026 receive 50% refund.',
                'No refunds after October 1, 2026.',
                'Each accepted paper requires at least one full registration.',
              ].map((note) => (
                <li key={note} className="text-earth-400 text-sm font-body flex items-start gap-2">
                  <span className="text-[#C5A359] mt-0.5">•</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
