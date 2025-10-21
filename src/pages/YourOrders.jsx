import React, { useEffect, useState } from "react";

const YourOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  const storedOrders = localStorage.getItem("confirmedOrders");
  if (storedOrders) {
    const parsedOrders = JSON.parse(storedOrders).map(order => ({
      ...order,
      amount: parseFloat(order.amount) || 0, 
      quantity: parseInt(order.quantity) || 1, 
    }));
    setOrders(parsedOrders);
  }
}, []);

  const getStatus = (orderDate) => {
    const checkoutDate = new Date(orderDate);
    const currentDate = new Date();
    const diffTime = currentDate - checkoutDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    if (diffDays > 3) return "Delivered";
    else if (diffDays >= 1) return "Shipped";
    return "Processing";
  };

  const cancelOrder = (orderId) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      const updatedOrders = orders.filter((order) => order.id !== orderId);
      setOrders(updatedOrders);
      localStorage.setItem("confirmedOrders", JSON.stringify(updatedOrders));
    }
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setShowModal(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-6">
        <div className="text-center mb-8 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 backdrop-blur-sm">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-800/50 mb-4">
            <span className="text-2xl">📦</span>
          </div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Your Orders
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Track, view, or cancel your recent purchases.
          </p>
        </div>

        <div className="space-y-6">
          {orders.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 py-10">
              No confirmed orders yet.
            </p>
          )}

          {orders.map((order) => {
            const status = getStatus(order.date);
            const statusColor =
              status === "Delivered"
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                : status === "Shipped"
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";

            return (
              <div
                key={order.id}
                className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* Order Header */}
                <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Order ID: {order.id}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
                    {status}
                  </span>
                </div>

                {/* Product Info — NO CHANGES TO CONTENT OR QUANTITY POSITION */}
                <div className="p-4 flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0 w-24 h-24">
                    <img
                      src={order.image}
                      alt={order.product}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <p>
                      <strong className="text-gray-900 dark:text-white">Product:</strong>{" "}
                      {order.product}
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Quantity:</strong>{" "}
                      {order.quantity}
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Order Date:</strong>{" "}
                      {order.date}
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Amount:</strong>{" "}
                      ${order.amount.toFixed(2)}
                    </p>
                  </div>
                </div>

          {/* Action Buttons */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700/30 flex flex-wrap gap-3 justify-end">
          {/* Only show Cancel if status is NOT "Delivered" */}
          {status !== "Delivered" && (
            <button
              onClick={() => cancelOrder(order.id)}
              className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-800/30 transition"
            >
              Cancel Order
            </button>
          )}
          <button
            onClick={() => handleViewDetails(order)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </button>
        </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedOrder && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl font-light"
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Order Details</h2>

            <div className="flex justify-center mb-4">
              <img
                src={selectedOrder.image}
                alt={selectedOrder.product}
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-3 text-gray-900 dark:text-gray-200">
              <p>
                <strong className="text-gray-900 dark:text-white">Product:</strong>{" "}
                {selectedOrder.product}
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Quantity:</strong>{" "}
                {selectedOrder.quantity}
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Amount:</strong>{" "}
                ${selectedOrder.amount.toFixed(2)}
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Order Date:</strong>{" "}
                {selectedOrder.date}
              </p>
              <p>
                <strong className="text-gray-900 dark:text-white">Status:</strong>{" "}
                {getStatus(selectedOrder.date)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default YourOrders;