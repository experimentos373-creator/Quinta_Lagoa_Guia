import React from 'react';
import { AMENITIES } from '../data/quintaData';
import { Waves, Sparkles, Utensils, Wifi, Wind, Gamepad2, Tv, Flame, Check, Trees, Wine, Car, PartyPopper } from 'lucide-react';

export default function AmenitiesSection({ theme, currentLang }) {
  const iconMap = {
    Waves,
    Sparkles,
    Utensils,
    Wifi,
    Wind,
    Gamepad2,
    Tv,
    Flame,
    Trees,
    Wine,
    Car,
    PartyPopper
  };

  const isDark = theme === 'dark';

  return (
    <section id="comodidades" className={`py-12 lg:py-24 transition-colors duration-400 ${
      isDark ? 'bg-[#353233] text-white' : 'bg-[#fcfbfa] text-[#1a1919]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#ac926f]">
            {currentLang === 'PT' ? 'Espaços & Infraestruturas' : 'Spaces & Facilities'}
          </span>
          <h2 className={`text-2xl xs:text-3xl sm:text-5xl font-serif-luxury font-normal ${
            isDark ? 'text-white' : 'text-[#1a1919]'
          }`}>
            {currentLang === 'PT' ? 'Espaços & Experiências da Quinta' : 'Estate Spaces & Experience'}
          </h2>
          <p className={`text-xs sm:text-sm font-light leading-relaxed ${
            isDark ? 'text-stone-300' : 'text-stone-600'
          }`}>
            Cada sala e jardim da Quinta Lagoa da Guia foi concetualizado para oferecer harmonia, autenticidade e requinte em cada momento.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {AMENITIES.map((item) => {
            const IconComp = iconMap[item.icon] || Check;

            return (
              <div
                key={item.id}
                className={`p-5 sm:p-6 rounded-xl space-y-4 group cursor-pointer transition-all duration-300 border ${
                  isDark 
                    ? 'bg-[#2b2829] border-white/10 hover:border-[#e7d49d]/50 hover:bg-[#353233]' 
                    : 'bg-white border-stone-200 hover:border-[#ac926f]/50 hover:shadow-xl'
                }`}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#ac926f]/20 border border-[#ac926f]/40 flex items-center justify-center text-[#ac926f] group-hover:bg-[#ac926f] group-hover:text-white transition-colors">
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="space-y-1.5">
                  <h3 className={`font-serif-luxury text-lg sm:text-xl font-bold transition-colors ${
                    isDark ? 'text-white group-hover:text-[#e7d49d]' : 'text-[#1a1919] group-hover:text-[#ac926f]'
                  }`}>
                    {item.titulo}
                  </h3>
                  <p className={`text-xs font-light leading-relaxed ${
                    isDark ? 'text-stone-300' : 'text-stone-600'
                  }`}>
                    {item.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
