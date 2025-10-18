import "./CartSummary.css";
import React from "react";
import formatCurrency from "../../utils/formatCurrency";

const CartSummary = ({ items }) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping;

  return (
    <div className="cart-summary card border-0 shadow-sm rounded-3 p-4">
      <h2 className="h5 fw-bold mb-4 pb-2 border-bottom">Order Summary</h2>

      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted">Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>

      <div className="d-flex justify-content-between mb-2">
        <span className="text-muted">Shipping</span>
        <span>{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <span className="text-muted">Tax</span>
        <span>{formatCurrency(tax)}</span>
      </div>

      <div className="d-flex justify-content-between pt-3 border-top border-secondary fw-bold fs-5">
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
      </div>
    </div>
  );
};

export default CartSummary;