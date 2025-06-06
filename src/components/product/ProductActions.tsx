
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductActionsProps {
  productId: string;
  productName: string;
  inStock?: boolean;
}

const ProductActions: React.FC<ProductActionsProps> = ({ productId, productName, inStock = true }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(productId, quantity);
  };

  const handleEnquire = () => {
    toast({
      title: "Enquiry Sent",
      description: "We'll get back to you soon about this product.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <span className="text-sm font-medium mr-3">Quantity:</span>
        <div className="flex items-center border rounded-md">
          <button 
            onClick={decrementQuantity}
            className="px-3 py-1 border-r"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="px-4 py-1">{quantity}</span>
          <button 
            onClick={incrementQuantity}
            className="px-3 py-1 border-l"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button 
          className="flex-1" 
          onClick={handleAddToCart}
          disabled={!inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button className="flex-1" variant="secondary">Buy Now</Button>
      </div>
      
      <div className="flex space-x-4">
        <Button variant="outline" className="flex-1">
          <Heart className="mr-2 h-4 w-4" />
          Add to Wishlist
        </Button>
        <Button variant="outline" className="flex-1">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>
      
      <Button onClick={handleEnquire} variant="outline" className="w-full">
        Enquire Now
      </Button>
    </div>
  );
};

export default ProductActions;
