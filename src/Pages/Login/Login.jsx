import React from 'react'
import House from "../../assets/House.png"
import Header from "../../Components/HomeUI/Header"
import Footer from "../../Components/HomeUI/Footer"
import { FaArrowRight } from 'react-icons/fa6'
import "./Login.css"
const Login = () => {
  return (
    <div>
        <Header/>
        <div className="General_Form_Container">
        <img src={House} alt="" className='formImg' />
       <div className="formContainer">
        <h3 className="form_top_text">welcome back</h3>
        <p className="formP">Ogbomoso Ifedayo Alajo Cooperative Investment & Credit Union Limited.</p>
         <form action="">
            <div className="inputDiv">
                 <h3 className="inputText">Email </h3>
                 <input type="email" placeholder='email' className='input' />
            </div>
            <div className="inputDiv">
                 <h3 className="inputText">password</h3>
                 <input type="password" placeholder='password' className='input' />
            </div>
             <div className="chckDiv">
                <div className="inputDiv">
                <input type="checkbox" />
                <label htmlFor=""> remember me</label>
                </div>
                <p className="forgot">forgot password ?</p>
             </div>
              <button className="LogBTn">sign in <FaArrowRight className='arrowIcon'/> </button>
         </form>
       </div>
      
        </div>
        <Footer/>
    </div>
   
  )
}

export default Login
