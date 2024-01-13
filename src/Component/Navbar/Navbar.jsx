import { useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import "./navbar.css";

const Navbar = () => {
    const [btn, setBtn]= useState(false);

    const handleBtn =(value)=>{
        setBtn(value);
        console.log(value)
    }


    return (
        <>
            <div className="navbar project-width">
            <div className="logo">
                <img src={logo} alt="" />
                <p>Nayzers.</p>
            </div>
            <ul className={btn === true? "navLink active" : "navLink"}>
                <li><a href="#home" >Home</a></li>
                <li><a href="#features" >Features</a></li>
                <li><a href="#Pricing" >Pricing</a></li>
                <li><a href="#AboutUs" >About us</a></li>
            </ul>
            <div>
            <Button>
                Download
            </Button>
            </div>
        </div>
            <div id="slide-btn" onClick={()=> handleBtn(!btn)}>
                <i className={btn === true? "fa-solid fa-xmark": "fa-solid fa-bars"}></i>     
            </div>
        </>
    );
};

export default Navbar;