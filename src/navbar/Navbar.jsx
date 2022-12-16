import React, { useContext } from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "./img/shopCenternew.jpg";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { BsCartPlusFill } from "react-icons/bs";
// import { Create_context } from "../Contexts/NoteContext";
import { Create_context } from '../Contexts/CreateContext';
import { CartCreateContext } from "../Add_Cart/Cart_Context/Cart_Create_Context";
// import { useEffect } from 'react';



const Navbar = (props) => {

    // Finding the login signUp value using CreateContext
    const context = useContext(Create_context);
    let { change_logSign, login_signup } = context;
    // End Finding the login signUp value using CreateContext


    // Finding the value of cart using create cart context
    const cart_context = useContext(CartCreateContext);
    let { cart } = cart_context;
    let productQuantity = cart.length;
    // End Finding the value of cart using create cart context


    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <nav className='navbar'>
                        <ul>
                            <li> <NavLink to="/"> Home</NavLink></li>
                            <li> <NavLink to="/About"> About Clothes</NavLink></li>
                            <li> <NavLink to="/Main_Products_page"> Products Clothes</NavLink></li>
                            <li> <NavLink to="/Contact"> Contact</NavLink></li>
                        </ul>
                    </nav>
                    <div className="icons">
                        <button onClick={change_logSign}>
                            <NavLink to="/Login_signup" style={{ color: "white" }} >
                                {login_signup === "true" ? "Login" : "SignUp"}
                            </NavLink>
                        </button>
                        <a href="/">
                            <TwitterIcon />
                        </a>
                        <a href="/">
                            <FacebookIcon />
                        </a>
                        <NavLink to="/Add_to_cart" className="Cart_Icon" >
                            <BsCartPlusFill />
                            <div className="total_items">
                                {productQuantity}
                            </div>
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar