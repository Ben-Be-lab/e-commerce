const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-black italic tracking-tighter">BEN'S<span className="text-emerald-500">STORE</span></h2>
          <p className="text-gray-400 text-sm mt-2">Premium Apparel & Footwear</p>
        </div>
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-orange-500 transition">Instagram</a>
          <a href="#" className="hover:text-orange-500 transition">Twitter</a>
          <a href="#" className="hover:text-orange-500 transition">Privacy</a>
        </div>
        <p className="text-gray-500 text-xs">© 2026 BEN'S STORE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};
export default Footer;