import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SIngleBook from './pages/SIngleBook';
import AddBook from './pages/AddBook';
import EditBooks from './pages/EditBooks';
import DeleteBook from './pages/DeleteBook';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/book/:id' element={<SIngleBook/>} />
        <Route path='/addBook' element={<AddBook/>} />
        <Route path='/editBook/:id' element={<EditBooks/>} />
        <Route path='/deleteBook/:id' element={<DeleteBook/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
