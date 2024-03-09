import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
     
        const response = await axios.get(`http://localhost:4000/book/${id}`);
        if (response.status === 200) {
          setBook(response.data.data);
        } else {
          console.error('Error fetching book:', response.statusText);
        }
    };

    fetchBook();
  }, [id]);

  return (
    <>
      <NavBar />

      {book && (
      
        <div className="flex justify-center items-center mt-9">     
          <div className="max-w-sm rounded overflow-hidden shadow-lg mt-20 mb-1">
            <img className="w-full" src={book.imageUrl} alt="Book Cover" />
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold text-xl mb-2">{book.bookName}</div>
              <p className="text-gray-700 text-base">Rs. {book.bookPrice}</p>
              <p className="text-gray-700 text-base">Author: {book.authorName}</p>
              <p className="text-gray-700 text-base">ISBN: {book.isbnNumber}</p>
            </div>
            <div>
              <div className="flex justify-center items-center gap-7 mt-4">
                <Link to={`/editBook/${book._id}`}>
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
                </Link>

                <Link to={`/deleteBook/${book._id}`}>
                  <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
   
      )}
    </>
  );
};

export default SingleBook;
