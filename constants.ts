import { Utensils, IceCream, BookHeart, Film } from 'lucide-react';
import { ItineraryItem } from './types';

export const PARTNER_NAME = "Rayssa Estephany";

export const ITINERARY: ItineraryItem[] = [
  {
    id: 1,
    title: "Jantar Romântico",
    description: "Para começar a noite com a elegância que você merece. Vamos celebrar nosso amor com pratos deliciosos e olhares apaixonados.",
    icon: Utensils,
    color: "from-red-500 to-rose-600",
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    id: 2,
    title: "O Melhor Açaí da Vida",
    description: "Porque a vida precisa ser doce! Uma pausa refrescante para saborear aquele açaí perfeito que a gente tanto ama.",
    icon: IceCream,
    color: "from-purple-500 to-indigo-600",
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: 3,
    title: "Livrinhos Novos",
    description: "Hora de alimentar a alma. Vamos escolher novas histórias, sentir o cheiro de livro novo e expandir nossa coleção.",
    icon: BookHeart,
    color: "from-amber-500 to-orange-600",
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    id: 4,
    title: "Cinema pra Finalizar",
    description: "No escurinho do cinema, de mãos dadas, fechando o dia com chave de ouro e muita pipoca.",
    icon: Film,
    color: "from-blue-500 to-cyan-600",
    image: "https://picsum.photos/800/600?random=4"
  }
];