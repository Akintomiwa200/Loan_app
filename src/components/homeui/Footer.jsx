import styles from "./Footer.module.css"; // Import modular CSS
import Logo from "../../assets/Logo.png";
import Apps from "../../assets/apps.png";

const Footer = () => {
  return (
    <div>
      <div className={styles.Footer}>
        <div className={styles.innerRedDiv}>
          <h3 className={styles.Get}>get started today!</h3>
          <p className={styles.redP}>Whether you&apos;re a new member or a long-time partner of Ogbomoso</p>
          <p className={styles.redP}>Ifedayo Alajo Cooperative, our platform is ready to serve you.</p>
          <div className={styles.footerButtonDiv}>
            <button className={styles.footerBtn}>get started</button>
            <button className={styles.footerBtn}>learn more</button>
          </div>
        </div>

        <div className={styles.innerFooterDiv}>
          <div className={styles.footerDiv}>
            <img src={Logo} alt="" />
            <p className={styles.downFT}>
              Ogbomoso Ifedayo Alajo{" "}
              <span className={styles.spnFT}>Cooperative Investment & Credit</span>
              <span className={styles.spnFT}>Union Limited</span>
            </p>
            <img src={Apps} alt="" className={styles.App} />
          </div>

          <div className={styles.footerDiv}>
            <h3 className={styles.footerTopText}>about</h3>
            <p className={styles.footerDownText}>careers</p>
            <p className={styles.footerDownText}>blog</p>
            <p className={styles.footerDownText}>contact us</p>
            <p className={styles.footerDownText}>partnerships</p>
            <p className={styles.footerDownText}>testimonials</p>
          </div>

          <div className={styles.footerDiv}>
            <h3 className={styles.footerTopText}>admin</h3>
            <p className={styles.footerDownText}>Payment and Refund Policy</p>
            <p className={styles.footerDownText}>Privacy Policy</p>
            <p className={styles.footerDownText}>Terms & Condition</p>
            <p className={styles.footerDownText}>Cookies Policy</p>
          </div>

          <div className={styles.footerDiv}>
            <h3 className={styles.footerTopText}>Help</h3>
            <p className={styles.footerDownText}>Customer Support</p>
            <p className={styles.footerDownText}>FAQ</p>
            <p className={styles.footerDownText}>Account Help</p>
            <p className={styles.footerDownText}>Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
