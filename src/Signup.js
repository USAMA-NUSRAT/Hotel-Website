import React from "react";
import Login from "./Login";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Axios  from "axios";
import "./Signup.css";
// import { useNavigate } from "react-router-dom";
function Signup() {
  let navigate=useNavigate();
  const [messagee, setMessage] = useState("");
  const[dataa,setData]=useState({
      uname:"",
      email:"",
      pass:"",
      cpass:""

  });
    // const navigate=useNavigate();
  // const Handler = (e) => {
  //     // e.preventDefault();
  //     const newdata={
  //       uname:data.uname,
  //       email:data.email,
  //       pass:data.pass,
  //       cpass:data.cpass
  //   }
  //     // console.log(newdata);
     
  //   // navigate('/')
  // };
  const sendData=(e)=>{
    e.preventDefault();
    console.log(dataa);

    Axios.post("http://localhost/PHP_React/index.php", dataa).then((result)=>{
      if(result){
        setMessage(result.data.messagee);
          // alert(result.);
          console.log(result);
      }
     //  else{
     // //      navigate("/Login");
     // //  }
       }).catch((err)=>{
         console.log(console.err);
       });
  }
  const Handlevalue=(e)=>{
    setData({...dataa, [e.target.name]:e.target.value});
    // console.log(e);
  }
  const moveSignin=()=>{
    navigate('/');
  }
  return (
    <div className="mainn">
      <h1 id="Signup">Sign up</h1>
      <form  onSubmit={sendData}>
        <div className="name stylee">
          <label htmlFor="uname">Enter Name*</label>
          <input type="text"  id="uname" className="inpuut" required value={dataa.uname}  name="uname" onChange={Handlevalue}></input>
        </div>
        <div className="email stylee">
          <label htmlFor="mail">Enter mail*</label>
          <input type="email"  id="mail" className="inpuut" required value={dataa.email}  name="email" onChange={Handlevalue}></input>
        </div>
        <div className="pass stylee">
          <label htmlFor="password">Enter Password*</label>
          <input   type="password" className="inpuut" id="password" required value={dataa.pass}  name="pass" onChange={Handlevalue}></input>
        </div>
        <div className="cpass stylee">
          <label htmlFor="cpassword">Enter Confirm passsword*</label>
          <input type="password" className="inpuut" id="cpassword" required value={dataa.cpass}  name="cpass" onChange={Handlevalue} ></input>
        </div>

        <br />
        <button onClick={moveSignin} >Sign up</button>
      </form>
      <p>{messagee}</p>
    </div>
  );
}

export default Signup;
