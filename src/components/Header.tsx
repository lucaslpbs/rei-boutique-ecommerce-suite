
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Quem Somos', path: '/quem-somos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b border-gray-100">
          <div>Frete grátis para compras acima de R$ 299</div>
          <div className="flex items-center space-x-4">
            <span>Siga-nos:</span>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-yellow-600 transition-colors">Instagram</a>
              <a href="#" className="hover:text-yellow-600 transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-black">
              <span className="text-yellow-600">Boutique</span> Rei
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-yellow-600 transition-colors font-medium ${
                  isActive(item.path) ? 'text-yellow-600 border-b-2 border-yellow-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            
            <Link to="/minha-conta">
              <Button variant="ghost" size="icon" className="relative">
                <User className="w-5 h-5" />
                {isAuthenticated && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-600 rounded-full"></div>
                )}
              </Button>
            </Link>

            <Link to="/carrinho">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-yellow-600 transition-colors font-medium ${
                    isActive(item.path) ? 'text-yellow-600' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="ghost" className="justify-start p-0 h-auto">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
