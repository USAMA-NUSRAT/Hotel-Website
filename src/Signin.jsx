import React from 'react'
import "./enter.css";
import { useState } from 'react';
import { Axios } from 'axios';
import {useNavigate } from 'react-router-dom';
function Signin() {
    const [values, setValues]=useState({
        username: "",
        userpass: ""
    });
    let navigate=useNavigate();
    const [mesg, setmesg]=useState("");
    // const sendd=()=>{
    //     console.log(values);
    //     // Axios.post("http://localhost/PHP_React/Login.php", values).then((result)=>{
    //     //   if(result){
    //     //     setmesg(result.data.messeg);
    //     //     console.log(result);
    //     //       // alert(result.);
    //     //   }
    //      //  else{
    //      // //      navigate("/Login");
    //      // //  }
    //     //    });
    // }
    const getData = (e) => {
        e.preventDefault();
        console.log(values);
        alert("no g");
        Axios.post("http://localhost/PHP_React/Login.php", values).then((result)=>{
            if (result) {
                setmesg(result.data.messeg);
                alert(result);
                console.log(result);
            }
            else {
                // navigate("/Login");
                alert("login");
            }
        });
    }
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    const moveOther=()=>{
        alert(" Signup page");
        navigate('/Signup');
    }
    const moveMain=()=>{
        alert(" Signup page");
        navigate('/Secondapp');
    }
    return (
        <div className='main'>
            <div className='signinside'>
                <form className='inputform' onSubmit={getData}>

                    <h1>Login to your account</h1>
                    <input type="text" placeholder="Username" name='username' value={values.username} onChange={handleChange}></input>
                    <input type="password" placeholder="Password" name='userpass' value={values.userpass} onChange={handleChange}></input>
                    <p>{mesg}</p>
                    <button onClick={moveMain}>Sign in</button>
                </form>
            </div>
            <div className='signupside'>
                <div className='insignup'>
                    <h2>New Here?</h2>
                    <p>Sign up and discover a great amount of new opportunities</p>
                    <button id='signupp' onClick={moveOther}>Signup</button>
                </div>

            </div>
        </div>
    )
}

export default Signin