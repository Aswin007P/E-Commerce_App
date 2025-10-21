import ProductList from "../components/products/ProductList";
import React, { useEffect } from "react";
import products from "../data/products.json";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setProducts } from "../features/products/productSlice";

// Home.jsx

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.filteredProducts);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const searchQuery = searchParams.get("query") || "";

  const filteredProducts = allProducts
    .filter((p) => (!category || p.category === category))
    .filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Hero Section – Curved Blue Background */}
      <section className="relative mb-12">
        {/* Curved Blue Background */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-b-[60px] sm:rounded-b-[80px] md:rounded-b-[100px] px-4 sm:px-6 lg:px-8 pt-16 pb-24 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-block px-4 py-1.5 mb-5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
              Trusted by 50,000+ customers
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Discover Great Deals
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              Premium products. Honest prices. Fast delivery. Shop with confidence.
            </p>
          </div>
        </div>

        {/* Optional: Decorative element at curve (subtle) */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-white dark:bg-gray-900 rounded-full opacity-20 blur-sm"></div>
      </section>

      {/* Product Showcase */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {searchQuery
            ? `Search Results for "${searchQuery}"`
            : category
            ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
            : "Featured Products"}
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {filteredProducts.length} items
        </span>
      </div>

      {/* Product List */}
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <div className="text-center py-16">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-8m-8 0H4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            No products found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;