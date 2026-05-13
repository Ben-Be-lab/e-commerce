import { useMemo, useState } from 'react';
import { ShoppingBagIcon, FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Store = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allProducts = useMemo(() => {
    const productData = [
      { id: 1, category: 'Shoes', name: 'Nike Air Max', price: 120000, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600' },
      { id: 2, category: 'Shoes', name: 'Desert Boots', price: 45000, img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600' },
      { id: 3, category: 'Shoes', name: 'Classic Vans', price: 35000, img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600' },
      { id: 4, category: 'Shoes', name: 'All-Star High', price: 28000, img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600' },
      { id: 5, category: 'Hoodies', name: 'Oversized Sand', price: 25000, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600' },
      { id: 6, category: 'Hoodies', name: 'Black Tech-Fleece', price: 32000, img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600' },
      { id: 7, category: 'Hoodies', name: 'Emerald Pullover', price: 25000, img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600' },
      { id: 8, category: 'Jeans', name: 'Straight Blue Denim', price: 18000, img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600' },
      { id: 9, category: 'Jeans', name: 'Black Slim Fit', price: 20000, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600' },
      { id: 10, category: 'Women Wear', name: 'Satin Blouse', price: 15000, img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600' },
      { id: 11, category: 'Women Wear', name: 'Summer Handbag', price: 40000, img: 'https://images.unsplash.com/photo-1584917033904-4911df440ed9?w=600' },
      { id: 12, category: 'Women Wear', name: 'Minimalist Watch', price: 85000, img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600' },
    ];
    
    return Array.from({ length: 48 }).map((_, index) => {
      const original = productData[index % productData.length];
      const priceVariation = ((index * 1234) % 5000) - 2500;
      return {
        ...original,
        id: index + 1,
        name: `${original.name} ${index > 11 ? 'Special Edition' : ''}`,
        price: original.price + priceVariation
      };
    });
  }, []);

  // --- FILTER & SEARCH LOGIC ---
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-RW', {
      style: 'currency',
      currency: 'RWF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-black uppercase tracking-tighter italic">The Collection</h1>
              <p className="text-emerald-500 mt-2 uppercase tracking-[0.3em] text-[10px] font-black">
                {filteredProducts.length} Items Found
              </p>
            </div>

            {/* SEARCH BAR */}
            <div className="relative w-full md:w-96">
              <input 
                type="text"
                placeholder="Search the vault..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-emerald-500 transition-all placeholder:text-gray-500 text-white"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-16 overflow-x-auto no-scrollbar pb-4">
          {['All', 'Shoes', 'Hoodies', 'Jeans', 'Women Wear'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all 
                ${activeCategory === cat 
                  ? 'bg-emerald-600 text-white shadow-xl' 
                  : 'bg-gray-50 text-gray-400 hover:text-black border border-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-[#F9F9F9] rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                     <button className="bg-white text-black px-6 py-3 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-emerald-500 hover:text-white transition-colors">
                       Quick Add +
                     </button>
                  </div>
                </div>
                
                <div className="mt-6 px-2">
                  <p className="text-[9px] font-black text-emerald-600 uppercase tracking-[0.2em]">{product.category}</p>
                  <h3 className="font-black text-black text-base uppercase tracking-tighter mt-1">{product.name}</h3>
                  <p className="font-bold text-gray-900 mt-1 text-sm">{formatPrice(product.price)}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-32 text-center">
            <h2 className="text-2xl font-black uppercase">No items found</h2>
            <p className="text-gray-500 mt-2">Try searching for something else or clearing filters.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-6 text-emerald-600 font-bold uppercase text-xs border-b border-emerald-600 pb-1"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;