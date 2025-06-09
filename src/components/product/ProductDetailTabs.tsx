
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductDetailTabsProps {
  description: string;
  additionalInfo?: string;
}

const ProductDetailTabs: React.FC<ProductDetailTabsProps> = ({ 
  description, 
  additionalInfo
}) => {
  return (
    <Tabs defaultValue="description" className="mt-12">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="additional">Additional Info</TabsTrigger>
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
    </Tabs>
  );
};

export default ProductDetailTabs;
