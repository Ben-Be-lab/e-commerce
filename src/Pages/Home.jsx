import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

const Home = () => {
  const featured = [
    { id: 1, name: "Premium Hoodie", price: 35000, category: "Apparel", img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600' },
    { id: 2, name: "Urban Runners", price: 65000, category: "Footwear", img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600' },
    { id: 3, name: "Tech Joggers", price: 28000, category: "Apparel", img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600' },
    { id: 4, name: "Satin Blouse", price: 18000, category: "Women Wear", img: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600' },
  ];

  return (
    <div className="bg-white">
      
      {/* 1. TYPOGRAPHY HERO - No Image, very professional */}
      <section className="py-32 px-4 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter italic">
            BEN'S<br />
            <span className="text-emerald-600">VAULT</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-end mt-12 gap-8">
            <p className="max-w-md text-xl font-bold uppercase leading-tight">
              Curated streetwear and essentials delivered across Kigali within 24 hours.
            </p>
            <Link to="/store" className="bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-orange-500 transition-all">
              Enter The Store
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SIMPLE CATEGORY SPLIT - Only 2 Images Total */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Men/Footwear Section */}
          <div className="group cursor-pointer">
            <div className="aspect-[16/9] bg-gray-100 rounded-[2rem] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1511499767390-90342f567217?w=1000" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="New Drops" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter">Footwear & Basics</h3>
            <Link to="/store" className="text-emerald-600 font-bold uppercase text-xs tracking-widest mt-2 block">Shop Collection →</Link>
          </div>

          {/* Women/Apparel Section */}
          <div className="group cursor-pointer">
            <div className="aspect-[16/9] bg-gray-100 rounded-[2rem] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=1000" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Women Wear" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter">Women's Selection</h3>
            <Link to="/store" className="text-emerald-600 font-bold uppercase text-xs tracking-widest mt-2 block">Shop Collection →</Link>
          </div>
        </div>
      </section>

      {/* 3. CLEAN PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-4 py-24 bg-gray-50 rounded-[3rem] mb-24">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl font-black text-black uppercase tracking-tighter">New Arrivals</h2>
          <div className="h-1 w-20 bg-emerald-600 mt-2"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map(p => (
            <div key={p.id} className="bg-white p-4 rounded-[2rem] shadow-sm">
               <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* 4. TEXT-BASED TRUST SECTION - Zero Photos */}
      <section className="bg-black py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h4 className="text-emerald-500 font-black text-3xl uppercase italic tracking-tighter">Fast Delivery</h4>
                    <p className="text-gray-400 mt-2 text-sm">Under 24H in Kigali City.</p>
                </div>
                <div>
                    <h4 className="text-orange-500 font-black text-3xl uppercase italic tracking-tighter">Best Quality</h4>
                    <p className="text-gray-400 mt-2 text-sm">Hand-picked premium fabrics.</p>
                </div>
                <div>
                    <h4 className="text-white font-black text-3xl uppercase italic tracking-tighter">Easy Returns</h4>
                    <p className="text-gray-400 mt-2 text-sm">Not happy? We swap it instantly.</p>
                </div>
            </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;