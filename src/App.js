import logo from "./logo.svg";
// import "./App.css";
import Menu from "./Menubar";
import Home from "./Home";
import Login from "./Login";
import React from "react";
import Room from "./Room";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import BookRooms from "./BookRooms";
import Contactt from "./Contactt";
import Signin from "./Signin";
import Secondapp from "./Secondapp";
import { useState } from "react";
function App() {
  const[stat,setstat]=useState(false);
  return (
    <>
      
        
       <Routes> 
         <Route exact path="/" element={<Signin />} />
         <Route exact path="/Signup" element={<Signup />} />
         <Route exact path="/Secondapp" element={<Secondapp />} />
         <Route exact path="/h" element={<Home />} />
        <Route exact path="/rooms" element={<Room />} />
        <Route exact path="/contact" element={<Contactt />} />
        <Route exact path="/bookrooms" element={<BookRooms />} />
      
      </Routes>
      {/* <BrowserRouter>
      <Secondapp/>
      </BrowserRouter> */}
     
    </>
  );
}

export default App;
