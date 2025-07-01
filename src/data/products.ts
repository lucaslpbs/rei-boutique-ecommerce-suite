
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  category: string;
  sizes?: string[];
  colors?: string[];
  featured?: boolean;
  onSale?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Vestido Elegante Preto',
    price: 299.90,
    originalPrice: 399.90,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566479179817-c5b2f70e99c5?w=500&h=600&fit=crop',
    ],
    description: 'Vestido elegante em tecido premium, perfeito para ocasiões especiais. Corte moderno que valoriza a silhueta feminina.',
    category: 'Vestidos',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Azul Marinho'],
    featured: true,
    onSale: true,
  },
  {
    id: '2',
    name: 'Blazer Executivo Dourado',
    price: 449.90,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    ],
    description: 'Blazer sofisticado com detalhes dourados. Ideal para o ambiente corporativo e eventos formais.',
    category: 'Blazers',
    sizes: ['P', 'M', 'G'],
    colors: ['Dourado', 'Preto'],
    featured: true,
  },
  {
    id: '3',
    name: 'Calça Social Preta',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&h=600&fit=crop',
    description: 'Calça social de alfaiataria perfeita. Corte reto que alonga a silhueta.',
    category: 'Calças',
    sizes: ['36', '38', '40', '42', '44'],
    colors: ['Preto', 'Azul Marinho', 'Cinza'],
  },
  {
    id: '4',
    name: 'Blusa de Seda Branca',
    price: 179.90,
    image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=500&h=600&fit=crop',
    description: 'Blusa em seda pura com caimento impecável. Elegância e conforto em uma só peça.',
    category: 'Blusas',
    sizes: ['P', 'M', 'G'],
    colors: ['Branco', 'Creme'],
    featured: true,
  },
  {
    id: '5',
    name: 'Saia Midi Plissada',
    price: 159.90,
    originalPrice: 199.90,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d44?w=500&h=600&fit=crop',
    description: 'Saia midi com plissado delicado. Versátil e sofisticada para diversas ocasiões.',
    category: 'Saias',
    sizes: ['P', 'M', 'G'],
    colors: ['Preto', 'Nude', 'Vinho'],
    onSale: true,
  },
  {
    id: '6',
    name: 'Conjunto Executivo',
    price: 599.90,
    image: 'https://images.unsplash.com/photo-1551048632-3275dd4b6b29?w=500&h=600&fit=crop',
    description: 'Conjunto blazer + calça para a mulher moderna. Sofisticação garantida.',
    category: 'Conjuntos',
    sizes: ['P', 'M', 'G'],
    colors: ['Preto', 'Cinza'],
    featured: true,
  },
];

export const categories = [
  'Todos',
  'Vestidos',
  'Blazers',
  'Blusas',
  'Calças',
  'Saias',
  'Conjuntos',
];
