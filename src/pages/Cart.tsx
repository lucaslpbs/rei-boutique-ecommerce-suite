
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/Layout';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, Truck } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [cep, setCep] = useState('');

  const shippingOptions = [
    { value: 'standard', label: 'Padrão (5-7 dias)', price: 15.90 },
    { value: 'express', label: 'Expresso (2-3 dias)', price: 25.90 },
    { value: 'free', label: 'Grátis (8-12 dias)', price: 0 },
  ];

  const subtotal = getTotalPrice();
  const shipping = shippingMethod ? shippingOptions.find(opt => opt.value === shippingMethod)?.price || 0 : 0;
  const total = subtotal + shipping;

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'bemvindo10') {
      toast.success('Cupom aplicado! 10% de desconto adicionado.');
    } else {
      toast.error('Cupom inválido ou expirado.');
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Seu carrinho está vazio!');
      return;
    }
    toast.success('Redirecionando para o checkout...');
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-black mb-4">Seu carrinho está vazio</h1>
            <p className="text-gray-600 mb-8">
              Que tal dar uma olhada em nossos produtos incríveis?
            </p>
            <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700">
              <Link to="/produtos">Continuar Comprando</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-black mb-8">Carrinho de Compras</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      {item.size && (
                        <p className="text-sm text-gray-600">Tamanho: {item.size}</p>
                      )}
                      {item.color && (
                        <p className="text-sm text-gray-600">Cor: {item.color}</p>
                      )}
                      <p className="text-lg font-bold text-yellow-600 mt-2">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-between items-center pt-4">
              <Button variant="outline" onClick={clearCart}>
                Limpar Carrinho
              </Button>
              <Button asChild variant="outline">
                <Link to="/produtos">Continuar Comprando</Link>
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Shipping Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="w-5 h-5 mr-2" />
                  Calcular Frete
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">CEP</label>
                  <Input
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="00000-000"
                  />
                </div>
                <Select value={shippingMethod} onValueChange={setShippingMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o frete" />
                  </SelectTrigger>
                  <SelectContent>
                    {shippingOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - R$ {option.price.toFixed(2).replace('.', ',')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Coupon */}
            <Card>
              <CardHeader>
                <CardTitle>Cupom de Desconto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Digite seu cupom"
                  />
                  <Button onClick={handleApplyCoupon} variant="outline">
                    Aplicar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({items.length} itens)</span>
                  <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                {shipping > 0 && (
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span>R$ {shipping.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-yellow-600">
                      R$ {total.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
                <Button 
                  onClick={handleCheckout}
                  size="lg" 
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold"
                >
                  Finalizar Compra
                </Button>
                
                <div className="text-center text-sm text-gray-600">
                  <p>Compra 100% segura e protegida</p>
                  <p className="mt-2">🔒 Dados criptografados</p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Formas de Pagamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Cartão de Crédito</div>
                  <div>• PIX (5% desconto)</div>
                  <div>• Boleto Bancário</div>
                  <div>• PayPal</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
