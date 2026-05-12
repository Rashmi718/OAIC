import { importantDates } from '@/data/dates';

export default function DatesTicker() {
  const items = [...importantDates, ...importantDates]; // duplicate for seamless loop

  return (
    <div className="bg-earth-800 border-y border-earth-700 overflow-hidden py-3 relative">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-earth-800 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-earth-800 to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
        {items.map((date, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-8 text-sm font-mono">
            <span className="text-glow-amber font-semibold tracking-wide">{date.date}</span>
            <span className="text-earth-300">—</span>
            <span className="text-earth-200">{date.event}</span>
            <span className="text-earth-600 mx-4">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
