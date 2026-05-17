import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import ScheduleGrid from '@/components/sections/ScheduleGrid';
import Section from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Program At a Glance',
  description:
    'Full 3-day schedule of OAIC 2026 - keynotes, workshops, panels, and social events.',
};

const legendItems = [
  { label: 'Keynote', variant: 'default' },
  { label: 'Workshop', variant: 'secondary' },
  { label: 'Panel / Session', variant: 'outline' },
  { label: 'Break', variant: 'secondary' },
  { label: 'Social', variant: 'default' },
] as const;

export default function AtAGlancePage() {
  return (
    <>
      <PageHeader
        title="Program At a Glance (To be Updated)"
        description="Three days of world-class AI research, workshops, and networking. October 15–17, 2026."
        breadcrumbs={[
          { href: '/program/at-a-glance', label: 'Program At a Glance' },
        ]}
      />
      <Section className="pb-24">
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {legendItems.map((item) => (
            <Badge key={item.label} className="text-sm">
              {item.label}
            </Badge>
          ))}
        </div>

        <ScheduleGrid />
      </Section>
    </>
  );
}
