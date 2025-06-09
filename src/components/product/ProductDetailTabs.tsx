
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Review } from '@/types';

interface ProductDetailTabsProps {
  description: string;
  additionalInfo?: string;
  reviews?: Review[];
}

const ProductDetailTabs: React.FC<ProductDetailTabsProps> = ({ 
  description, 
  additionalInfo, 
  reviews = [] 
}) => {
  return (
    <Tabs defaultValue="description" className="mt-12">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="additional">Additional Info</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="mt-6 p-6 bg-white rounded-lg border">
        <div className="prose max-w-none">
          <p>{description}</p>
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
          <p>{additionalInfo || "No additional information available."}</p>
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
          {reviews && reviews.length > 0 ? (
            <div className="divide-y">
              {reviews.map((review) => (
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
  );
};

export default ProductDetailTabs;
