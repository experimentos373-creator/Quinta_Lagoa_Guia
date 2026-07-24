import React, { useState, useEffect } from 'react';
import { Calendar, Users, Mail, Phone, User, MessageSquare, CheckCircle, Sparkles, X, ShieldCheck, UtensilsCrossed, PartyPopper, Bed, Calculator, Clock, ChevronRight } from 'lucide-react';
import { RESORT_PRICING_ESTIMATES } from '../data/quintaData';

export default function ReservationSection({ preselectedOptions, onCloseModal }) {
  const [bookingType, setBookingType] = useState('almoco'); // 'almoco' | 'evento' | 'estadia'

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataPretendida: '',
    dataCheckout: '',
    horario: '13:00',
    refeicaoTipo: 'Almoço',
    espacoAlmoco: 'Sala da Pipa (Restaurante Principal)',
    tipoEvento: 'Casamento Exclusivo',
    espacoEvento: 'Sala da Lagoa (Banquetes)',
    numPessoas: 2,
    numConvidados: 80,
    tipoSuite: 'Suíte Master Lagoa',
    mensagem: '',
    opcoesExtras: []
  });

  const [errors, setErrors] = useState({});
  const [submittedCode, setSubmittedCode] = useState(null);

  useEffect(() => {
    if (preselectedOptions) {
      if (preselectedOptions.type) setBookingType(preselectedOptions.type);
      setFormData(prev => ({
        ...prev,
        espacoAlmoco: preselectedOptions.space || prev.espacoAlmoco,
        numPessoas: preselectedOptions.guests || prev.numPessoas,
        dataPretendida: preselectedOptions.date || prev.dataPretendida
      }));
    }
  }, [preselectedOptions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Dynamic estimate calculation
  const calculateEstimate = () => {
    if (bookingType === 'almoco') {
      const p = parseInt(formData.numPessoas) || 2;
      const basePerPerson = formData.espacoAlmoco.includes('Oliveira') 
        ? RESORT_PRICING_ESTIMATES.almocos.degustacaoPremium 
        : RESORT_PRICING_ESTIMATES.almocos.baseMenu;
      return { total: p * basePerPerson, perUnit: basePerPerson, label: 'por pessoa' };
    } 
    if (bookingType === 'evento') {
      const c = parseInt(formData.numConvidados) || 50;
      const perGuest = RESORT_PRICING_ESTIMATES.eventos.precoPessoaBase;
      return { total: c * perGuest, perUnit: perGuest, label: 'por convidado (estimativa base)' };
    }
    if (bookingType === 'estadia') {
      const perNight = formData.tipoSuite.includes('Master') 
        ? RESORT_PRICING_ESTIMATES.estadias.suiteMaster 
        : RESORT_PRICING_ESTIMATES.estadias.suiteDeluxe;
      return { total: perNight, perUnit: perNight, label: 'por noite' };
    }
    return { total: 0, perUnit: 0, label: '' };
  };

  const estimate = calculateEstimate();

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = "O seu nome é obrigatório.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Insira um endereço de email válido.";
    if (!formData.telefone.trim()) newErrors.telefone = "O contacto telefónico é necessário.";
    if (!formData.dataPretendida) newErrors.dataPretendida = "Selecione a data pretendida.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const code = `QLG-${Math.floor(100000 + Math.random() * 900000)}`;
    const newReservation = {
      id: code,
      categoria: bookingType,
      ...formData,
      estimativaCalculada: estimate.total,
      dataCriacao: new Date().toLocaleString('pt-PT'),
      status: 'Confirmada / Pendente de Contacto'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('quinta_reservas') || '[]');
      localStorage.setItem('quinta_reservas', JSON.stringify([newReservation, ...existing]));
    } catch (err) {
      console.error("Erro ao guardar reserva:", err);
    }

    setSubmittedCode(code);
  };

  return (
    <section id="reservas" className="py-12 sm:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white p-6 sm:p-12 rounded-3xl border border-[#c5a059]/30 shadow-2xl relative text-[#0a1f14]">
          
          {onCloseModal && (
            <button
              onClick={onCloseModal}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-[#0a1f14]/5 hover:bg-[#0a1f14]/15 text-[#0a1f14] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {/* Header */}
          <div className="text-center space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/15 text-[#0a1f14] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Simulador & Reservas Diretas</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#0a1f14] font-bold">
              Simule e Agende a sua Experiência
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm font-light max-w-xl mx-auto">
              Selecione o tipo de reserva pretendido: Almoço gastronómico no restaurante, Celebração de evento ou Estadia nas nossas suítes.
            </p>
          </div>

          {/* Booking Type Category Selector */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 bg-[#f4f8f5] p-2 rounded-2xl border border-[#c5a059]/20">
            <button
              type="button"
              onClick={() => setBookingType('almoco')}
              className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                bookingType === 'almoco'
                  ? 'bg-[#0a1f14] text-[#c5a059] shadow-md scale-[1.02]'
                  : 'text-stone-700 hover:text-[#0a1f14]'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Almoços & Restaurante</span>
            </button>

            <button
              type="button"
              onClick={() => setBookingType('evento')}
              className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                bookingType === 'evento'
                  ? 'bg-[#0a1f14] text-[#c5a059] shadow-md scale-[1.02]'
                  : 'text-stone-700 hover:text-[#0a1f14]'
              }`}
            >
              <PartyPopper className="w-4 h-4" />
              <span>Eventos & Celebrações</span>
            </button>

            <button
              type="button"
              onClick={() => setBookingType('estadia')}
              className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                bookingType === 'estadia'
                  ? 'bg-[#0a1f14] text-[#c5a059] shadow-md scale-[1.02]'
                  : 'text-stone-700 hover:text-[#0a1f14]'
              }`}
            >
              <Bed className="w-4 h-4" />
              <span>Suítes & Alojamento</span>
            </button>
          </div>

          {!submittedCode ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#c5a059]" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Ex: Maria Silva"
                    className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none transition-colors"
                  />
                  {errors.nome && <span className="text-red-600 text-xs mt-1 block font-semibold">{errors.nome}</span>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                    Email de Contacto *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="maria@exemplo.pt"
                    className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none transition-colors"
                  />
                  {errors.email && <span className="text-red-600 text-xs mt-1 block font-semibold">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                    Telemóvel / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="+351 912 345 678"
                    className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none transition-colors"
                  />
                  {errors.telefone && <span className="text-red-600 text-xs mt-1 block font-semibold">{errors.telefone}</span>}
                </div>
              </div>

              {/* SPECIFIC FIELDS FOR ALMOÇO / RESTAURANTE */}
              {bookingType === 'almoco' && (
                <div className="space-y-6 pt-2 border-t border-stone-200">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                        <UtensilsCrossed className="w-3.5 h-3.5 text-[#c5a059]" />
                        Refeição
                      </label>
                      <select
                        name="refeicaoTipo"
                        value={formData.refeicaoTipo}
                        onChange={handleChange}
                        className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                      >
                        <option value="Almoço">Almoço Gastronómico</option>
                        <option value="Jantar">Jantar de Assinatura</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                        Data Pretendida *
                      </label>
                      <input
                        type="date"
                        name="dataPretendida"
                        value={formData.dataPretendida}
                        onChange={handleChange}
                        className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                      />
                      {errors.dataPretendida && <span className="text-red-600 text-xs mt-1 block font-semibold">{errors.dataPretendida}</span>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                        Horário
                      </label>
                      <select
                        name="horario"
                        value={formData.horario}
                        onChange={handleChange}
                        className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                      >
                        <option value="12:30">12:30 (Almoço)</option>
                        <option value="13:00">13:00 (Almoço)</option>
                        <option value="13:30">13:30 (Almoço)</option>
                        <option value="14:00">14:00 (Almoço)</option>
                        <option value="20:00">20:00 (Jantar)</option>
                        <option value="20:30">20:30 (Jantar)</option>
                        <option value="21:00">21:00 (Jantar)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#c5a059]" />
                        Nº de Pessoas
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        name="numPessoas"
                        value={formData.numPessoas}
                        onChange={handleChange}
                        className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2">
                      Escolha da Sala / Espaço no Restaurante
                    </label>
                    <select
                      name="espacoAlmoco"
                      value={formData.espacoAlmoco}
                      onChange={handleChange}
                      className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                    >
                      <option value="Sala da Pipa (Restaurante Principal)">Sala da Pipa — Bancadas em U, ambiente caloroso de fine dining (€45/pessoa)</option>
                      <option value="Sala da Oliveira (Reservado Íntimo)">Sala da Oliveira — Reservado com boiserie verde inglês e degustação (€85/pessoa)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* SPECIFIC FIELDS FOR EVENTOS */}
              {bookingType === 'evento' && (
                <div className="space-y-6 pt-2 border-t border-stone-200">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                        <PartyPopper className="w-3.5 h-3.5 text-[#c5a059]" />
                        Tipo de Evento
                      </label>
                      <select
                        name="tipoEvento"
                        value={formData.tipoEvento}
                        onChange={handleChange}
                        className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                      >
                        <option value="Casamento Exclusivo">Casamento Exclusivo</option>
                        <option value="Batizado / Festa Familiar">Batizado / Festa Familiar</option>
                        <option value="Aniversário de Prestígio">Aniversário de Prestígio</option>
                        <option value="Evento Corporativo / Gala">Evento Corporativo / Gala</option>
                        <option value="Retiro Criativo">Retiro Criativo & Bem-estar</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                        Data do Evento *
                      </label>
                      <input
                        type="date"
                        name="dataPretendida"
                        value={formData.dataPretendida}
                        onChange={handleChange}
                        className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                      />
                      {errors.dataPretendida && <span className="text-red-600 text-xs mt-1 block font-semibold">{errors.dataPretendida}</span>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#c5a059]" />
                        Nº de Convidados
                      </label>
                      <input
                        type="number"
                        min="10"
                        max="300"
                        name="numConvidados"
                        value={formData.numConvidados}
                        onChange={handleChange}
                        className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2">
                      Espaço Preferencial para o Evento
                    </label>
                    <select
                      name="espacoEvento"
                      value={formData.espacoEvento}
                      onChange={handleChange}
                      className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                    >
                      <option value="Sala da Lagoa (Banquetes)">Sala da Lagoa — Salão de banquetes com candelabros de vidro artesanal</option>
                      <option value="Pátio das Oliveiras (Exterior)">Pátio das Oliveiras — Recepção e cerimónia ao ar livre</option>
                      <option value="Reserva Exclusiva da Quinta">Reserva Exclusiva de Toda a Quinta</option>
                    </select>
                  </div>
                </div>
              )}

              {/* SPECIFIC FIELDS FOR ESTADIA */}
              {bookingType === 'estadia' && (
                <div className="space-y-6 pt-2 border-t border-stone-200">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                        Data Check-in *
                      </label>
                      <input
                        type="date"
                        name="dataPretendida"
                        value={formData.dataPretendida}
                        onChange={handleChange}
                        className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                      />
                      {errors.dataPretendida && <span className="text-red-600 text-xs mt-1 block font-semibold">{errors.dataPretendida}</span>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                        Data Check-out
                      </label>
                      <input
                        type="date"
                        name="dataCheckout"
                        value={formData.dataCheckout}
                        onChange={handleChange}
                        className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-[#c5a059]" />
                        Tipo de Suíte
                      </label>
                      <select
                        name="tipoSuite"
                        value={formData.tipoSuite}
                        onChange={handleChange}
                        className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                      >
                        <option value="Suíte Master Lagoa">Suíte Master Lagoa (€240/noite)</option>
                        <option value="Suíte Deluxe Oliveira">Suíte Deluxe Oliveira (€180/noite)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Mensagem / Observações */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#0a1f14] font-bold mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#c5a059]" />
                  Observações ou Pedidos Especiais
                </label>
                <textarea
                  name="mensagem"
                  rows="3"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Alergias alimentares, decoração personalizada, horário de chegada..."
                  className="w-full bg-[#f8faf7] text-[#0a1f14] text-sm p-3.5 rounded-xl border border-stone-300 focus:border-[#c5a059] focus:outline-none"
                ></textarea>
              </div>

              {/* REAL-TIME ESTIMATE BOX */}
              <div className="bg-[#0a1f14] text-white p-5 rounded-2xl border border-[#c5a059]/40 flex flex-wrap items-center justify-between gap-4 shadow-xl">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider">
                    <Calculator className="w-4 h-4" />
                    <span>Estimativa de Valor Em Tempo Real</span>
                  </div>
                  <p className="text-stone-300 text-xs font-light">
                    {bookingType === 'almoco' && `Calculado para ${formData.numPessoas} pessoas no restaurante.`}
                    {bookingType === 'evento' && `Estimativa base para ${formData.numConvidados} convidados.`}
                    {bookingType === 'estadia' && `Valor por noite da suíte selecionada.`}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-3xl font-serif-luxury font-bold text-[#c5a059]">
                    {estimate.total.toLocaleString()}€
                  </span>
                  <span className="text-stone-300 text-xs block font-light">
                    ({estimate.perUnit}€ {estimate.label})
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl gold-gradient-btn text-[#0a1f14] font-bold text-base shadow-xl hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
              >
                <span>Confirmar & Enviar Pedido de Reserva</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-stone-500 text-xs pt-1">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Reserva sem custos imediatos. Entraremos em contacto para confirmação final.</span>
              </div>

            </form>
          ) : (
            /* Confirmation Success Screen */
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 bg-[#c5a059]/20 text-[#0a1f14] border border-[#c5a059] rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle className="w-10 h-10 text-[#0a1f14]" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">
                  Reserva Submetida com Sucesso
                </span>
                <h3 className="text-3xl font-serif-luxury text-[#0a1f14] font-bold">
                  Obrigado, {formData.nome}!
                </h3>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  O seu pedido de reserva foi registado na Quinta Lagoa da Guia com o código:
                </p>
                <div className="inline-block bg-[#0a1f14] text-[#c5a059] px-6 py-2.5 rounded-xl font-mono text-lg font-bold shadow-md border border-[#c5a059]/40">
                  {submittedCode}
                </div>
              </div>

              <div className="bg-[#f4f8f5] p-5 rounded-2xl max-w-lg mx-auto text-left text-xs text-stone-700 space-y-2 border border-[#c5a059]/20">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="font-bold text-[#0a1f14]">Tipo de Reserva:</span>
                  <span className="capitalize">{bookingType === 'almoco' ? 'Almoço / Restaurante' : bookingType === 'evento' ? 'Evento Privado' : 'Estadia em Suíte'}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="font-bold text-[#0a1f14]">Data Pretendida:</span>
                  <span>{formData.dataPretendida}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="font-bold text-[#0a1f14]">Estimativa Registada:</span>
                  <span className="font-bold text-[#0a1f14]">{estimate.total}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#0a1f14]">Contacto:</span>
                  <span>{formData.email} • {formData.telefone}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={() => setSubmittedCode(null)}
                  className="px-6 py-2.5 rounded-xl bg-stone-200 text-stone-800 font-bold text-xs hover:bg-stone-300 transition-colors"
                >
                  Fazer Outra Simulação
                </button>
                {onCloseModal && (
                  <button
                    onClick={onCloseModal}
                    className="px-6 py-2.5 rounded-xl bg-[#0a1f14] text-[#c5a059] font-bold text-xs hover:bg-[#163826] transition-colors"
                  >
                    Fechar Janela
                  </button>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
