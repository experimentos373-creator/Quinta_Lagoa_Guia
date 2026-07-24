import React from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import { QUINTA_INFO } from '../data/quintaData';

export default function MobileFloatingBar({ onOpenBooking, currentLang }) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#2b2829]/95 backdrop-blur-xl border-t border-[#e7d49d]/30 px-3 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.5)] transition-all">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        
        {/* Call Button */}
        <a
          href={`tel:${QUINTA_INFO.contactos.telefone.replace(/\s+/g, '')}`}
          className="flex-1 py-2.5 px-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-h-[44px]"
          title="Ligar para a Quinta"
        >
          <Phone className="w-4 h-4 text-[#e7d49d]" />
          <span className="text-[11px] font-bold tracking-wider uppercase">{currentLang === 'PT' ? 'Ligar' : 'Call'}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${QUINTA_INFO.contactos.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 rounded-xl bg-emerald-700/80 border border-emerald-500/40 text-white hover:bg-emerald-600 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-h-[44px]"
          title="WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-200" />
          <span className="text-[11px] font-bold tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* Book CTA Button */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.5] py-2.5 px-2 rounded-xl gold-btn font-bold text-[11px] uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-1.5 min-h-[44px] cursor-pointer"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span className="truncate">{currentLang === 'PT' ? 'Reservar' : 'Book'}</span>
        </button>

      </div>
    </div>
  );
}
