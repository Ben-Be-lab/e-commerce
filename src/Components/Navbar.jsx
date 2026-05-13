import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-black/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="text-black font-extrabold text-2xl tracking-tighter uppercase">
              BEN'S<span className="text-emerald-600">VAULT</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-black font-semibold uppercase text-[11px] tracking-widest">
            <Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link>
            <Link to="/store" className="hover:text-emerald-500 transition-colors">Store</Link>
            <Link to="/about-us" className="hover:text-emerald-500 transition-colors">About</Link>
            <Link to="/contact-us" className="hover:text-emerald-500 transition-colors">Contact</Link>
          </div>

          {/* AUTH ACTIONS */}
          <div className="flex items-center gap-4">
            <Link
              to="/LOGIN"
              className="font-black text-[10px] uppercase tracking-widest text-gray-500 hover:text-black transition-all"
            >
              Login
            </Link>

            <Link
              to="/REGISTER"
              className="font-black text-[10px] uppercase tracking-widest bg-black text-white px-6 py-2.5 rounded-full hover:bg-emerald-600 transition-all shadow-md"
            >
              Register
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;