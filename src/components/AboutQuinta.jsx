import React, { useState } from 'react';
import { Compass, Sparkles, Leaf, Heart, TreePine, CheckCircle2, ArrowRight } from 'lucide-react';
import { QUINTA_INFO, VALORES } from '../data/quintaData';

export default function AboutQuinta({ onOpenReservation }) {
  const [activeValue, setActiveValue] = useState(VALORES[0]);

  const iconMap = {
    Compass: <Compass className="w-6 h-6 text-[#1b4332]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#1b4332]" />,
    Leaf: <Leaf className="w-6 h-6 text-[#1b4332]" />,
    Heart: <Heart className="w-6 h-6 text-[#1b4332]" />,
    TreePine: <TreePine className="w-6 h-6 text-[#1b4332]" />
  };

  return (
    <section id="sobre" className="pt-4 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b4332]/10 border border-[#1b4332]/20 text-[#1b4332] text-xs font-bold uppercase tracking-widest">
            A Nossa Alma & Identidade
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-[#0d2818]">
            Um Conceito Integrado de <br />
            <span className="italic font-light emerald-gradient-text font-serif">Gastronomia, Eventos & Hospitalidade</span>
          </h2>
          <p className="text-[#2d4a3e] text-base sm:text-lg font-light leading-relaxed">
            Profundamente enraizado na natureza mediterrânica do centro de Portugal, a Quinta Lagoa da Guia combina a serenidade de oliveiras centenárias com o design contemporâneo de autor.
          </p>
        </div>

        {/* 2 Column Layout: Concept & Natural Materials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Story & Aesthetics */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#1b4332]/15 shadow-xl space-y-6">
            <h3 className="text-3xl font-serif-luxury text-[#0d2818] font-bold">
              Elegância Contemporânea em Harmonia com a Terra
            </h3>
            <p className="text-[#2d4a3e] text-sm sm:text-base leading-relaxed font-light">
              Mais do que um espaço físico, a Quinta afirma-se como um refúgio sensorial. Cada detalhe da arquitetura — da boiserie verde inglês da Sala da Oliveira ao ripado de madeira e cerâmica artesanal da Sala da Lagoa — foi pensado para criar um ambiente acolhedor e requintado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {QUINTA_INFO.esteticaMateriais.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#0d2818] font-medium bg-[#f4f8f5] p-3 rounded-xl border border-[#1b4332]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#1b4332] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#1b4332]/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#2d6a4f] block uppercase tracking-wider font-bold">Abertura</span>
                <span className="text-lg font-serif-luxury text-[#1b4332] font-bold">{QUINTA_INFO.abertura}</span>
              </div>
              <button
                onClick={() => onOpenReservation()}
                className="text-xs uppercase tracking-wider font-bold text-[#1b4332] hover:text-[#2d6a4f] flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Saber Mais & Reservar</span>
                <ArrowRight className="w-4 h-4 text-[#1b4332]" />
              </button>
            </div>
          </div>

          {/* Right Column: Image Feature */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden min-h-[420px] border border-[#1b4332]/15 group shadow-2xl">
            <img 
              src="/images/sala_oliveira.png" 
              alt="Sala da Oliveira - Quinta Lagoa da Guia" 
              className="w-full h-full object-cover min-h-[420px] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2818]/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-[#1b4332]/20 shadow-lg text-[#0d2818]">
              <span className="text-[10px] uppercase tracking-widest text-[#2d6a4f] font-bold">Sala da Oliveira</span>
              <h4 className="text-xl font-serif-luxury text-[#0d2818] font-bold">Boiserie em Verde Inglês & Pedra Natural</h4>
              <p className="text-xs text-[#2d4a3e] font-medium mt-1">Ambiente intimista banhado por luz natural suave para almoços e jantares memoráveis.</p>
            </div>
          </div>

        </div>

        {/* Interactive Values Section */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#2d6a4f] font-bold">Os Nossos Princípios</span>
            <h3 className="text-3xl sm:text-4xl font-serif-luxury text-[#0d2818] font-bold">Valores que Guiam a Nossa Experiência</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {VALORES.map((val) => (
              <div
                key={val.id}
                onClick={() => setActiveValue(val)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  activeValue.id === val.id
                    ? 'border-[#1b4332] bg-[#1b4332] text-white shadow-xl scale-[1.02]'
                    : 'bg-white text-[#0d2818] border-[#1b4332]/15 hover:border-[#1b4332]/40 shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className={`p-3 rounded-xl w-fit border ${activeValue.id === val.id ? 'bg-white/10 border-white/20' : 'bg-[#f4f8f5] border-[#1b4332]/10'}`}>
                    {activeValue.id === val.id ? (
                      React.cloneElement(iconMap[val.iconName], { className: "w-6 h-6 text-white" })
                    ) : (
                      iconMap[val.iconName]
                    )}
                  </div>
                  <h4 className={`font-serif-luxury text-xl font-bold ${activeValue.id === val.id ? 'text-white' : 'text-[#0d2818]'}`}>{val.titulo}</h4>
                  <p className={`text-xs font-light line-clamp-3 ${activeValue.id === val.id ? 'text-stone-100' : 'text-[#2d4a3e]'}`}>{val.subtitulo}</p>
                </div>
                <div className={`mt-4 pt-3 border-t text-[10px] uppercase tracking-widest font-bold ${activeValue.id === val.id ? 'border-white/20 text-[#a3e6c5]' : 'border-[#1b4332]/10 text-[#2d6a4f]'}`}>
                  {activeValue.id === val.id ? "Selecionado" : "Clique para ler"}
                </div>
              </div>
            ))}
          </div>

          {/* Active Value Detail Card */}
          <div className="bg-white p-8 rounded-3xl border border-[#1b4332]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-[#0d2818]">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#2d6a4f] font-bold">
                Pilar da Marca • {activeValue.titulo}
              </span>
              <h4 className="text-2xl font-serif-luxury text-[#0d2818] font-bold">{activeValue.subtitulo}</h4>
              <p className="text-[#2d4a3e] text-sm max-w-3xl leading-relaxed font-light">{activeValue.descricao}</p>
            </div>
            <button
              onClick={() => onOpenReservation()}
              className="bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shrink-0 cursor-pointer shadow-md"
            >
              Vivenciar na Quinta
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
