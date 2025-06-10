import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          description: string | null
          parent_id: string | null
          image: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          parent_id?: string | null
          image?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          parent_id?: string | null
          image?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          stock: number
          category_id: string | null
          images: any
          additional_info: any
          in_stock: boolean
          rating: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          stock?: number
          category_id?: string | null
          images?: any
          additional_info?: any
          in_stock?: boolean
          rating?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          stock?: number
          category_id?: string | null
          images?: any
          additional_info?: any
          in_stock?: boolean
          rating?: number
          created_at?: string
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          product_id: string | null
          user_name: string
          rating: number
          comment: string | null
          created_at: string
        }
        Insert: {
          id?: string
          product_id?: string | null
          user_name: string
          rating: number
          comment?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          product_id?: string | null
          user_name?: string
          rating?: number
          comment?: string | null
          created_at?: string
        }
      }
      admin_users: {
        Row: {
          id: string
          username: string
          password_hash: string
          email: string | null
          created_at: string
        }
        Insert: {
          id?: string
          username: string
          password_hash: string
          email?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          username?: string
          password_hash?: string
          email?: string | null
          created_at?: string
        }
      }
    }
  }
}