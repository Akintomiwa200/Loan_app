import Header from '../../components/homeui/Header';
import { NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import styles from './Upload.module.css'; // Import modular CSS

const Upload = () => {
  return (
    <div>
      <Header />
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
          </div>
        </div>

        <div className={styles.formContainer}>
          <h3 className={styles.topText}>Join Our Cooperative</h3>
          <p className={styles.formP}>Ogbomoso Ifedayo Alajo Cooperative Investment & Credit Union Limited.</p>
          <form action="">
            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Address</h3>
              <input type="text" placeholder="Address" className={styles.input} />
            </div>

            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Upload Passport</h3>
              <input type="file" className={styles.input} />
            </div>

            <button className={styles.logBtn}>
              <NavLink to="/upload" className={styles.upload}>
                Upload Documents
              </NavLink>
            </button>
            <p className={styles.downText}>
              Already have an account? <NavLink to="/Login">Sign in</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
