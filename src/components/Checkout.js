import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart to proceed to checkout.</p>
        <Link to="/products" className="button">Browse Products</Link>
      </div>
    );
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="price">Rs {item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="subtotal">
        <p>Subtotal: Rs{subtotal.toFixed(2)}</p>
      </div>
      <div className="actions">
        <Link to="/products" className="button secondary">Continue Shopping</Link>
        <button onClick={clearCart} className="button">Clear Cart</button>
      </div>
    </div>
  );
};

export default Checkout;