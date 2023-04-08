import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Game from "./components/gamepage/GamePage"
import Contactus from "./components/contactus/Contactus"
import ReviewPanel from "./components/reviewpanel/ReviewPanel";
import Profile from "./components/profile/Profile"

function App() {

  return (

    <div>
        <BrowserRouter>
        
          <Routes>
          <Route path="/" element={<div><Navbar/><Home/></div>} />
          <Route path="/login" element={<div> <Navbar/><Login /></div>} />
          <Route path="/register" element={<div> <Navbar/><Register /></div>} />
          <Route path="/chess" element={<Game />}/>
          <Route path="/contactus" element={<div> <Navbar/><contactus /></div>} />
          <Route path="/reviewpanel" element={<div> <Navbar/><ReviewPanel /></div>} />
          <Route path="/profile" element={<div> <Profile /></div>} />
          </Routes>
      
        </BrowserRouter>
      </div>

  )
}

export default App