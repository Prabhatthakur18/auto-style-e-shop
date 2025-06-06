
import { Category, Product, Review } from "../types";

// Categories
export const categories: Category[] = [
  // Main Categories
  { id: "seat-cover", name: "Seat Cover", description: "Premium seat covers for all vehicles", image: "https://images.unsplash.com/photo-1617111490936-07b47eafdcd4?q=80&w=1976&auto=format&fit=crop" },
  { id: "accessories", name: "Accessories", description: "Enhance your driving experience", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" },
  { id: "mat", name: "Mat", description: "High-quality mats for your vehicle", image: "https://images.unsplash.com/photo-1618333258404-f509733839c4?q=80&w=1780&auto=format&fit=crop" },
  { id: "life-utility", name: "Life & Utility", description: "Make life easier on the road", image: "https://images.unsplash.com/photo-1489686995744-f47e995ffe61?q=80&w=2071&auto=format&fit=crop" },
  { id: "audio-security", name: "Audio & Security", description: "Premium sound and safety solutions", image: "https://images.unsplash.com/photo-1558537348-c0f8e733989d?q=80&w=1978&auto=format&fit=crop" },
  { id: "care-fragrance", name: "Care & Fragrance", description: "Keep your car fresh and clean", image: "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?q=80&w=2070&auto=format&fit=crop" },
  
  // Subcategories for Seat Cover
  { id: "4-wheeler-seat-cover", name: "4 Wheeler", parentId: "seat-cover", image: "https://images.unsplash.com/photo-1605152322256-ff7c17bedd5b?q=80&w=2070&auto=format&fit=crop" },
  { id: "2-wheeler-seat-cover", name: "2 Wheeler", parentId: "seat-cover", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop" },
  
  // Subcategories for Mat
  { id: "2d-mat", name: "2D Mat", parentId: "mat", image: "https://images.unsplash.com/photo-1597007466934-2cf33ac13db9?q=80&w=1974&auto=format&fit=crop" },
  { id: "3d-mat", name: "3D Mat", parentId: "mat", image: "https://images.unsplash.com/photo-1606028638131-29913d642c04?q=80&w=1972&auto=format&fit=crop" },
  { id: "7d-mat", name: "7D Mat", parentId: "mat", image: "https://images.unsplash.com/photo-1603811478698-7e15b7d724b9?q=80&w=2070&auto=format&fit=crop" },
  
  // Subcategories for Audio & Security
  { id: "android", name: "Android", parentId: "audio-security", image: "https://images.unsplash.com/photo-1662947995687-d2cbe985cd50?q=80&w=2070&auto=format&fit=crop" },
  { id: "speakers", name: "Speakers", parentId: "audio-security", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2070&auto=format&fit=crop" },
  { id: "amplifiers", name: "Amplifiers", parentId: "audio-security", image: "https://images.unsplash.com/photo-1558662413-6cee6cf92bc8?q=80&w=2070&auto=format&fit=crop" },
  
  // Subcategories for Speakers
  { id: "coaxial", name: "Coaxial", parentId: "speakers", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format&fit=crop" },
  { id: "component", name: "Component", parentId: "speakers", image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1974&auto=format&fit=crop" },
  { id: "enclosure", name: "Enclosure", parentId: "speakers", image: "https://images.unsplash.com/photo-1581092446327-9b52bd1abed5?q=80&w=2070&auto=format&fit=crop" },
  { id: "woofer", name: "Woofer", parentId: "speakers", image: "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?q=80&w=2069&auto=format&fit=crop" },
  { id: "sub-woofer", name: "Sub Woofer", parentId: "speakers", image: "https://images.unsplash.com/photo-1590658268037-7e63493dc641?q=80&w=1939&auto=format&fit=crop" },
  { id: "mid-range", name: "Mid Range", parentId: "speakers", image: "https://images.unsplash.com/photo-1520170350707-b2da59970118?q=80&w=2065&auto=format&fit=crop" },
];

// Reviews
const reviews: { [key: string]: Review[] } = {
  "1": [
    {
      id: "r1",
      userName: "John D.",
      date: "May 15, 2023",
      rating: 5,
      comment: "These leather seat covers are amazing! Perfect fit and excellent quality."
    },
    {
      id: "r2",
      userName: "Sarah M.",
      date: "April 3, 2023",
      rating: 4,
      comment: "Great quality for the price. Installation was a bit tricky but worth it."
    }
  ],
  "2": [
    {
      id: "r3",
      userName: "Michael T.",
      date: "June 22, 2023",
      rating: 5,
      comment: "The fabric is breathable and very comfortable. Highly recommend!"
    },
    {
      id: "r4",
      userName: "Lisa K.",
      date: "May 5, 2023",
      rating: 4,
      comment: "Easy to install and looks great in my car. Good value."
    }
  ],
  "3": [
    {
      id: "r5",
      userName: "David R.",
      date: "July 12, 2023",
      rating: 5,
      comment: "Perfect fit for my SUV. These 3D mats catch all the dirt and are easy to clean."
    }
  ],
  "4": [
    {
      id: "r6",
      userName: "Emma P.",
      date: "August 3, 2023",
      rating: 4,
      comment: "Sturdy phone holder with good adjustability. Works great with my phone."
    }
  ],
  "5": [
    {
      id: "r7",
      userName: "Robert J.",
      date: "September 19, 2023",
      rating: 5,
      comment: "The sound quality is exceptional. Easy to install and makes a huge difference."
    }
  ],
  "6": [
    {
      id: "r8",
      userName: "Jessica L.",
      date: "October 8, 2023",
      rating: 4,
      comment: "Long-lasting fragrance that isn't overpowering. Perfect for my car."
    }
  ]
};

// Products
export const products: Product[] = [
  {
    id: "1",
    name: "Premium Car Leather Seat Cover",
    price: 199.99,
    description: "Luxurious leather seat cover for maximum comfort and style. Made with premium quality leather that is durable and easy to clean. These covers provide excellent protection for your original seats while adding a touch of elegance to your vehicle's interior.",
    images: [
      "https://images.unsplash.com/photo-1605152322256-ff7c17bedd5b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583248483203-555f3d850303?q=80&w=2067&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1974&auto=format&fit=crop"
    ],
    categoryId: "4-wheeler-seat-cover",
    additionalInfo: "Compatible with most sedan models. Easy installation. Made from genuine leather with reinforced stitching for durability.",
    inStock: true,
    rating: 4.8,
    reviews: reviews["1"]
  },
  {
    id: "2",
    name: "Classic Fabric Seat Cover",
    price: 89.99,
    description: "Breathable fabric seat cover perfect for daily use. These covers are designed to provide maximum comfort while protecting your original seats. The breathable material ensures comfort even on long journeys and hot days.",
    images: [
      "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552252220-67ac98a8f7d8?q=80&w=2070&auto=format&fit=crop"
    ],
    categoryId: "4-wheeler-seat-cover",
    additionalInfo: "Machine washable. UV resistant. Fits most compact and mid-size vehicles. Available in multiple colors.",
    inStock: true,
    rating: 4.5,
    reviews: reviews["2"]
  },
  {
    id: "9",
    name: "Motorcycle Seat Cover - Sports",
    price: 49.99,
    description: "High-quality motorcycle seat cover designed for sports bikes. Waterproof and UV resistant material ensures longevity. Easy to install with secure straps.",
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2070&auto=format&fit=crop"
    ],
    categoryId: "2-wheeler-seat-cover",
    additionalInfo: "Waterproof. UV resistant. Anti-slip bottom. Fits most sports motorcycles.",
    inStock: true,
    rating: 4.6
  },
  {
    id: "10",
    name: "Scooter Seat Cover - Universal",
    price: 29.99,
    description: "Universal scooter seat cover with superior grip and comfort. Made with breathable material and anti-slip design for optimal riding experience.",
    images: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop"
    ],
    categoryId: "2-wheeler-seat-cover",
    additionalInfo: "Universal fit. Breathable material. Anti-slip design. Easy installation.",
    inStock: true,
    rating: 4.3
  },
  {
    id: "3",
    name: "3D Premium Car Mat",
    price: 149.99,
    description: "Custom-fit 3D car mat with superior protection. These mats are designed with raised edges to contain spills and debris, keeping your vehicle's interior clean. The precise fit ensures complete floor coverage and protection.",
    images: [
      "https://images.unsplash.com/photo-1606028638131-29913d642c04?q=80&w=1972&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597007466934-2cf33ac13db9?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603811478698-7e15b7d724b9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618333258404-f509733839c4?q=80&w=1780&auto=format&fit=crop"
    ],
    categoryId: "3d-mat",
    additionalInfo: "Waterproof. Anti-slip bottom. Heavy-duty material for maximum durability. Easy to clean with water and mild soap.",
    inStock: true,
    rating: 4.9,
    reviews: reviews["3"]
  },
  {
    id: "4",
    name: "Car Phone Holder",
    price: 24.99,
    description: "Adjustable car phone holder compatible with all smartphones. This holder features a strong suction cup base and adjustable arm for optimal viewing angles. Keep your phone secure and accessible while driving.",
    images: [
      "https://images.unsplash.com/photo-1615834307573-dca4b049933f?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516527413221-20ad5dc7f640?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566939928908-0f4dbcd4e95f?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521657718754-6a0acce4ff5e?q=80&w=2069&auto=format&fit=crop"
    ],
    categoryId: "accessories",
    additionalInfo: "360-degree rotation. Strong suction cup. Compatible with phones 4-7 inches wide. One-touch locking mechanism.",
    inStock: true,
    rating: 4.3,
    reviews: reviews["4"]
  },
  {
    id: "5",
    name: "Coaxial Car Speaker",
    price: 129.99,
    description: "High-quality coaxial speakers for superior sound. These speakers deliver crystal clear highs and deep, rich bass for an immersive audio experience. The premium components ensure excellent sound reproduction across all frequencies.",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558662413-6cee6cf92bc8?q=80&w=2070&auto=format&fit=crop"
    ],
    categoryId: "coaxial",
    additionalInfo: "300W peak power. 4-ohm impedance. 6.5-inch diameter. Includes mounting hardware and wiring harness.",
    inStock: true,
    rating: 4.7,
    reviews: reviews["5"]
  },
  {
    id: "6",
    name: "Car Perfume Diffuser",
    price: 19.99,
    description: "Long-lasting car perfume with natural fragrances. This elegant diffuser releases a subtle, pleasant aroma that eliminates odors and creates a refreshing environment in your vehicle. The compact design fits perfectly in your car's air vent.",
    images: [
      "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532635042-a6f6ad4745f9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541232158370-f1952965fa13?q=80&w=1955&auto=format&fit=crop"
    ],
    categoryId: "care-fragrance",
    additionalInfo: "Multiple scent options available. Each diffuser lasts up to 30 days. Refills available separately.",
    inStock: true,
    rating: 4.4,
    reviews: reviews["6"]
  },
  {
    id: "7",
    name: "7D Luxury Car Mat",
    price: 199.99,
    description: "Premium 7D car mats with complete coverage and luxury finish. These mats provide wall-to-wall coverage with raised edges to contain spills and debris. The luxury leather finish adds a touch of elegance to your vehicle's interior.",
    images: [
      "https://images.unsplash.com/photo-1603811478698-7e15b7d724b9?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597007466934-2cf33ac13db9?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606028638131-29913d642c04?q=80&w=1972&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618333258404-f509733839c4?q=80&w=1780&auto=format&fit=crop"
    ],
    categoryId: "7d-mat",
    additionalInfo: "Waterproof. Anti-slip bottom. Custom fit for specific vehicle models. Luxury leather finish.",
    inStock: true,
    rating: 4.9
  },
  {
    id: "8",
    name: "Android Car Stereo",
    price: 349.99,
    description: "Smart Android car stereo with touch screen and navigation. This modern stereo system features a high-resolution touch screen, GPS navigation, Bluetooth connectivity, and support for both Android Auto and Apple CarPlay.",
    images: [
      "https://images.unsplash.com/photo-1662947995687-d2cbe985cd50?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581607799483-9fbe98036999?q=80&w=2070&auto=format&fit=crop"
    ],
    categoryId: "android",
    additionalInfo: "7-inch HD touchscreen. GPS navigation. Bluetooth connectivity. USB and AUX inputs. Compatible with most vehicles.",
    inStock: true,
    rating: 4.6
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

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProduct(productId);
  if (!product) return [];
  
  // Get products in the same category, excluding the current product
  let related = products
    .filter(p => p.categoryId === product.categoryId && p.id !== productId);
  
  // If we don't have enough related products in the same category, add some from other categories
  if (related.length < limit) {
    const otherProducts = products
      .filter(p => p.categoryId !== product.categoryId && p.id !== productId)
      .slice(0, limit - related.length);
    
    related = [...related, ...otherProducts];
  }
  
  return related.slice(0, limit);
};
