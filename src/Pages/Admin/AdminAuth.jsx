import { useState } from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const AdminAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    // In the future, this is where you verify staff credentials
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 p-6">
      <div className="max-w-md w-full p-8 rounded-[2.5rem] border-2 border-emerald-600 shadow-[12px_12px_0px_0px_rgba(16,185,129,1)] bg-white">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><BriefcaseIcon className="h-6 w-6"/></div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">Staff Portal</h2>
        </div>

        <form onSubmit={handleAdminSubmit} className="space-y-4">
          {!isLogin && (
             <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-emerald-600">Admin Full Name</label>
                <input required type="text" className="w-full p-4 bg-emerald-50 border-2 border-transparent rounded-2xl font-bold focus:border-emerald-600 outline-none" />
             </div>
          )}
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-emerald-600">Staff Email</label>
            <input required type="email" className="w-full p-4 bg-emerald-50 border-2 border-transparent rounded-2xl font-bold focus:border-emerald-600 outline-none" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-emerald-600">Password</label>
            <input required type="password" className="w-full p-4 bg-emerald-50 border-2 border-transparent rounded-2xl font-bold focus:border-emerald-600 outline-none" />
          </div>
          
          <button type="submit" className="w-full py-5 rounded-2xl font-black text-white bg-emerald-600 hover:bg-black transition-all uppercase tracking-widest mt-4">
            {isLogin ? 'Authorized Access' : 'Create Admin Profile'}
          </button>
        </form>

        <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-6 text-[10px] font-black uppercase text-emerald-400 hover:text-emerald-600">
           {isLogin ? "Setup new admin account" : "Back to staff login"}
        </button>
      </div>
    </div>
  );
};

export default AdminAuth;