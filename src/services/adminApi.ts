// Updated admin API to use Supabase instead of PHP endpoints
import { 
  getCategories as getSupabaseCategories,
  createCategory as createSupabaseCategory,
  updateCategory as updateSupabaseCategory,
  deleteCategory as deleteSupabaseCategory,
  getProducts as getSupabaseProducts,
  createProduct as createSupabaseProduct,
  updateProduct as updateSupabaseProduct,
  deleteProduct as deleteSupabaseProduct,
  adminLogin as supabaseAdminLogin,
  uploadImage as supabaseUploadImage,
  bulkUploadProducts as supabaseBulkUpload
} from './supabaseApi'

// Re-export all functions with the same interface
export const adminLogin = supabaseAdminLogin
export const getProducts = getSupabaseProducts
export const createProduct = createSupabaseProduct
export const updateProduct = updateSupabaseProduct
export const deleteProduct = deleteSupabaseProduct
export const getCategories = getSupabaseCategories
export const createCategory = createSupabaseCategory
export const updateCategory = updateSupabaseCategory
export const deleteCategory = deleteSupabaseCategory
export const uploadImage = supabaseUploadImage
export const bulkUploadProducts = supabaseBulkUpload