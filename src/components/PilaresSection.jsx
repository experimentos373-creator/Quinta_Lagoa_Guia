import React, { useState } from 'react';
import { PILARES, MENU_GASTRONOMICO } from '../data/quintaData';
import { Utensils, Calendar, Hotel, Package, Check, X, Sparkles, ChevronRight, Award } from 'lucide-react';

export default function PilaresSection({ onOpenReservation }) {
  const [activeTab, setActiveTab] = useState(PILARES[0].id);
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  const currentPilar = PILARES.find(p => p.id === activeTab) || PILARES[0];

  const pilarIcons = {
    restauracao: <Utensils className="w-5 h-5" />,
    eventos: <Calendar className="w-5 h-5" />,
    "boutique-hotel": <Hotel className="w-5 h-5" />,
    "produtos-oliveira": <Package className="w-5 h-5" />
  };

  return (
    <section id="pilares" className="py-20 relative">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#1c2e26] rounded-full blur-[140px] pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#2d6a4f] font-bold">Os Quatro Pilares</span>
          <h2 className="text-4xl sm:text-5xl font-serif-luxury text-[#0d2818] font-bold">
            Espaços & Experiências de Excelência
          </h2>
          <p className="text-[#2d4a3e] text-sm sm:text-base font-light">
            Conheça os ambientes concebidos com matérias-primas nobres para proporcionar vivências únicas.
          </p>
        </div>

        {/* Pillar Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {PILARES.map((pilar) => (
            <button
              key={pilar.id}
              onClick={() => setActiveTab(pilar.id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                activeTab === pilar.id
                  ? 'bg-[#1b4332] text-white shadow-xl scale-105'
                  : 'bg-white text-[#2d4a3e] hover:text-[#1b4332] border border-[#1b4332]/15 hover:border-[#1b4332]/40 shadow-sm'
              }`}
            >
              {pilarIcons[pilar.id]}
              <span>{pilar.titulo}</span>
            </button>
          ))}
        </div>

        {/* Active Pillar Display Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#1b4332]/15 shadow-xl transition-all duration-500 text-[#0d2818]">
          
          {/* Header of Active Pillar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#1b4332]/10 pb-8">
            <div>
              <span className="text-xs text-[#2d6a4f] uppercase tracking-widest font-bold block mb-1">
                Pilar nº {PILARES.findIndex(p => p.id === activeTab) + 1}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif-luxury text-[#0d2818] font-bold">
                {currentPilar.titulo}
              </h3>
              <p className="text-[#2d4a3e] text-base font-light mt-1 max-w-2xl">
                {currentPilar.subtitulo} • {currentPilar.descricao}
              </p>
            </div>

            {/* Quick Action Button per Pillar */}
            {activeTab === 'restauracao' && (
              <button
                onClick={() => setMenuModalOpen(true)}
                className="bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-lg flex items-center gap-2 cursor-pointer shrink-0"
              >
                <Utensils className="w-4 h-4" />
                Ver Menu Gastronómico
              </button>
            )}

            {(activeTab === 'eventos' || activeTab === 'boutique-hotel') && (
              <button
                onClick={() => onOpenReservation({ space: currentPilar.titulo })}
                className="bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-lg flex items-center gap-2 cursor-pointer shrink-0"
              >
                <Calendar className="w-4 h-4" />
                Solicitar Orçamento / Reserva
              </button>
            )}

            {activeTab === 'produtos-oliveira' && (
              <button
                onClick={() => onOpenReservation({ space: "Linha de Produtos Oliveira" })}
                className="bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-lg flex items-center gap-2 cursor-pointer shrink-0"
              >
                <Package className="w-4 h-4" />
                Encomendar Produtos
              </button>
            )}
          </div>

          {/* Body Content per Pillar */}
          <div className="pt-8 space-y-10">

            {/* CASE 1: RESTAURAÇÃO (Sala da Pipa & Sala da Oliveira) */}
            {activeTab === 'restauracao' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentPilar.espacos.map((espaco, idx) => (
                  <div key={idx} className="bg-[#f4f8f5] rounded-2xl overflow-hidden border border-[#1b4332]/15 hover:border-[#1b4332]/40 transition-all group shadow-sm">
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={espaco.imagem} 
                        alt={espaco.nome} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d2818]/80 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-[#1b4332] uppercase tracking-widest font-bold border border-white/50">
                        {espaco.tipo}
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <h4 className="text-2xl font-serif-luxury text-[#0d2818] font-bold">{espaco.nome}</h4>
                      <ul className="space-y-2">
                        {espaco.caracteristicas.map((car, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2.5 text-xs text-[#2d4a3e] font-light">
                            <Sparkles className="w-3.5 h-3.5 text-[#1b4332] shrink-0 mt-0.5" />
                            <span>{car}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => onOpenReservation({ space: espaco.nome })}
                        className="w-full mt-4 bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-xl border border-transparent transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                        Reservar Mesa na {espaco.nome}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CASE 2: EVENTOS (Sala da Lagoa & Event Types) */}
            {activeTab === 'eventos' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-[#f4f8f5] p-6 rounded-2xl border border-[#1b4332]/15 space-y-4">
                    <div className="inline-block bg-white px-3 py-1 rounded-full text-[10px] text-[#1b4332] font-bold uppercase tracking-widest border border-[#1b4332]/10">
                      {currentPilar.espacos[0].tipo}
                    </div>
                    <h4 className="text-3xl font-serif-luxury text-[#0d2818] font-bold">{currentPilar.espacos[0].nome}</h4>
                    <p className="text-[#2d4a3e] text-sm font-light leading-relaxed">
                      Ambiente com ripado de madeira nobre, iluminação LED suave integrada e candelabros de vidro artesanal de tradição leiriense. A decoração integra pratos cerâmicos nas cores da marca: verde oliva, branco e cinzento mate.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {currentPilar.espacos[0].caracteristicas.map((c, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#0d2818] font-medium">
                          <Check className="w-3.5 h-3.5 text-[#1b4332]" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-widest text-[#2d6a4f] font-bold">Tipos de Celebração Suportados</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {currentPilar.tiposEventos.map((evt, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-xl border border-[#1b4332]/15 text-xs text-[#0d2818] font-semibold flex items-center gap-2 shadow-sm">
                          <Award className="w-3.5 h-3.5 text-[#1b4332]" />
                          <span>{evt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#1b4332]/15 h-[420px] shadow-lg">
                  <img src={currentPilar.imagem} alt="Sala da Lagoa" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {/* CASE 3: BOUTIQUE HOTEL */}
            {activeTab === 'boutique-hotel' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <span className="text-xs uppercase tracking-widest text-[#2d6a4f] font-bold">Lançamento Futuro</span>
                  <h4 className="text-3xl font-serif-luxury text-[#0d2818] font-bold">
                    Hospedagem Sustentável & Serenidade Refinada
                  </h4>
                  <p className="text-[#2d4a3e] text-sm font-light leading-relaxed">
                    Pensado para proporcionar um descanso regenerador no meio do pinhal e da oliveira. Cada quarto é uma celebração dos materiais nobres da região de Leiria e Pombal.
                  </p>

                  <div className="space-y-3">
                    {currentPilar.caracteristicas.map((car, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#1b4332]/15 text-xs text-[#0d2818] font-medium shadow-sm">
                        <Check className="w-4 h-4 text-[#1b4332]" />
                        <span>{car}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#1b4332]/15 h-[380px] shadow-lg">
                  <img src={currentPilar.imagem} alt="Futuro Boutique Hotel" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {/* CASE 4: PRODUTOS DERIVADOS DA OLIVEIRA */}
            {activeTab === 'produtos-oliveira' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="produtos">
                <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#1b4332]/15 h-[400px] shadow-lg">
                  <img src={currentPilar.imagem} alt="Linha de Produtos Oliveira" className="w-full h-full object-cover" />
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-[#2d6a4f] font-bold">O ADN da Oliveira</span>
                    <h4 className="text-3xl font-serif-luxury text-[#0d2818] font-bold">Criações Exclusivas da Herdade</h4>
                    <p className="text-[#2d4a3e] text-sm font-light">
                      Produtos produzidos com azeite de oliveiras centenárias e botânicos locais para levar a experiência da Quinta consigo.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {currentPilar.produtos.map((prod, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl border border-[#1b4332]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                        <div>
                          <h5 className="font-serif-luxury text-lg text-[#0d2818] font-bold">{prod.nome}</h5>
                          <p className="text-xs text-[#2d4a3e] font-light mt-0.5">{prod.descricao}</p>
                          <span className="text-[10px] text-[#2d6a4f] uppercase tracking-wider font-bold block mt-1">
                            {prod.subtitulo}
                          </span>
                        </div>
                        <button
                          onClick={() => onOpenReservation({ space: `Produto: ${prod.nome}` })}
                          className="bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-all shrink-0 shadow-sm"
                        >
                          Encomendar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Gastronomic Menu Modal */}
      {menuModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl p-6 sm:p-10 border border-[#1b4332]/20 shadow-2xl overflow-y-auto space-y-8 relative text-[#0d2818]">
            
            <button
              onClick={() => setMenuModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#1b4332]/10 hover:bg-[#1b4332]/20 text-[#0d2818] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#2d6a4f] font-bold">Carta de Sabores</span>
              <h3 className="text-3xl sm:text-4xl font-serif-luxury text-[#0d2818] font-bold">Menu Gastronómico Sazonal</h3>
              <p className="text-[#2d4a3e] text-xs sm:text-sm font-light">
                Cozinha que honra a tradição portuguesa com ingredientes de produtores locais de Leiria & Pombal.
              </p>
            </div>

            <div className="space-y-8">
              {MENU_GASTRONOMICO.map((cat, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="font-serif-luxury text-xl text-[#1b4332] border-b border-[#1b4332]/15 pb-2 font-bold">
                    {cat.categoria}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.pratos.map((prato, pIdx) => (
                      <div key={pIdx} className="bg-[#f4f8f5] p-4 rounded-xl border border-[#1b4332]/10 space-y-1">
                        <div className="flex items-center justify-between text-[#0d2818] font-serif-luxury text-lg font-bold">
                          <span>{prato.nome}</span>
                          <span className="text-[#1b4332] text-base">{prato.preco}</span>
                        </div>
                        <p className="text-xs text-[#2d4a3e] font-light leading-relaxed">{prato.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#1b4332]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#2d4a3e] font-light">
                * Menus sujeitos a alterações de acordo com a sazonalidade dos ingredientes frescos.
              </span>
              <button
                onClick={() => {
                  setMenuModalOpen(false);
                  onOpenReservation({ space: "Sala da Pipa / Sala da Oliveira" });
                }}
                className="bg-[#1b4332] text-white font-semibold text-xs uppercase tracking-wider px-8 py-3 rounded-full hover:bg-[#2d6a4f] transition-all shadow-lg"
              >
                Reservar Experiência Gastronómica
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
