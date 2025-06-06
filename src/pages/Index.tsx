
import React from 'react';
import { getMainCategories, products } from '@/data/mockData';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const mainCategories = getMainCategories();
  const featuredProducts = products.slice(0, 4); // Get first 4 products

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-lg overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Premium Auto Accessories
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Customize and upgrade your vehicle with our high-quality products
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/category/seat-cover">
                  <Button className="bg-white text-primary hover:bg-opacity-90 transition-colors">
                    Shop Now
                  </Button>
                </Link>
                <Button className="bg-transparent border border-white text-white hover:bg-white/10 transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Shop by Category</h2>
          <Link to="/" className="text-primary flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mainCategories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted py-12 px-6 rounded-lg">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link to="/" className="text-primary flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {featuredProducts.map(product => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-5" />
          <CarouselNext className="-right-4 md:-right-5" />
        </Carousel>
      </section>

      {/* Why Choose Us */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Products</h3>
            <p className="text-muted-foreground">We source only the highest quality automotive accessories for your vehicle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Support</h3>
            <p className="text-muted-foreground">Our knowledgeable team is always ready to help with your questions and concerns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">We ensure quick processing and shipping of your orders across the country.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Customers Love Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4">"These seat covers are absolutely perfect! They fit my car like a glove and the quality is outstanding."</p>
            <p className="font-medium">— Alex Johnson</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4">"The audio system I purchased transformed my driving experience. The sound quality is incredible!"</p>
            <p className="font-medium">— Sarah Miller</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4">"Fast shipping and excellent customer service. The 3D mats fit perfectly and are so easy to clean."</p>
            <p className="font-medium">— Michael Davis</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Vehicle?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Browse our extensive collection of premium automotive accessories and transform your driving experience today.</p>
        <Button className="bg-white text-primary hover:bg-white/90">
          Shop Now
        </Button>
      </section>
    </div>
  );
};

export default Index;
