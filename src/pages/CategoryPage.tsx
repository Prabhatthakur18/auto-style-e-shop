import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCategories, useProductsByCategory } from '@/hooks/useSupabaseData';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { ChevronRight } from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { getCategoryById, getSubcategories } = useCategories();
  const { products, loading: productsLoading } = useProductsByCategory(categoryId || '');
  
  // Find the current category
  const category = categoryId ? getCategoryById(categoryId) : null;
  
  // Get subcategories if any
  const subcategories = categoryId ? getSubcategories(categoryId) : [];
  
  // Find parent category if this is a subcategory
  const parentCategory = category?.parent_id ? getCategoryById(category.parent_id) : null;

  // Transform products to match the expected interface
  const transformedProducts = products.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description || '',
    images: Array.isArray(product.images) ? product.images : [],
    categoryId: product.category_id || '',
    additionalInfo: JSON.stringify(product.additional_info || {}),
    inStock: product.in_stock,
    rating: product.rating || 0,
    reviews: []
  }));

  // Transform subcategories to match the expected interface
  const transformedSubcategories = subcategories.map(subcat => ({
    id: subcat.id,
    name: subcat.name,
    description: subcat.description || undefined,
    image: subcat.image || undefined,
    parentId: subcat.parent_id || undefined
  }));

  if (!category) {
    return <div className="text-center py-12">Category not found</div>;
  }

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
          <li className="font-medium">{category.name}</li>
        </ul>
      </div>

      {/* Category Header */}
      <div className="bg-muted rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        {category.description && (
          <p className="text-lg text-muted-foreground">{category.description}</p>
        )}
      </div>

      {/* Subcategories if any */}
      {transformedSubcategories.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse {category.name} Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {transformedSubcategories.map(subcategory => (
              <CategoryCard key={subcategory.id} category={subcategory} />
            ))}
          </div>
        </section>
      )}

      {/* Products */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          {transformedSubcategories.length > 0 ? "Featured Products" : `${category.name} Products`}
        </h2>
        {productsLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Loading products...</p>
          </div>
        ) : transformedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {transformedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted rounded-lg">
            <p className="text-lg text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;