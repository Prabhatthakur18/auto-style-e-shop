
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import NavCart from './NavCart';
import { Button } from './ui/button';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from './ui/dropdown-menu';
import { categories, getMainCategories, getSubcategories } from '@/data/mockData';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const mainCategories = getMainCategories();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 border-b">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              AutoShop
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Button variant="ghost" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/register">Register</Link>
              </Button>
            </div>
            
            {/* Cart */}
            <NavCart />
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Main Navigation - Desktop */}
        <nav className="hidden md:flex items-center justify-between py-4">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-primary font-medium">
                Home
              </Link>
            </li>
            {mainCategories.map(category => (
              <li key={category.id} className="relative group">
                <Link 
                  to={`/category/${category.id}`} 
                  className="text-gray-700 hover:text-primary font-medium"
                >
                  {category.name}
                </Link>
                
                {/* Mega Menu for Categories with Subcategories */}
                {getSubcategories(category.id).length > 0 && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                    {getSubcategories(category.id).map(subCategory => (
                      <Link 
                        key={subCategory.id}
                        to={`/category/${subCategory.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subCategory.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
                Contact
              </Link>
            </li>
          </ul>
          
          {/* Special Offers */}
          <Link to="/offers" className="text-primary font-medium">
            Special Offers
          </Link>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {/* Search Bar - Mobile */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
            
            {/* Mobile Nav Links */}
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="block py-2 text-gray-700 hover:text-primary font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              {mainCategories.map(category => (
                <li key={category.id}>
                  <Link 
                    to={`/category/${category.id}`}
                    className="block py-2 text-gray-700 hover:text-primary font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/contact"
                  className="block py-2 text-gray-700 hover:text-primary font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/login"
                  className="block py-2 text-gray-700 hover:text-primary font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link 
                  to="/register"
                  className="block py-2 text-gray-700 hover:text-primary font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
