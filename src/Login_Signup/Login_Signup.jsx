import React, {useContext} from "react";
import "./Login_Signup.css";
import Sign_Img from "./img/signUp.PNG";
import Signup from "./Signup";
import Login from "./Login";
import { Create_context } from '../Contexts/CreateContext';
// import { Create_context } from "../Contexts/NoteContext";



const Login_Signup = (props) => {

    const context = useContext(Create_context);
    const { login_signup } = context;

    return (
        <>
            <div className="container_imgback">
                <div className="alert_space">

                </div>
                <div className="cards">
                    <div className="image">
                        <img src={Sign_Img} alt="Sign" />
                    </div>
                    {login_signup === "true" ? <Signup /> : <Login />}
                </div>
            </div>
        </>
    )

}

export default Login_Signup;