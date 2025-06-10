
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Upload } from 'lucide-react';

interface ProductsHeaderProps {
  onAddNew: () => void;
  onBulkUpload: () => void;
}

const ProductsHeader = ({ onAddNew, onBulkUpload }: ProductsHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <p className="text-gray-600 mt-2">Manage your product inventory</p>
      </div>
      <div className="flex gap-2">
        <Button onClick={onBulkUpload} variant="outline">
          <Upload className="mr-2 h-4 w-4" />
          Bulk Upload
        </Button>
        <Button onClick={onAddNew}>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>
    </div>
  );
};

export default ProductsHeader;
