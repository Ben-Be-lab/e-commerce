import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode'); // This reads the ?mode= part from the URL
  
  // Set the form based on the URL. If it's 'register', isLogin becomes false.
  const [isLogin, setIsLogin] = useState(mode !== 'register');

  // If the user is already on the page and clicks a different button in the navbar
  useEffect(() => {
    setIsLogin(mode !== 'register');
  }, [mode]);

  return (
    <div className="py-20 flex justify-center bg-gray-50">
      <div className="bg-white p-12 rounded-[3rem] shadow-xl w-full max-w-md">
        
        {/* Toggle between Login and Register inside the page */}
        <div className="flex gap-6 mb-8 border-b pb-4">
          <button 
            onClick={() => setIsLogin(true)}
            className={`font-black uppercase text-xs tracking-widest ${isLogin ? 'text-emerald-600' : 'text-gray-400'}`}
          >
            Login
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`font-black uppercase text-xs tracking-widest ${!isLogin ? 'text-emerald-600' : 'text-gray-400'}`}
          >
            Register
          </button>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-100 rounded-2xl" />
          )}
          <input type="email" placeholder="Email" className="w-full p-4 bg-gray-100 rounded-2xl" />
          <input type="password" placeholder="Password" className="w-full p-4 bg-gray-100 rounded-2xl" />
          
          <button className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase tracking-widest">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;