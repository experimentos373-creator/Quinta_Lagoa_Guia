import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/quintaData';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function GallerySection({ onOpenBooking, theme, currentLang }) {
  const [activeCategory, setActiveCategory] = useState('todas');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const isDark = theme === 'dark';

  const categories = [
    { id: 'todas', label: currentLang === 'PT' ? 'Todas as Fotos' : 'All Photos' },
    { id: 'quinta', label: currentLang === 'PT' ? 'A Quinta & Natureza' : 'The Estate' },
    { id: 'restaurante', label: currentLang === 'PT' ? 'Restaurante & Salas' : 'Dining & Rooms' },
    { id: 'eventos', label: currentLang === 'PT' ? 'Eventos & Celebrações' : 'Events & Celebrations' }
  ];

  const filteredItems = activeCategory === 'todas'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.cat === activeCategory);

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX || lightboxIndex === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > 40) {
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (distance < -40) {
      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <section id="galeria" className={`py-12 lg:py-24 transition-colors duration-400 ${
      isDark ? 'bg-[#353233] text-white' : 'bg-[#fcfbfa] text-[#1a1919]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#ac926f]">
            {currentLang === 'PT' ? 'Fotografia & Detalhes' : 'Photo Gallery'}
          </span>
          <h2 className={`text-2xl xs:text-3xl sm:text-5xl font-serif-luxury font-normal ${
            isDark ? 'text-white' : 'text-[#1a1919]'
          }`}>
            {currentLang === 'PT' ? 'Galeria da Quinta Lagoa da Guia' : 'Gallery of Quinta Lagoa da Guia'}
          </h2>
          <p className={`text-xs sm:text-sm font-light leading-relaxed ${
            isDark ? 'text-stone-300' : 'text-stone-600'
          }`}>
            Explore a beleza arquitetónica, as salas boiserie em verde inglês e os pormenores artesanais da nossa Quinta.
          </p>

          {/* Filter Categories Horizontal Scroll Bar */}
          <div className="pt-4 flex overflow-x-auto no-scrollbar justify-start sm:justify-center gap-2 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border whitespace-nowrap shrink-0 min-h-[40px] cursor-pointer ${
                  activeCategory === cat.id
                    ? 'gold-btn font-bold shadow-md border-transparent'
                    : isDark
                      ? 'bg-white/5 text-stone-300 hover:bg-white/15 border-white/10'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border-stone-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-xl overflow-hidden shadow-lg border border-stone-500/20 aspect-[4/3] cursor-pointer active:scale-95 transition-all"
            >
              <img
                src={item.img}
                alt={item.titulo}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#e7d49d]">
                  {item.cat}
                </span>
                <h4 className="font-serif-luxury text-sm font-bold text-white">
                  {item.titulo}
                </h4>
                <div className="mt-1.5 text-[#e7d49d] flex items-center gap-1 text-[11px]">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ampliar Imagem</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with Touch Swipe */}
      {lightboxIndex !== null && (
        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 touch-pan-y"
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-colors z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Fechar Galeria"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
            className="absolute left-3 p-3 rounded-full bg-black/70 border border-white/20 text-white hover:bg-[#ac926f] active:scale-95 transition-all z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Imagem Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] text-center space-y-3 px-2">
            <img
              src={filteredItems[lightboxIndex].img}
              alt={filteredItems[lightboxIndex].titulo}
              className="max-h-[65vh] sm:max-h-[75vh] mx-auto rounded-xl shadow-2xl object-contain"
            />
            <p className="text-white font-serif-luxury text-sm sm:text-lg font-bold">
              {filteredItems[lightboxIndex].titulo}
            </p>
          </div>

          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % filteredItems.length)}
            className="absolute right-3 p-3 rounded-full bg-black/70 border border-white/20 text-white hover:bg-[#ac926f] active:scale-95 transition-all z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Próxima Imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

    </section>
  );
}
