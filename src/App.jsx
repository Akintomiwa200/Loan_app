import { useState } from 'react'
import Home from "../src/Pages/Home"
import Login from "../src/Pages/Login/Login"
import Header from "../src/Components/HomeUI/Header"
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import "./App.css"
function App() {
  return (
    <div>
      
       <BrowserRouter>
         <Routes>
           <Route  path='/' element={<Home/>}/>
           <Route  path='/Login' element={<Login/> }/>
         </Routes>
       </BrowserRouter>
   
    </ div>
  )
}

export default App
