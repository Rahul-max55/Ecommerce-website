import React, { useState } from "react";
import "./Login.css";
// import { Link } from 'react-router-dom';

const Login = (props) => {
  const [loginValue, setloginValue] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
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
            <input
              placeholder="Email"
              className="input_field"
              type="text"
              name="email"
              id="Email"
              required
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              className="input_field"
              name="password"
              type="text"
              id="Password"
              required
              onChange={handleChange}
            />
            <button className="submit" type="Submit">
              Login
            </button>
          </form>
        </div>
        {/* <div className="other">Forget Your Password</div> */}
      </div>
    </>
  );
};

export default Login;
