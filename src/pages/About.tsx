
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Heart, Star, Users } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-yellow-600">Boutique Rei</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Há mais de uma década trazendo elegância, sofisticação e as últimas tendências da moda 
            para mulheres que valorizam qualidade e exclusividade.
          </p>
        </section>

        {/* Nossa História */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A Boutique Rei nasceu em 2012 com um sonho simples: criar uma experiência única 
                  de compras onde cada mulher pudesse encontrar peças que refletissem sua personalidade 
                  e elegância natural.
                </p>
                <p>
                  Começamos como uma pequena loja física no coração da cidade e, ao longo dos anos, 
                  expandimos nossa presença para o mundo digital, sempre mantendo nosso compromisso 
                  com a qualidade excepcional e atendimento personalizado.
                </p>
                <p>
                  Hoje, somos reconhecidas como referência em moda feminina premium, atendendo 
                  milhares de clientes que confiam em nosso bom gosto e expertise.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Boutique Rei Store"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Crown className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Exclusividade</h3>
                <p className="text-gray-600 text-sm">
                  Peças cuidadosamente selecionadas para mulheres que buscam se destacar com elegância.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Qualidade</h3>
                <p className="text-gray-600 text-sm">
                  Materiais premium e acabamento impecável em cada produto da nossa coleção.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Paixão</h3>
                <p className="text-gray-600 text-sm">
                  Amor genuíno pela moda e pelo que fazemos, refletido em cada detalhe.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Relacionamento</h3>
                <p className="text-gray-600 text-sm">
                  Atendimento personalizado e relacionamento duradouro com nossas clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-yellow-600 mb-4">Nossa Missão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Proporcionar às mulheres uma experiência única de compras, oferecendo peças 
                  exclusivas que realcem sua beleza natural e personalidade, com qualidade 
                  excepcional e atendimento personalizado.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-yellow-600 mb-4">Nossa Visão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconhecida como a principal referência em moda feminina premium no Brasil, 
                  inspirando confiança e empoderamento através de peças que celebram a 
                  individualidade de cada mulher.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-yellow-600 mb-4">Nossos Diferenciais</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Curadoria exclusiva de produtos</li>
                  <li>• Atendimento personalizado</li>
                  <li>• Qualidade garantida</li>
                  <li>• Entrega rápida e segura</li>
                  <li>• Política de trocas flexível</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Compromisso com a Sustentabilidade */}
        <section className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">Compromisso com a Sustentabilidade</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Acreditamos que a moda pode ser elegante e responsável. Por isso, trabalhamos com 
              fornecedores que compartilham nossos valores de sustentabilidade e responsabilidade social.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">♻️</span>
              </div>
              <h3 className="font-semibold mb-2">Materiais Sustentáveis</h3>
              <p className="text-sm text-gray-600">
                Priorizamos tecidos e materiais eco-friendly em nossa seleção de produtos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🤝</span>
              </div>
              <h3 className="font-semibold mb-2">Parcerias Éticas</h3>
              <p className="text-sm text-gray-600">
                Trabalhamos apenas com fornecedores que respeitam condições justas de trabalho.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">📦</span>
              </div>
              <h3 className="font-semibold mb-2">Embalagens Conscientes</h3>
              <p className="text-sm text-gray-600">
                Utilizamos embalagens recicláveis e biodegradáveis em todas as entregas.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-black text-white rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Faça Parte da Nossa História
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se às milhares de mulheres que já descobriram o prazer de se vestir com elegância e exclusividade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/produtos"
              className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Conheça Nossa Coleção
            </a>
            <a
              href="/contato"
              className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Entre em Contato
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
