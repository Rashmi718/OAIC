import type { TouristAttraction } from '@/types';
import { MapPin } from 'lucide-react';
import Badge from '@/components/ui/Badge';

interface AttractionCardProps {
  attraction: TouristAttraction;
}

const categoryVariant: Record<string, 'amber' | 'teal' | 'forest' | 'earth'> = {
  heritage: 'amber',
  nature: 'forest',
  religious: 'teal',
  museum: 'earth',
};

export default function AttractionCard({ attraction }: AttractionCardProps) {
  return (
    <div className="bg-dark-800 border border-earth-700 rounded-xl overflow-hidden hover:border-[#C5A359] hover:shadow-card-hover transition-all duration-300 group flex flex-col">
      {/* Image placeholder */}
      <div className="h-44 bg-gradient-to-br from-earth-800 to-dark-700 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent z-10" />
        <div className="absolute bottom-3 left-4 z-20">
          <Badge variant={categoryVariant[attraction.category] || 'earth'}>
            {attraction.category.charAt(0).toUpperCase() + attraction.category.slice(1)}
          </Badge>
        </div>
        <span className="text-earth-600 font-display text-5xl font-bold opacity-20 select-none">
          {attraction.name.charAt(0)}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-earth-100 text-base mb-1 group-hover:text-glow-amber transition-colors leading-tight">
          {attraction.name}
        </h3>
        <div className="flex items-center gap-1.5 text-[#C5A359] text-xs font-mono mb-3">
          <MapPin className="w-3.5 h-3.5" /> {attraction.distanceFromVenue} from venue
        </div>
        <p className="font-body text-earth-400 text-sm leading-relaxed flex-1 line-clamp-4">
          {attraction.description}
        </p>
      </div>
    </div>
  );
}
