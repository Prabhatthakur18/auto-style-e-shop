import { supabase } from '@/lib/supabase'
import type { Database } from '@/lib/supabase'

type Category = Database['public']['Tables']['categories']['Row']
type Product = Database['public']['Tables']['products']['Row']
type Review = Database['public']['Tables']['reviews']['Row']
type AdminUser = Database['public']['Tables']['admin_users']['Row']

interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// Categories API
export const getCategories = async (): Promise<ApiResponse<Category[]>> => {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name')

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data: data || [] }
  } catch (error) {
    return { success: false, error: 'Failed to fetch categories' }
  }
}

export const createCategory = async (category: Database['public']['Tables']['categories']['Insert']): Promise<ApiResponse<Category>> => {
  try {
    const { data, error } = await supabase
      .from('categories')
      .insert(category)
      .select()
      .single()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return { success: false, error: 'Failed to create category' }
  }
}

export const updateCategory = async (id: string, category: Database['public']['Tables']['categories']['Update']): Promise<ApiResponse<Category>> => {
  try {
    const { data, error } = await supabase
      .from('categories')
      .update(category)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return { success: false, error: 'Failed to update category' }
  }
}

export const deleteCategory = async (id: string): Promise<ApiResponse<null>> => {
  try {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id)

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to delete category' }
  }
}

// Products API
export const getProducts = async (): Promise<ApiResponse<Product[]>> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (
          id,
          name
        )
      `)
      .order('created_at', { ascending: false })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data: data || [] }
  } catch (error) {
    return { success: false, error: 'Failed to fetch products' }
  }
}

export const getProductsByCategory = async (categoryId: string): Promise<ApiResponse<Product[]>> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category_id', categoryId)
      .eq('in_stock', true)
      .order('name')

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data: data || [] }
  } catch (error) {
    return { success: false, error: 'Failed to fetch products' }
  }
}

export const getProduct = async (id: string): Promise<ApiResponse<Product>> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        categories (
          id,
          name,
          parent_id
        ),
        reviews (
          id,
          user_name,
          rating,
          comment,
          created_at
        )
      `)
      .eq('id', id)
      .single()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return { success: false, error: 'Failed to fetch product' }
  }
}

export const createProduct = async (product: Database['public']['Tables']['products']['Insert']): Promise<ApiResponse<Product>> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return { success: false, error: 'Failed to create product' }
  }
}

export const updateProduct = async (id: string, product: Database['public']['Tables']['products']['Update']): Promise<ApiResponse<Product>> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .update(product)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return { success: false, error: 'Failed to update product' }
  }
}

export const deleteProduct = async (id: string): Promise<ApiResponse<null>> => {
  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to delete product' }
  }
}

// Reviews API
export const getProductReviews = async (productId: string): Promise<ApiResponse<Review[]>> => {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('product_id', productId)
      .order('created_at', { ascending: false })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data: data || [] }
  } catch (error) {
    return { success: false, error: 'Failed to fetch reviews' }
  }
}

export const createReview = async (review: Database['public']['Tables']['reviews']['Insert']): Promise<ApiResponse<Review>> => {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .insert(review)
      .select()
      .single()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return { success: false, error: 'Failed to create review' }
  }
}

// Admin Authentication
export const adminLogin = async (username: string, password: string): Promise<ApiResponse<{ token: string; user: AdminUser }>> => {
  try {
    // In a real implementation, you would verify the password hash
    const { data, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('username', username)
      .single()

    if (error || !data) {
      return { success: false, error: 'Invalid credentials' }
    }

    // For demo purposes, we'll accept any password
    // In production, use proper password hashing (bcrypt, etc.)
    const token = btoa(`${username}:${Date.now()}`) // Simple token for demo

    return { 
      success: true, 
      data: { 
        token, 
        user: data 
      } 
    }
  } catch (error) {
    return { success: false, error: 'Login failed' }
  }
}

// File Upload (using Supabase Storage)
export const uploadImage = async (file: File, bucket: string = 'product-images'): Promise<ApiResponse<{ url: string }>> => {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
    
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file)

    if (error) {
      return { success: false, error: error.message }
    }

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName)

    return { success: true, data: { url: publicUrl } }
  } catch (error) {
    return { success: false, error: 'Failed to upload image' }
  }
}

// Bulk upload products from CSV
export const bulkUploadProducts = async (file: File): Promise<ApiResponse<{ imported: number; errors: any[] }>> => {
  try {
    const text = await file.text()
    const lines = text.split('\n')
    const headers = lines[0].split(',').map(h => h.trim())
    
    const products = []
    const errors = []
    
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue
      
      try {
        const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''))
        const product: any = {}
        
        headers.forEach((header, index) => {
          const value = values[index]
          
          switch (header) {
            case 'name':
              product.name = value
              break
            case 'description':
              product.description = value
              break
            case 'price':
              product.price = parseFloat(value)
              break
            case 'stock':
              product.stock = parseInt(value)
              break
            case 'category_id':
              product.category_id = value
              break
            case 'image_urls':
              product.images = value ? value.split(',').map(url => url.trim()) : []
              break
            case 'additional_info':
              try {
                product.additional_info = value ? JSON.parse(value) : {}
              } catch {
                product.additional_info = {}
              }
              break
          }
        })
        
        if (product.name && product.price) {
          products.push(product)
        }
      } catch (error) {
        errors.push({ line: i + 1, error: 'Invalid data format' })
      }
    }
    
    if (products.length === 0) {
      return { success: false, error: 'No valid products found in CSV' }
    }
    
    const { data, error } = await supabase
      .from('products')
      .insert(products)
      .select()
    
    if (error) {
      return { success: false, error: error.message }
    }
    
    return { 
      success: true, 
      data: { 
        imported: data?.length || 0, 
        errors 
      } 
    }
  } catch (error) {
    return { success: false, error: 'Failed to process CSV file' }
  }
}

// Get related products
export const getRelatedProducts = async (productId: string, categoryId: string, limit: number = 4): Promise<ApiResponse<Product[]>> => {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category_id', categoryId)
      .neq('id', productId)
      .eq('in_stock', true)
      .limit(limit)

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data: data || [] }
  } catch (error) {
    return { success: false, error: 'Failed to fetch related products' }
  }
}