import React from 'react';
import { LOCAL_ATTRACTIONS, QUINTA_INFO } from '../data/quintaData';
import { MapPin, Navigation, Compass } from 'lucide-react';

export default function LocalAttractionsSection() {
  return (
    <section id="localizacao" className="py-16 lg:py-24 bg-[#2b2829] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info & Map Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest gold-text flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Prime Location</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-white">
                Localização & Envolvente
              </h2>
            </div>

            <p className="text-stone-300 text-sm font-light leading-relaxed">
              Localizada na Guia, concelho de Pombal e distrito de Leiria, a Quinta Lagoa da Guia beneficia de acessos privilegiados às melhores praias do centro de Portugal, património histórico e centros de atração turística.
            </p>

            <div className="dark-card p-5 rounded-xl space-y-3 border border-[#e7d49d]/30">
              <span className="text-xs uppercase font-bold tracking-widest gold-text block">
                Morada Oficial:
              </span>
              <p className="text-white text-sm font-semibold">
                {QUINTA_INFO.localizacao.morada}<br />
                {QUINTA_INFO.localizacao.codigoPostal} {QUINTA_INFO.localizacao.freguesia}, {QUINTA_INFO.localizacao.concelho} • {QUINTA_INFO.localizacao.distrito}
              </p>
              <a
                href={`https://maps.google.com/?q=${QUINTA_INFO.localizacao.coordenadas.lat},${QUINTA_INFO.localizacao.coordenadas.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase gold-text hover:underline pt-1"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Abrir no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Attractions Cards Grid */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif-luxury text-xl font-bold text-white mb-4">
              Atrações Próximas & Pontos de Interesse
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LOCAL_ATTRACTIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="dark-card p-4 rounded-xl space-y-2 border border-white/10 hover:border-[#e7d49d]/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif-luxury text-base font-bold text-white">
                      {item.nome}
                    </h4>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider gold-bg text-[#353233]">
                      {item.distancia}
                    </span>
                  </div>

                  <p className="text-stone-300 text-xs font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
