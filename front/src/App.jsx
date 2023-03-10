import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Home from "./components/home/Home"
import DarkTheme from "./components/dark_theme/DarkTheme"

function App() {

  return (
    
    <div>
        <BrowserRouter>
        
          <Routes>
          <Route path="/" element={<div><Home /><DarkTheme/></div>} />
          <Route path="/login" element={<div> <Login /><DarkTheme/></div>} />
          <Route path="/register" element={<div> <Register /><DarkTheme/></div>} />
          </Routes>
      
        </BrowserRouter>
      </div>

  )
}

export default App
