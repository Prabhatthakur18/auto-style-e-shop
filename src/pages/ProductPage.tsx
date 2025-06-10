import React from 'react';
import { useParams } from 'react-router-dom';
import { useProduct, useCategories, useRelatedProducts } from '@/hooks/useSupabaseData';

import ProductBreadcrumbs from '@/components/product/ProductBreadcrumbs';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductRating from '@/components/product/ProductRating';
import ProductActions from '@/components/product/ProductActions';
import ProductDetailTabs from '@/components/product/ProductDetailTabs';
import RelatedProducts from '@/components/product/RelatedProducts';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { product, loading: productLoading } = useProduct(productId || '');
  const { getCategoryById } = useCategories();
  const { products: relatedProducts } = useRelatedProducts(
    productId || '', 
    product?.category_id || '', 
    4
  );
  
  if (productLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  // Find the product's category
  const category = product.category_id ? getCategoryById(product.category_id) : null;
  
  // Find parent category if this is a subcategory
  const parentCategory = category?.parent_id ? getCategoryById(category.parent_id) : null;

  // Transform product to match expected interface
  const transformedProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description || '',
    images: Array.isArray(product.images) ? product.images : [],
    categoryId: product.category_id || '',
    additionalInfo: JSON.stringify(product.additional_info || {}),
    inStock: product.in_stock,
    rating: product.rating || 0,
    reviews: [] // Reviews will be loaded separately if needed
  };

  // Transform related products
  const transformedRelatedProducts = relatedProducts.map(relatedProduct => ({
    id: relatedProduct.id,
    name: relatedProduct.name,
    price: relatedProduct.price,
    description: relatedProduct.description || '',
    images: Array.isArray(relatedProduct.images) ? relatedProduct.images : [],
    categoryId: relatedProduct.category_id || '',
    additionalInfo: JSON.stringify(relatedProduct.additional_info || {}),
    inStock: relatedProduct.in_stock,
    rating: relatedProduct.rating || 0,
    reviews: []
  }));

  // Transform categories for breadcrumbs
  const transformedCategory = category ? {
    id: category.id,
    name: category.name,
    description: category.description || undefined,
    image: category.image || undefined,
    parentId: category.parent_id || undefined
  } : undefined;

  const transformedParentCategory = parentCategory ? {
    id: parentCategory.id,
    name: parentCategory.name,
    description: parentCategory.description || undefined,
    image: parentCategory.image || undefined,
    parentId: parentCategory.parent_id || undefined
  } : null;

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <ProductBreadcrumbs 
        productName={transformedProduct.name}
        category={transformedCategory}
        parentCategory={transformedParentCategory}
      />

      {/* Product Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <ProductImageGallery 
          images={transformedProduct.images} 
          productName={transformedProduct.name} 
        />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{transformedProduct.name}</h1>
          
          {/* Rating */}
          <div className="mb-4">
            <ProductRating 
              rating={transformedProduct.rating} 
              reviewCount={0} // Will be updated when reviews are implemented
            />
          </div>
          
          <p className="text-2xl font-bold text-primary mb-4">${transformedProduct.price.toFixed(2)}</p>
          
          <div className="prose mb-6">
            <p>{transformedProduct.description}</p>
          </div>

          {/* Stock status */}
          <div className="mb-6">
            <span className={`px-2 py-1 text-sm rounded-full ${transformedProduct.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {transformedProduct.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Product actions */}
          <ProductActions 
            productId={transformedProduct.id} 
            productName={transformedProduct.name}
            price={transformedProduct.price}
            inStock={transformedProduct.inStock} 
          />
        </div>
      </div>

      {/* Product Details Tabs */}
      <ProductDetailTabs 
        description={transformedProduct.description}
        additionalInfo={transformedProduct.additionalInfo}
      />

      {/* Related Products */}
      <RelatedProducts products={transformedRelatedProducts} />
    </div>
  );
};

export default ProductPage;