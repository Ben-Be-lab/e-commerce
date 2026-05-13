import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const  ForgotPassword = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-white px-4 py-20">
      <div className="w-full max-w-md">
        {/* Back to Login */}
        <Link 
          to="/login" 
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black mb-8 transition-all"
        >
          <ArrowLeftIcon className="h-3 w-3" />
          Back to Login
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black uppercase italic tracking-tighter">
            Reset <span className="text-emerald-600">Vault</span>
          </h1>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2 leading-relaxed">
            Enter your email and we'll send you <br/> a link to reset your password.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-gray-50 border-2 border-transparent rounded-2xl py-4 px-6 text-sm font-bold focus:border-black focus:bg-white outline-none transition-all"
          />

          <button className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl active:scale-95">
            Send Reset Link
          </button>
        </form>

        <p className="mt-12 text-center text-[9px] font-bold uppercase tracking-[0.3em] text-gray-300">
          Secure recovery by Ben's Vault
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;