import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BookCards } from '../components/BookCards';

export const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,8))
    )
  }, []);

  return (
    <div>
        <BookCards headline="Best sellings books" books={books} />
    </div>
  );
}