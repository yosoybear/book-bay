import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import axios from '../api';
const Home = ({ onAddToCart }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get('/books').then(res => setBooks(res.data));
  }, []);
  return <div>{books.map(book => <BookCard key={book._id} book={book} onAddToCart={onAddToCart} />)}</div>;
};
export default Home;
