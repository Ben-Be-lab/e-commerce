import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyIcon, BriefcaseIcon, LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const AdminAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    navigate('/admin'); // Direct to Dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 p-6">
      <div className="max-w-md w-full p-10 rounded-[3rem] border-2 border-emerald-600 shadow-[15px_15px_0px_0px_rgba(16,185,129,1)] bg-white">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-3 bg-emerald-600 rounded-2xl text-white shadow-lg shadow-emerald-200">
            <BriefcaseIcon className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter leading-none text-black">Staff Portal</h2>
            <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest mt-1">Authorized Access Only</p>
          </div>
        </div>

        <form onSubmit={handleAdminSubmit} className="space-y-5">
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-emerald-600 ml-1">Admin Full Name</label>
              <input required type="text" placeholder="Staff Name" className="w-full p-4 bg-emerald-50 border-2 border-transparent rounded-2xl font-bold focus:border-emerald-600 outline-none transition-all" />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-emerald-600 ml-1">Work Email</label>
            <div className="relative">
              <EnvelopeIcon className="h-5 w-5 absolute left-4 top-4 text-emerald-200" />
              <input required type="email" placeholder="staff@vault.com" className="w-full p-4 pl-12 bg-emerald-50 border-2 border-transparent rounded-2xl font-bold focus:border-emerald-600 outline-none transition-all" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-emerald-600 ml-1">Password</label>
            <div className="relative">
              <LockClosedIcon className="h-5 w-5 absolute left-4 top-4 text-emerald-200" />
              <input required type="password" placeholder="••••••••" className="w-full p-4 pl-12 bg-emerald-50 border-2 border-transparent rounded-2xl font-bold focus:border-emerald-600 outline-none transition-all" />
            </div>
          </div>

          <button type="submit" className="w-full py-5 rounded-2xl font-black text-white bg-emerald-600 hover:bg-black transition-all uppercase tracking-widest mt-4 shadow-md">
            {isLogin ? 'Enter Dashboard' : 'Create Admin Profile'}
          </button>
        </form>

        <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-8 text-[10px] font-black uppercase text-emerald-300 hover:text-emerald-600 transition-colors">
          {isLogin ? "Register new administrator" : "Return to staff login"}
        </button>
      </div>
    </div>
  );
};

export default AdminAuth;