import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// Using the specific paths for v2 to avoid red lines in VS Code
import { ShoppingBagIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const ProductDetails = () => {
  // 1. Grabbing the ID from the URL (fixes dynamic routing warnings)
  const { id } = useParams();
  
  // 2. Local state for size selection
  const [selectedSize, setSelectedSize] = useState('M');

  // Mock data specifically for clothes and shoes
  const product = {
    name: "Urban Stealth Runners v2",
    price: 140,
    category: "Footwear",
    description: "Built for movement. These sneakers feature a high-traction outsole and a lightweight mesh upper, making them perfect for both street style and performance.",
    sizes: ['7', '8', '9', '10', '11', '12'],
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600"]
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        
        {/* Navigation / Breadcrumbs */}
        <Link to="/store" className="flex items-center text-sm font-bold text-gray-500 hover:text-black mb-8 transition group">
          <ChevronLeftIcon className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          BACK TO COLLECTIONS
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden border-2 border-black/5 shadow-sm">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-50 rounded-xl border border-gray-100 cursor-pointer hover:border-black transition"></div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col">
            <div className="mb-8 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-orange-500 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter">
                  Limited Drop
                </span>
                <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">{product.category}</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-black leading-none uppercase italic">
                {product.name}
              </h1>
              <p className="text-3xl font-black text-emerald-600 mt-4">${product.price}.00</p>
            </div>

            <p className="text-gray-600 font-medium leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Selection Area */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-black text-black uppercase tracking-widest">Select Your Size</h3>
                <button className="text-xs font-bold text-orange-500 hover:underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-4 font-bold rounded-xl border-2 transition-all duration-200 ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-100 bg-white text-gray-500 hover:border-black hover:text-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Sticky/Fixed Bottom on Mobile CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button className="flex-1 bg-emerald-600 text-white h-16 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-emerald-100/50">
                <ShoppingBagIcon className="h-6 w-6" />
                ADD TO CART
              </button>
              <button className="sm:w-16 h-16 rounded-2xl border-2 border-black flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all text-black group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:fill-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;