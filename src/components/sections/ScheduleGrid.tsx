'use client';

import { useState } from 'react';
import { schedule } from '@/data/program';
import { cn } from '@/lib/cn';
import Badge from '@/components/ui/Badge';
import { Clock, MapPin, User } from 'lucide-react';

const dayLabels: Record<number, string> = {
  1: 'Day 1 — Oct 15',
  2: 'Day 2 — Oct 16',
  3: 'Day 3 — Oct 17',
};

const typeColors: Record<string, string> = {
  keynote: 'bg-glow-amber/10 border-l-2 border-glow-amber',
  workshop: 'bg-forest-500/10 border-l-2 border-forest-400',
  panel: 'bg-glow-teal/10 border-l-2 border-glow-teal',
  break: 'bg-earth-800/40 border-l-2 border-earth-700',
  social: 'bg-glow-indigo/10 border-l-2 border-glow-indigo',
};

const typeBadge: Record<string, 'amber' | 'forest' | 'teal' | 'earth'> = {
  keynote: 'amber',
  workshop: 'forest',
  panel: 'teal',
  break: 'earth',
  social: 'amber',
};

export default function ScheduleGrid() {
  const [activeDay, setActiveDay] = useState(1);
  const daySlots = schedule.filter((s) => s.day === activeDay);

  return (
    <div>
      {/* Day tabs */}
      <div className="flex gap-2 mb-6" role="tablist">
        {[1, 2, 3].map((day) => (
          <button
            key={day}
            role="tab"
            aria-selected={activeDay === day}
            onClick={() => setActiveDay(day)}
            className={cn(
              'px-5 py-2.5 rounded-lg text-sm font-body font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-glow-amber focus-visible:outline-none',
              activeDay === day
                ? 'bg-[#C5A359] text-dark-900 shadow-glow-amber-sm'
                : 'bg-dark-700 border border-earth-700 text-earth-400 hover:text-earth-200 hover:border-earth-500'
            )}
          >
            {dayLabels[day]}
          </button>
        ))}
      </div>

      {/* Schedule slots */}
      <div className="flex flex-col gap-2">
        {daySlots.map((slot, i) => (
          <div
            key={i}
            className={cn(
              'flex flex-col sm:flex-row gap-3 rounded-lg overflow-hidden px-4 py-3 bg-dark-800',
              typeColors[slot.type] || ''
            )}
          >
            <div className="sm:w-36 flex-shrink-0 flex items-center gap-1.5 text-earth-400 text-xs font-mono">
              <Clock className="w-3.5 h-3.5" />
              {slot.time}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start gap-2 mb-1">
                <span className="font-body font-semibold text-earth-100 text-sm">{slot.title}</span>
                <Badge variant={typeBadge[slot.type] || 'earth'} className="text-[10px] py-0.5">
                  {slot.type}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-earth-500 font-mono">
                {slot.room && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {slot.room}
                  </span>
                )}
                {slot.speaker && (
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {slot.speaker}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
