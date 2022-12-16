import React from "react";
import "./Signup.css"
import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Identity } from "@mui/base";

const Signup = () => {

    const [form_Value, setForm_Value] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm_Value({ ...form_Value, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let name = form_Value.name;
        let email = form_Value.email;
        let password = form_Value.password;
        let cpassword = form_Value.cpassword;
        if (name !== "" && name.length > 2 && name.length < 15){
            if (/\S@+\S\.com/i.test(email)){
                if (/[a-zA-z]/.test(password) && /[@#$%^&*!]/.test(password)) {
                    if (password === cpassword) {
                        console.log("success");
                    }
                    else {
                        console.log("flase");
                    }
                }
            }
        }
        else {
            console.log("error");
        }
    }

    return (
        <>
            <div className="right_form">
                <div className="heading">
                    <h2>Welcome to SignUp Form</h2>
                </div>

                <div className="all_form">
                    <form onSubmit={handleSubmit}>
                        <input className="input_field input1" id="name" name="name" type="text" value={form_Value.name} onChange={handleChange} />
                        <label htmlFor="name" className="Sname" >name
                        </label>
                        <input className="input_field" type="text" value={form_Value.email} onChange={handleChange} name="email" id="Email" />
                        <label htmlFor="Email" className="Semail">Email
                        </label>
                        <input className="input_field" name="password" type="text" value={form_Value.password} onChange={handleChange} id="Password" />
                        <label htmlFor="Password" className="Spassword" min="8" >Password
                        </label>
                        <input className="input_field" name="cpassword" type="text" value={form_Value.cpassword} onChange={handleChange} id="CPassword" />
                        <label htmlFor="CPassword" className="cpassword">C Password
                        </label>
                        <button className="submit" type="Submit">SignUp </button>
                    </form>
                </div>
                <div className="other" >

                </div>
            </div>


        </>
    )
}

export default Signup; 