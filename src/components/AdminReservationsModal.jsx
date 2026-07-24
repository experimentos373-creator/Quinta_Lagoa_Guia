import React, { useState, useEffect } from 'react';
import { X, Trash2, Calendar, Phone, Mail, User, ShieldCheck, RefreshCw } from 'lucide-react';

export default function AdminReservationsModal({ onClose }) {
  const [reservas, setReservas] = useState([]);
  const [filter, setFilter] = useState('todas');

  const loadReservas = () => {
    try {
      const data = JSON.parse(localStorage.getItem('quinta_reservas') || '[]');
      setReservas(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadReservas();
  }, []);

  const handleClearAll = () => {
    if (window.confirm("Tem a certeza que deseja limpar todas as reservas da base de dados local?")) {
      localStorage.removeItem('quinta_reservas');
      setReservas([]);
    }
  };

  const handleDeleteOne = (id) => {
    const updated = reservas.filter(r => r.id !== id);
    localStorage.setItem('quinta_reservas', JSON.stringify(updated));
    setReservas(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl p-6 sm:p-8 border border-[#1b4332]/20 shadow-2xl overflow-y-auto space-y-6 relative text-[#0d2818]">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#1b4332]/10 hover:bg-[#1b4332]/20 text-[#0d2818] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#1b4332]/10 border border-[#1b4332]/20 text-[#1b4332]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-serif-luxury text-[#0d2818] font-bold">Painel de Gestão de Reservas</h3>
            <p className="text-xs text-[#2d4a3e] font-light">
              Registos guardados em base de dados local • Quinta Lagoa da Guia
            </p>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#f4f8f5] p-4 rounded-2xl border border-[#1b4332]/15">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#2d4a3e] font-bold">Total Registado:</span>
            <span className="bg-[#1b4332] text-white font-bold text-xs px-2.5 py-0.5 rounded-full">
              {reservas.length}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadReservas}
              className="p-2 rounded-xl bg-white hover:bg-stone-100 text-[#0d2818] transition-colors text-xs flex items-center gap-1.5 border border-[#1b4332]/15 shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Atualizar
            </button>
            {reservas.length > 0 && (
              <button
                onClick={handleClearAll}
                className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 transition-colors text-xs flex items-center gap-1.5 border border-red-200"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Limpar Tudo
              </button>
            )}
          </div>
        </div>

        {/* List of Reservations */}
        {reservas.length === 0 ? (
          <div className="text-center py-16 text-[#2d4a3e] space-y-2">
            <Calendar className="w-12 h-12 text-[#1b4332]/40 mx-auto" />
            <p className="text-sm font-semibold">Nenhuma reserva registada de momento.</p>
            <p className="text-xs text-[#2d4a3e]">As novas submissões do formulário aparecerão aqui automaticamente.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {reservas.map((res) => (
              <div key={res.id} className="bg-[#f4f8f5] p-5 rounded-2xl border border-[#1b4332]/15 space-y-3 relative group shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1b4332]/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#1b4332] font-bold">{res.id}</span>
                    <span className="text-xs bg-white border border-[#1b4332]/15 px-2.5 py-0.5 rounded-full text-[#0d2818] font-medium">{res.servicoEspaco}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-[#2d4a3e]">{res.dataCriacao}</span>
                    <button
                      onClick={() => handleDeleteOne(res.id)}
                      title="Eliminar Reserva"
                      className="text-stone-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#2d4a3e]">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#1b4332]" />
                    <span className="font-bold text-[#0d2818]">{res.nome}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#1b4332]" />
                    <span>{res.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#1b4332]" />
                    <span>{res.telefone}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs bg-white p-3 rounded-xl border border-[#1b4332]/10">
                  <div>
                    <span className="text-[#2d6a4f] text-[10px] uppercase font-bold block">Data Pretendida</span>
                    <span className="font-semibold text-[#0d2818]">{res.dataPretendida}</span>
                  </div>
                  <div>
                    <span className="text-[#2d6a4f] text-[10px] uppercase font-bold block">Pessoas</span>
                    <span className="font-semibold text-[#0d2818]">{res.numPessoas}</span>
                  </div>
                  {res.mensagem && (
                    <div className="col-span-2 pt-2 border-t border-[#1b4332]/10">
                      <span className="text-[#2d6a4f] text-[10px] uppercase font-bold block">Observações</span>
                      <p className="text-[#2d4a3e] italic">{res.mensagem}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
