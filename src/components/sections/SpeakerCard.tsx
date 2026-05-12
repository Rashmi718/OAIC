import Image from 'next/image';
import type { Speaker } from '@/types';

interface SpeakerCardProps {
  speaker: Speaker;
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Photo circle */}
      <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden border-2 border-earth-700 group-hover:border-[#C5A359] transition-all duration-300 shadow-card">
        <div className="w-full h-full bg-gradient-to-br from-earth-700 to-dark-600 flex items-center justify-center text-earth-400 text-3xl font-display">
          {speaker.name.charAt(0)}
        </div>
      </div>

      {/* Info */}
      <h3 className="font-display font-semibold text-earth-100 text-base leading-tight mb-1 group-hover:text-glow-amber transition-colors">
        {speaker.name}
      </h3>
      <p className="text-earth-400 text-sm font-body mb-0.5">{speaker.title}</p>
      <p className="text-earth-500 text-xs font-mono">{speaker.organization}</p>

      {/* Gold accent line on hover */}
      <div className="mt-3 h-px w-0 group-hover:w-12 bg-[#C5A359] transition-all duration-500 rounded-full" />
    </div>
  );
}
