import type { PricingTier } from '@/types';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Non-Member',
    cutoff: 'September 15, 2026',
    rows: [
      { category: 'Student (Indian)', amount: '9,000', currency: 'INR' },
      { category: 'Academic (Indian)', amount: '10,000', currency: 'INR' },
      { category: 'Industry (Indian)', amount: '11,000', currency: 'INR' },
      { category: 'International', amount: '150', currency: 'USD' },
    ],
  },
  {
    name: 'IEEE Member',
    cutoff: 'October 10, 2026',
    rows: [
      { category: 'Student (Indian)', amount: '8,000', currency: 'INR' },
      { category: 'Academic (Indian)', amount: '9,000', currency: 'INR' },
      { category: 'Industry (Indian)', amount: '10,000', currency: 'INR' },
      { category: 'International', amount: '200', currency: 'USD' },
    ],
  },
  {
    name: 'On-Site',
    cutoff: 'Conference Day',
    rows: [
      { category: 'Student (Indian)', amount: '10,000', currency: 'INR' },
      { category: 'Academic (Indian)', amount: '11,000', currency: 'INR' },
      { category: 'Industry (Indian)', amount: '12,000', currency: 'INR' },
      { category: 'International', amount: '250', currency: 'USD' },
    ],
  },
];

export const registrationIncludes = [
  'Access to all technical sessions',
  'Conference proceedings (digital)',
  'Welcome reception & banquet dinner',
  'Morning/afternoon coffee breaks',
  'Conference kit & badge',
];

export const registrationExcludes = [
  'Accommodation (see Travel page)',
  'Transportation to/from venue',
  'Tourist excursions',
  'Workshop fee (separate registration)',
];
