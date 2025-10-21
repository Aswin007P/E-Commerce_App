import React, { useEffect, useState } from "react";
import formatCurrency from "../utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

// ProductDetail.jsx

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const numId = parseInt(id, 10);
    const foundProduct = products.find((p) => p.id === numId);
    if (foundProduct) {
      setProduct(foundProduct);
      setError(null);
    } else {
      setError(`Product with ID ${id} not found.`);
    }
  }, [id, products]);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      dispatch(addToCart({ ...product, quantity }));
      setIsAdding(false);
      // Optional: show toast instead of alert
      alert(`${quantity} ${product.name}(s) added to cart!`);
    }, 400);
  };

  const handleGoBack = () => navigate(-1);

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="inline-block p-4 bg-red-50 dark:bg-red-900/20 rounded-full mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <p className="text-red-600 dark:text-red-400 text-lg mb-6">{error}</p>
        <button
          onClick={handleGoBack}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition"
        >
          ← Back to Products
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading product details...</p>
      </div>
    );
  }

  // Generate stars with partial fill support (optional)
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {hasHalf && (
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-gray-600 dark:text-gray-400 font-medium">
          {product.rating.toFixed(1)} ({product.reviewCount || 0} reviews)
        </span>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={handleGoBack}
        className="mb-8 flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium transition"
      >
        ← Back to Products
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 animate-fade-in">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
              loading="eager"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              {product.name}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(product.price)}
            </p>
            {product.originalPrice && (
              <p className="text-lg text-gray-500 dark:text-gray-400 line-through">
                {formatCurrency(product.originalPrice)}
              </p>
            )}
            {product.discount && (
              <span className="px-2.5 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-semibold rounded-full">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Rating */}
          {renderStars(product.rating)}

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>

          {/* Stock Status */}
          <div className="flex items-center">
            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${product.stock > 5 ? 'bg-green-500' : product.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
            <span className="text-gray-600 dark:text-gray-400">
              {product.stock > 5
                ? "In Stock"
                : product.stock > 0
                ? `${product.stock} left in stock – order soon`
                : "Out of Stock"}
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
            <label htmlFor="quantity" className="font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
              Quantity:
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              disabled={product.stock <= 0}
              className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              {[...Array(Math.min(product.stock, 10))].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding || product.stock <= 0}
            className={`w-full sm:w-auto px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform ${
              isAdding || product.stock <= 0
                ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5'
            }`}
          >
            {isAdding ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Adding...
              </span>
            ) : product.stock <= 0 ? (
              "Out of Stock"
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>

      {/* Fade-in Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;