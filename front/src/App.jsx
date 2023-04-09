import { BrowserRouter, Routes, Route} from "react-router-dom";
import {React , useState} from "react";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Game from "./components/gamepage/GamePage"
import OnlineChess from "./components/gamepage/OnlineGame"
import Contactus from "./components/Contactus/contactus"
import ReviewPanel from "./components/reviewpanel/ReviewPanel";
import Profile from "./components/profile/Profile"
import Review from "./components/gamepage/Review"

function App() {
  const [moves, setMoves] = useState([]);
  return (

    <div>
        <BrowserRouter>
        
          <Routes>
          <Route path="/" element={<div><Navbar/><Home/><Contactus/></div>} />
          <Route path="/login" element={<div> <Navbar/><Login /></div>} />
          <Route path="/register" element={<div> <Navbar/><Register /></div>} />
          <Route path="/chess" element={<div><Navbar/><Game /></div>}/>
          <Route path="/online-chess" element={<div><Navbar/><OnlineChess setMoves={setMoves}/></div>}/>
          <Route path="/review" element={<div><Navbar/><Review moves={moves}/></div>}/>
          <Route path="/contactus" element={<div> <Navbar/><Contactus/></div>} />
          <Route path="/reviewpanel" element={<div> <Navbar/><ReviewPanel /></div>} />
          <Route path="/profile" element={<div> <Navbar/><Profile /></div>} />
          </Routes>
      
        </BrowserRouter>
      </div>

  )
}

export default App