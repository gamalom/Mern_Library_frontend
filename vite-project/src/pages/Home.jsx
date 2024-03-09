import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'
import axios from 'axios'

const Home = () => {

const[books, setBooks] = useState([])
  const fetchBook = async() =>{
  const response = await  axios.get('http://localhost:4000/book')
  if(response.status == 200){
    setBooks(response.data.data)
  }
  }
  
  useEffect(()=>{
    fetchBook()
  },[])
  return (
  <>
  <NavBar/>
    <div className='flex flex-wrap justify-evenly ' >
      {
        books.length>0 && books.map((book)=>{
          return(
            <Card name={book}/>
          )
        }
        ) 
      }
    </div>
  </>

  )
}

export default Home