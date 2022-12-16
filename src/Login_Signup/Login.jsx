import React, { useState } from 'react';
import "./Login.css";
// import { Link } from 'react-router-dom';


const Login = (props) => {

  const [loginValue, setloginValue] = useState({
    email: "",
    password:"",
  })

  function handlechange(event){
    const {name, value } = event.target;
    setloginValue({ ...loginValue, [name]: value });

  }

  return (
    <>
      <div className="right_form">
        <div className="heading">
          <h2>Welcome to Login Form</h2>
        </div>

        <div className="input_Form">
          <form>
            <input className="input_field" type="text" name="email" id="Email" required onChange={handlechange} />
            <label htmlFor="Email" className="lemail">Email
            </label>
            <input className="input_field" name="password" type="text" id="Password" required onChange={handlechange} />
            <label htmlFor="Password" className="lpassword" min="8" >Password
            </label>
            <button className="submit" type="Submit">Login </button>
          </form>
        </div>
        <div className="other" >
          Forget Your Password
        </div>
      </div>
    </>
  )
}

export default Login