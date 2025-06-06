
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  categoryId: string;
  additionalInfo?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string;
  parentId?: string;
}
