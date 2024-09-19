import React , {useState , useEffect} from 'react'
import "./Header.css"
import { FaTelegramPlane } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/Logo.png"
const Header = () => {
  return (
    <div>
        <div className="header">
       <img src={Logo} alt="" />
       <div className="Nav_Container">
        <a href="#">about</a>
        <a href="#">community</a>
        <a href="#">F.A.Q</a>
        <a href="#">Career</a>
       </div>
        <div className="Button-Container">
           <button className="header_Btn"><NavLink to="/Login">sign in </NavLink></button>
           <button className="header_Btn"><NavLink to="/Signup">sign up </NavLink></button>
        </div>
        </div>
    </div>
  )
}

export default Header
