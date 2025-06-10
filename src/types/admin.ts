
export interface AdminProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: string;
  images: string[];
  additional_info?: any;
}

export interface AdminCategory {
  id: string;
  name: string;
  description?: string;
  parent_id?: string;
}
