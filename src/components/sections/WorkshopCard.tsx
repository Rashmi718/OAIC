import type { Workshop } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Clock, MapPin } from 'lucide-react';

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: Readonly<WorkshopCardProps>) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-sm border border-primary-100 border-l-4 border-l-primary-600 transition-shadow duration-200 hover:shadow-md">
      {/* Header strip */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-3 py-2 sm:gap-x-4 sm:gap-y-1.5 sm:px-6 sm:py-4 border-b border-primary-100">
        <Badge className="mb-0 text-xs sm:text-sm">Workshop</Badge>
        <span className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-muted-foreground">
          <Clock className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" /> Day {workshop.day} · {workshop.time}
        </span>
        <span className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-muted-foreground">
          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" /> {workshop.room}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-3 sm:p-6">
        {/*
        <h3 className="text-sm sm:text-lg font-semibold mb-1.5 sm:mb-2 leading-snug">{workshop.title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 sm:line-clamp-4 flex-1">
          {workshop.abstract}
        </p>
        */}
        <h3 className="text-base sm:text-lg font-semibold mb-2">To Be Updated Soon</h3>
        <p className="text-sm text-muted-foreground line-clamp-4 flex-1">
          Workshop topics and detailed descriptions will be updated soon. Stay tuned for more information.
        </p>
      </div>

      {/* Footer — organizers */}
      {/*
      <div className="flex items-start gap-1.5 sm:gap-2 px-3 pb-3 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted-foreground border-t border-primary-50 pt-2.5 sm:pt-3">
        <Users className="mt-0.5 h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
        <span>{workshop.organizers.join(', ')}</span>
      </div>
      */}
    </div>
  );
}
