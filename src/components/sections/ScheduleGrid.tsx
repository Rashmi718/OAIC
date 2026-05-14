'use client';

import { schedule } from '@/data/program';
import { Badge } from '@/components/ui/Badge';
import { Clock, MapPin, Mic } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/Tabs';
import {
  Card,

} from '@/components/ui/Card';

const dayLabels: Record<number, string> = {
  1: 'Day 1',
  2: 'Day 2',
  3: 'Day 3',
};



export default function ScheduleGrid() {
  return (
    <Tabs defaultValue="Day 1">
      {/* Tabs aligned with card list */}
      <div className="mx-2 sm:mx-6 md:mx-10 lg:mx-16 mb-6">
        <TabsList className="grid w-full grid-cols-3">
          {[1, 2, 3].map((day) => (
            <TabsTrigger key={day} value={`Day ${day}`}>
              {dayLabels[day]}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {[1, 2, 3].map((day) => {
        const daySlots = schedule.filter((s) => s.day === day);
        return (
          <TabsContent key={day} value={`Day ${day}`}>
            <div className="space-y-6 mx-2 sm:mx-6 md:mx-10 lg:mx-16">
              {daySlots.map((slot) => (
                <Card key={`${slot.day}-${slot.time}-${slot.title}`} className="overflow-hidden p-0">
                  {/* Mobile: stacked. md+: side by side */}
                  <div className="flex flex-col sm:flex-row">
                    {/* Time strip */}
                    <div className="flex items-center gap-2 p-4 sm:p-6 sm:w-48 sm:flex-shrink-0 sm:border-r border-b sm:border-b-0 sm:justify-center">
                      <Clock className="h-5 w-5 shrink-0" />
                      <span className="font-mono text-base sm:text-lg whitespace-nowrap">
                        {slot.time}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-4 sm:p-6">
                      <Badge className="mb-2">{slot.type}</Badge>
                      <h3 className="text-base sm:text-lg font-semibold">{slot.title}</h3>
                      {(slot.room || slot.speaker) && (
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                          {slot.room && (
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4 shrink-0" /> {slot.room}
                            </span>
                          )}
                          {slot.speaker && (
                            <span className="flex items-center gap-1.5">
                              <Mic className="h-4 w-4 shrink-0" /> {slot.speaker}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
