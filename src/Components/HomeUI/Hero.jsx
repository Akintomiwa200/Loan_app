import React , {useEffect} from 'react'
import "./Hero.css"
import HeroImg from "../../assets/HeroImg.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Hero = () => {
  useEffect(()=>{
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  })
  return (
    <div>
      <div className="hero_Display_Container"  >
         <div className="hero_Text_Box"  data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
             <h3 className="heroText">Ogbomoso Ifedayo Alajo</h3>
             <h3 className="heroText"> Cooperative Investment & </h3>
             <h3 className="heroText">Credit Union Limited</h3>

             <p className="hero_P">Empowering Financial Freedom <span className="pH">
             for All Our Members</span></p>
             
             
         <div className="Hero-Button-Container">
           <button className="hero_Btn">get started</button>
           <button className="hero_Btn">learn more</button>
        </div>
        
        
         </div>
         <img src={HeroImg} alt="" className="heroImg"  data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center" />
      </div>
      <div className="three_down_Boxes">
      
         <div className="box1">
             <h3 className="top_Text">Easy-to-use Platform</h3>
             <p className="down_text">Our website is designed with you in mind, offering a smooth user experience across all devices – desktop, tablet, and mobile.</p>
         </div>
         
         <div className="box1">
             <h3 className="top_Text">Secure & Reliable</h3>
             <p className="down_text">With top-notch security features, your data and transactions are always protected..</p>
         </div>
         <div className="box1">

             <h3 className="top_Text">Personalised Service</h3>
             <p className="down_text">Stay connected with your local branch for updates, announcements, and personalised support..</p>
         </div>
      </div>
      
    </div>
  )
}

export default Hero
