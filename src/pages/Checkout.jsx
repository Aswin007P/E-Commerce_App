import React, { useEffect } from "react";
import formatCurrency from "../utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + tax + shipping;

  useEffect(() => {
    if (!user) {
      alert("Please login before checkout.");
      navigate("/login");
    }
  }, [user, navigate]);

  const handlePlaceOrder = () => {
    if (!user) {
      alert("Please login before placing an order.");
      navigate("/login");
      return;
    }
    if (items.length === 0) {
      alert("Your cart is empty!");
      navigate("/");
      return;
    }

const confirmedOrders = items.map((item) => ({
  id: "ORD" + Math.floor(Math.random() * 100000),
  product: item.name,
  date: new Date().toISOString().split("T")[0],
  amount: parseFloat(item.price) * parseInt(item.quantity), // 👈 Ensure numbers
  quantity: parseInt(item.quantity), // 👈 Ensure integer
  image: item.image,
}));
    const previousOrders = JSON.parse(localStorage.getItem("confirmedOrders")) || [];
    localStorage.setItem("confirmedOrders", JSON.stringify([...previousOrders, ...confirmedOrders]));

    alert(`Thank you, ${user.name}! Your order of ${totalItems} item(s) has been placed successfully.`);
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero Header */}
      <div className="text-center mb-12 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 backdrop-blur-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-800/50 mb-4">
          <span className="text-3xl">💳</span>
        </div>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Secure Checkout
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Complete your purchase in just a few steps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 dark:text-white truncate">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Qty: {item.quantity} × {formatCurrency(item.price)}
                  </p>
                </div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {formatCurrency(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer & Payment */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Customer Information</h2>
            {user ? (
              <div className="space-y-1 text-gray-700 dark:text-gray-300">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">Please login to see your information.</p>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Payment Method</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">💳 Credit Card (Mock)</p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Name on Card"
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Order Total & Actions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {shipping === 0 ? "Free" : formatCurrency(shipping)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(tax)}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700 font-bold text-lg text-gray-900 dark:text-white">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full mt-6 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Place Order
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="w-full mt-3 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              ← Back to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;