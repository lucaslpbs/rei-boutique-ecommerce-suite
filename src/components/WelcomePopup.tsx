
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  const handleClaim = () => {
    // Simular aplicação de cupom
    alert('Cupom BEMVINDO10 aplicado! Você ganhou 10% de desconto na primeira compra.');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="bg-white p-8 max-w-md w-full text-center relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={handleClose}
        >
          <X className="w-4 h-4" />
        </Button>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-black mb-2">
            Bem-vindo à <span className="text-yellow-600">Boutique Rei</span>!
          </h2>
          <p className="text-gray-600">
            Ganhe 10% de desconto na sua primeira compra
          </p>
        </div>

        <div className="bg-yellow-50 border-2 border-dashed border-yellow-600 p-4 rounded-lg mb-6">
          <p className="text-yellow-800 font-semibold text-lg">BEMVINDO10</p>
          <p className="text-yellow-700 text-sm">Válido para primeira compra</p>
        </div>

        <div className="flex space-x-3">
          <Button variant="outline" onClick={handleClose} className="flex-1">
            Agora não
          </Button>
          <Button onClick={handleClaim} className="flex-1 bg-yellow-600 hover:bg-yellow-700">
            Resgatar Cupom
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default WelcomePopup;
