import "./Room.css";
import React from "react";
import Menu from "./Menubar";
import img1 from "./room-1.jpeg";
import img2 from "./room-2.jpeg";
import img3 from "./room-3.jpeg";
import img4 from "./room-4.jpeg";
import img5 from "./room-5.jpeg";
import img6 from "./room-6.jpeg";
import img7 from "./room-7.jpeg";
import img8 from "./room-8.jpeg";
import img9 from "./room-9.jpeg";
import img10 from "./room-10.jpeg";
import img11 from "./room-11.jpeg";
import img12 from "./room-12.jpeg";
import Footer from "./Footer";

function Room() {
  return (

    
    <div className="contain">
      <Menu/>
      <div className="divimg1">
        <div className="img1">
          <img src={img1}></img>
          <center>
          <h2>Room no: 12</h2>
          <p>Price:2000/-</p>
          <p>Availabe</p>
          </center>
        </div>
        <div className="img2">
          <img src={img2}></img>
          <center>
          <h2>Room no: 22</h2>
          <p>Price:2500/-</p>
          <p>Availabe</p>
          </center>
        </div>
        <div className="img3">
          <img src={img3}></img>
          <center>
          <h2>Room no: 17</h2>
          <p>Price:3000/-</p>
          <p>Reserve</p>
          </center>
        </div>
      </div>
      <div className="divimg1">
      <div className="img4">
        <img src={img4}></img>
        <center>
          <h2>Room no: 44</h2>
          <p>Price:1700/-</p>
          <p>Availabe</p>
          </center>
        </div>
        <div className="img5">
        <img src={img5}></img>
        <center>
          <h2>Room no: 67</h2>
          <p>Price:4000/-</p>
          <p>Availabe</p>
          </center>
        </div>
        <div className="img6">
        <img src={img6}></img>
        <center>
          <h2>Room no: 88</h2>
          <p>Price:3500/-</p>
          <p>Reserve</p>
          </center>
        </div>
      </div>
      <div className="divimg1">
      <div className="img7">
        <img src={img7}></img>
        <center>
          <h2>Room no: 25</h2>
          <p>Price:1500/-</p>
          <p>Availabe</p>
          </center>
        </div>
        <div className="img8">
        <img src={img8}></img>
        <center>
          <h3>Room no: 29</h3>
          <p>Price:4500/-</p>
          <p>Reserve</p>
          </center>
        </div>
        <div className="img9">
        <img src={img9}></img>
        <center>
          <h2>Room no: 31</h2>
          <p>Price:3000/-</p>
          <p>Availabe</p>
          </center>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
}

export default Room;
