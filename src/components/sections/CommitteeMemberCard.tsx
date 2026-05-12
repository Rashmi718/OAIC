import type { CommitteeMember } from '@/types';
import { User } from 'lucide-react';

interface CommitteeMemberCardProps {
  member: CommitteeMember;
}

export default function CommitteeMemberCard({ member }: CommitteeMemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-dark-800 border border-earth-700 rounded-xl p-5 hover:border-[#C5A359] hover:shadow-card-hover transition-all duration-300 group">
      {/* Photo circle */}
      <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-earth-800 to-dark-700 border-2 border-earth-700 group-hover:border-[#C5A359] flex items-center justify-center transition-colors">
        <User className="w-8 h-8 text-earth-500 group-hover:text-[#C5A359] transition-colors" />
      </div>
      <h3 className="font-display font-semibold text-earth-100 text-sm leading-tight mb-1 group-hover:text-glow-amber transition-colors">
        {member.name}
      </h3>
      <p className="text-[#C5A359] text-xs font-mono mb-1">{member.role}</p>
      <p className="text-earth-500 text-xs font-body leading-snug">{member.institution}</p>
    </div>
  );
}
