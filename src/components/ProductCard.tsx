
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`}>
        <AspectRatio ratio={4/3}>
          <img 
            src={product.images[0] || "/placeholder.svg"} 
            alt={product.name} 
            className="object-cover w-full h-full" 
          />
        </AspectRatio>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg">{product.name}</h3>
          <p className="font-bold mt-2 text-primary">${product.price.toFixed(2)}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm">Add to Cart</Button>
        <Button size="sm">Buy Now</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
