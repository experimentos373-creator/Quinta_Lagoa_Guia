import React from 'react';
import { MapPin, Navigation, Phone, Mail, Clock } from 'lucide-react';
import { QUINTA_INFO } from '../data/quintaData';

export default function GoogleMapsSection({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section id="localizacao" className={`py-16 lg:py-24 transition-colors duration-400 border-t ${
      isDark ? 'bg-[#2b2829] text-white border-white/10' : 'bg-[#f4f2ed] text-[#1a1919] border-stone-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ac926f]/20 border border-[#ac926f]/40 text-[#ac926f] text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização Exata</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal">
            Encontre a Quinta Lagoa da Guia
          </h2>
          <p className={`text-sm font-light leading-relaxed max-w-xl mx-auto ${
            isDark ? 'text-stone-300' : 'text-stone-600'
          }`}>
            Situada na Guia, concelho de Pombal e distrito de Leiria, a nossa quinta oferece acessos rápidos e tranquilos no coração de Portugal.
          </p>
        </div>

        {/* Map & Location Info Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Card */}
          <div className={`lg:col-span-4 p-8 rounded-2xl border flex flex-col justify-between space-y-6 shadow-xl ${
            isDark 
              ? 'bg-[#353233] border-[#e7d49d]/30 text-white' 
              : 'bg-white border-[#ac926f]/30 text-[#1a1919]'
          }`}>
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#ac926f] block mb-1">
                  Endereço Oficial
                </span>
                <h3 className="font-serif-luxury text-xl font-bold">
                  {QUINTA_INFO.nome}
                </h3>
                <p className={`text-xs font-light mt-1 ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
                  {QUINTA_INFO.localizacao.morada}<br />
                  {QUINTA_INFO.localizacao.codigoPostal} {QUINTA_INFO.localizacao.freguesia}<br />
                  {QUINTA_INFO.localizacao.concelho} • {QUINTA_INFO.localizacao.distrito}, Portugal
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-stone-500/20 text-xs">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#ac926f] shrink-0" />
                  <span>{QUINTA_INFO.contactos.telefone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#ac926f] shrink-0" />
                  <span>{QUINTA_INFO.contactos.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#ac926f] shrink-0" />
                  <span>Atendimento: 09:00 – 22:00</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`https://maps.google.com/?q=${QUINTA_INFO.localizacao.coordenadas.lat},${QUINTA_INFO.localizacao.coordenadas.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full gold-btn font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Obter Direções no Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Embedded Google Map */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-2xl border border-[#ac926f]/30 min-h-[400px]">
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=Avenida%20Nossa%20Senhora%20da%20Guia%20213%2C%20Guia%2C%20Pombal%2C%20Portugal&t=m&z=14&output=embed&iwloc=near"
              title="Quinta Lagoa da Guia, Avenida Nossa Senhora da Guia 213, Guia, Pombal, Portugal"
              className="w-full h-full min-h-[400px] border-0"
              allowFullScreen=""
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
