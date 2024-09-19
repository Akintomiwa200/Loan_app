import React from 'react'
import "./Digital.css"
import Tree from "../../assets/Tree.png"
import Key from "../../assets/key.png"
import Man from "../../assets/man.png"
import Thumb from "../../assets/Thumb.png"
const Digital = () => {
  return (
    <div>
       <div className="digital_Container">
         <div className="inner_Digital_Container">
         <h3 className="dig_Top_text">our digital services</h3>
         <p className="Dig_P">Our new financial management solution is specially designed for cooperative societies like ours, helping you manage your finances effectively. Whether you're applying for a loan, managing your account, or simply checking your balance, everything you need is now just a few clicks away.</p>

         <div className="flex-services">
         <div className="services">
            
            <div className="box_services_1">
                 <img src={Thumb} alt="" className='digImg' />
                 <div className="inner_Box_Services">
                     <h3 className="top_Text_Serv">Secure Login & Registration</h3>
                     <p className="down_Text_Services">Enjoy a fast and secure login process with multi-factor authentication, or easily register to become a member with our user-friendly registration form.</p>
                     <p className="redText">security</p>
                 </div>
            </div>
            
            <div className="box_services_2">
                 <img src={Key} alt="" className='digImg' />
                 <div className="inner_Box_Services">
                     <h3 className="top_Text_Serv">loan service</h3>
                     <p className="down_Text_Services">Apply for loans quickly and easily. Use our loan calculator to estimate your repayments, track your application status in real-time, and upload required documents securely.</p>
                     <p className="redText">loan</p>
                 </div>
            </div>

            <div className="box_services_3">
                 <img src={Man} alt="" className='digImg' />
                 <div className="inner_Box_Services">
                     <h3 className="top_Text_Serv">customer support</h3>
                     <p className="down_Text_Services">Have a question or need assistance? Our integrated chat support and ticket system are here to help, along with direct contact information for all 49 branches..</p>
                     <p className="redText">support</p>
                 </div>
            </div>
            
            
            <div className="box_services_4">
                 <img src={Tree} alt="" className='digImg' />
                 <div className="inner_Box_Services">
                     <h3 className="top_Text_Serv">Branch locator</h3>
                     <p className="down_Text_Services">Find the nearest branch using our interactive map, or search for specific services available at each branch. You can even schedule in-person appointments.</p>
                     <p className="redText">location</p>
                 </div>
            </div>

         </div>
         </div>
         </div>
       </div>
    </div>
  )
}

export default Digital
