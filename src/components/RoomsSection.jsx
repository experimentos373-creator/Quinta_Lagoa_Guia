import React, { useState } from 'react';
import { ROOMS } from '../data/quintaData';
import { Bed, Users, Check, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function RoomsSection({ onOpenBooking, theme, currentLang }) {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const activeRoom = ROOMS[selectedRoomIndex];

  const isDark = theme === 'dark';

  return (
    <section id="quartos" className={`py-12 sm:py-16 lg:py-24 transition-colors duration-400 border-t ${
      isDark ? 'bg-[#2b2829] text-white border-white/10' : 'bg-[#f4f2ed] text-[#1a1919] border-stone-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ac926f]/20 border border-[#ac926f]/40 text-[#ac926f] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentLang === 'PT' ? 'Espaços Gastronómicos & Eventos' : 'Dining & Event Spaces'}</span>
          </div>

          <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal leading-tight ${
            isDark ? 'text-white' : 'text-[#1a1919]'
          }`}>
            {currentLang === 'PT' ? 'Salas da Quinta Lagoa da Guia' : 'Spaces of Quinta Lagoa da Guia'}
          </h2>
          <p className={`text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto ${
            isDark ? 'text-stone-300' : 'text-stone-600'
          }`}>
            Espaços com boiserie em verde inglês, carpintaria personalizada em madeira natural e iluminação artesanal em vidro de Leiria.
          </p>
        </div>

        {/* Space Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8 sm:mb-12">
          {ROOMS.map((room, idx) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoomIndex(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedRoomIndex === idx
                  ? 'gold-btn shadow-lg border-transparent scale-105'
                  : isDark 
                    ? 'bg-white/5 text-stone-300 hover:bg-white/15 border-white/10' 
                    : 'bg-white text-stone-700 hover:bg-stone-100 border-stone-300'
              }`}
            >
              {room.nome}
            </button>
          ))}
        </div>

        {/* Active Space Card */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center p-5 sm:p-8 lg:p-10 rounded-2xl border shadow-2xl ${
          isDark ? 'bg-[#353233] border-[#e7d49d]/30 text-white' : 'bg-white border-[#ac926f]/30 text-[#1a1919]'
        }`}>
          
          {/* Photo Showcase Container */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden shadow-2xl border border-stone-500/20 group relative aspect-[16/10] sm:aspect-[4/3] w-full bg-black/40">
            <img
              src={activeRoom.imagem}
              alt={activeRoom.nome}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
              loading="eager"
            />
            
            {/* Subtle Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none"></div>
            
            {/* Capacity Badge */}
            <span className="absolute bottom-4 left-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#e7d49d] bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#e7d49d]/30 shadow-lg">
              {activeRoom.capacidade}
            </span>
          </div>

          {/* Details & Info */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#ac926f]">
                {activeRoom.subtitulo}
              </span>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-serif-luxury font-bold leading-snug">
                {activeRoom.nome}
              </h3>
            </div>

            <p className={`text-xs sm:text-sm font-light leading-relaxed ${
              isDark ? 'text-stone-300' : 'text-stone-600'
            }`}>
              {activeRoom.descricao}
            </p>

            <div className="space-y-2.5 py-3 sm:py-4 border-t border-b border-stone-500/20 text-xs">
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-[#ac926f] shrink-0" />
                <span>Capacidade: <strong>{activeRoom.capacidade}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Bed className="w-4 h-4 text-[#ac926f] shrink-0" />
                <span>Ambiente: <strong>{activeRoom.cama}</strong></span>
              </div>
            </div>

            {/* Destaques */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#ac926f] block">
                Destaques do Espaço
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeRoom.destaques.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <Check className="w-3.5 h-3.5 text-[#ac926f] shrink-0" />
                    <span className={isDark ? 'text-stone-200' : 'text-stone-700'}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Refined Luxury CTA Button */}
            <div className="pt-3">
              <button
                onClick={() => onOpenBooking({ room: activeRoom.nome })}
                className="w-full sm:w-auto gold-btn font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-xl flex items-center justify-center gap-2.5 group hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{currentLang === 'PT' ? 'Reservar Este Espaço' : 'Book This Space'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
