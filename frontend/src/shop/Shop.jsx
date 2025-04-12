import React, { useEffect, useState } from 'react';
import { Card } from '../home/Card';

export const Shop = () => {
const [books, setBooks] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/all-books')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

return(
  <div className='mt-28 px-4 lg:px-24'>
    <h2 className='text-5xl font-bold text-center'>All books are here</h2>
    <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
      {
        books.map((book)=>{
          return <Card
          key={book._id}
          AuthorName={book.AuthorName}
          ImageURL={book.ImageURL}
          Category={book.Category}
          BookDescription={book.BookDescription}
          BookTitle={book.BookTitle}
          BookPDFURL={book.BookPDFURL}
        />
        })
      }
    </div>
  </div>
)
}
