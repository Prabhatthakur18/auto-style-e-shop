
// Admin API service - connects to your MySQL database via PHP endpoints
const API_BASE_URL = 'https://your-hostinger-domain.com/api'; // Replace with your actual API URL

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: string;
  images: string[];
  additional_info?: any;
  created_at?: string;
  updated_at?: string;
}

interface Category {
  id: string;
  name: string;
  description?: string;
  parent_id?: string;
  image?: string;
  created_at?: string;
  updated_at?: string;
}

// Authentication
export const adminLogin = async (username: string, password: string): Promise<ApiResponse<{ token: string }>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/login.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'Login failed' };
  }
};

// Products
export const getProducts = async (): Promise<ApiResponse<Product[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products.php`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return { success: false, message: 'Failed to fetch products' };
  }
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<ApiResponse<Product>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
      body: JSON.stringify(product),
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating product:', error);
    return { success: false, message: 'Failed to create product' };
  }
};

export const updateProduct = async (id: string, product: Partial<Product>): Promise<ApiResponse<Product>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products.php?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
      body: JSON.stringify(product),
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating product:', error);
    return { success: false, message: 'Failed to update product' };
  }
};

export const deleteProduct = async (id: string): Promise<ApiResponse<null>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products.php?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error('Error deleting product:', error);
    return { success: false, message: 'Failed to delete product' };
  }
};

// Categories
export const getCategories = async (): Promise<ApiResponse<Category[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories.php`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return { success: false, message: 'Failed to fetch categories' };
  }
};

export const createCategory = async (category: Omit<Category, 'id'>): Promise<ApiResponse<Category>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
      body: JSON.stringify(category),
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating category:', error);
    return { success: false, message: 'Failed to create category' };
  }
};

// File upload
export const uploadImage = async (file: File): Promise<ApiResponse<{ url: string }>> => {
  try {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch(`${API_BASE_URL}/upload.php`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
      body: formData,
    });
    return await response.json();
  } catch (error) {
    console.error('Error uploading image:', error);
    return { success: false, message: 'Failed to upload image' };
  }
};

// Bulk upload
export const bulkUploadProducts = async (file: File): Promise<ApiResponse<{ imported: number; errors: any[] }>> => {
  try {
    const formData = new FormData();
    formData.append('csv_file', file);
    
    const response = await fetch(`${API_BASE_URL}/bulk-upload.php`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('admin_token')}`,
      },
      body: formData,
    });
    return await response.json();
  } catch (error) {
    console.error('Error bulk uploading products:', error);
    return { success: false, message: 'Failed to bulk upload products' };
  }
};
