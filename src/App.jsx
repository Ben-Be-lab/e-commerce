import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Layout from './components/Layout'; // Customer Navbar/Footer
import AdminLayout from './Components/AdminLayout';

// Client Pages
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Auth from './pages/Auth'; // Public Customer Auth (Login/Register)

// Admin Pages
import AdminAuth from './pages/Admin/AdminAuth'; // Secret Staff Auth
import AdminDashboard from './pages/Admin/AdminDashboard';
import Inventory from './pages/Admin/Inventory';

function App() {
  return (
    <Router>
      <Routes>
        
        {/* 1. CUSTOMER ROUTES 
            Everything here shows the standard website Navbar and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetails />} />
          
          {/* Public Login/Register (Email, Pass, Confirm Pass) */}
          <Route path="auth" element={<Auth />} />
        </Route>

        {/* 2. SECRET ADMIN AUTH GATE
            This is the link you only give to your staff. 
            It doesn't use the store layout or the admin sidebar. */}
        <Route path="/admin-gateway-kigali-2026" element={<AdminAuth />} />

        {/* 3. PROTECTED ADMIN DASHBOARD
            Wrapped in the AdminLayout which provides the Sidebar */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="inventory" element={<Inventory />} />
          {/* Add more admin routes here (Orders, Customers, etc.) */}
        </Route>

        {/* 4. ERROR HANDLING */}
        <Route 
          path="*" 
          element={
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
              <h1 className="font-black text-9xl text-gray-200">404</h1>
              <p className="font-black uppercase tracking-widest -mt-10">Page Not Found</p>
              <button 
                onClick={() => window.history.back()}
                className="mt-6 px-8 py-3 bg-black text-white font-black rounded-2xl text-xs uppercase"
              >
                Go Back
              </button>
            </div>
          } 
        />

      </Routes>
    </Router>
  );
}

export default App;