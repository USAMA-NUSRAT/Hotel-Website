import React from "react";
import "./Menu.css";
import logo from "./logoo.png";
import NewLogo from "./Newlogo.png";
import { Link } from "react-router-dom";
function Menubar() {
  return (
    <div className="menu-bar">
      <div className="logo">
        <img src={NewLogo} alt="logo-image"></img>
      </div>
      <ul>
        <li>
          <Link to="/h"> Home</Link>
        </li>
        <li>
          {/* {" "} */}
          <Link to="/rooms"> Rooms</Link>{" "}
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
        <li>
          <Link to="/bookrooms"> BookRoom</Link>
        </li>
      </ul>
      <div className="searchbar">
        <input type="search" id="searchh" placeholder="Search..."></input>
       
      </div>
    </div>
  );
}

export default Menubar;
