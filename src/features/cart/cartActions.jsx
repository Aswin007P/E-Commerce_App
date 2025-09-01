import React from "react";

const CartActions = ({ product, addToCart }) => {
  return (
    <div className="cart-actions">
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      {/* You can add more buttons later like Buy Now, Wishlist etc */}
    </div>
  );
};

export default CartActions;
