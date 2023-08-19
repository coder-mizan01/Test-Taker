import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [email , setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit =  async (e) =>{
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/login',{email,password})
      if(res.data.success){
        alert(res.data.message)
      }else{
        console.log(res.data.message);
      }
    } catch (error) {
      
    }
  }
  return (
    <>
    <h2>This is Login page</h2>
      <form onSubmit={handleSubmit}>
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
          Dont have an account
          <Link to="/register">Register please</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
