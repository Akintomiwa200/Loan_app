


import { useEffect } from 'react';
import styles from './Hero.module.css'; // Import the CSS module
import HeroImg from '../../assets/HeroImg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({

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
    <div className={styles.main}>
      <div className={styles.hero_Display_Container}>
        <div className={styles.hero_Text_Box}
        // data-aos="fade-right"
        // data-aos-offset="200"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="true"
        // data-aos-anchor-placement="top-center"
        >
          <h3 className={styles.heroText}>Ogbomoso Ifedayo Alajo</h3>
          <h3 className={styles.heroText}>Cooperative Investment &</h3>
          <h3 className={styles.heroText}>Credit Union Limited</h3>
          <p className={styles.hero_P}>
            Empowering Financial Freedom <span className={styles.pH}>for All Our Members</span>
          </p>

          <div className={styles.Hero_Button_Container}>
            <button className={styles.hero_Btn}>get started</button>
            <button className={styles.hero_Btn}>learn more</button>
          </div>
        </div>

        <img src={HeroImg} alt="" className={styles.heroImg}
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        />
      </div>

      <div className={styles.three_down_Boxes}>
        <div className={styles.box1}>
          <h3 className={styles.top_Text}>Easy-to-use Platform</h3>
          <p className={styles.down_text}>
            Our website is designed with you in mind, offering a smooth user experience across all devices – desktop, tablet, and mobile.
          </p>
        </div>
        <div className={styles.box1}>
          <h3 className={styles.top_Text}>Secure & Reliable</h3>
          <p className={styles.down_text}>With top-notch security features, your data and transactions are always protected.</p>
        </div>
        <div className={styles.box1}>
          <h3 className={styles.top_Text}>Personalised Service</h3>
          <p className={styles.down_text}>Stay connected with your local branch for updates, announcements, and personalised support.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
