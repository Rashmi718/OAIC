import type { Workshop } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Clock, MapPin, Users } from 'lucide-react';

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: Readonly<WorkshopCardProps>) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-primary-100 border-l-4 border-l-primary-600 transition-shadow duration-200 hover:shadow-md">
      {/* Header strip — matches time strip style from schedule */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 px-4 py-3 sm:px-6 sm:py-4 border-b border-primary-100">
        <Badge className="mb-0">Workshop</Badge>
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0" /> Day {workshop.day} · {workshop.time}
        </span>
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" /> {workshop.room}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-2">{workshop.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-4 flex-1">
          {workshop.abstract}
        </p>
      </div>

      {/* Footer — organizers */}
      <div className="flex items-start gap-2 px-4 pb-4 sm:px-6 sm:pb-6 text-sm text-muted-foreground border-t border-primary-50 pt-3">
        <Users className="mt-0.5 h-4 w-4 shrink-0" />
        <span>{workshop.organizers.join(', ')}</span>
      </div>
    </div>
  );
}
