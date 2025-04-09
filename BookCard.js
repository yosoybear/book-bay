import React from 'react';
const BookCard = ({ book, onAddToCart }) => (
  <div className="border p-4">
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <p>{book.price}$</p>
    <button onClick={() => onAddToCart(book)}>Add to Cart</button>
  </div>
);
export default BookCard;
