export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface ImportantDate {
  event: string;
  date: string;
  status: 'open' | 'closed' | 'upcoming' | 'extended' | 'past';
}

export interface Speaker {
  name: string;
  title: string;
  organization: string;
  photoUrl: string;
  bio?: string;
}

export interface CommitteeMember {
  name: string;
  role: string;
  institution: string;
  image?: string;
}

export interface ScheduleSlot {
  day: number;
  time: string;
  title: string;
  type: 'keynote' | 'workshop' | 'panel' | 'break' | 'social';
  room?: string;
  speaker?: string;
}

export interface Workshop {
  id: string;
  title: string;
  organizers: string[];
  day: number;
  time: string;
  room: string;
  abstract: string;
}

export interface PricingTier {
  name: string;
  cutoff: string;
  rows: { category: string; amount: string; currency: string }[];
}

export interface Sponsor {
  name: string;
  logoUrl: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'exhibitor';
  website?: string;
}

export interface TouristAttraction {
  name: string;
  description: string;
  photoUrl: string;
  distanceFromVenue: string;
  category: 'heritage' | 'nature' | 'religious' | 'museum';
}

export interface Topic {
  category: string;
  items: string[];
}

export interface HackathonPrize {
  rank: string;
  amount: string;
  description: string;
}
