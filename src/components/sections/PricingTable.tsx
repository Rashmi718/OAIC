'use client';

import { useState } from 'react';
import { pricingTiers, registrationIncludes, registrationExcludes } from '@/data/registration';
import { cn } from '@/lib/cn';
import { CheckCircle, XCircle } from 'lucide-react';

export default function PricingTable() {
  const [activeTier, setActiveTier] = useState(0);
  const tier = pricingTiers[activeTier];

  return (
    <div>
      {/* Tier tabs */}
      <div className="flex flex-wrap gap-2 mb-8" role="tablist">
        {pricingTiers.map((t, i) => (
          <button
            key={t.name}
            role="tab"
            aria-selected={activeTier === i}
            onClick={() => setActiveTier(i)}
            className={cn(
              'px-5 py-2.5 rounded-lg text-sm font-body font-semibold transition-all focus-visible:ring-2 focus-visible:ring-glow-amber focus-visible:outline-none',
              activeTier === i
                ? 'bg-[#C5A359] text-dark-900 shadow-glow-amber-sm'
                : 'bg-dark-700 border border-earth-700 text-earth-400 hover:text-earth-200 hover:border-earth-500'
            )}
          >
            {t.name}
          </button>
        ))}
      </div>

      <p className="text-earth-500 text-sm font-mono mb-5">
        Cutoff: <span className="text-glow-amber">{tier.cutoff}</span>
      </p>

      {/* Pricing rows */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-earth-700">
              <th className="text-left py-3 px-4 text-earth-400 text-xs font-mono uppercase tracking-wide">Category</th>
              <th className="text-right py-3 px-4 text-earth-400 text-xs font-mono uppercase tracking-wide">Fee</th>
            </tr>
          </thead>
          <tbody>
            {tier.rows.map((row) => (
              <tr key={row.category} className="border-b border-earth-800 hover:bg-dark-700/50 transition-colors group">
                <td className="py-4 px-4 font-body text-earth-200 text-sm">{row.category}</td>
                <td className="py-4 px-4 text-right font-mono font-bold text-glow-amber">
                  {row.currency === 'INR' ? '₹' : '$'}{row.amount}
                  <span className="text-earth-500 text-xs ml-1">{row.currency}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Includes / Excludes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-forest-700/10 border border-forest-600/20 rounded-xl p-5">
          <h4 className="font-display font-semibold text-forest-300 mb-3 text-sm">Registration Includes</h4>
          <ul className="flex flex-col gap-2">
            {registrationIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-earth-300 text-sm font-body">
                <CheckCircle className="w-4 h-4 text-forest-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-900/10 border border-red-700/20 rounded-xl p-5">
          <h4 className="font-display font-semibold text-red-400 mb-3 text-sm">Not Included</h4>
          <ul className="flex flex-col gap-2">
            {registrationExcludes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-earth-300 text-sm font-body">
                <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3 rounded text-base font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-colors shadow-md"
        >
          Register Now →
        </a>
      </div>
    </div>
  );
}
