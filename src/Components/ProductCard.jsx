import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl p-3 border border-gray-100">
      
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-50">
          <img 
            src={product.image} 
            className="w-full h-full object-cover transition-transform group-hover:scale-110" 
          />
        </div>
      </Link>

      <div className="mt-4">
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-black hover:text-emerald-600 transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-emerald-600 font-black">${product.price}</p>
      </div> 
    </div>
  );
};

export default ProductCard;

