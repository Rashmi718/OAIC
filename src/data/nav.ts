import type { NavItem } from '@/types';

export const navConfig: NavItem[] = [
  {
    label: 'Authors',
    children: [
      { label: 'Important Dates', href: '/authors/important-dates' },
      { label: 'Call for Papers', href: '/authors/call-for-papers' },
      { label: 'Call for Industry Workshop Proposals', href: '/authors/call-for-workshop-proposals' },
      { label: 'Call for Poster Presentations', href: '/authors/call-for-posters' },
      { label: 'Submission Guidelines', href: '/authors/submission-guidelines' },
    ],
  },
  {
    label: 'Committees',
    children: [
      { label: 'Organizing Committee', href: '/committees/organizing' },
      { label: 'Technical Program Committee', href: '/committees/technical-program' },
      { label: 'Operations Committee', href: '/committees/operations' },
      { label: 'Industry Forums & Exhibition Committee', href: '/committees/industry-forums' },
    ],
  },
  {
    label: 'Program',
    children: [
      { label: 'At a Glance', href: '/program/at-a-glance' },
      { label: 'Workshops', href: '/program/workshops' },
      { label: 'Hackathons', href: '/program/hackathons' },
    ],
  },
  {
    label: 'Registration',
    children: [
      { label: 'Registration Fees', href: '/registration/fees' },
    ],
  },
  {
    label: 'Travel',
    children: [
      { label: 'Visa Information', href: '/travel/visa' },
      { label: 'Tourist Attractions', href: '/travel/attractions' },
    ],
  },
  {
    label: 'Patrons & Exhibitors',
    href: '/patrons-exhibitors',
  },
  {
    label: 'About',
    children: [
      { label: 'About Us', href: '/about/about-us' },
      { label: 'Contact Us', href: '/about/contact' },
    ],
  },
];
