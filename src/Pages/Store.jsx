import { useMemo, useState } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const Store = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // This function duplicates the curated items to reach 48 products 
  // but changes their colors/names slightly to keep the variety high.
  const allProducts = useMemo(() => {
    const productData = [
      // SHOES
      { id: 1, category: 'Shoes', name: 'Nike Air Max', price: 120000, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600' },
      { id: 2, category: 'Shoes', name: 'Desert Boots', price: 45000, img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600' },
      { id: 3, category: 'Shoes', name: 'Classic Vans', price: 35000, img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600' },
      { id: 4, category: 'Shoes', name: 'All-Star High', price: 28000, img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600' },
      
      // HOODIES
      { id: 5, category: 'Hoodies', name: 'Oversized Sand', price: 25000, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600' },
      { id: 6, category: 'Hoodies', name: 'Black Tech-Fleece', price: 32000, img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600' },
      { id: 7, category: 'Hoodies', name: 'Emerald Pullover', price: 25000, img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600' },
      
      // JEANS
      { id: 8, category: 'Jeans', name: 'Straight Blue Denim', price: 18000, img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600' },
      { id: 9, category: 'Jeans', name: 'Black Slim Fit', price: 20000, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600' },
      
      // WOMEN WEAR
      { id: 10, category: 'Women Wear', name: 'Satin Blouse', price: 15000, img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600' },
      { id: 11, category: 'Women Wear', name: 'Summer Handbag', price: 40000, img: 'https://images.unsplash.com/photo-1584917033904-4911df440ed9?w=600' },
      { id: 12, category: 'Women Wear', name: 'Minimalist Watch', price: 85000, img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600' },
    ];
    
    return Array.from({ length: 48 }).map((_, index) => {
      const original = productData[index % productData.length];
      // Use deterministic price variation based on index instead of Math.random()
      const priceVariation = ((index * 1234) % 5000) - 2500;
      return {
        ...original,
        id: index + 1,
        name: `${original.name} v${Math.floor(index / productData.length) + 1}`,
        price: original.price + priceVariation
      };
    });
  }, []);

  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-RW', {
      style: 'currency',
      currency: 'RWF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-12 border-b border-gray-100 pb-8">
        {['All', 'Shoes', 'Hoodies', 'Jeans', 'Women Wear'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all 
              ${activeCategory === cat ? 'bg-black text-white shadow-xl' : 'bg-white text-gray-400 hover:text-black border border-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-[4/5] bg-[#F3F3F3] rounded-[2rem] overflow-hidden flex items-center justify-center">
              <img 
                src={product.img} 
                alt={product.name}
                className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <button className="absolute bottom-4 right-4 bg-white text-black p-4 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-emerald-600 hover:text-white">
                <ShoppingBagIcon className="h-5 w-5" />
              </button>
            </div>
            
            <div className="mt-4 px-2">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{product.category}</p>
              <h3 className="font-black text-black text-sm uppercase">{product.name}</h3>
              <p className="font-bold text-gray-900 mt-1">{formatPrice(product.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;