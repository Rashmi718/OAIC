import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import { contactInfo } from '@/data/contact';
import { Phone, MapPin } from 'lucide-react';

const socialIcons = {
  twitter: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  linkedin: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  instagram: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
  youtube: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
};

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact the OAIC 2026 organizing committee for general inquiries, papers, sponsorship, and media.',
};

const contactCategories = [
  { label: 'General Inquiries', email: contactInfo.generalEmail, desc: 'For any general questions about the conference.' },
  { label: 'Paper Submissions', email: contactInfo.papersEmail, desc: 'Questions about submission, review process, or acceptance.' },
  { label: 'Sponsorship', email: contactInfo.sponsorshipEmail, desc: 'Partnership and exhibition opportunities.' },
  { label: 'Media & Press', email: contactInfo.mediaEmail, desc: 'Press passes, media kits, and coverage arrangements.' },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for any questions about OAIC 2026."
        breadcrumbs={[{ label: 'About' }, { label: 'Contact Us' }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact details */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-earth-100 mb-6">Get in Touch</h2>

              <div className="flex flex-col gap-4 mb-8">
                {contactCategories.map((cat) => (
                  <div key={cat.label} className="bg-dark-800 border border-earth-700 rounded-xl p-5 hover:border-[#C5A359] transition-colors">
                    <h3 className="font-display font-semibold text-earth-200 mb-1">{cat.label}</h3>
                    <a href={`mailto:${cat.email}`} className="text-[#C5A359] font-mono text-sm hover:underline mb-1 block">
                      {cat.email}
                    </a>
                    <p className="text-earth-500 text-xs font-body">{cat.desc}</p>
                  </div>
                ))}
              </div>

              {/* Address & phone */}
              <div className="bg-dark-800 border border-earth-700 border-l-4 border-l-[#C5A359] rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#C5A359] mt-0.5 flex-shrink-0" />
                  <div className="font-body text-earth-300 text-sm leading-relaxed">
                    {contactInfo.address.line1}<br />
                    {contactInfo.address.line2}<br />
                    {contactInfo.address.city}<br />
                    {contactInfo.address.country}
                  </div>
                </div>
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-earth-300 hover:text-glow-amber text-sm font-body transition-colors">
                  <Phone className="w-4 h-4 text-[#C5A359]" /> {contactInfo.phone}
                </a>
              </div>

              {/* Social */}
              <h3 className="font-display font-semibold text-earth-200 mb-3">Follow OAIC 2026</h3>
              <div className="flex gap-3">
                {([
                  { key: 'twitter' as const, label: 'Twitter' },
                  { key: 'linkedin' as const, label: 'LinkedIn' },
                  { key: 'instagram' as const, label: 'Instagram' },
                  { key: 'youtube' as const, label: 'YouTube' },
                ] as const).map((s) => (
                  <a key={s.key} href={contactInfo.social[s.key]} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-earth-800 hover:bg-earth-700 flex items-center justify-center text-earth-400 hover:text-[#C5A359] transition-all">
                    {socialIcons[s.key]}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-earth-100 mb-6">Send a Message</h2>
              <form
                action="mailto:info@oaic2026.in"
                method="post"
                encType="text/plain"
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-earth-400 mb-1.5 uppercase tracking-wide">Name</label>
                    <input id="contact-name" name="name" type="text" required
                      className="w-full bg-dark-800 border border-earth-700 rounded-lg px-4 py-3 text-earth-100 text-sm font-body focus:outline-none focus:border-[#C5A359] transition-colors placeholder:text-earth-600"
                      placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-earth-400 mb-1.5 uppercase tracking-wide">Email</label>
                    <input id="contact-email" name="email" type="email" required
                      className="w-full bg-dark-800 border border-earth-700 rounded-lg px-4 py-3 text-earth-100 text-sm font-body focus:outline-none focus:border-[#C5A359] transition-colors placeholder:text-earth-600"
                      placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-earth-400 mb-1.5 uppercase tracking-wide">Subject</label>
                  <input id="contact-subject" name="subject" type="text"
                    className="w-full bg-dark-800 border border-earth-700 rounded-lg px-4 py-3 text-earth-100 text-sm font-body focus:outline-none focus:border-[#C5A359] transition-colors placeholder:text-earth-600"
                    placeholder="Subject of your inquiry" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-earth-400 mb-1.5 uppercase tracking-wide">Message</label>
                  <textarea id="contact-message" name="message" rows={5} required
                    className="w-full bg-dark-800 border border-earth-700 rounded-lg px-4 py-3 text-earth-100 text-sm font-body focus:outline-none focus:border-[#C5A359] transition-colors placeholder:text-earth-600 resize-none"
                    placeholder="Your message..." />
                </div>
                <button type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded text-sm font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors shadow-md">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
