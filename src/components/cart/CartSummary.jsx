import React from "react";
import formatCurrency from "../../utils/formatCurrency";

const CartSummary = ({ items }) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + tax + shipping;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-md">
      <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">Order Summary</h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">
            Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})
          </span>
          <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">Shipping</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {shipping === 0 ? 'Free' : formatCurrency(shipping)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">Tax (10%)</span>
          <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(tax)}</span>
        </div>
      </div>

      <div className="flex justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 font-bold text-lg text-gray-900 dark:text-white">
        <span>Total</span>
        <span className="text-blue-600 dark:text-blue-400">{formatCurrency(total)}</span>
      </div>
    </div>
  );
};

export default CartSummary;