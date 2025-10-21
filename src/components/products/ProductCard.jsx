import React from "react";
import formatCurrency from "../../utils/formatCurrency";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="block p-4 flex-grow">
        <div className="relative mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
          {product.rating >= 4.5 && (
            <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              Top Rated
            </span>
          )}
        </div>
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-blue-600 font-bold text-lg mb-2">{formatCurrency(product.price)}</p>
        <div className="flex items-center text-yellow-500 text-sm">
          {'⭐'.repeat(Math.floor(product.rating))}
          {'☆'.repeat(5 - Math.floor(product.rating))}
          <span className="ml-1 text-gray-600">({product.rating})</span>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 font-medium transition-colors duration-200 active:scale-95"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;