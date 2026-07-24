import React from 'react';
import { Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { QUINTA_INFO } from '../data/quintaData';

export default function Hero({ onOpenBooking, theme, currentLang }) {
  const isDark = theme === 'dark';

  const currentHeroBg = isDark 
    ? QUINTA_INFO.heroBgUrl 
    : (QUINTA_INFO.heroBgLightUrl || "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_oliveira.jpg");

  return (
    <section id="hero" className={`relative min-h-[100dvh] md:min-h-[92vh] flex items-center justify-center overflow-hidden pt-16 pb-12 sm:py-24 lg:py-32 transition-colors duration-500 ${
      isDark ? 'bg-[#353233] text-white' : 'bg-[#fcfbfa] text-[#1a1919]'
    }`}>
      
      {/* Dynamic Theme Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 scale-105"
        style={{ backgroundImage: `url('${currentHeroBg}')` }}
      >
        {/* Dynamic Theme Overlay: Dark Slate in Dark Mode vs Luminous Ivory Vignette in Light Mode */}
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-[#353233]/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#353233] via-transparent to-[#353233]/70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#353233]/70 via-transparent to-[#353233]/70"></div>
          </>
        ) : (
          <>
            {/* Light Mode Overlay: Balanced ivory backdrop so background photo shows tastefully while text remains 100% crisp & readable */}
            <div className="absolute inset-0 bg-[#fcfbfa]/65 backdrop-blur-[1px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbfa] via-[#fcfbfa]/40 to-[#fcfbfa]/70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#fcfbfa]/75 via-transparent to-[#fcfbfa]/75"></div>
          </>
        )}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3 sm:space-y-6 w-full my-auto">
        
        {/* Top Location Divider Badge */}
        <div className="inline-flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#a08256] dark:text-[#e7d49d]">
          <span className="h-[1px] w-6 sm:w-10 bg-[#a08256]/50 dark:bg-[#e7d49d]/50"></span>
          <span>Guia • Pombal • Leiria</span>
          <span className="h-[1px] w-6 sm:w-10 bg-[#a08256]/50 dark:bg-[#e7d49d]/50"></span>
        </div>

        {/* Main Headline */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-luxury font-bold tracking-tight leading-tight ${
            isDark ? 'text-white drop-shadow-md' : 'text-[#1a1919]'
          }`}>
            {currentLang === 'PT' ? 'Bem-vindo à' : 'Welcome to'} <br />
            <span className="gold-text font-serif italic block mt-1">Quinta Lagoa da Guia</span>
          </h1>

          <p className={`text-base sm:text-xl md:text-2xl font-serif font-semibold tracking-wide max-w-2xl mx-auto px-2 ${
            isDark ? 'text-stone-200' : 'text-[#2b2829]'
          }`}>
            {currentLang === 'PT' ? 'O Seu Refúgio Exclusivo no Centro de Portugal' : 'Your Private Luxury Escape in Central Portugal'}
          </p>
        </div>

        {/* Description - Larger Font & Great Readability */}
        <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2 ${
          isDark ? 'text-stone-300 font-light' : 'text-[#353233] font-medium'
        }`}>
          {QUINTA_INFO.descricaoLonga}
        </p>

        {/* Action Buttons */}
        <div className="pt-3 sm:pt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto gold-btn font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 sm:py-4 rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{currentLang === 'PT' ? 'Simular Reserva' : 'Book The Villa'}</span>
          </button>

          <a
            href="#overview"
            className={`w-full sm:w-auto border font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 sm:py-4 rounded-xl transition-all text-center ${
              isDark 
                ? 'bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm' 
                : 'bg-white/90 hover:bg-white text-[#1a1919] border-stone-300 shadow-md hover:border-[#ac926f]'
            }`}
          >
            {currentLang === 'PT' ? 'Explorar a Quinta' : 'Explore Estate'}
          </a>
        </div>

      </div>

      {/* Scroll Indicator at Bottom */}
      <div className="relative z-10 pt-2 pb-1 flex flex-col items-center">
        <a
          href="#overview"
          className="flex flex-col items-center gap-1 group text-xs uppercase tracking-widest font-semibold text-[#a08256] dark:text-[#e7d49d] hover:opacity-80 transition-opacity"
        >
          <span className="text-[9px] tracking-[0.2em] font-bold">{currentLang === 'PT' ? 'Explorar Quinta' : 'Discover Estate'}</span>
          <div className={`p-1.5 rounded-full border transition-all ${
            isDark 
              ? 'bg-white/10 group-hover:bg-[#ac926f]/30 text-white group-hover:text-[#e7d49d] border-white/20' 
              : 'bg-white/95 group-hover:bg-white text-stone-800 group-hover:text-[#ac926f] border-stone-300 shadow-md'
          }`}>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </a>
      </div>

    </section>
  );
}
