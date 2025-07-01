
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">
                <span className="text-yellow-600">Boutique</span> Rei
              </h2>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Sua loja de moda premium com as melhores tendências e produtos de alta qualidade. 
              Elegância e sofisticação em cada peça.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-600">Links Úteis</h3>
            <ul className="space-y-2">
              <li><Link to="/produtos" className="text-gray-300 hover:text-white transition-colors">Produtos</Link></li>
              <li><Link to="/quem-somos" className="text-gray-300 hover:text-white transition-colors">Quem Somos</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de Trocas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-600">Atendimento</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Segunda a Sexta: 9h às 18h</li>
              <li>Sábado: 9h às 14h</li>
              <li>Domingo: Fechado</li>
              <li className="pt-2">
                <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a href="mailto:contato@boutiquerei.com" className="hover:text-white transition-colors">
                  contato@boutiquerei.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Formas de Pagamento */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-yellow-600 font-semibold mb-2">Formas de Pagamento Aceitas:</h4>
              <div className="flex space-x-4 text-sm text-gray-300">
                <span>Visa</span>
                <span>Mastercard</span>
                <span>American Express</span>
                <span>PIX</span>
                <span>Boleto</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm">
                © 2024 Boutique Rei. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
