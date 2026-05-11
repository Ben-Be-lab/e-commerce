import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'; 

const Navbar = ({ cartCount = 0 }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-black/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - High Contrast Black and Emerald */}
          <div className="flex items-center gap-2">
            <Link to="/" className="text-black font-extrabold text-2xl tracking-tighter">
              BEN'S<span className="text-emerald-600">STORE</span>
            </Link>
          </div>

          {/* Desktop Links - Black with Orange hover states */}
          <div className="hidden md:flex items-center space-x-8 text-black font-semibold">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/store" className="hover:text-orange-500 transition-colors">Store</Link>
          </div>

          <div className="flex items-center gap-6">
            {/* Cart - Black icon with Orange count badge */}
           
            
            {/* Login Button - Cleaned up and properly placed */}
            <Link 
              to="/auth" 
              className="font-black text-xs uppercase tracking-widest text-black border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all"
            >
              Login
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;