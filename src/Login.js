import React from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Secondapp from "./Secondapp";
function Login() {
  const navigate=useNavigate();
  const [name_value, setName] = useState("");
  const [pass_value, setPass] = useState("");
  const getName = (e) => {
    let n = e.target.value;
    setName(n);
  };
  const getPass = (e) => {
    let p = e.target.value;
    setPass(p);
  };
  const submitData = (e) => {
    e.preventDefault();
    setName("");
    setPass("");
    alert("Login");
  };
  const moveother=()=>{
navigate('/Secondapp');
  }
  return (
    <div className="Loginmodule">
      <form onSubmit={submitData}>
        <div className="Uname Set">
          <label>Enter Username</label>
          <input type="text" value={name_value} onChange={getName}></input>
        </div>
        <div className="Password Set">
          <label>Enter Password</label>
          <input type="password" value={pass_value} onChange={getPass}></input>
        </div>
        <button id="loginbtn" onClick={moveother}>Login</button>
      </form>
      <h5>or</h5>
      <a href="#" id="Signup">
        Sign up!
      </a>
    </div>
  );
}

export default Login;
