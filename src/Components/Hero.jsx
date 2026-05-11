import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-black leading-tight">
              UPGRADE YOUR <br />
              <span className="text-emerald-600">LIFESTYLE</span> 
              <span className="text-orange-500">.</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg font-medium">
              Discover a curated collection of premium products designed for the modern developer and designer. Quality meets aesthetics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              {/* Primary Action - Orange */}
              <Link 
                to="/store" 
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-all duration-300 shadow-lg shadow-orange-200"
              >
                Shop Now
              </Link>
              
              {/* Secondary Action - Black Outline */}
              <Link 
                to="/about" 
                className="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            
            {/* Social Proof / Stats */}
            <div className="pt-8 flex items-center justify-center md:justify-start gap-8 border-t border-gray-100">
              <div>
                <p className="text-2xl font-bold text-black">10k+</p>
                <p className="text-sm text-gray-500">Products</p>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div>
                <p className="text-2xl font-bold text-black">24/7</p>
                <p className="text-sm text-gray-500">Support</p>
              </div>
            </div>
          </div>

          {/* Visual Element / Placeholder for Product Image */}
          <div className="flex-1 relative">
            <div className="relative z-10 w-full h-[400px] bg-gray-100 rounded-3xl overflow-hidden border-4 border-black">
              {/* You can replace this div with an actual <img> tag later */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
                [ FEATURED PRODUCT IMAGE ]
              </div>
              
              {/* Decorative Emerald Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 bg-black text-white p-4 rounded-2xl shadow-xl transform -rotate-6 hidden lg:block">
              <p className="font-bold text-emerald-400 text-xl">NEW ARRIVAL</p>
              <p className="text-xs">Spring Collection 2026</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;