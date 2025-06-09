import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { getMainCategories } from '@/data/categories';
import NavWishlist from './NavWishlist';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const mainCategories = getMainCategories();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            Autoform
          </Link>
          
          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>

          <div className="flex items-center gap-4">
            <Link 
              to="/contact" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <NavWishlist />
          </div>
        </div>

        {/* Category navigation */}
        <nav className="py-2 border-t">
          <div className="flex items-center space-x-8 overflow-x-auto">
            {mainCategories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="text-sm text-muted-foreground hover:text-primary hover:bg-accent px-3 py-2 rounded-md transition-colors whitespace-nowrap"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
