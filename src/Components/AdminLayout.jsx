import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  ChartBarIcon, 
  CubeIcon, 
  ArrowLeftOnRectangleIcon, 
  UserCircleIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to highlight the active link
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: ChartBarIcon },
    { name: 'Inventory', path: '/admin/inventory', icon: CubeIcon },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-black">
      {/* SIDEBAR */}
      <aside className="w-72 bg-black text-white flex flex-col sticky top-0 h-screen p-6">
        <div className="mb-12 px-2">
          <h2 className="text-3xl font-black italic tracking-tighter uppercase">
            Ben's <span className="text-emerald-500">Vault</span>
          </h2>
          <p className="text-[9px] font-bold text-emerald-500/50 uppercase tracking-[0.3em]">Management Suite</p>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all ${
                isActive(item.path) 
                ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive(item.path) ? 'text-white' : 'text-gray-500'}`} />
              {item.name}
            </button>
          ))}
        </nav>

        {/* BOTTOM SECTION */}
        <div className="border-t border-white/10 pt-6 space-y-2">
          <button 
            onClick={() => navigate('/store')}
            className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest text-gray-500 hover:text-white transition-all"
          >
            <ShoppingBagIcon className="h-5 w-5" /> View Store
          </button>
          <button 
            onClick={() => navigate('/auth')}
            className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest text-red-500 hover:bg-red-500/10 transition-all"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header Bar */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Server Online: Kigali_HQ</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-tighter leading-none">Asifiwe Ben</p>
              <p className="text-[9px] font-bold text-emerald-600 uppercase">Super Admin</p>
            </div>
            <div className="h-10 w-10 bg-black rounded-xl flex items-center justify-center text-white font-black text-xs border-2 border-emerald-500 shadow-sm">
              AB
            </div>
          </div>
        </header>

        {/* SCROLLABLE PAGE CONTENT */}
        <section className="flex-1 overflow-y-auto p-10 bg-[#F9FAFB]">
          <Outlet /> 
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;