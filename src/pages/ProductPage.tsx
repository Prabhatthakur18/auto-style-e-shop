
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct, getRelatedProducts } from '@/data/mockData';
import { categories } from '@/data/mockData';
import { ChevronRight, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const product = productId ? getProduct(productId) : undefined;
  
  const [mainImage, setMainImage] = useState(product?.images[0] || "/placeholder.svg");
  const [quantity, setQuantity] = useState(1);
  
  const relatedProducts = productId ? getRelatedProducts(productId, 4) : [];
  
  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  // Find the product's category
  const category = categories.find(cat => cat.id === product.categoryId);
  
  // Find parent category if this is a subcategory
  const parentCategory = category?.parentId 
    ? categories.find(cat => cat.id === category.parentId) 
    : null;

  const handleEnquire = () => {
    toast({
      title: "Enquiry Sent",
      description: "We'll get back to you soon about this product.",
    });
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  // Handle quantity change
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs">
        <ul className="flex items-center space-x-2">
          <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          {parentCategory && (
            <>
              <li>
                <Link to={`/category/${parentCategory.id}`} className="text-muted-foreground hover:text-foreground">
                  {parentCategory.name}
                </Link>
              </li>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </>
          )}
          {category && (
            <>
              <li>
                <Link to={`/category/${category.id}`} className="text-muted-foreground hover:text-foreground">
                  {category.name}
                </Link>
              </li>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </>
          )}
          <li className="font-medium">{product.name}</li>
        </ul>
      </div>

      {/* Product Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden bg-white">
            <img 
              src={mainImage} 
              alt={product.name} 
              className="object-contain w-full h-[400px]" 
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div 
                key={index}
                className={`cursor-pointer border rounded-md overflow-hidden ${mainImage === image ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setMainImage(image)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} ${index + 1}`} 
                  className="object-cover w-full h-24" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-5 h-5 ${i < Math.round(product.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-muted-foreground">
              {product.rating?.toFixed(1)} ({product.reviews?.length || 0} reviews)
            </span>
          </div>
          
          <p className="text-2xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
          
          <div className="prose mb-6">
            <p>{product.description}</p>
          </div>

          {/* Stock status */}
          <div className="mb-6">
            <span className={`px-2 py-1 text-sm rounded-full ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Quantity selector */}
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

          <div className="space-y-6">
            <div className="flex space-x-4">
              <Button 
                className="flex-1" 
                onClick={handleAddToCart}
                disabled={!product.inStock}
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
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mt-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="additional">Additional Info</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6 p-6 bg-white rounded-lg border">
          <div className="prose max-w-none">
            <p>{product.description}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
            <ul>
              <li>High-quality materials</li>
              <li>Durable construction</li>
              <li>Perfect fit for your vehicle</li>
              <li>Easy installation</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="additional" className="mt-6 p-6 bg-white rounded-lg border">
          <div className="prose max-w-none">
            <p>{product.additionalInfo || "No additional information available."}</p>
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium">Material</td>
                  <td className="py-2">Premium quality</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Compatibility</td>
                  <td className="py-2">Universal fit</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Warranty</td>
                  <td className="py-2">1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6 p-6 bg-white rounded-lg border">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Customer Reviews</h3>
              <Button>Write a Review</Button>
            </div>
            {product.reviews && product.reviews.length > 0 ? (
              <div className="divide-y">
                {product.reviews.map((review) => (
                  <div key={review.id} className="py-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h4 className="font-medium">{review.userName}</h4>
                    <p className="text-muted-foreground">{review.date}</p>
                    <p className="mt-2">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p>No reviews yet. Be the first to review this product!</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {relatedProducts.map((relatedProduct) => (
                <CarouselItem key={relatedProduct.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <ProductCard product={relatedProduct} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-5" />
            <CarouselNext className="-right-4 md:-right-5" />
          </Carousel>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
