import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login submitted");
        // Add your login logic here
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-white px-4 py-20">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-black uppercase italic tracking-tighter">
                        Welcome <span className="text-emerald-600">Back</span>
                    </h1>
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2">
                        Enter the Vault to continue
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="group">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-gray-50 border-2 border-transparent rounded-2xl py-4 px-6 text-sm font-bold focus:border-black focus:bg-white outline-none transition-all placeholder:text-gray-300"
                        />
                    </div>

                    <div className="group">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-gray-50 border-2 border-transparent rounded-2xl py-4 px-6 text-sm font-bold focus:border-black focus:bg-white outline-none transition-all placeholder:text-gray-300"
                        />
                    </div>

                    <div className="flex justify-end">
                        <Link
                            to="/forgot-password"
                            className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-emerald-600 transition-colors"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button type="submit" className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl active:scale-95 mt-4">
                        Sign In
                    </button>
                </form>

                <p className="mt-8 text-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Don't have an account?
                    <Link to="/register" className="ml-2 text-emerald-600 border-b-2 border-emerald-600 pb-1">
                        Create One
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;