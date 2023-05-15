import React from 'react'
import Home from './components/Home'
import About from './components/About';
import { menu } from './components/Data';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log(menu)
  return (
    <BrowserRouter>
    <Link to='/'>Home</Link>
    <Link to='/About'>About</Link>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/About' element={<About/>}/>



    </Routes>
    
    
    </BrowserRouter>
 
  )
}

export default App