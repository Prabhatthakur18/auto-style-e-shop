
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AutoStyle</h3>
            <p className="text-gray-300">Premium auto accessories for your vehicle.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/category/seat-cover" className="text-gray-300 hover:text-white">Seat Covers</Link></li>
              <li><Link to="/category/mat" className="text-gray-300 hover:text-white">Car Mats</Link></li>
              <li><Link to="/category/audio-security" className="text-gray-300 hover:text-white">Audio & Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">FAQs</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Shipping</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Returns</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@autostyle.com</li>
              <li className="text-gray-300">Phone: (123) 456-7890</li>
              <li className="text-gray-300">Mon-Fri: 9AM - 5PM</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AutoStyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
