import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Home from "./components/home/Home"
import DarkTheme from "./components/dark_theme/DarkTheme"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    
    <div>
        <BrowserRouter>
        
          <Routes>
          <Route path="/" element={<div><Navbar/><Home/><DarkTheme/></div>} />
          <Route path="/login" element={<div> <Login /><DarkTheme/></div>} />
          <Route path="/register" element={<div> <Register /><DarkTheme/></div>} />
          </Routes>
      
        </BrowserRouter>
      </div>

  )
}

export default App
