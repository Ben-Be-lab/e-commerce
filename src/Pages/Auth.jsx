import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon, UserIcon, ShieldCheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const passwordsMatch = isLogin || (formData.password === formData.confirmPassword && formData.confirmPassword !== '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordsMatch) return;
    navigate('/store'); 
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-white">
      <div className="max-w-md w-full p-8 rounded-[2.5rem] border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-8 leading-none">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Full Name</label>
              <div className="relative">
                <UserIcon className="h-5 w-5 absolute left-4 top-4 text-gray-300" />
                <input required type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-4 pl-12 bg-gray-50 border-2 border-transparent rounded-2xl font-bold focus:border-black outline-none transition-all" />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Email Address</label>
            <div className="relative">
              <EnvelopeIcon className="h-5 w-5 absolute left-4 top-4 text-gray-300" />
              <input required type="email" placeholder="email@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-4 pl-12 bg-gray-50 border-2 border-transparent rounded-2xl font-bold focus:border-black outline-none transition-all" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Password</label>
            <div className="relative">
              <LockClosedIcon className="h-5 w-5 absolute left-4 top-4 text-gray-300" />
              <input required type="password" placeholder="••••••••" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full p-4 pl-12 bg-gray-50 border-2 border-transparent rounded-2xl font-bold focus:border-black outline-none transition-all" />
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Confirm Password</label>
              <div className="relative">
                <ShieldCheckIcon className="h-5 w-5 absolute left-4 top-4 text-gray-300" />
                <input required type="password" placeholder="••••••••" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} className={`w-full p-4 pl-12 bg-gray-50 border-2 rounded-2xl font-bold outline-none transition-all ${!passwordsMatch && formData.confirmPassword !== '' ? 'border-red-500 bg-red-50' : 'focus:border-black'}`} />
              </div>
            </div>
          )}

          <button disabled={!passwordsMatch} type="submit" className={`w-full py-5 rounded-2xl font-black text-white bg-black hover:bg-orange-500 transition-all flex items-center justify-center gap-3 uppercase tracking-widest mt-6 ${!passwordsMatch ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {isLogin ? 'Sign In' : 'Register'} <ArrowRightIcon className="h-4 w-4" />
          </button>
        </form>

        <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-8 text-[10px] font-black uppercase text-gray-400 hover:text-black transition-colors">
          {isLogin ? "New user? Create account" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};

export default Auth;