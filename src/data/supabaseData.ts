// New data service that uses Supabase instead of mock data
import { 
  getCategories,
  getProducts,
  getProduct as getSupabaseProduct,
  getProductsByCategory as getSupabaseProductsByCategory,
  getRelatedProducts as getSupabaseRelatedProducts
} from '@/services/supabaseApi'
import type { Database } from '@/lib/supabase'

type Category = Database['public']['Tables']['categories']['Row']
type Product = Database['public']['Tables']['products']['Row']

// Transform Supabase data to match existing interfaces
export const transformCategory = (category: Category) => ({
  id: category.id,
  name: category.name,
  description: category.description || undefined,
  image: category.image || undefined,
  parentId: category.parent_id || undefined
})

export const transformProduct = (product: Product) => ({
  id: product.id,
  name: product.name,
  price: product.price,
  description: product.description || '',
  images: Array.isArray(product.images) ? product.images : [],
  categoryId: product.category_id || '',
  additionalInfo: JSON.stringify(product.additional_info || {}),
  inStock: product.in_stock,
  rating: product.rating || 0,
  reviews: [] // Reviews will be loaded separately
})

// Cached data
let categoriesCache: Category[] = []
let productsCache: Product[] = []
let lastCategoriesFetch = 0
let lastProductsFetch = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

// Get all categories with caching
export const getAllCategories = async () => {
  const now = Date.now()
  if (categoriesCache.length > 0 && now - lastCategoriesFetch < CACHE_DURATION) {
    return categoriesCache
  }

  const response = await getCategories()
  if (response.success && response.data) {
    categoriesCache = response.data
    lastCategoriesFetch = now
    return categoriesCache
  }
  
  return []
}

// Get all products with caching
export const getAllProducts = async () => {
  const now = Date.now()
  if (productsCache.length > 0 && now - lastProductsFetch < CACHE_DURATION) {
    return productsCache
  }

  const response = await getProducts()
  if (response.success && response.data) {
    productsCache = response.data
    lastProductsFetch = now
    return productsCache
  }
  
  return []
}

// Get main categories (no parent)
export const getMainCategories = async () => {
  const categories = await getAllCategories()
  return categories.filter(cat => !cat.parent_id).map(transformCategory)
}

// Get subcategories
export const getSubcategories = async (parentId: string) => {
  const categories = await getAllCategories()
  return categories.filter(cat => cat.parent_id === parentId).map(transformCategory)
}

// Get single product
export const getProduct = async (id: string) => {
  const response = await getSupabaseProduct(id)
  if (response.success && response.data) {
    return transformProduct(response.data)
  }
  return undefined
}

// Get products by category
export const getProductsByCategory = async (categoryId: string) => {
  const response = await getSupabaseProductsByCategory(categoryId)
  if (response.success && response.data) {
    return response.data.map(transformProduct)
  }
  return []
}

// Get related products
export const getRelatedProducts = async (productId: string, categoryId: string, limit: number = 4) => {
  const response = await getSupabaseRelatedProducts(productId, categoryId, limit)
  if (response.success && response.data) {
    return response.data.map(transformProduct)
  }
  return []
}

// Clear cache (useful for admin operations)
export const clearCache = () => {
  categoriesCache = []
  productsCache = []
  lastCategoriesFetch = 0
  lastProductsFetch = 0
}