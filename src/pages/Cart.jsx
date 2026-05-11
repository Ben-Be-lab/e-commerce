const Cart = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-black text-black mb-8">YOUR BAG</h1>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
        <p className="text-gray-500 mb-6">Your cart is currently empty.</p>
        <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition">
          Go Shopping
        </button>
      </div>
    </div>
  );
};
export default Cart;