
export interface AdminProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: string;
  images: string[];
}

export interface AdminCategory {
  id: string;
  name: string;
  description?: string;
  parent_id?: string;
}
