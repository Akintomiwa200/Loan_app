import House from "../../assets/House.png";
import Header from "../../components/homeui/Header";
import Footer from "../../components/homeui/Footer";
import { FaArrowRight } from 'react-icons/fa6';
import styles from "./Login.module.css"; // Import modular CSS

const Login = () => {
  return (
    <div>
      <Header />
      <div className={styles.generalFormContainer}>
        <img src={House} alt="" className={styles.formImg} />
        <div className={styles.formContainer}>
          <h3 className={styles.formTopText}>welcome back</h3>
          <p className={styles.formP}>Ogbomoso Ifedayo Alajo Cooperative Investment & Credit Union Limited.</p>
          <form action="">
            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Email</h3>
              <input type="email" placeholder="email" className={styles.input} />
            </div>
            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>password</h3>
              <input type="password" placeholder="password" className={styles.input} />
            </div>
            <div className={styles.chckDiv}>
              <div className={styles.inputDiv}>
                <input type="checkbox" />
                <label htmlFor=""> remember me</label>
              </div>
              <p className={styles.forgot}>forgot password?</p>
            </div>
            <button className={styles.logBtn}>
              sign in <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
