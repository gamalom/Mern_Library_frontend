import React, { useState } from 'react';
import NavBar from './components/NavBar';
import axios from 'axios';

const AddBook = () => {
  const[bookName,setBookName]=useState('')
  const[bookPrice,setBookPrice]=useState('null')
  const[authorName,setAuthorName]=useState('')
  const[isbnNumber,setIsbnNumber]=useState('null')
  const[publication,setPublication]=useState('')
  const[publishedAt,setPublishedAt]=useState('')
  const[image,setImage]=useState(null)
  console.log(bookName, bookPrice, authorName, isbnNumber,publication,publishedAt,image) 
  const handleSubmit = async(e)=>{
    e.preventDefault()
   const response = await axios.post('http://localhost:4000/book',{
      bookName,
      bookPrice,
      authorName,
      isbnNumber,
      publication,
      publishedAt,
      image
    },{
      headers:{
        'Content-Type' : 'multipart/form-data'
      }
    })
  }
  return (
    <>
      <NavBar />
      <section className="bg-gray-50 dark:bg-gray-900 mt-14">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold">Add New Book</h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="bookName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name</label>
                  <input type="text" name="bookName" id="bookName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required="" onChange={(e)=>setBookName(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor="isbnNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">isbnNumber</label>
                  <input type="number" name="isbnNumber" id="isbnNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123455" required="" onChange={(e)=>setIsbnNumber(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor="bookPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input type="number" name="bookPrice" id="bookPrice" placeholder="bookPrice" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>setBookPrice(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor="confirm-authorName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">authorName</label>
                  <input type="text" name="authorName" id="authorName" placeholder="authorName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>setAuthorName(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor="publication" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">publication</label>
                  <input type="text" name="publication" id="publication" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="publication" required="" onChange={(e)=>setPublication(e.target.value)}/>                  
                </div>
                <div>
                  <label htmlFor="publishedAt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Published Date</label>
                  <input type="date" name="publishedAt" id="publishedAt" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="publishedAt" required="" onChange={(e)=>setPublishedAt(e.target.value)} />                  
                </div>
                <div>
                  <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Image </label>
                  <input type="file" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="" onChange={(e)=>setImage(e.target.files[0])}/>                  
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add Book</button>
             
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddBook;
