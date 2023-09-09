import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/AuthRedux";
import { Link } from "react-router-dom";

//css
import "../CSS/Login.css"

const Login = () => {

  const [email , setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch(); // Get dispatch function
  const handleSubmit =  async (e) =>{
    
    e.preventDefault();
    try {
      const res = await axios.post('https://lazy-jade-binturong-belt.cyclic.app/login',{email,password})
      if(res.data.success){

        dispatch(
          setUser({
            email: res.data.user.email,
            token: res.data.user.token,
          })
        );
        localStorage.setItem("authEmail", JSON.stringify(res.data.user.email));
        localStorage.setItem('authToken',JSON.stringify(res.data.user.token))
        alert(res.data.message);
        
      }else{
        console.log(res.data.message);
      }
    } catch (error) {
      
    }
  }
  return (
    <>
    <h2 style={{textAlign:'center',marginTop:'20px'}}>This is Login page</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autoComplete='none'
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            className="form-control"
            id="exampleInputPassword1"
            autoComplete='none'
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>
          Dont have an account&nbsp;
          <Link to="/register">Register please</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
