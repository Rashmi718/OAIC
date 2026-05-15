import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { ExternalLink, AlertTriangle } from 'lucide-react';
import Section from '@/components/layout/Section';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

export const metadata: Metadata = {
  title: 'Visa Information',
  description:
    'Visa requirements and application guide for attending OAIC 2026 in Bhubaneswar, India.',
};

const visaCategories = [
  {
    country: 'USA, UK, EU, Canada, Australia',
    type: 'e-Visa',
    notes:
      'Apply online at indianvisaonline.gov.in. Typically granted in 3–5 business days.',
  },
  {
    country: 'SAARC Countries',
    type: 'Varies',
    notes:
      'Check country-specific requirements. Nepal/Bhutan citizens generally exempt.',
  },
  {
    country: 'China, Japan, South Korea',
    type: 'e-Visa',
    notes: 'e-Visa available. Apply at least 4 days in advance.',
  },
  {
    country: 'All other countries',
    type: 'Regular Visa',
    notes:
      'Apply at your nearest Indian embassy/consulate. Allow 2–4 weeks processing time.',
  },
];

const applicationSteps = [
  'Visit the official Indian e-Visa portal.',
  'Select "e-Visa" and choose your nationality.',
  'Fill in personal details, travel dates, and purpose (Conference/Business).',
  'Upload required documents: passport copy, photo, and invitation letter.',
  'Pay the visa fee online.',
  'Receive e-Visa approval via email (usually within 3–5 business days).',
  'Print your e-Visa and carry it with your passport.',
];

export default function VisaPage() {
  return (
    <>
      <PageHeader
        title="Visa Information"
        description="Planning your travel to OAIC 2026 in Bhubaneswar, India."
        breadcrumbs={[{ href: '/travel/visa', label: 'Visa Information' }]}
      />
      <Section className="pb-24">
        <div className="mx-auto max-w-5xl">
          <Alert className="mb-12">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Disclaimer</AlertTitle>
            <AlertDescription>
              Visa regulations are subject to change. Please verify all
              information with your local Indian embassy or the official
              government portal.
            </AlertDescription>
          </Alert>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Visa Requirements</CardTitle>
              <CardDescription>
                Most international visitors require a visa. The Indian
                government offers e-Visas for 165+ countries. Apply at least 4
                weeks before travel.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Country/Region</TableHead>
                    <TableHead>Visa Type</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visaCategories.map((row) => (
                    <TableRow key={row.country}>
                      <TableCell className="font-medium">
                        {row.country}
                      </TableCell>
                      <TableCell>
                        <Badge>{row.type}</Badge>
                      </TableCell>
                      <TableCell>{row.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Application Guide</CardTitle>
              <CardDescription>
                Follow these steps to apply for your e-Visa.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {applicationSteps.map((step, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="flex-1 text-muted-foreground">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as="a"
              href="https://indianvisaonline.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Indian e-Visa Portal
            </Button>
            <Button
              as="a"
              href="mailto:info@oaic2024.in?subject=Invitation Letter Request"
              size="lg"
            >
              Request Invitation Letter
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
