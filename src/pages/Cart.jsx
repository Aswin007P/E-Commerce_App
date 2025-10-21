import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            Looks like you haven’t added anything yet. Time to treat yourself!
          </p>
          <Link
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Browse Products
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero-style Header with Sky Blue Background */}
      <motion.div
        className="text-center mb-12 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center justify-center w-16 h-14 rounded-full bg-blue-100 dark:bg-blue-800/50 mb-6">
          <span className="text-3xl">🛒</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Shopping Cart
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Review your items and proceed to checkout securely.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <motion.div
          className="lg:col-span-2 space-y-5"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {items.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <CartItem item={item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Summary & Actions */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <CartSummary items={items} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex flex-col items-center space-y-4"
          >
            <Link
              to="/checkout"
              className="w-full max-w-xs py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:-translate-y-0.5 active:scale-95 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-1"
            >
              ← Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;