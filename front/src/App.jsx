import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    
    <div>
        <BrowserRouter>
        
          <Routes>
          <Route path="/" element={<div><Navbar/><Home/></div>} />
          <Route path="/login" element={<div> <Navbar/><Login /></div>} />
          <Route path="/register" element={<div> <Navbar/><Register /></div>} />
          </Routes>
      
        </BrowserRouter>
      </div>

  )
}

export default App
