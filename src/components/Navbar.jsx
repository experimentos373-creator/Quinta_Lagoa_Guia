import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Calendar, Sun, Moon, ChevronDown, Phone } from 'lucide-react';
import { QUINTA_INFO } from '../data/quintaData';

export default function Navbar({ onOpenBooking, theme, setTheme, currentLang, setCurrentLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = currentLang === 'PT' ? [
    { label: "Início", href: "#hero" },
    { label: "A Quinta", href: "#overview" },
    { label: "Espaços", href: "#comodidades" },
    { label: "Restaurante", href: "#quartos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Localização", href: "#localizacao" },
    { label: "Contactos", href: "#contactos" }
  ] : [
    { label: "Home", href: "#hero" },
    { label: "The Estate", href: "#overview" },
    { label: "Spaces", href: "#comodidades" },
    { label: "Dining", href: "#quartos" },
    { label: "Gallery", href: "#galeria" },
    { label: "Location", href: "#localizacao" },
    { label: "Contacts", href: "#contactos" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* ALWAYS DARK PRESTIGE NAVBAR */}
      <div className={`w-full transition-all duration-300 border-b border-white/10 text-white ${
        scrolled 
          ? 'bg-[#353233]/95 backdrop-blur-md shadow-2xl py-2.5 sm:py-3' 
          : 'bg-[#353233] py-3 sm:py-4 shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 flex-nowrap">
          
          {/* Brand Logo - Fixed Left, No Wrapping */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group min-w-0">
            <img
              src={QUINTA_INFO.logoUrl}
              alt="Quinta Lagoa da Guia Logo"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-[#ac926f]/40 shadow-md group-hover:border-[#e7d49d] transition-all shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="whitespace-nowrap truncate font-serif-luxury text-sm sm:text-base font-bold tracking-wider text-white uppercase group-hover:text-[#e7d49d] transition-colors">
                Quinta Lagoa da Guia
              </span>
              <span className="whitespace-nowrap truncate text-[8.5px] sm:text-[9.5px] uppercase tracking-widest text-[#e7d49d] font-bold -mt-0.5">
                Gastronomia • Eventos • Guia
              </span>
            </div>
          </a>

          {/* Nav Links - Centered, Only rendered on wide displays (>= 1536px) to prevent overlap */}
          <nav className="hidden 2xl:flex items-center justify-center gap-5 3xl:gap-7 shrink min-w-0 px-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="whitespace-nowrap text-xs uppercase tracking-wider font-bold text-white/90 hover:text-[#e7d49d] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e7d49d] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            
            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              title={isDark ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
              className="p-2.5 rounded-xl border border-white/15 bg-[#2b2829] text-[#e7d49d] hover:bg-white/10 hover:border-[#e7d49d]/50 transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[#e7d49d]" />}
            </button>

            {/* Language Selector (Hidden on small mobile, visible sm+) */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-xl border border-white/15 bg-[#2b2829] text-white/90 hover:border-[#e7d49d]/50 hover:text-[#e7d49d] transition-colors cursor-pointer min-h-[40px]"
              >
                <Globe className="w-3.5 h-3.5 text-[#e7d49d]" />
                <span className="font-bold">{currentLang}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-lg border border-[#e7d49d]/30 bg-[#2b2829] text-white shadow-2xl py-1 z-50">
                  <button
                    onClick={() => { setCurrentLang('PT'); setLanguageMenuOpen(false); }}
                    className="w-full text-left px-3 py-2 text-xs hover:bg-[#ac926f]/30 flex items-center gap-2 font-medium"
                  >
                    <span>🇵🇹</span> Português
                  </button>
                  <button
                    onClick={() => { setCurrentLang('EN'); setLanguageMenuOpen(false); }}
                    className="w-full text-left px-3 py-2 text-xs hover:bg-[#ac926f]/30 flex items-center gap-2 font-medium"
                  >
                    <span>🇬🇧</span> English
                  </button>
                </div>
              )}
            </div>

            {/* CTA Book Button (Hidden on tiny mobile, visible sm+) */}
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:flex gold-btn font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all items-center gap-2 whitespace-nowrap cursor-pointer min-h-[40px]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{currentLang === 'PT' ? 'Simular Reserva' : 'Book Villa'}</span>
            </button>

            {/* Mobile / Tablet Drawer Toggle Button (Visible < 2xl) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="2xl:hidden p-2.5 rounded-xl focus:outline-none border border-white/15 bg-[#2b2829] text-white hover:bg-white/10 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Abrir Menu de Navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile & Tablet Full Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="2xl:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-[#2b2829]/95 backdrop-blur-xl text-white px-6 pt-6 pb-12 space-y-6 shadow-2xl overflow-y-auto animate-in slide-in-from-top-2 duration-300 z-50">
          
          <div className="grid grid-cols-1 gap-1 border-b border-white/10 pb-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif-luxury font-bold uppercase tracking-wider py-3 px-4 rounded-xl hover:bg-[#ac926f]/20 text-white hover:text-[#e7d49d] active:bg-[#ac926f]/30 transition-colors flex items-center min-h-[48px]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-2">
            
            {/* Language Switcher Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentLang('PT')}
                className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  currentLang === 'PT' 
                    ? 'border-[#e7d49d] bg-[#ac926f]/30 text-[#e7d49d]' 
                    : 'border-white/15 bg-white/5 text-stone-300'
                }`}
              >
                <span>🇵🇹</span> Português
              </button>

              <button
                onClick={() => setCurrentLang('EN')}
                className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  currentLang === 'EN' 
                    ? 'border-[#e7d49d] bg-[#ac926f]/30 text-[#e7d49d]' 
                    : 'border-white/15 bg-white/5 text-stone-300'
                }`}
              >
                <span>🇬🇧</span> English
              </button>
            </div>

            {/* Direct Phone Link */}
            <a
              href={`tel:${QUINTA_INFO.contactos.telefone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 text-xs font-bold text-[#e7d49d] py-3 px-4 rounded-xl border border-[#e7d49d]/30 bg-white/5 hover:bg-white/10 transition-all min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-[#e7d49d]" />
              <span>Contactar: +351 961 711 042</span>
            </a>

            {/* Simular Reserva Button */}
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full gold-btn font-bold text-xs uppercase tracking-widest py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all min-h-[48px]"
            >
              <Calendar className="w-4 h-4" />
              <span>{currentLang === 'PT' ? 'Simular Reserva de Evento / Almoço' : 'Book Reservation'}</span>
            </button>

          </div>

        </div>
      )}

    </header>
  );
}
