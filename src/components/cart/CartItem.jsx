import "./CartItem.css";
import React from "react";
import formatCurrency from "../../utils/formatCurrency";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, price, image, quantity } = item;
  const totalPrice = price * quantity;

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-item card mb-3 border-0 shadow-sm rounded-3 overflow-hidden">
      <div className="row g-0 align-items-center p-2 p-md-3">
        {/* Image */}
        <div className="col-2 col-md-1">
          <img
            src={image}
            alt={name}
            className="img-fluid rounded"
            style={{ height: "60px", objectFit: "cover" }}
          />
        </div>

        {/* Product Info */}
        <div className="col-5 col-md-4">
          <h6 className="fw-semibold mb-1 text-truncate">{name}</h6>
          <p className="text-primary mb-0 fw-medium">{formatCurrency(price)}</p>
        </div>

        {/* Quantity Controls */}
        <div className="col-5 col-md-3 d-flex align-items-center">
          <button
            className="btn btn-outline-secondary btn-sm rounded-circle"
            onClick={() => dispatch(decrementQuantity(id))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="mx-2 fw-semibold">{quantity}</span>
          <button
            className="btn btn-outline-secondary btn-sm rounded-circle"
            onClick={() => dispatch(incrementQuantity(id))}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <div className="col-4 col-md-2 text-end d-none d-md-block fw-semibold">
          {formatCurrency(totalPrice)}
        </div>

        {/* Remove Button (visible on hover) */}
        <div className="col-2 col-md-1 text-center position-relative">
          <button
            className="cart-item-remove btn btn-sm rounded-circle"
            onClick={handleRemove}
            aria-label="Remove item"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;