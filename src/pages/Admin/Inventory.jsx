import React, { useState } from 'react';
import { PlusIcon, PencilSquareIcon, TrashIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Inventory = () => {
  // Sample state for your shoes
  const [products, setProducts] = useState([
    { id: 1, name: 'Air Jordan 1 Retro', price: '120,000', stock: 5, category: 'Sneakers' },
    { id: 2, name: 'Nike Dunk Low', price: '95,000', stock: 0, category: 'Sneakers' },
    { id: 3, name: 'Yeezy Boost 350', price: '250,000', stock: 2, category: 'Limited' },
  ]);

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">Stock Inventory</h1>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Manage your Gisenyi & Kigali warehouse</p>
        </div>
        
        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-[6px_6px_0px_0px_rgba(16,185,129,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
          <PlusIcon className="h-4 w-4 stroke-[3px]" /> Add New Product
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="relative mb-6">
        <MagnifyingGlassIcon className="h-5 w-5 absolute left-4 top-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search sneakers by name..." 
          className="w-full p-4 pl-12 bg-gray-50 border-2 border-black rounded-2xl font-bold outline-none focus:bg-white transition-all"
        />
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto border-2 border-black rounded-[2rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-black">
              <th className="p-6 font-black uppercase text-[11px] tracking-widest">Product</th>
              <th className="p-6 font-black uppercase text-[11px] tracking-widest">Category</th>
              <th className="p-6 font-black uppercase text-[11px] tracking-widest">Price (RWF)</th>
              <th className="p-6 font-black uppercase text-[11px] tracking-widest">Stock</th>
              <th className="p-6 font-black uppercase text-[11px] tracking-widest">Status</th>
              <th className="p-6 font-black uppercase text-[11px] tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y border-black">
            {products.map((item) => (
              <tr key={item.id} className="hover:bg-emerald-50/30 transition-colors">
                <td className="p-6 font-bold">{item.name}</td>
                <td className="p-6 text-xs font-black text-gray-400 uppercase">{item.category}</td>
                <td className="p-6 font-black">{item.price}</td>
                <td className="p-6 font-bold">{item.stock} Pairs</td>
                <td className="p-6">
                  {item.stock > 0 ? (
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black uppercase">In Stock</span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-[10px] font-black uppercase">Out of Stock</span>
                  )}
                </td>
                <td className="p-6 text-right space-x-2">
                  <button className="p-2 hover:bg-black hover:text-white rounded-lg transition-all">
                    <PencilSquareIcon className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-red-500 hover:text-white rounded-lg transition-all text-red-500">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;