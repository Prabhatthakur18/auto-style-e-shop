
import React from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, getRelatedProducts } from '@/data/mockData';
import { categories } from '@/data/mockData';

import ProductBreadcrumbs from '@/components/product/ProductBreadcrumbs';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductRating from '@/components/product/ProductRating';
import ProductActions from '@/components/product/ProductActions';
import ProductDetailTabs from '@/components/product/ProductDetailTabs';
import RelatedProducts from '@/components/product/RelatedProducts';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProduct(productId) : undefined;
  
  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  // Find the product's category
  const category = categories.find(cat => cat.id === product.categoryId);
  
  // Find parent category if this is a subcategory
  const parentCategory = category?.parentId 
    ? categories.find(cat => cat.id === category.parentId) 
    : null;

  // Get related products
  const relatedProducts = productId ? getRelatedProducts(productId, 4) : [];

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <ProductBreadcrumbs 
        productName={product.name}
        category={category}
        parentCategory={parentCategory}
      />

      {/* Product Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <ProductImageGallery 
          images={product.images} 
          productName={product.name} 
        />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Rating */}
          <div className="mb-4">
            <ProductRating 
              rating={product.rating} 
              reviewCount={product.reviews?.length || 0} 
            />
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

          {/* Product actions */}
          <ProductActions 
            productId={product.id} 
            productName={product.name}
            price={product.price}
            inStock={product.inStock} 
          />
        </div>
      </div>

      {/* Product Details Tabs */}
      <ProductDetailTabs 
        description={product.description}
        additionalInfo={product.additionalInfo}
      />

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

export default ProductPage;
