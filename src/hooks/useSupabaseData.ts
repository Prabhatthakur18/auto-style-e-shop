import { useState, useEffect } from 'react'
import { 
  getCategories, 
  getProducts, 
  getProduct, 
  getProductsByCategory,
  getRelatedProducts 
} from '@/services/supabaseApi'
import type { Database } from '@/lib/supabase'

type Category = Database['public']['Tables']['categories']['Row']
type Product = Database['public']['Tables']['products']['Row']

// Hook for categories
export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      const response = await getCategories()
      
      if (response.success && response.data) {
        setCategories(response.data)
        setError(null)
      } else {
        setError(response.error || 'Failed to fetch categories')
      }
      
      setLoading(false)
    }

    fetchCategories()
  }, [])

  const getMainCategories = () => {
    return categories.filter(cat => !cat.parent_id)
  }

  const getSubcategories = (parentId: string) => {
    return categories.filter(cat => cat.parent_id === parentId)
  }

  const getCategoryById = (id: string) => {
    return categories.find(cat => cat.id === id)
  }

  return {
    categories,
    loading,
    error,
    getMainCategories,
    getSubcategories,
    getCategoryById,
    refetch: () => {
      const fetchCategories = async () => {
        const response = await getCategories()
        if (response.success && response.data) {
          setCategories(response.data)
        }
      }
      fetchCategories()
    }
  }
}

// Hook for products
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      const response = await getProducts()
      
      if (response.success && response.data) {
        setProducts(response.data)
        setError(null)
      } else {
        setError(response.error || 'Failed to fetch products')
      }
      
      setLoading(false)
    }

    fetchProducts()
  }, [])

  return {
    products,
    loading,
    error,
    refetch: () => {
      const fetchProducts = async () => {
        const response = await getProducts()
        if (response.success && response.data) {
          setProducts(response.data)
        }
      }
      fetchProducts()
    }
  }
}

// Hook for single product
export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchProduct = async () => {
      setLoading(true)
      const response = await getProduct(id)
      
      if (response.success && response.data) {
        setProduct(response.data)
        setError(null)
      } else {
        setError(response.error || 'Failed to fetch product')
      }
      
      setLoading(false)
    }

    fetchProduct()
  }, [id])

  return { product, loading, error }
}

// Hook for products by category
export const useProductsByCategory = (categoryId: string) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!categoryId) return

    const fetchProducts = async () => {
      setLoading(true)
      const response = await getProductsByCategory(categoryId)
      
      if (response.success && response.data) {
        setProducts(response.data)
        setError(null)
      } else {
        setError(response.error || 'Failed to fetch products')
      }
      
      setLoading(false)
    }

    fetchProducts()
  }, [categoryId])

  return { products, loading, error }
}

// Hook for related products
export const useRelatedProducts = (productId: string, categoryId: string, limit: number = 4) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!productId || !categoryId) return

    const fetchRelatedProducts = async () => {
      setLoading(true)
      const response = await getRelatedProducts(productId, categoryId, limit)
      
      if (response.success && response.data) {
        setProducts(response.data)
        setError(null)
      } else {
        setError(response.error || 'Failed to fetch related products')
      }
      
      setLoading(false)
    }

    fetchRelatedProducts()
  }, [productId, categoryId, limit])

  return { products, loading, error }
}