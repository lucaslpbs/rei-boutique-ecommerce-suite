
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { products } from '@/data/products';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    {
      title: 'Nova Coleção Masculina',
      subtitle: 'Elegância e estilo para o homem moderno',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
      cta: 'Ver Coleção'
    },
    {
      title: 'Até 50% OFF',
      subtitle: 'Moda masculina premium com preços especiais',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=600&fit=crop',
      cta: 'Aproveitar'
    },
    {
      title: 'Acessórios Masculinos',
      subtitle: 'Complete seu visual com estilo',
      image: 'https://images.unsplash.com/photo-1556306535-38febf6782e7?w=1200&h=600&fit=crop',
      cta: 'Descobrir'
    },
  ];

  const featuredProducts = products.filter(product => product.featured);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <Layout>
      {/* Hero Banner Slider */}
      <section className="relative h-[70vh] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white max-w-2xl px-4">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    {banner.title}
                  </h1>
                  <p className="text-xl mb-8">{banner.subtitle}</p>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold px-8 py-3"
                  >
                    <Link to="/produtos">{banner.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-yellow-600' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Nossas Categorias
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Blusas', 'Relógios', 'Óculos', 'Calçados'].map((category) => (
              <Link
                key={category}
                to="/produtos"
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
                <div className="w-full h-full bg-gray-200 group-hover:scale-110 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Produtos em Destaque
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden aspect-[3/4]">
                  {product.onSale && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded z-10">
                      OFERTA
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-black">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                    <Button asChild size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                      <Link to={`/produto/${product.id}`}>Ver</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link to="/produtos">Ver Todos os Produtos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Receba em primeira mão nossas promoções exclusivas e lançamentos da Boutique Rei
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-l-lg sm:rounded-r-none rounded-r-lg text-black"
            />
            <Button className="bg-yellow-600 hover:bg-yellow-700 px-8 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg">
              Inscrever
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
