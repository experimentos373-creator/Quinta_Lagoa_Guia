import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, ShieldCheck, CheckCircle2, Sparkles, User, Mail, Phone } from 'lucide-react';
import { ROOMS, QUINTA_INFO } from '../data/quintaData';

export default function ReservationModal({ preselectedData, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Hóspedes',
    room: 'Master Suite Lagoa',
    mensagem: ''
  });

  const [submittedCode, setSubmittedCode] = useState(null);

  useEffect(() => {
    if (preselectedData) {
      setFormData(prev => ({
        ...prev,
        checkIn: preselectedData.checkIn || prev.checkIn,
        checkOut: preselectedData.checkOut || prev.checkOut,
        guests: preselectedData.guests || prev.guests,
        room: preselectedData.room || prev.room
      }));
    }
  }, [preselectedData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = `QLG-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedCode(code);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="dark-card border border-[#e7d49d]/40 rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto p-5 sm:p-8 relative text-white shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Fechar Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-5 sm:mb-6 pr-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full gold-bg text-[#353233] text-[10px] uppercase font-bold tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>Direct Villa Booking</span>
          </div>

          <h3 className="text-xl sm:text-3xl font-serif-luxury font-bold text-white">
            Reserva Direta na Quinta
          </h3>
          <p className="text-stone-300 text-xs font-light">
            Garanta a sua estadia ou consulte a disponibilidade oficial da Quinta Lagoa da Guia.
          </p>
        </div>

        {!submittedCode ? (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            
            {/* Row 1: Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-300 mb-1">
                  Check-in *
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-300 mb-1">
                  Check-out *
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  className="w-full text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-300 mb-1">
                  Hóspedes
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full text-xs font-semibold"
                >
                  <option value="2 Hóspedes">2 Hóspedes</option>
                  <option value="4 Hóspedes">4 Hóspedes</option>
                  <option value="6 Hóspedes">6 Hóspedes</option>
                  <option value="8 Hóspedes">8 Hóspedes</option>
                  <option value="12 Hóspedes (Villa Completa)">12 Hóspedes (Villa Completa)</option>
                </select>
              </div>
            </div>

            {/* Suite Selection */}
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-300 mb-1">
                Suíte / Opção de Alojamento
              </label>
              <select
                value={formData.room}
                onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                className="w-full text-xs font-semibold"
              >
                <option value="Reserva da Villa Completa (Exclusivo 12 Hóspedes)">Reserva da Villa Completa (Exclusividade Total)</option>
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.nome}>{r.nome} — {r.subtitulo}</option>
                ))}
              </select>
            </div>

            {/* Row 2: Personal Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-300 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Silva"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full text-xs"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-300 mb-1">
                  Email de Contacto *
                </label>
                <input
                  type="email"
                  required
                  placeholder="maria@exemplo.pt"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-300 mb-1">
                  Telemóvel / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+351 912 345 678"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full text-xs"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-300 mb-1">
                Observações ou Pedidos Especiais
              </label>
              <textarea
                rows="2"
                placeholder="Pedidos especiais para a chegada, serviço de chef privado..."
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                className="w-full text-xs"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full gold-btn font-bold text-xs uppercase tracking-widest py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all min-h-[48px] cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Confirmar Pedido de Reserva</span>
            </button>

          </form>
        ) : (
          /* Confirmation Display */
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-14 h-14 text-[#e7d49d] mx-auto" />
            
            <div className="space-y-1">
              <h4 className="font-serif-luxury text-2xl font-bold text-white">
                Reserva Solicitada com Sucesso!
              </h4>
              <p className="text-stone-300 text-xs font-light">
                O seu código de reserva direta é:
              </p>
              <span className="font-mono text-lg font-bold gold-text block py-1">
                {submittedCode}
              </span>
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-left text-xs space-y-1 text-stone-200">
              <p><strong>Nome:</strong> {formData.nome}</p>
              <p><strong>Alojamento:</strong> {formData.room}</p>
              <p><strong>Período:</strong> {formData.checkIn || 'A definir'} até {formData.checkOut || 'A definir'}</p>
              <p><strong>Hóspedes:</strong> {formData.guests}</p>
            </div>

            <button
              onClick={onClose}
              className="gold-btn font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-md"
            >
              Fechar Janela
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
