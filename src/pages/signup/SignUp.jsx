import Header from "../../components/homeui/Header";
import Footer from "../../components/homeui/Footer";
import { FaStar, FaFileUpload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./SignUp.module.css"; // Import modular CSS

const SignUp = () => {
  return (
    <div>
      <Header />
      <div className={styles.sigN}>
        <div className={styles.aside}>
          <div className={styles.asideInnerDiv}>
            <p className={styles.star}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </p>
            <p className={styles.lorem}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt voluptatum eveniet blanditiis molestias quos ipsam nisi illum? Qui debitis nulla sunt! Tempora praesentium error, aperiam a dignissimos soluta consectetur.
              Excepturi doloribus amet a natus, dignissimos numquam quia deleniti eveniet pariatur fugiat? Repellendus tempora, beatae deleniti ullam quae officiis delectus, corporis enim quasi dolore ipsa eos, rem perferendis possimus voluptas.
            </p>
          </div>
        </div>
        <div className={styles.formContainer}>
          <h3 className={styles.topText}>Join Our Cooperative</h3>
          <p className={styles.formP}>Ogbomoso Ifedayo Alajo Cooperative Investment & Credit Union Limited.</p>
          <form action="">
            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Email</h3>
              <input type="email" placeholder="email" className={styles.input} />
            </div>

            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Password</h3>
              <input type="password" placeholder="password" className={styles.input} />
            </div>
            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Re-enter Password</h3>
              <input type="password" placeholder="password" className={styles.input} />
            </div>
            <button className={styles.logBtn}>
              <NavLink to="/upload" className={styles.upload}>
                Upload Documents <FaFileUpload />
              </NavLink>
            </button>
            <p className={styles.downText}>
              Already have an account? <NavLink to="/Login">Sign in</NavLink>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
