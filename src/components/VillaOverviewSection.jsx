import React, { useState } from 'react';
import { Calendar, Users, ChevronLeft, ChevronRight, CheckCircle2, Search, Sparkles } from 'lucide-react';
import { QUINTA_INFO } from '../data/quintaData';

export default function VillaOverviewSection({ onOpenBooking, theme, currentLang }) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState('2 Hóspedes');

  const isDark = theme === 'dark';

  const carouselImages = [
    { src: "https://quintalagoadaguia.pt/wp-content/uploads/2026/01/IMG-20260104-WA0018.jpg", title: "Quinta Lagoa da Guia — Paisagem & Natureza" },
    { src: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_oliveira.jpg", title: "Sala da Oliveira — Boiserie Verde Inglês" },
    { src: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_pipa.jpg", title: "Sala da Pipa — Logotipo Dourado & Restaurante" },
    { src: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_lagoa.jpg", title: "Sala da Lagoa — Salão de Eventos" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    onOpenBooking({ checkIn: checkInDate, checkOut: checkOutDate, guests: guestCount });
  };

  return (
    <section id="overview" className={`py-12 lg:py-24 transition-colors duration-400 border-t border-b ${
      isDark ? 'bg-[#353233] text-white border-white/10' : 'bg-[#fcfbfa] text-[#1a1919] border-stone-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Narrative + Availability Form */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#ac926f]">
                {currentLang === 'PT' ? 'Um Refúgio Privado' : 'Your Private Escape'}
              </span>
              <h2 className={`text-2xl xs:text-3xl sm:text-5xl font-serif-luxury font-normal leading-tight ${
                isDark ? 'text-white' : 'text-[#1a1919]'
              }`}>
                {currentLang === 'PT' ? 'Sofisticação & Tranquilidade em' : 'A Refined Haven in'} <br />
                <span className="gold-text font-serif italic">Guia • Pombal</span>
              </h2>
            </div>

            <p className={`text-xs sm:text-base font-light leading-relaxed ${
              isDark ? 'text-stone-300' : 'text-stone-700'
            }`}>
              Inserida num ambiente natural sereno com oliveiras centenárias e relvados reluzentes, a Quinta Lagoa da Guia junta a sofisticação da arquitetura contemporânea ao aconchego da hospitalidade portuguesa.
            </p>

            <ul className={`space-y-2.5 text-xs sm:text-sm font-medium ${
              isDark ? 'text-stone-200' : 'text-stone-800'
            }`}>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ac926f] shrink-0" />
                <span>Restaurante Sala da Oliveira com Boiserie Verde Inglês</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ac926f] shrink-0" />
                <span>Sala da Pipa com Logotipo Metálico Dourado e Madeira Natural</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ac926f] shrink-0" />
                <span>Sala da Lagoa para Casamentos e Eventos com Candeeiros em Vidro de Leiria</span>
              </li>
            </ul>

            {/* Availability Widget Card */}
            <div className={`p-5 sm:p-8 rounded-2xl border shadow-2xl space-y-5 transition-all ${
              isDark ? 'bg-[#2b2829] border-white/10 text-white' : 'bg-white border-stone-200 text-[#1a1919]'
            }`}>
              <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#ac926f] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ac926f]" />
                <span>{currentLang === 'PT' ? 'Simulação de Reserva & Eventos' : 'Booking & Event Simulation'}</span>
              </h3>

              <form onSubmit={handleCheckAvailability} className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className={`block text-[10px] uppercase font-bold tracking-wider mb-1.5 ${
                    isDark ? 'text-stone-300' : 'text-stone-700'
                  }`}>
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full text-xs font-semibold"
                  />
                </div>

                <div>
                  <label className={`block text-[10px] uppercase font-bold tracking-wider mb-1.5 ${
                    isDark ? 'text-stone-300' : 'text-stone-700'
                  }`}>
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full text-xs font-semibold"
                  />
                </div>

                <div>
                  <label className={`block text-[10px] uppercase font-bold tracking-wider mb-1.5 ${
                    isDark ? 'text-stone-300' : 'text-stone-700'
                  }`}>
                    Hóspedes / Convidados
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full text-xs font-semibold"
                  >
                    <option value="2 Hóspedes">2 Pessoas (Almoço / Jantar)</option>
                    <option value="4 Hóspedes">4 Pessoas (Família)</option>
                    <option value="8 Hóspedes">8 Pessoas (Grupo)</option>
                    <option value="20 Hóspedes">Evento Intimista (20 Convidados)</option>
                    <option value="100 Hóspedes">Grande Evento / Casamento</option>
                  </select>
                </div>

                <div className="sm:col-span-3 pt-2">
                  <button
                    type="submit"
                    className="w-full gold-btn font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all min-h-[46px] cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>{currentLang === 'PT' ? 'Verificar Disponibilidade' : 'Check Availability'}</span>
                  </button>
                </div>
              </form>
            </div>

          </div>

          {/* Right Column: Interactive Photo Slider */}
          <div className="lg:col-span-6">
            <div 
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-500/20 group touch-pan-y"
            >
              
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-black/40">
                <img
                  src={carouselImages[currentSlide].src}
                  alt={carouselImages[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-700 brightness-105 contrast-105"
                />

                {/* Dark Overlay for Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Slide Caption */}
                <div className="absolute bottom-4 inset-x-4 p-3 text-center">
                  <span className="font-serif-luxury text-sm sm:text-lg font-bold text-white tracking-wide drop-shadow-md">
                    {carouselImages[currentSlide].title}
                  </span>
                </div>
              </div>

              {/* Prev / Next Buttons (Touch-Friendly) */}
              <button
                onClick={prevSlide}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#ac926f] active:scale-95 transition-all border border-white/20 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                title="Foto Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#ac926f] active:scale-95 transition-all border border-white/20 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                title="Próxima Foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slider Dots Indicator */}
              <div className="absolute bottom-2 inset-x-0 flex justify-center gap-2 pb-2">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx ? 'w-7 bg-[#e7d49d]' : 'w-2 bg-white/60'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  ></button>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
