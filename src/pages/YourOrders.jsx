import "./YourOrders.css";
import React, { useEffect, useState } from "react";

const YourOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Load orders from localStorage
  useEffect(() => {
    const storedOrders = localStorage.getItem("confirmedOrders");
    if (storedOrders) {
      // Ensure amount is numeric
      const parsedOrders = JSON.parse(storedOrders).map(order => ({
        ...order,
        amount: Number(order.amount)
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
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setShowModal(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <>
      {/* Main Orders Section */}
      <div className="your-orders-container">
        <h1>Your Orders</h1>
        <div className="orders-list">
          {orders.length === 0 && (
            <p style={{ textAlign: "center" }}>No confirmed orders yet.</p>
          )}
          {orders.map((order) => {
            const status = getStatus(order.date);
            return (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <span className="order-id">Order ID: {order.id}</span>
                  <span className={`order-status ${status.toLowerCase()}`}>
                    {status}
                  </span>
                </div>
                <div className="order-body">
                  <div className="order-image">
                    <img src={order.image} alt={order.product} />
                  </div>
                  <div className="order-details">
                    <p>
                      <strong>Product : </strong> {order.product}
                    </p>
                    <p>
                      <strong>Quantity : </strong> {order.quantity}
                    </p>
                    <p>
                      <strong>Order Date : </strong> {order.date}
                    </p>
                    <p>
                      <strong>Amount : </strong> $ {order.amount}
                    </p>
                  </div>
                </div>
                <div className="order-card-actions">
                  <button
                    className="cancel-order-btn"
                    onClick={() => cancelOrder(order.id)}
                  >
                    Cancel Order
                  </button>
                  <button
                    className="order-details-btn"
                    onClick={() => handleViewDetails(order)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && selectedOrder && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>
            <h2>Order Details</h2>
            <img src={selectedOrder.image} alt={selectedOrder.product} />
            <div className="modal-details">
              <div className="info-block">
                <p>
                  <strong>Product :</strong> {selectedOrder.product}
                </p>
                <p>
                  <strong>Quantity :</strong> {selectedOrder.quantity}
                </p>
              </div>
              <div className="info-block">
                <p>
                  <strong>Amount :</strong> {`$ ${selectedOrder.amount}`}
                </p>
                <p>
                  <strong>Order Date :</strong> {selectedOrder.date}
                </p>
                <p>
                  <strong>Status:</strong> {getStatus(selectedOrder.date)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default YourOrders;
