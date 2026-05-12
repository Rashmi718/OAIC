import type { Workshop } from '@/types';
import Badge from '@/components/ui/Badge';
import { Clock, MapPin, Users } from 'lucide-react';

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: WorkshopCardProps) {
  return (
    <div className="bg-dark-800 border border-earth-700 rounded-xl p-6 hover:border-[#C5A359] transition-all hover:shadow-card-hover group">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <Badge variant="forest">Workshop</Badge>
        <span className="flex items-center gap-1 text-earth-500 text-xs font-mono">
          <Clock className="w-3.5 h-3.5" /> Day {workshop.day} — {workshop.time}
        </span>
        <span className="flex items-center gap-1 text-earth-500 text-xs font-mono">
          <MapPin className="w-3.5 h-3.5" /> {workshop.room}
        </span>
      </div>

      <h3 className="font-display font-semibold text-earth-100 text-lg mb-3 group-hover:text-glow-amber transition-colors leading-tight">
        {workshop.title}
      </h3>

      <p className="font-body text-earth-400 text-sm leading-relaxed mb-4 line-clamp-3">
        {workshop.abstract}
      </p>

      <div className="flex items-start gap-2 text-earth-500 text-xs font-mono">
        <Users className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
        <span>{workshop.organizers.join(', ')}</span>
      </div>
    </div>
  );
}
