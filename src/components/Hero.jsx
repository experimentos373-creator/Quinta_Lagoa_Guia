import React from 'react';
import { Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { QUINTA_INFO } from '../data/quintaData';

export default function Hero({ onOpenBooking, theme, currentLang }) {
  const isDark = theme === 'dark';

  const currentHeroBg = isDark 
    ? QUINTA_INFO.heroBgUrl 
    : (QUINTA_INFO.heroBgLightUrl || "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_oliveira.jpg");

  return (
    <section id="hero" className={`relative min-h-[100dvh] md:min-h-[92vh] flex items-center justify-center overflow-hidden py-16 sm:py-24 lg:py-32 transition-colors duration-500 ${
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 lg:space-y-8 my-auto">
        
        {/* Top Location Badge - Moved 60px up on mobile */}
        <div className="flex justify-center -mt-[60px] sm:mt-0">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase shadow-md ${
            isDark 
              ? 'bg-[#353233]/80 border-[#ac926f]/50 text-[#e7d49d] backdrop-blur-md' 
              : 'bg-white/95 border-[#ac926f]/40 text-[#ac926f]'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-[#ac926f]" />
            <span>Guia • Pombal • Leiria</span>
          </div>
        </div>

        {/* Main Headline - Increased Font Size */}
        <div className="space-y-3">
          <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-luxury font-bold tracking-tight leading-[1.1] ${
            isDark ? 'text-white drop-shadow-md' : 'text-[#1a1919]'
          }`}>
            {currentLang === 'PT' ? 'Bem-vindo à' : 'Welcome to'} <br />
            <span className="gold-text font-serif italic block mt-1 sm:mt-0">Quinta Lagoa da Guia</span>
          </h1>

          <p className={`text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide font-serif max-w-3xl mx-auto px-2 ${
            isDark ? 'text-stone-200' : 'text-[#2b2829]'
          }`}>
            {currentLang === 'PT' ? 'O Seu Refúgio Exclusivo no Centro de Portugal' : 'Your Private Luxury Escape in Central Portugal'}
          </p>
        </div>

        {/* Description */}
        <p className={`text-xs sm:text-base max-w-2xl mx-auto leading-relaxed px-2 ${
          isDark ? 'text-stone-300 font-light' : 'text-[#353233] font-medium'
        }`}>
          {QUINTA_INFO.descricaoLonga}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto gold-btn font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{currentLang === 'PT' ? 'Simular Reserva' : 'Book The Villa'}</span>
          </button>

          <a
            href="#overview"
            className={`w-full sm:w-auto border font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all text-center ${
              isDark 
                ? 'bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm' 
                : 'bg-white/95 hover:bg-white text-[#1a1919] border-stone-300 shadow-md hover:border-[#ac926f]'
            }`}
          >
            {currentLang === 'PT' ? 'Explorar a Quinta' : 'Explore Estate'}
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="pt-8 sm:pt-12 flex justify-center">
          <a
            href="#overview"
            className={`p-3 rounded-full border transition-colors ${
              isDark 
                ? 'bg-white/10 hover:bg-[#ac926f]/30 text-white hover:text-[#e7d49d] border-white/20' 
                : 'bg-white/95 hover:bg-white text-stone-800 hover:text-[#ac926f] border-stone-300 shadow-md'
            }`}
            title="Scroll Down"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>

      </div>

    </section>
  );
}
