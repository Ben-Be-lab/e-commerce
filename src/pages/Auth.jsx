import React, { useState } from 'react';
import { UserIcon, LockClosedIcon, EnvelopeIcon, ArrowRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const passwordsMatch = isLogin || formData.password === formData.confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordsMatch) return;
    // Logic for customer login/register
    navigate('/store');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="max-w-md w-full p-8 rounded-[2.5rem] border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-8">
          {isLogin ? 'Customer Login' : 'Create Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400">Full Name</label>
              <input required name="name" type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl font-bold focus:border-black outline-none transition-all" />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-gray-400">Email</label>
            <input required name="email" type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl font-bold focus:border-black outline-none transition-all" />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-gray-400">Password</label>
            <input required name="password" type="password" onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl font-bold focus:border-black outline-none transition-all" />
          </div>

          {!isLogin && (
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400">Confirm Password</label>
              <input required name="confirmPassword" type="password" onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} className={`w-full p-4 bg-gray-50 border-2 rounded-2xl font-bold outline-none transition-all ${!passwordsMatch ? 'border-red-500' : 'focus:border-black'}`} />
            </div>
          )}

          <button disabled={!passwordsMatch} type="submit" className="w-full py-5 rounded-2xl font-black text-white bg-black hover:bg-orange-500 transition-all flex items-center justify-center gap-3 uppercase tracking-widest mt-6">
            {isLogin ? 'Sign In' : 'Join Now'} <ArrowRightIcon className="h-4 w-4" />
          </button>
        </form>

        <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-8 text-[10px] font-black uppercase text-gray-400 hover:text-black">
          {isLogin ? "Need an account? Register" : "Have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default Auth;