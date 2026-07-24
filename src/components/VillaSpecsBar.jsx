import React from 'react';
import { VILLA_SPECS } from '../data/quintaData';

export default function VillaSpecsBar({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section className={`py-10 transition-colors duration-400 border-b ${
      isDark ? 'bg-[#2b2829] border-white/10 text-white' : 'bg-[#f4f2ed] border-stone-200 text-[#1a1919]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {VILLA_SPECS.map((spec, idx) => (
            <div key={idx} className="space-y-1 p-3 border-r border-stone-500/10 last:border-r-0">
              <span className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#ac926f] block">
                {spec.val}
              </span>
              <span className={`text-xs uppercase font-bold tracking-wider block ${
                isDark ? 'text-white' : 'text-[#1a1919]'
              }`}>
                {spec.label}
              </span>
              <span className={`text-[10px] font-light block ${
                isDark ? 'text-stone-400' : 'text-stone-600'
              }`}>
                {spec.desc}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
