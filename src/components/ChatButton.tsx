
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os produtos.', '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg"
          size="icon"
        >
          💬
        </Button>
      </div>

      {/* Chat Options */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 p-4 w-64 shadow-xl">
          <h3 className="font-semibold mb-3">Como podemos ajudar?</h3>
          <div className="space-y-2">
            <Button
              onClick={handleWhatsApp}
              className="w-full justify-start bg-green-600 hover:bg-green-700"
            >
              📱 WhatsApp
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.location.href = 'mailto:contato@boutiquerei.com'}
            >
              ✉️ Email
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatButton;
