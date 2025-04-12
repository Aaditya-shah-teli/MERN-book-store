import React, { useState } from 'react'
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';



export const EditBooks = () => {
  const {id} = useParams();
  const {BookTitle, AuthorName, ImageURL, Category, BookDescription, BookPDFURL} = useLoaderData()
  
  

    const bookCategories = [
      "Fiction", "Non-Fiction", "Romance", "Thriller", "Mystery", "Horror", "Science Fiction", "Fantasy",
      "Biography", "Autobiography", "Self-Help", "History", "Science", "Business & Economics", "Children's Books",
      "Young Adult", "Comics & Graphic Novels", "Poetry", "Philosophy", "Religion & Spirituality", "Travel",
      "Cooking & Food", "Health & Fitness", "Education & Reference", "Art & Photography", "Politics & Social Sciences",
      "Law", "Engineering", "Medical", "Crafts & Hobbies", "Diaries & Journals", "Parenting & Relationships",
      "Sports & Outdoors", "Classic Literature", "Computer & Internet", "Language Learning"
    ];
  
    const [selectBookCategory, setSelectBookCategory] = useState(bookCategories[0]);
  
    const handleChangeSelectedValue = (e) => {
      setSelectBookCategory(e.target.value);
    };
  
    const handleUpdate = async (e) => {
      e.preventDefault();
      const form = e.target;
  
      const UpdaateBookData = {
        BookTitle: form.BookTitle.value.trim(),
        AuthorName: form.AuthorName.value.trim(),
        ImageURL: form.ImageURL.value.trim(),
        Category: form.Category.value,
        BookDescription: form.BookDescription.value.trim(),
        BookPDFURL: form.BookPDFURL.value.trim()
      };
  
      // update book data
      fetch(`http://localhost:3000/book/${id}`, {
        method:"PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(UpdaateBookData)
      }).then(res => res.json()).then(data => {
        alert("Book is updated successfully")
      })
     
    };
  
    return (
      <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>
        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
          {/* First Row */}
          <div className="flex gap-8">
            <div className='lg:w-1/2'>
              <Label htmlFor="BookTitle" value="Book Title" />
              <TextInput id="BookTitle" name="BookTitle" type="text" placeholder="Book Name" defaultValue={BookTitle} required />
            </div>
            <div className='lg:w-1/2'>
              <Label htmlFor="AuthorName" value="Author Name" />
              <TextInput id="AuthorName" name="AuthorName" type="text" placeholder="Author Name" defaultValue={AuthorName} required />
            </div>
          </div>
  
          {/* Second Row */}
          <div className="flex gap-8">
            <div className='lg:w-1/2'>
              <Label htmlFor="ImageURL" value="Image URL" />
              <TextInput id="ImageURL" name="ImageURL" type="text" placeholder="Book Image URL" defaultValue={ImageURL} required />
            </div>
            <div className='lg:w-1/2'>
              <Label htmlFor="Category" value="Book Category" />
              <select
                name="Category"
                id="Category"
                className='w-full rounded-lg p-2 border border-gray-300 dark:bg-gray-700 dark:text-white'
                value={selectBookCategory}
                onChange={handleChangeSelectedValue}
              >
                {bookCategories.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
  
          {/* Description */}
          <div className='lg:w-full'>
            <Label htmlFor="BookDescription" value="Book Description" />
            <Textarea
              id="BookDescription"
              name="BookDescription"
              placeholder="Write your book description..."
              required
              rows={6}
              className='dark:bg-gray-700 dark:text-white'
              defaultValue={BookDescription}
            />
          </div>
  
          {/* PDF Link */}
          <div className='lg:w-1/2'>
            <Label htmlFor="BookPDFURL" value="Book PDF URL" />
            <TextInput id="BookPDFURL" name="BookPDFURL" type="text" placeholder="Book PDF URL" defaultValue={BookPDFURL} required />
          </div>
  
          <Button type="submit" className='mt-4 w-fit px-6 py-2 text-lg'>
            Update Book Data
          </Button>
        </form>
      </div>
    );

}
