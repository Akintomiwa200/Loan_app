import React from 'react'
import "./Footer.css"
import Logo from "../../assets/Logo.png"
import Apps from "../../assets/apps.png"
const Footer = () => {
  return (
    <div>
     <div className="Footer">
         <div className="inner-red-div">
             <h3 className="Get">get started today!</h3>
             <p className="red_P">Whether you're a new member or a long-time partner of Ogbomoso </p>
             <p className="red_P">Ifedayo Alajo Cooperative, our platform is ready to serve you. </p>
            <div className="footer_Button_div">
            <button className="footerBtn">get started</button>
            <button className="footerBtn">learn more</button>
            </div>
         </div>

         <div className="inner_footer_div">
             
              <div className="footer_div">
                 <img src={Logo} alt="" />
                 <p className="downFT">Ogbomoso Ifedayo Alajo <span className="spn_FT">Cooperative Investment & Credit</span> 
                 <span className="spn_FT">Union Limited</span> 
                 </p>
                 <img src={Apps} alt="" className='App' />
              </div>

             <div className="footer_div">
                <h3 className="footer_top_text">about</h3>
                <p className="footer_downText">careers</p>
                <p className="footer_downText">blog</p>
                <p className="footer_downText">contact us</p>
                <p className="footer_downText">partnerships</p>
                <p className="footer_downText">testimonials</p>
             </div>

             <div className="footer_div">
                <h3 className="footer_top_text">admin</h3>
                <p className="footer_downText">Payment and Refund Policy</p>
                <p className="footer_downText">Privacy Policy</p>
                <p className="footer_downText">Terms & Condition</p>
                <p className="footer_downText">Cookies Policy</p>
             </div>
             
             <div className="footer_div">
                <h3 className="footer_top_text">Help</h3>
                <p className="footer_downText">Customer Support</p>
                <p className="footer_downText">FAQ</p>
                <p className="footer_downText">Account Help</p>
                <p className="footer_downText">Feedback</p>
             </div>

         </div>
     </div>
    </div>
  )
}

export default Footer
