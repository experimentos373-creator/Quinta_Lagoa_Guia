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
          ? 'bg-[#353233]/95 backdrop-blur-md shadow-2xl py-3' 
          : 'bg-[#353233] py-4 shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo - Anchored Firmly on Left */}
          <a href="#hero" className="flex items-center gap-3 shrink-0 mr-4 lg:mr-8 group">
            <img
              src={QUINTA_INFO.logoUrl}
              alt="Quinta Lagoa da Guia Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[#ac926f]/40 shadow-md group-hover:border-[#e7d49d] transition-all"
            />
            <div className="flex flex-col">
              <span className="whitespace-nowrap font-serif-luxury text-base sm:text-lg font-bold tracking-wider text-white uppercase group-hover:text-[#e7d49d] transition-colors">
                Quinta Lagoa da Guia
              </span>
              <span className="whitespace-nowrap text-[9px] sm:text-[9.5px] uppercase tracking-widest text-[#e7d49d] font-bold -mt-0.5">
                Gastronomia • Eventos • Guia
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Centered on 2xl+ */}
          <nav className="hidden 2xl:flex items-center justify-center gap-6 3xl:gap-8 mx-auto">
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

          {/* Right Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0 ml-4 lg:ml-8">
            
            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              title={isDark ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
              className="p-2 rounded-lg border border-white/15 bg-[#2b2829] text-[#e7d49d] hover:bg-white/10 hover:border-[#e7d49d]/50 transition-all cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[#e7d49d]" />}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border border-white/15 bg-[#2b2829] text-white/90 hover:border-[#e7d49d]/50 hover:text-[#e7d49d] transition-colors cursor-pointer"
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

            {/* CTA Book / Reservation Button */}
            <button
              onClick={() => onOpenBooking()}
              className="gold-btn font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{currentLang === 'PT' ? 'Simular Reserva' : 'Book Reservation'}</span>
            </button>

            {/* Hamburger Button for screens under 2xl */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg focus:outline-none border border-white/15 bg-[#2b2829] text-white hover:bg-white/10 2xl:hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

          {/* Mobile & Tablet Actions (lg:hidden) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="p-2 rounded-lg border border-white/15 bg-[#2b2829] text-[#e7d49d] hover:bg-white/10 transition-all"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[#e7d49d]" />}
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="gold-btn font-bold text-[10px] sm:text-xs uppercase tracking-wider px-3.5 sm:px-4 py-2 rounded-lg shadow-sm whitespace-nowrap"
            >
              {currentLang === 'PT' ? 'Reservar' : 'Book'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg focus:outline-none border border-white/15 bg-[#2b2829] text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Drawer Panel (Always Dark) */}
      {mobileMenuOpen && (
        <div className="2xl:hidden border-b border-[#e7d49d]/20 bg-[#2b2829] text-white px-6 pt-5 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-300">
          <div className="grid grid-cols-1 gap-1 border-b border-white/10 pb-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif-luxury font-bold uppercase tracking-wider py-2.5 px-3 rounded-lg hover:bg-[#ac926f]/20 text-white hover:text-[#e7d49d] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-4">
            <div className="flex items-center justify-between text-xs">
              <button
                onClick={() => setCurrentLang(currentLang === 'PT' ? 'EN' : 'PT')}
                className="text-xs font-bold text-[#e7d49d] flex items-center gap-2 py-1.5 px-3 rounded-lg border border-[#e7d49d]/30 bg-white/5"
              >
                <Globe className="w-4 h-4" />
                <span>Idioma: {currentLang === 'PT' ? '🇵🇹 Português' : '🇬🇧 English'}</span>
              </button>

              <div className="flex items-center gap-1.5 text-[#e7d49d] font-semibold text-xs">
                <Phone className="w-3.5 h-3.5" />
                <span>+351 961 711 042</span>
              </div>
            </div>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full gold-btn font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2"
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
