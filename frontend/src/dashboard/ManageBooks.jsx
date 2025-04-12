import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

export const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);
// delete items
const handleDelete = (id) =>{
  console.log(id);
  fetch(`http://localhost:3000/book/${id}`,{method: "DELETE"}).then(res => res.json()).then(data => {
    alert("book is deleted success fully");
    // setAllBooks(data)
  })
}


  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">📚 Manage Your Books</h2>
        <div className="overflow-x-auto">
          <Table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">📖 Book Name</th>
                <th scope="col" className="px-6 py-3">✍️ Author</th>
                <th scope="col" className="px-6 py-3">📂 Category</th>
                <th scope="col" className="px-6 py-3">🔗 Actions</th>
              </tr>
            </thead>
            <tbody>
              {allBooks.map((book, index) => (
                <tr key={book._id || index} className="bg-white border-b hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{book.BookTitle}</td>
                  <td className="px-6 py-4">{book.AuthorName}</td>
                  <td className="px-6 py-4">{book.Category}</td>
                  <td className="px-6 py-4">
                    <Link to={`/admin/dashboard/edit-books/${book._id}`} className="text-blue-600 hover:underline dark:text-blue-400">Edit / Manage</Link>
                    <button onClick={()=>handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 ml-2'>Delete</button>
                  </td>
                </tr>
              ))}
              {allBooks.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">No books found.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};