import ProductCard from "./ProductCard";
import React from "react";

const ProductList = ({ products, loading = false, error = null }) => {
      if (loading) {
      return (
        <div className="py-12 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your products...</p>
        </div>
      );
    }
  if (error) {
    return (
      <div className="py-10 text-center text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="py-10 text-center text-gray-500">
        <p>No products available.</p>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;