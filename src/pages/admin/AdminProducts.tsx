
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { getProducts, deleteProduct, bulkUploadProducts } from '@/services/adminApi';
import { AdminProduct } from '@/types/admin';
import ProductFormDialog from '@/components/admin/ProductFormDialog';
import BulkUploadDialog from '@/components/admin/BulkUploadDialog';
import ProductsHeader from '@/components/admin/ProductsHeader';
import ProductsSearch from '@/components/admin/ProductsSearch';
import ProductsTable from '@/components/admin/ProductsTable';

const AdminProducts = () => {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<AdminProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [isBulkUploadOpen, setIsBulkUploadOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<AdminProduct | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await getProducts();
      if (response.success && response.data) {
        setProducts(response.data);
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch products",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await deleteProduct(id);
        if (response.success) {
          toast({
            title: "Success",
            description: "Product deleted successfully",
          });
          fetchProducts();
        } else {
          toast({
            title: "Error",
            description: response.message || "Failed to delete product",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleEdit = (product: AdminProduct) => {
    setEditingProduct(product);
    setIsProductDialogOpen(true);
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setIsProductDialogOpen(true);
  };

  const handleBulkUpload = async (file: File) => {
    try {
      const response = await bulkUploadProducts(file);
      if (response.success) {
        toast({
          title: "Success",
          description: `Imported ${response.data?.imported || 0} products`,
        });
        fetchProducts();
      } else {
        toast({
          title: "Error",
          description: response.message || "Failed to upload products",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error uploading products:', error);
    }
  };

  return (
    <div className="space-y-6">
      <ProductsHeader 
        onAddNew={handleAddNew}
        onBulkUpload={() => setIsBulkUploadOpen(true)}
      />

      <ProductsSearch 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <Card>
        <CardContent>
          <ProductsTable
            products={filteredProducts}
            isLoading={isLoading}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </CardContent>
      </Card>

      <ProductFormDialog
        isOpen={isProductDialogOpen}
        onClose={() => setIsProductDialogOpen(false)}
        product={editingProduct}
        onSuccess={fetchProducts}
      />

      <BulkUploadDialog
        isOpen={isBulkUploadOpen}
        onClose={() => setIsBulkUploadOpen(false)}
        onUpload={handleBulkUpload}
      />
    </div>
  );
};

export default AdminProducts;
