import React from 'react';
import { Star, Flame, UtensilsCrossed, Clock, MapPin, ExternalLink, Heart, CheckCircle2 } from 'lucide-react';
import { QUINTA_INFO } from '../data/quintaData';

// Official Google G Logo SVG
const GoogleGIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

export default function GoogleReviewsSection({ onOpenBooking, theme, currentLang }) {
  const isDark = theme === 'dark';
  const isPT = currentLang === 'PT';
  const googleData = QUINTA_INFO.google;

  return (
    <section 
      id="avaliacoes" 
      className={`py-16 sm:py-24 transition-colors duration-400 border-t ${
        isDark ? 'bg-[#2b2829] text-white border-white/10' : 'bg-[#faf8f5] text-[#1a1919] border-stone-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ac926f]/15 border border-[#ac926f]/35 text-[#ac926f] text-xs font-bold uppercase tracking-widest">
            <GoogleGIcon className="w-4 h-4" />
            <span>{isPT ? 'Avaliações Google Verificadas' : 'Verified Google Reviews'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal leading-tight">
            {isPT ? 'A Experiência Contada por Quem Nos Visita' : 'Real Experiences from Our Guests'}
          </h2>

          <p className={`text-xs sm:text-base font-light leading-relaxed max-w-2xl mx-auto ${
            isDark ? 'text-stone-300' : 'text-stone-600'
          }`}>
            {isPT 
              ? 'Classificação de 4,4 / 5 estrelas no Google. Da cozinha tradicional portuguesa revisitada à tranquilidade da lareira e sala privada, partilhamos o testemunho autêntico de quem já viveu momentos na Quinta.'
              : 'Rated 4.4 / 5 stars on Google. From revisited traditional Portuguese cuisine to the warmth of our fireplace and private dining room, discover authentic guest reviews.'
            }
          </p>
        </div>

        {/* Google Scorecard Banner */}
        <div className={`rounded-3xl p-6 sm:p-8 lg:p-10 border shadow-2xl transition-all ${
          isDark 
            ? 'bg-[#353233] border-[#ac926f]/30 text-white' 
            : 'bg-white border-[#ac926f]/30 text-[#1a1919]'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left: Overall Rating Card */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-2.5 pb-6 md:pb-0 md:border-r border-stone-500/20">
              <div className="flex items-center gap-3">
                <GoogleGIcon className="w-8 h-8 shrink-0" />
                <span className="font-serif-luxury text-xl font-bold tracking-wide">Google Reviews</span>
              </div>
              
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-4xl sm:text-5xl font-bold font-serif-luxury text-[#e7d49d]">
                  {googleData.rating.toFixed(1).replace('.', ',')}
                </span>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-[#e7d49d]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#e7d49d] text-[#e7d49d]" />
                    ))}
                  </div>
                  <span className={`text-xs block font-medium ${isDark ? 'text-stone-300' : 'text-stone-500'}`}>
                    {googleData.totalReviews} {isPT ? 'avaliações no Google' : 'reviews on Google'}
                  </span>
                </div>
              </div>

              <span className="text-[11px] font-semibold text-[#ac926f] uppercase tracking-wider block pt-1">
                {googleData.precoMedio} • {isPT ? 'Restaurante & Quinta' : 'Restaurant & Estate'}
              </span>
            </div>

            {/* Center: Key Service Highlights */}
            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-2">
              <div className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                isDark ? 'bg-black/20 border-white/10' : 'bg-[#faf8f5] border-stone-200'
              }`}>
                <UtensilsCrossed className="w-4 h-4 text-[#ac926f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold leading-tight">{isPT ? 'Sala Jantar Privada' : 'Private Dining Room'}</h4>
                  <p className={`text-[11px] font-light leading-snug mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                    {isPT ? 'Ambiente íntimo para grupos' : 'Intimate space for groups'}
                  </p>
                </div>
              </div>

              <div className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                isDark ? 'bg-black/20 border-white/10' : 'bg-[#faf8f5] border-stone-200'
              }`}>
                <Flame className="w-4 h-4 text-[#e7d49d] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold leading-tight">{isPT ? 'Mesa Junto à Lareira' : 'Fireplace Seating'}</h4>
                  <p className={`text-[11px] font-light leading-snug mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                    {isPT ? 'Ambiente acolhedor e tranquilo' : 'Cozy & relaxed atmosphere'}
                  </p>
                </div>
              </div>

              <div className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                isDark ? 'bg-black/20 border-white/10' : 'bg-[#faf8f5] border-stone-200'
              }`}>
                <Clock className="w-4 h-4 text-[#ac926f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold leading-tight">{isPT ? 'Aberto Todos os Dias' : 'Open Daily'}</h4>
                  <p className={`text-[11px] font-light leading-snug mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                    12:00 – 22:00
                  </p>
                </div>
              </div>

              <div className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                isDark ? 'bg-black/20 border-white/10' : 'bg-[#faf8f5] border-stone-200'
              }`}>
                <MapPin className="w-4 h-4 text-[#ac926f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold leading-tight">{isPT ? 'Guia, Pombal' : 'Guia, Pombal'}</h4>
                  <p className={`text-[11px] font-light leading-snug mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                    R. Nossa Sra. da Guia 204
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Quick Action Buttons */}
            <div className="md:col-span-3 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => onOpenBooking ? onOpenBooking({ serviceType: 'restaurante' }) : null}
                className="w-full gold-btn font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md text-center cursor-pointer transition-all active:scale-95"
              >
                {isPT ? 'Marcar Mesa / Jantar' : 'Book a Table'}
              </button>

              <a
                href={googleData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-xl border text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  isDark 
                    ? 'border-white/20 hover:bg-white/10 text-stone-200' 
                    : 'border-stone-300 hover:bg-stone-100 text-stone-700'
                }`}
              >
                <span>{isPT ? 'Ver no Google' : 'View on Google'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#ac926f]" />
              </a>
            </div>

          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {googleData.reviews.map((rev, index) => (
            <div
              key={rev.id}
              className={`rounded-2xl p-6 border flex flex-col justify-between space-y-4 shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isDark 
                  ? 'bg-[#353233] border-white/10 hover:border-[#ac926f]/60 text-white' 
                  : 'bg-white border-stone-200 hover:border-[#ac926f]/60 text-[#1a1919]'
              }`}
            >
              <div className="space-y-3.5">
                
                {/* Reviewer Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-inner ${rev.avatarBg || 'bg-[#ac926f]'}`}>
                      {rev.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                        <span>{rev.nome}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853]" title="Avaliação Verificada no Google" />
                      </h3>
                      <span className={`text-[11px] font-light ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                        {rev.tempo} • Google
                      </span>
                    </div>
                  </div>

                  <GoogleGIcon className="w-4 h-4 opacity-70" />
                </div>

                {/* Stars Rating */}
                <div className="flex items-center gap-1 text-[#e7d49d]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#e7d49d] text-[#e7d49d]" />
                  ))}
                </div>

                {/* Comment */}
                <p className={`text-xs sm:text-sm font-light leading-relaxed italic ${
                  isDark ? 'text-stone-200' : 'text-stone-700'
                }`}>
                  "{rev.comentario}"
                </p>
              </div>

              {/* Tag / Highlight */}
              <div className="pt-2 border-t border-stone-500/15 flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-wider text-[#ac926f] uppercase flex items-center gap-1">
                  <Heart className="w-3 h-3 text-[#ac926f] fill-[#ac926f]/20" />
                  <span>{rev.destaque}</span>
                </span>
                <span className="text-[10px] text-stone-400 font-mono">5.0 / 5.0</span>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center pt-2">
          <p className={`text-xs font-light max-w-xl mx-auto ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
            {isPT 
              ? 'Todas as críticas apresentadas são públicas e verificadas no Google Maps. Agradecemos a cada cliente a partilha da sua experiência na Quinta Lagoa da Guia.'
              : 'All reviews shown are public and verified on Google Maps. We warmly thank every guest for sharing their dining and hospitality experience with us.'
            }
          </p>
        </div>

      </div>
    </section>
  );
}
