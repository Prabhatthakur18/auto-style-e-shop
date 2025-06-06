
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductActionsProps {
  productId: string;
  productName: string;
  price: number;
  inStock?: boolean;
}

const ProductActions: React.FC<ProductActionsProps> = ({ productId, productName, price, inStock = true }) => {
  const { toast } = useToast();

  const handleEnquire = () => {
    toast({
      title: "Enquiry Sent",
      description: "We'll get back to you soon about this product.",
    });
  };

  const handleWhatsAppShare = () => {
    const message = `Check out this amazing product: ${productName} - $${price.toFixed(2)}. View more details at: ${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <Button variant="outline" className="flex-1">
          <Heart className="mr-2 h-4 w-4" />
          Add to Wishlist
        </Button>
        <Button variant="outline" className="flex-1" onClick={handleWhatsAppShare}>
          <Share2 className="mr-2 h-4 w-4" />
          Share on WhatsApp
        </Button>
      </div>
      
      <Button onClick={handleEnquire} variant="outline" className="w-full">
        Enquire Now
      </Button>
    </div>
  );
};

export default ProductActions;
