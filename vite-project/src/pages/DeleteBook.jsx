import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`https://mern-library-backend-sunil.onrender.com/book/${id}`);
      if (response.status === 200) {
        setBook(response.data.data);
      }
    };

    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    const response = await axios.delete(`https://mern-library-backend-sunil.onrender.com/book/${id}`);
    if (response.status === 200) {
      navigate('/'); 
    } else {
      alert('Failed to delete book');
    }
  };

  return (
    <>
      <NavBar />
      <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Delete Book</h2>
        {book && (
          <div>
            <p>Are you sure you want to delete the book "{book.bookName}"?</p>
            <button onClick={handleDelete} className="mt-4 p-2 bg-red-600 text-white rounded-md hover:bg-red-700">Delete</button>
          </div>
        )}
      </div>
    </>
  );
};

export default DeleteBook;
