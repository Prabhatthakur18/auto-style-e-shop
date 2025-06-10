
import React from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

interface ProductsSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const ProductsSearch = ({ searchTerm, onSearchChange }: ProductsSearchProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Search className="h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="max-w-sm"
          />
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProductsSearch;
