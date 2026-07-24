import React, { useState } from 'react';
import { QUINTA_INFO } from '../data/quintaData';
import { Phone, Mail, MapPin, Instagram, Facebook, Send, CheckCircle2, FileText } from 'lucide-react';

export default function ContactFooter({ theme, currentLang }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [sent, setSent] = useState(false);

  const isDark = theme === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.email) {
      setSent(true);
    }
  };

  return (
    <footer id="contactos" className={`transition-colors duration-400 border-t pt-12 sm:pt-16 pb-24 md:pb-12 ${
      isDark ? 'bg-[#262425] text-white border-white/10' : 'bg-[#f0ede6] text-[#1a1919] border-stone-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Brand Info & Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={QUINTA_INFO.logoUrl}
                alt="Quinta Lagoa da Guia Logo"
                className="w-11 h-11 rounded-full object-cover border border-[#ac926f]/40 shadow-md"
              />
              <span className={`font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider uppercase ${
                isDark ? 'text-white' : 'text-[#1a1919]'
              }`}>
                Quinta Lagoa da Guia
              </span>
            </div>

            <p className={`text-xs sm:text-sm font-light leading-relaxed max-w-md ${
              isDark ? 'text-stone-300' : 'text-stone-600'
            }`}>
              {QUINTA_INFO.descricaoLonga}
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#ac926f] shrink-0" />
                <span className={isDark ? 'text-stone-300' : 'text-stone-700'}>
                  {QUINTA_INFO.localizacao.morada}, {QUINTA_INFO.localizacao.codigoPostal} {QUINTA_INFO.localizacao.freguesia}, Pombal
                </span>
              </div>

              <a 
                href={`tel:${QUINTA_INFO.contactos.telefone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 hover:text-[#e7d49d] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#ac926f] shrink-0" />
                <span className={isDark ? 'text-stone-300' : 'text-stone-700'}>{QUINTA_INFO.contactos.telefone}</span>
              </a>

              <a 
                href={`mailto:${QUINTA_INFO.contactos.email}`}
                className="flex items-center gap-3 hover:text-[#e7d49d] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#ac926f] shrink-0" />
                <span className={isDark ? 'text-stone-300' : 'text-stone-700'}>{QUINTA_INFO.contactos.email}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={QUINTA_INFO.contactos.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
                  isDark ? 'bg-white/5 border-white/10 text-white hover:bg-[#ac926f]' : 'bg-white border-stone-300 text-stone-800 hover:bg-[#ac926f] hover:text-white'
                }`}
                title="Instagram Quinta Lagoa da Guia"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href={QUINTA_INFO.contactos.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
                  isDark ? 'bg-white/5 border-white/10 text-white hover:bg-[#ac926f]' : 'bg-white border-stone-300 text-stone-800 hover:bg-[#ac926f] hover:text-white'
                }`}
                title="Facebook Quinta Lagoa da Guia"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className={`lg:col-span-7 p-5 sm:p-8 rounded-2xl border shadow-xl ${
            isDark ? 'bg-[#353233] border-white/10 text-white' : 'bg-white border-stone-200 text-[#1a1919]'
          }`}>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold mb-2">
              {currentLang === 'PT' ? 'Fale Connosco & Reservas' : 'Contact Us & Enquiries'}
            </h3>
            <p className={`text-xs font-light mb-6 ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
              Preencha o formulário abaixo para informações sobre jantares na Sala da Pipa, Sala da Oliveira ou eventos na Sala da Lagoa.
            </p>

            {sent ? (
              <div className="p-6 rounded-xl bg-[#ac926f]/20 border border-[#ac926f]/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#ac926f] mx-auto" />
                <h4 className="font-serif-luxury text-xl font-bold">Mensagem Enviada com Sucesso!</h4>
                <p className="text-xs font-light text-stone-300">
                  A nossa equipa responderá para o email fornecido num prazo máximo de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider block">Seu Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Santos"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full text-xs sm:text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider block">Seu Email</label>
                    <input
                      type="email"
                      required
                      placeholder="maria@exemplo.pt"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider block">Mensagem ou Pedido de Informação</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Escreva a sua mensagem sobre almoço, jantar ou evento..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full text-xs sm:text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full gold-btn font-bold text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all min-h-[46px] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright Bar with Official Livro de Reclamações Link */}
        <div className="pt-6 sm:pt-8 border-t border-stone-500/20 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-stone-400">
          <div className="space-y-1 text-center md:text-left">
            <p>© 2025 - 2026 Quinta Lagoa da Guia • Todos os direitos reservados.</p>
            <p className="text-[10px] text-stone-500">Avenida Nossa Senhora da Guia 213, Guia, Pombal • Leiria, Portugal</p>
          </div>

          {/* Official Livro de Reclamações Online Badge & Link */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://www.livroreclamacoes.pt/Pedido/Reclamacao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-stone-500/30 hover:border-[#ac926f] bg-white/5 hover:bg-white/10 transition-all group min-h-[44px]"
              title="Livro de Reclamações Online"
            >
              <img
                src="https://quintalagoadaguia.pt/wp-content/uploads/2026/01/livroreclamacoes_online2.png"
                alt="Livro de Reclamações Online"
                className="h-7 w-auto object-contain brightness-110"
              />
              <span className="text-[11px] font-medium text-stone-300 group-hover:text-[#e7d49d] transition-colors">
                Livro de Reclamações
              </span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
