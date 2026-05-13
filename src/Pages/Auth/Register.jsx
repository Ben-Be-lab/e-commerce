import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration submitted");
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-gray-50 px-4 py-20">
            <div className="w-full max-w-md bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl shadow-black/5">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-black uppercase italic tracking-tighter">
                        Join the <span className="text-emerald-600">Vault</span>
                    </h1>
                    <p className="text-gray-400 text-[9px] font-black uppercase tracking-[0.3em] mt-2">
                        Get early access to exclusive drops
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="text" 
                        placeholder="Full name" 
                        className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    />
                    <input 
                        type="email" 
                        placeholder="Email address" 
                        className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    />
                    <input 
                        type="password" 
                        placeholder="Create password" 
                        className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    />
                    <input 
                        type="password" 
                        placeholder="Confirm password" 
                        className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    />

                    <div className="flex items-center gap-3 px-2 py-2">
                        <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" required />
                        <label className="text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-tight">
                            I agree to the Terms of Service & Privacy Policy
                        </label>
                    </div>

                    <button type="submit" className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95 mt-2">
                        Create Account
                    </button>
                </form>

                <p className="mt-8 text-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Already a member? 
                    <Link to="/login" className="ml-2 text-black border-b-2 border-black pb-1">
                        Login Here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;