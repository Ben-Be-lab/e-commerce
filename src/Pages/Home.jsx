import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import axios from 'axios';

const Home = () => {
  const [backendMessage, setBackendMessage] = useState("Connected to backend");

  useEffect(() => {
    axios.get('http://localhost:5000/api/test')
      .then(response => {
        setBackendMessage(response.data.message);
      })
      .catch(error => {
        setBackendMessage("Connection failed ❌");
        console.error("Backend Error:", error);
      });
  }, []);

const footwearImages = [
    '/Images/tmberland.avif',   
    '/Images/Sports.avif',      
    '/Images/air.avif'          
  ];

  const womenImages = [
    '/Images/womentmber.avif',  
    '/Images/womentimber.avif',  
    '/Images/slide.avif'         
  ];

  const featured = [
    { id: 1, name: "AIR JORDAN 5 RETRO OG", price: 35000, category: "Apparel", img: '/Images/air.avif' },
    { id: 2, name: "FOOTBALL SHOES", price: 65000, category: "Footwear", img: '/Images/Sports.avif' }, 
    { id: 3, name: "SLIDE", price: 28000, category: "Apparel", img: '/Images/slide.avif' },
    { id: 4, name: "AIR JORDAN 11", price: 18000, category: "Women Wear", img: '/Images/womentimber.avif' }, 
  ];
  const footwearRef = useRef(null);
  const womenRef = useRef(null);
  const [footwearIndex, setFootwearIndex] = useState(0);
  const [womenIndex, setWomenIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFootwearIndex((prev) => (prev + 1) % footwearImages.length);
      setWomenIndex((prev) => (prev + 1) % womenImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [footwearImages.length, womenImages.length]);

  useEffect(() => {
    if (footwearRef.current) {
      footwearRef.current.scrollTo({
        left: footwearIndex * footwearRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [footwearIndex]);

  useEffect(() => {
    if (womenRef.current) {
      womenRef.current.scrollTo({
        left: womenIndex * womenRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [womenIndex]);

  return (
    <div className="bg-white">
      <div className="bg-blue-400 text-white text-[10px] font-black uppercase tracking-[0.3em] py-2 text-center">
        System Status: {backendMessage}
      </div>

      <section className="py-32 px-4 bg-gray-50 rounded-[3rem] mt-12">
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

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* FOOTWEAR SLIDER */}
          <div className="group">
            {/* Added native aspect-video and helper background color to hold structural space */}
            <div className="relative overflow-hidden rounded-[2rem] aspect-[16/9] bg-gray-100">
              <div
                ref={footwearRef}
                className="flex overflow-x-hidden snap-x snap-mandatory h-full w-full"
              >
                {footwearImages.map((src, i) => (
                  <div key={i} className="min-w-full h-full snap-center">
                    <img 
                      src={src} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      alt="Footwear"
                      loading={i === 0 ? "eager" : "lazy"} // Eager load the first viewable image, lazy load the rest
                      fetchpriority={i === 0 ? "high" : "low"} // Tell browser engine to fetch the initial frame first
                    />
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter mt-6">Footwear & Basics</h3>
            <Link to="/store" className="text-emerald-600 font-bold uppercase text-xs tracking-widest mt-2 block">Shop Collection →</Link>
          </div>

          {/* WOMEN'S SLIDER */}
          <div className="group">
            {/* Added native aspect-video and helper background color to hold structural space */}
            <div className="relative overflow-hidden rounded-[2rem] aspect-[16/9] bg-gray-100">
              <div
                ref={womenRef}
                className="flex overflow-x-hidden snap-x snap-mandatory h-full w-full"
              >
                {womenImages.map((src, i) => (
                  <div key={i} className="min-w-full h-full snap-center">
                    <img 
                      src={src} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      alt="Women" 
                      loading={i === 0 ? "eager" : "lazy"} // Eager load the first viewable image, lazy load the rest
                      fetchpriority={i === 0 ? "high" : "low"} // Tell browser engine to fetch the initial frame first
                    />
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter mt-6">Women's Selection</h3>
            <Link to="/store" className="text-emerald-600 font-bold uppercase text-xs tracking-widest mt-2 block">Shop Collection →</Link>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-24 bg-gray-50 rounded-[3rem] mb-24">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl font-black text-black uppercase tracking-tighter">New Arrivals</h2>
          <div className="h-1 w-20 bg-emerald-600 mt-2"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map(p => (
            <div key={p.id} className="bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow">
              {/* Product Card manages individual items, but lazy loading hints can be inherited */}
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

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