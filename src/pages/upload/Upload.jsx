// import Header from '../../components/homeui/Header';
// import Footer from "../../components/homeui/Footer";
import { NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
// import { getStorage, ref, uploadBytes } from 'firebase/storage'; // Import Firebase Storage
import styles from './Upload.module.css'; // Import modular CSS

const Upload = () => {


  return (
    <div className={styles.main}>
      {/* <Header /> */}
      <div className={styles.uploadD}>
        <div className={styles.aside}>
          <div className={styles.asideInnerDiv}>
            <p className={styles.star}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </p>
            <p className={styles.lorem}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt voluptatum eveniet blanditiis molestias quos ipsam nisi illum? Qui debitis nulla sunt! Tempora praesentium error, aperiam a dignissimos soluta consectetur.
              Excepturi doloribus amet a natus, dignissimos numquam quia deleniti eveniet pariatur fugiat? Repellendus tempora, beatae deleniti ullam quae officiis delectus, corporis enim quasi dolore ipsa eos, rem perferendis possimus voluptas.
            </p>
            <div className={styles.peep}>
              <div>
                <img src="" alt="man" />
              </div>
              <div>
                <h2>
                  fdgkjgjfhgjkf
                </h2>
                <em>Co-Founder Cesign.co</em>
              </div>
            </div>
            <div className={styles.slider}>
              <span className={styles.actively}></span>
              <span className={styles.slided}></span>
              <span className={styles.slided}></span>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <h3 className={styles.topText}>Join Our Cooperative</h3>
          <p className={styles.formP}>Ogbomoso Ifedayo Alajo Cooperative Investment & Credit Union Limited.</p>
          <form >
            {/* {error && <p className={styles.errorMsg}>{error}</p>} Display error message */}
            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Address</h3>
              <input
                type="text"
                placeholder="Address"
                // value={address}
                // onChange={(e) => setAddress(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Upload Passport</h3>
              <input
                type="file"
              // onChange={handleFileChange}

              />
            </div>

            <button className={styles.LogBTn} type="submit">
              Upload Documents
            </button>
            <p className={styles.downText}>
              Already have an account? <NavLink className={styles.link} to="/Login">Sign in</NavLink>
            </p>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Upload;
