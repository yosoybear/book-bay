import React, { useState } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const handleRemoveFromCart = (bookId) => {
    const updatedCart = cart.filter(item => item._id !== bookId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart items={cart} onRemove={handleRemoveFromCart} />
    </div>
  );
};

export default CartPage;
