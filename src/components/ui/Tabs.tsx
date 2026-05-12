'use client';

import { useState, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  className?: string;
}

export default function Tabs({ tabs, className }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn('w-full', className)}>
      {/* Tab headers */}
      <div className="flex flex-wrap gap-1 border-b border-earth-700 mb-6" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            id={`tab-${i}`}
            aria-selected={activeIndex === i}
            aria-controls={`tabpanel-${i}`}
            onClick={() => setActiveIndex(i)}
            className={cn(
              'px-5 py-2.5 text-sm font-body font-semibold rounded-t-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-glow-amber',
              activeIndex === i
                ? 'bg-dark-700 text-glow-amber border border-b-0 border-earth-700 -mb-px'
                : 'text-earth-400 hover:text-earth-200 hover:bg-dark-700/50'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab panel */}
      {tabs.map((tab, i) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`tabpanel-${i}`}
          aria-labelledby={`tab-${i}`}
          hidden={activeIndex !== i}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
