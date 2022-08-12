import React from "react";
import "./Contactt.css";
import { useState } from "react";
import Menubar from "./Menubar";
import Footer from "./Footer";
function Contactt() {
  const [inputvalues, setinputvales] = useState({
    name: "",
    email: "",
    pno: "",
    textmesg: "",
  });
  const chngValues = (e) => {
    setinputvales({ ...inputvalues, [e.target.name]: e.target.value });
  };
  return (
    <>
    <div className="container">
      {/* <div className='sidebar'></div> */}
      <Menubar />
      <div className="head">
        <center>
          <h1>Get in touch</h1>
        </center>
        <center>
          <p>
            <b>Phone:</b> 021-6521478
          </p>
        </center>
        <p>
          <b>Address:</b> 18 Mahmood Azmy street,beech Karachi
        </p>
      </div>
      <div className="contacttt">
        <form className="inputform">
          <div className="inputlabel">
            <div className="fname sttyle">
              <label for="name"> Entre name</label>
              <input name="name" type="text" id="name"></input>
            </div>
            <div className="pnumber sttyle">
              <label for="number"> Enter Phone number</label>
              <input name="pno" type="text" id="number"></input>
            </div>
            <div className="email sttyle">
              <label for="mail"> Enter Email:</label>
              <input
                name="email"
                type="email"
                id="mail"
                required
                onChange={chngValues}
              ></input>
            </div>
          </div>
          <div className="textbar">
            <div className="messg sttyle">
              <label for="textmesg"> Enter messege</label>
              <textarea
                name="textmesg"
                className="textmesg"
                rows={10}
                cols={35}
              ></textarea>
            </div>
          </div>

          <button id="sendmesg">Send messege</button>
        </form>
      </div>
     
    </div>
     <Footer />
     </>
  );
}

export default Contactt;
