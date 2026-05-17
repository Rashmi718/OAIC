import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Check, Calendar } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';

export const metadata: Metadata = {
  title: 'Call for Poster Presentations',
  description:
    'Submit your poster abstract for OAIC 2026. Share your work-in-progress and get feedback from the community.',
};

const formatRequirements = [
  'Size: A0 Portrait (841 × 1189 mm)',
  'Language: English',
  'Include: Title, authors, abstract, methodology, results',
  'QR code linking to paper/preprint (optional)',
  'High-contrast colours for readability',
  'Font size: minimum 24pt for body text',
];

const submissionInstructions = [
  'Submit a 2–4 page extended abstract',
  'IEEE double-column format required',
  'Submit via EasyChair portal',
  'Include "Poster:" prefix in the title',
  'Accepted posters receive participation certificate',
  'Best Poster Award presented at closing ceremony',
];

export default function CallForPostersPage() {
  return (
    <>
      <PageHeader
        title="Call for Poster Presentations"
        description="Share your research in progress and engage directly with the AI community."
        breadcrumbs={[
          {
            href: '/authors/call-for-posters',
            label: 'Call for Poster Presentations',
          },
        ]}
      />
      <Section className="pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Intro Box */}
          <div className="mb-14 bg-primary-50 border-none border-l-4 border-l-primary-600 rounded-r-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">About Poster Presentations</h3>
            <p className="text-lg md:text-xl text-primary-950 leading-relaxed font-medium">
              Poster presentations at OAIC 2026 offer an excellent
              opportunity to present your early-stage or work-in-progress
              research to a diverse audience of AI researchers and
              practitioners. The interactive format encourages direct
              discussion and valuable feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <SectionHeader
                title="Poster Format"
                subtitle="Requirements"
                className="mb-6"
              />
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
                <ul className="space-y-5">
                  {formatRequirements.map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="mr-4 mt-0.5">
                        <Check className="h-5 w-5 text-primary-400 stroke-[3]" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <SectionHeader
                title="Submission"
                subtitle="Instructions"
                className="mb-8"
              />
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
                <ul className="space-y-5">
                  {submissionInstructions.map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="mr-4 mt-0.5">
                        <Check className="h-5 w-5 text-primary-400 stroke-[3]" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Alert className="mt-14 bg-primary-50 border-none border-l-4 border-l-primary-600 rounded-r-lg shadow-sm text-primary-950 p-6">
            <Calendar className="h-6 w-6 text-primary-600" />
            <AlertTitle className="font-bold text-xl text-primary-900 ml-2">Key Date</AlertTitle>
            <AlertDescription className="text-lg mt-2 ml-2">
              Poster Submission Deadline:{' '}
              <strong className="font-bold text-primary-900">August 1, 2026</strong>
            </AlertDescription>
          </Alert>

          <div className="mt-12 text-center flex justify-center items-center gap-6">
            <Button as="a" href="#" className="bg-primary-600 hover:bg-primary-500 text-white text-lg px-8 py-6 shadow-md transition-transform hover:-translate-y-1 rounded-md border-none font-bold">
              Submit Poster Abstract
            </Button>
            <Button as="a" href="#" className="bg-primary-600 hover:bg-primary-500 text-white text-lg px-8 py-6 shadow-md transition-transform hover:-translate-y-1 rounded-md border-none font-bold">
              Abstract format
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
