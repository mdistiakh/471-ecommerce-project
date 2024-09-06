import React from 'react';
import './cart.css';

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - BDT: {item.price}
                <button
                  onClick={() => handleRemoveFromCart(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          {/* Display total items and total price */}
          <div className="cart-summary">
            <p>Total Items: {cartItems.length}</p>
            <p>Total Price: BDT {totalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
