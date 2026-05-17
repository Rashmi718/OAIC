import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { Trophy, Zap, Code2, Lightbulb } from 'lucide-react';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';


export const metadata: Metadata = {
  title: 'Hackathon',
  description:
    'Join the OAIC 2026 Hackathon - build AI solutions for real-world problems in Odisha and India.',
};

const timeline = [
  {
    icon: Lightbulb,
    label: 'Registration',
    date: 'TBA',
    desc: 'Team registration opens. Teams of 2–4.',
  },
  {
    icon: Code2,
    label: 'Ideation Phase',
    date: 'TBA',
    desc: 'Submit your project idea and team details.',
  },
  {
    icon: Zap,
    label: 'Hacking Begins',
    date: 'TBA',
    desc: '24-hour build sprint at the conference venue.',
  },
  {
    icon: Trophy,
    label: 'Demo Day & Awards',
    date: 'TBA',
    desc: 'Present to judges. Top 3 teams win prizes.',
  },
];

const prizes = [
  {
    rank: '1st Place',
    amount: '₹ TBA',
    desc: 'Cash prize + incubation support',
  },
  {
    rank: '2nd Place',
    amount: '₹ TBA',
    desc: 'Cash prize + mentorship',
  },
  {
    rank: '3rd Place',
    amount: '₹ TBA',
    desc: 'Cash prize + certificates',
  },
];

export default function HackathonsPage() {
  return (
    <>
      <PageHeader
        title="Hackathon"
        description="Build AI solutions for real-world challenges in 24 hours."
        breadcrumbs={[{ href: '/program/hackathons', label: 'Hackathon' }]}
      />
      <Section className="pb-24">
        <div className="text-center">
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary-950 sm:text-6xl">
            AI for <span className="text-primary-600">Odisha</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Build AI-powered solutions addressing real challenges in
            agriculture, healthcare, cultural heritage preservation, or rural
            development in Odisha.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Timeline"
          subtitle="From idea to demo day."
          className="mb-8"
        />
        <div className="mx-2 sm:mx-6 md:mx-10 lg:mx-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((step) => (
            <Card key={step.label} glowOnHover={false} className="bg-white border border-primary-100 border-l-4 border-l-primary-600 shadow-sm transition-shadow duration-200 hover:shadow-md">
              <CardHeader className="p-3 sm:p-6">
                <div className="mb-2 sm:mb-4 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary-100">
                  <step.icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary-600" />
                </div>
                <CardTitle className="text-sm sm:text-base">{step.label}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">{step.date}</CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0">
                <p className="text-xs sm:text-sm">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Prize Pool"
          subtitle="Total prizes worth TBA"
          className="mb-8"
        />
        <div className="mx-2 sm:mx-6 md:mx-10 lg:mx-16">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {prizes.map((prize) => (
            <Card
              key={prize.rank}
              glowOnHover={false} className="text-center bg-white border border-primary-100 border-l-4 border-l-primary-950 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <CardHeader className="p-3 sm:p-6">
                <CardTitle className="text-base sm:text-xl">{prize.rank}</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0">
                <p className="font-mono text-2xl sm:text-4xl font-bold text-primary-500">
                  {prize.amount}
                </p>
                <p className="mt-2 text-xs sm:text-base text-gray-600">{prize.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="text-center">
          <Button size="lg">Register Your Team</Button>
        </div>
      </Section>
    </>
  );
}
