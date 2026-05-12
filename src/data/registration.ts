import type { PricingTier } from '@/types';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Early Bird',
    cutoff: 'September 15, 2026',
    rows: [
      { category: 'Student (Indian)', amount: '2,500', currency: 'INR' },
      { category: 'Academic (Indian)', amount: '4,000', currency: 'INR' },
      { category: 'Industry (Indian)', amount: '6,000', currency: 'INR' },
      { category: 'International', amount: '150', currency: 'USD' },
    ],
  },
  {
    name: 'Regular',
    cutoff: 'October 10, 2026',
    rows: [
      { category: 'Student (Indian)', amount: '3,500', currency: 'INR' },
      { category: 'Academic (Indian)', amount: '5,500', currency: 'INR' },
      { category: 'Industry (Indian)', amount: '8,000', currency: 'INR' },
      { category: 'International', amount: '200', currency: 'USD' },
    ],
  },
  {
    name: 'On-Site',
    cutoff: 'Conference Day',
    rows: [
      { category: 'Student (Indian)', amount: '4,500', currency: 'INR' },
      { category: 'Academic (Indian)', amount: '7,000', currency: 'INR' },
      { category: 'Industry (Indian)', amount: '10,000', currency: 'INR' },
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
