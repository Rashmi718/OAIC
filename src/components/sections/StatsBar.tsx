'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Expected Attendees' },
  { value: 40, suffix: '+', label: 'Technical Sessions' },
  { value: 10, suffix: '+', label: 'Workshops' },
  { value: 20, suffix: '+', label: 'Industry Sponsors' },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 50;
          const increment = value / steps;
          let current = 0;
          timerRef.current = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timerRef.current!);
              timerRef.current = null;
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      // Cancel in-flight animation interval on unmount
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-glow-amber tabular-nums">
      {count}{suffix}
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-dark-800 border-y border-earth-800 py-14">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-earth-400 font-body text-sm tracking-wide">{stat.label}</div>
              <div className="mt-3 h-px w-8 bg-[#C5A359] group-hover:w-16 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
