import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout'; // Customer Navbar/Footer
import AdminLayout from './Components/AdminLayout';
import Home from './Pages/Home'
import Store from './Pages/Store';
import Cart from './Pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Auth from './Pages/Auth'; // Public Customer Auth (Login/Register)

// Admin Pages
import AdminAuth from './Pages/Admin/AdminAuth'; // Secret Staff Auth
import AdminDashboard from './pages/Admin/AdminDashboard';
import Inventory from './Pages/Admin/Inventory';

function App() {
  return (
    <Router>
      <Routes>
        
        {/* 1. CUSTOMER ROUTES 
            Everything here shows the standard website Navbar and Footer */}
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />} />
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