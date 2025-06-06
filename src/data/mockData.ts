
import { Category, Product } from "../types";

// Categories
export const categories: Category[] = [
  // Main Categories
  { id: "seat-cover", name: "Seat Cover", image: "placeholder.svg" },
  { id: "accessories", name: "Accessories", image: "placeholder.svg" },
  { id: "mat", name: "Mat", image: "placeholder.svg" },
  { id: "life-utility", name: "Life & Utility", image: "placeholder.svg" },
  { id: "audio-security", name: "Audio & Security", image: "placeholder.svg" },
  { id: "care-fragrance", name: "Care & Fragrance", image: "placeholder.svg" },
  
  // Subcategories for Seat Cover
  { id: "leather-seat-cover", name: "Leather Seat Cover", parentId: "seat-cover", image: "placeholder.svg" },
  { id: "fabric-seat-cover", name: "Fabric Seat Cover", parentId: "seat-cover", image: "placeholder.svg" },
  
  // Subcategories for Mat
  { id: "2d-mat", name: "2D Mat", parentId: "mat", image: "placeholder.svg" },
  { id: "3d-mat", name: "3D Mat", parentId: "mat", image: "placeholder.svg" },
  { id: "7d-mat", name: "7D Mat", parentId: "mat", image: "placeholder.svg" },
  
  // Subcategories for Audio & Security
  { id: "android", name: "Android", parentId: "audio-security", image: "placeholder.svg" },
  { id: "speakers", name: "Speakers", parentId: "audio-security", image: "placeholder.svg" },
  { id: "amplifiers", name: "Amplifiers", parentId: "audio-security", image: "placeholder.svg" },
  
  // Subcategories for Speakers
  { id: "coaxial", name: "Coaxial", parentId: "speakers", image: "placeholder.svg" },
  { id: "component", name: "Component", parentId: "speakers", image: "placeholder.svg" },
  { id: "enclosure", name: "Enclosure", parentId: "speakers", image: "placeholder.svg" },
  { id: "woofer", name: "Woofer", parentId: "speakers", image: "placeholder.svg" },
  { id: "sub-woofer", name: "Sub Woofer", parentId: "speakers", image: "placeholder.svg" },
  { id: "mid-range", name: "Mid Range", parentId: "speakers", image: "placeholder.svg" },
];

// Products
export const products: Product[] = [
  {
    id: "1",
    name: "Premium Leather Seat Cover",
    price: 199.99,
    description: "Luxurious leather seat cover for maximum comfort and style.",
    images: ["placeholder.svg", "placeholder.svg", "placeholder.svg", "placeholder.svg"],
    categoryId: "leather-seat-cover",
    additionalInfo: "Compatible with most sedan models. Easy installation."
  },
  {
    id: "2",
    name: "Classic Fabric Seat Cover",
    price: 89.99,
    description: "Breathable fabric seat cover perfect for daily use.",
    images: ["placeholder.svg", "placeholder.svg", "placeholder.svg", "placeholder.svg"],
    categoryId: "fabric-seat-cover",
    additionalInfo: "Machine washable. UV resistant."
  },
  {
    id: "3",
    name: "3D Premium Car Mat",
    price: 149.99,
    description: "Custom-fit 3D car mat with superior protection.",
    images: ["placeholder.svg", "placeholder.svg", "placeholder.svg", "placeholder.svg"],
    categoryId: "3d-mat",
    additionalInfo: "Waterproof. Anti-slip bottom."
  },
  {
    id: "4",
    name: "Car Phone Holder",
    price: 24.99,
    description: "Adjustable car phone holder compatible with all smartphones.",
    images: ["placeholder.svg", "placeholder.svg", "placeholder.svg", "placeholder.svg"],
    categoryId: "accessories",
    additionalInfo: "360-degree rotation. Strong suction cup."
  },
  {
    id: "5",
    name: "Coaxial Car Speaker",
    price: 129.99,
    description: "High-quality coaxial speakers for superior sound.",
    images: ["placeholder.svg", "placeholder.svg", "placeholder.svg", "placeholder.svg"],
    categoryId: "coaxial",
    additionalInfo: "300W peak power. 4-ohm impedance."
  },
  {
    id: "6",
    name: "Car Perfume Diffuser",
    price: 19.99,
    description: "Long-lasting car perfume with natural fragrances.",
    images: ["placeholder.svg", "placeholder.svg", "placeholder.svg", "placeholder.svg"],
    categoryId: "care-fragrance",
    additionalInfo: "Multiple scent options available."
  }
];

export const getProduct = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

export const getMainCategories = (): Category[] => {
  return categories.filter(category => !category.parentId);
};

export const getSubcategories = (parentId: string): Category[] => {
  return categories.filter(category => category.parentId === parentId);
};
