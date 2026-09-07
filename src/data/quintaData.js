export const QUINTA_INFO = {
  nome: "Quinta Lagoa da Guia",
  slogan: "Your Private Luxury Escape in Central Portugal",
  subtitulo: "Um refúgio exclusivo de gastronomia, eventos e hospitalidade em Guia, Pombal.",
  descricaoLonga: "A Quinta Lagoa da Guia é um espaço onde a natureza mediterrânica, o design contemporâneo e a hospitalidade portuguesa se encontram. Rodeada por oliveiras centenárias, pinheiros-mansos e uma paisagem banhada pela luz suave de Leiria, a Quinta oferece um refúgio onde autenticidade e tranquilidade criam momentos inesquecíveis.",
  logoUrl: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/logo_quintalagoadaguia.jpg",
  heroBgUrl: "https://quintalagoadaguia.pt/wp-content/uploads/2026/01/IMG-20260104-WA0018.jpg",
  heroBgLightUrl: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_oliveira.jpg",
  bannerBgUrl: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/cropped-quintalagoadaguia2-1.jpg",
  localizacao: {
    morada: "R. Nossa Sra. da Guia 204",
    codigoPostal: "3105-089",
    freguesia: "Guia",
    concelho: "Pombal",
    distrito: "Leiria",
    pais: "Portugal",
    coordenadas: { lat: 39.9482, lng: -8.8258 }
  },
  contactos: {
    telefone: "+351 961 711 042",
    whatsapp: "+351961711042",
    email: "info@quintalagoadaguia.pt",
    instagram: "@quintalagoadaguia.pt",
    instagramUrl: "https://instagram.com/quintalagoadaguia.pt",
    facebook: "Quinta Lagoa da Guia",
    facebookUrl: "https://facebook.com/QuintaLagoaDaGuia"
  },
  google: {
    rating: 4.4,
    totalReviews: 44,
    precoMedio: "15 - 35 €",
    categoria: "Restaurante • Cozinha Tradicional Portuguesa Revisitada",
    tempoPermanencia: "1 – 3,5 horas",
    horario: {
      dias: "Segunda a Domingo",
      abertura: "12:00",
      fecho: "22:00",
      texto: "Aberto todos os dias das 12:00 às 22:00",
      diasSemana: [
        { dia: "Segunda-feira", horario: "12:00 – 22:00" },
        { dia: "Terça-feira", horario: "12:00 – 22:00" },
        { dia: "Quarta-feira", horario: "12:00 – 22:00" },
        { dia: "Quinta-feira", horario: "12:00 – 22:00" },
        { dia: "Sexta-feira", horario: "12:00 – 22:00" },
        { dia: "Sábado", horario: "12:00 – 22:00" },
        { dia: "Domingo", horario: "12:00 – 22:00" }
      ]
    },
    destaquesServico: [
      { id: "privada", titulo: "Sala de Jantar Privada", descricao: "Ambiente íntimo e reservado para momentos especiais e reuniões familiares ou de negócios." },
      { id: "lareira", titulo: "Mesa Junto à Lareira", descricao: "Jantar acolhedor e tranquilo perto da lareira com decoração cuidada e atmosfera singular." },
      { id: "tradicional", titulo: "Cozinha Tradicional Revisitada", descricao: "Culinária portuguesa autêntica com toque contemporâneo conduzida com mestria." },
      { id: "servico", titulo: "Atendimento de Excelência", descricao: "Equipa dedicada, serviço de mesa atencioso e simpatia inigualável." }
    ],
    reviews: [
      {
        id: "rev-1",
        nome: "Joana Lopes",
        rating: 5,
        tempo: "há 7 meses",
        comentario: "Uma agradável surpresa! Adorei toda a experiência neste restaurante, do início ao fim 🤌🏻",
        destaque: "Experiência gastronómica 5 estrelas do início ao fim",
        avatarBg: "bg-amber-800"
      },
      {
        id: "rev-2",
        nome: "Dominique Lage",
        rating: 5,
        tempo: "há 6 meses",
        comentario: "Desde a comida ao atendimento tudo muito bom e agradável. Irei voltar, recomendo vivamente!",
        destaque: "Comida soberba e atendimento acolhedor",
        avatarBg: "bg-stone-700"
      },
      {
        id: "rev-3",
        nome: "Therese Melanie",
        rating: 5,
        tempo: "há 6 meses",
        comentario: "Desde a simpatia do Staff ao serviço de mesa extraordinário e todo o ambiente que envolve a Quinta, tudo 10 estrelas.",
        destaque: "Serviço de mesa extraordinário e ambiente 10 estrelas",
        avatarBg: "bg-[#ac926f]"
      },
      {
        id: "rev-4",
        nome: "Ster Dex",
        rating: 5,
        tempo: "há 7 meses",
        comentario: "Un restaurant de cuisine traditionnelle portugaise revisité, tenu par un gérant expérimenté. L’accueil y est toujours parfait, on est toujours bien reçu.",
        destaque: "Cozinha tradicional portuguesa com gerência experiente",
        avatarBg: "bg-emerald-800"
      },
      {
        id: "rev-5",
        nome: "Leandra Pereira",
        rating: 5,
        tempo: "há 2 meses",
        comentario: "Excelente comida. Serviço atencioso e eficaz. Jantar extremamente tranquilo numa mesa perto da lareira. Decoração e ambiente excelente. Atendimento excelente, recomendo. Fiquei cliente!",
        destaque: "Jantar tranquilo junto à lareira • Fiquei cliente",
        avatarBg: "bg-rose-900"
      },
      {
        id: "rev-6",
        nome: "Inês Guarda",
        rating: 5,
        tempo: "há 7 meses",
        comentario: "Espaço bem decorado com boa comida e atendimento. Muito bom!",
        destaque: "Espaço bem decorado • Boa comida e atendimento",
        avatarBg: "bg-[#7c6a53]"
      }
    ],
    googleMapsUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0xd226b0016e8528f:0x78c307bcb37b4b00"
  }
};

export const VILLA_SPECS = [
  { label: "Espaço & Natureza", val: "Quinta Privada", desc: "Rodeada por oliveiras e pinheiros-mansos" },
  { label: "Restauração", val: "Fine Dining", desc: "Sala da Pipa & Sala da Oliveira" },
  { label: "Eventos", val: "Sala da Lagoa", desc: "Casamentos e eventos empresariais" },
  { label: "Gastronomia", val: "Local & Autêntica", desc: "Ingredientes sazonais e de produtores locais" },
  { label: "Artesanato", val: "Vidro de Leiria", desc: "Candeeiros de vidro e loiça artesanal" },
  { label: "Localização", val: "Guia, Pombal", desc: "Leiria • Centro de Portugal" }
];

export const AMENITIES = [
  {
    id: "restaurante",
    titulo: "Sala da Oliveira (Restaurante)",
    descricao: "Boiserie em verde inglês, vitrine em L e divisória em pedra de calcário natural.",
    icon: "Utensils"
  },
  {
    id: "pipa",
    titulo: "Sala da Pipa (Gourmet)",
    descricao: "Coração gastronómico com logotipo metálico em ouro, bancos em U e iluminação indireta.",
    icon: "Sparkles"
  },
  {
    id: "lagoa",
    titulo: "Sala da Lagoa (Eventos)",
    descricao: "Salão amplo para banquetes e casamentos com candelabros de vidro artesanal de Leiria.",
    icon: "PartyPopper"
  },
  {
    id: "wifi",
    titulo: "Wi-Fi de Alta Velocidade",
    descricao: "Cobertura de fibra ótica de alta velocidade em todos os espaços da Quinta.",
    icon: "Wifi"
  },
  {
    id: "clima",
    titulo: "Climatização de Conforto",
    descricao: "Sistema de climatização inteligente e silencioso em todas as salas e áreas sociais.",
    icon: "Wind"
  },
  {
    id: "estacionamento",
    titulo: "Estacionamento Privado",
    descricao: "Ampla zona de estacionamento reservada para convidados e clientes do restaurante.",
    icon: "Car"
  },
  {
    id: "natureza",
    titulo: "Jardins de Oliveiras",
    descricao: "Jardins tranquilos rodeados por oliveiras centenárias e pinheiros-mansos.",
    icon: "Trees"
  },
  {
    id: "vinho",
    titulo: "Carta de Vinhos Selecionada",
    descricao: "Harmonização com os melhores vinhos das regiões produtoras de Portugal.",
    icon: "Wine"
  }
];

export const ROOMS = [
  {
    id: "sala-pipa",
    nome: "Sala da Pipa — Restaurante Gourmet",
    subtitulo: "O Coração Gastronómico da Quinta",
    descricao: "Espaço sofisticado com logotipo metálico em ouro aplicado em parede preta, bancos acolhedores em U e iluminação indireta para refeições inesquecíveis.",
    capacidade: "Até 60 Pessoas",
    cama: "Mobiliário em Madeira Natural & Carpintaria Personalizada",
    imagem: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_pipa.jpg",
    destaques: ["Logotipo dourado em parede preta", "Bancos aconchegantes em U", "Iluminação indireta", "Madeira natural"]
  },
  {
    id: "sala-oliveira",
    nome: "Sala da Oliveira — Degustação & Reservado",
    subtitulo: "Elegância Clássica com Boiserie Verde Inglês",
    descricao: "Ambiente íntimo revestido com boiserie verde inglês, vitrine em L banhada por luz natural e parede de pedra que acrescenta textura e caráter.",
    capacidade: "Até 24 Pessoas",
    cama: "Divisão em Pedra Natural & Vitrine em Vidro e Inox",
    imagem: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_oliveira.jpg",
    destaques: ["Boiserie em verde inglês", "Vitrine iluminada em L", "Parede de pedra natural", "Luz natural suave"]
  },
  {
    id: "sala-lagoa",
    nome: "Sala da Lagoa — Salão de Eventos Principal",
    subtitulo: "Celebrações, Casamentos & Encontros Empresariais",
    descricao: "Salão de eventos amplo e versátil com balcão ripado, tetos com iluminação LED e candeeiros artesanais em vidro soprado tradicional de Leiria.",
    capacidade: "Até 250 Convidados",
    cama: "Configurações Flexíveis para Banquetes e Conferências",
    imagem: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_lagoa.jpg",
    destaques: ["Candeeiros em vidro de Leiria", "Balcão ripado com LED", "Decoração em cerâmica artesanal", "Capacidade para banquetes"]
  }
];

export const GALLERY_ITEMS = [
  { id: "g1", cat: "quinta", titulo: "Quinta Lagoa da Guia — Paisagem & Natureza", img: "https://quintalagoadaguia.pt/wp-content/uploads/2026/01/IMG-20260104-WA0018.jpg" },
  { id: "g2", cat: "restaurante", titulo: "Sala da Oliveira — Boiserie Verde Inglês", img: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_oliveira.jpg" },
  { id: "g3", cat: "restaurante", titulo: "Sala da Oliveira — Detalhes & Ambiente", img: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_oliveira3.jpg" },
  { id: "g4", cat: "restaurante", titulo: "Sala da Pipa — Logotipo Dourado & Madeira", img: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_pipa.jpg" },
  { id: "g5", cat: "restaurante", titulo: "Sala da Pipa — Bancos em U & Conforto", img: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_pipa2.jpg" },
  { id: "g6", cat: "restaurante", titulo: "Sala da Pipa — Iluminação & Fine Dining", img: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_pipa3.jpg" },
  { id: "g7", cat: "eventos", titulo: "Sala da Lagoa — Salão Principal de Eventos", img: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/sala_lagoa.jpg" },
  { id: "g8", cat: "quinta", titulo: "Vista Exterior — Quinta Lagoa da Guia", img: "https://quintalagoadaguia.pt/wp-content/uploads/2025/12/cropped-quintalagoadaguia2-1.jpg" }
];

export const LOCAL_ATTRACTIONS = [
  { nome: "Parque Aquático Mariparque", distancia: "12 km", desc: "Parque aquático familiar e animação de verão." },
  { nome: "Praia da Vieira", distancia: "18 km", desc: "Praia tradicional com gastronomia de peixe fresco e marisco." },
  { nome: "Castelo de Leiria & Centro Histórico", distancia: "22 km", desc: "Património medieval e vistas soberbas sobre a cidade." },
  { nome: "Santuário de Fátima", distancia: "35 km", desc: "Um dos centros de peregrinação mundial mais visitados." },
  { nome: "Praia da Nazaré & Ondas Gigantes", distancia: "42 km", desc: "Famosa pelas maiores ondas do mundo e tradição piscatória." }
];
