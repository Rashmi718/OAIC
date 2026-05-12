'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item, i) => (
        <div key={i} className="border border-earth-700 rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-dark-700 hover:bg-dark-600 transition-colors focus-visible:ring-2 focus-visible:ring-glow-amber focus-visible:outline-none"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-body font-semibold text-earth-100">{item.title}</span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-glow-amber flex-shrink-0 transition-transform duration-300',
                openIndex === i ? 'rotate-180' : ''
              )}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 py-4 bg-dark-800 text-earth-300 font-body text-sm leading-relaxed border-t border-earth-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
