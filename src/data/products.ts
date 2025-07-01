
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
    name: 'Camisa Polo Piquet Premium',
    price: 89.90,
    originalPrice: 119.90,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=600&fit=crop',
    ],
    description: 'Camisa polo em tecido piquet de alta qualidade. Conforto e elegância para o homem moderno.',
    category: 'Blusas',
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    colors: ['Preto', 'Branco', 'Azul Marinho', 'Cinza'],
    featured: true,
    onSale: true,
  },
  {
    id: '2',
    name: 'Cordão Dourado Aço Inox',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop',
    description: 'Cordão masculino em aço inoxidável com acabamento dourado. Elegância e durabilidade.',
    category: 'Colares',
    colors: ['Dourado'],
    featured: true,
  },
  {
    id: '3',
    name: 'Óculos Lupa Oakley Inspired',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=600&fit=crop',
    description: 'Óculos esportivos com lentes espelhadas. Proteção UV e estilo incomparável.',
    category: 'Óculos',
    colors: ['Preto', 'Prata'],
    featured: true,
  },
  {
    id: '4',
    name: 'Relógio Bulgari Inspired',
    price: 459.90,
    originalPrice: 599.90,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=600&fit=crop',
    description: 'Relógio masculino de luxo com design sofisticado. Elegância no pulso.',
    category: 'Relógios',
    colors: ['Dourado', 'Prata'],
    onSale: true,
  },
  {
    id: '5',
    name: 'Perfume Argentino Premium',
    price: 149.90,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=600&fit=crop',
    description: 'Perfume masculino importado com fragrância marcante e duradoura.',
    category: 'Perfumes',
    featured: true,
  },
  {
    id: '6',
    name: 'Boné Premium Grife',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop',
    description: 'Boné de grife com acabamento premium. Estilo e proteção solar.',
    category: 'Bonés',
    sizes: ['Único'],
    colors: ['Preto', 'Branco', 'Azul'],
  },
  {
    id: '7',
    name: 'Short Brim Mauricinho',
    price: 119.90,
    image: 'https://images.unsplash.com/photo-1506629905607-d0c281e48475?w=500&h=600&fit=crop',
    description: 'Short masculino em tecido brim de alta qualidade. Conforto e durabilidade.',
    category: 'Shorts',
    sizes: ['36', '38', '40', '42', '44', '46'],
    colors: ['Bege', 'Azul', 'Verde Militar'],
  },
  {
    id: '8',
    name: 'Cueca 100% Algodão',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
    description: 'Cueca masculina em algodão puro. Conforto e respirabilidade.',
    category: 'Cuecas',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Branco', 'Preto', 'Cinza'],
  },
  {
    id: '9',
    name: 'Tênis Esportivo Premium',
    price: 249.90,
    originalPrice: 329.90,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
    description: 'Tênis esportivo com tecnologia de amortecimento. Conforto para todas as atividades.',
    category: 'Calçados',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['Preto', 'Branco', 'Azul'],
    featured: true,
    onSale: true,
  },
  {
    id: '10',
    name: 'Anel Dedante Aço Inox',
    price: 69.90,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=600&fit=crop',
    description: 'Anel masculino em aço inoxidável com design moderno.',
    category: 'Anéis',
    sizes: ['17', '19', '21', '23', '25'],
    colors: ['Prata', 'Dourado'],
  },
  {
    id: '11',
    name: 'Blusão Canelado Premium',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop',
    description: 'Blusão masculino em tecido canelado. Elegância e conforto para o inverno.',
    category: 'Blusões',
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    colors: ['Preto', 'Cinza', 'Azul Marinho'],
  },
  {
    id: '12',
    name: 'Calça Jordan Cargo',
    price: 179.90,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop',
    description: 'Calça estilo Jordan com bolsos cargo. Funcionalidade e estilo urbano.',
    category: 'Calças',
    sizes: ['36', '38', '40', '42', '44', '46'],
    colors: ['Preto', 'Caqui', 'Cinza'],
    featured: true,
  },
];

export const categories = [
  'Todos',
  'Blusas',
  'Colares',
  'Óculos',
  'Relógios',
  'Perfumes',
  'Bonés',
  'Shorts',
  'Cuecas',
  'Calçados',
  'Anéis',
  'Blusões',
  'Calças',
];
