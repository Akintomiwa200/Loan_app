
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Firebase Auth for user registration
import { FaStar, FaFileUpload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./SignUp.module.css"; // Import modular CSS

const SignUp = () => {
  // const navigate = useNavigate();
  // const auth = getAuth(); // Initialize Firebase Auth

  // // State for form input and error handling
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState(""); // To store error messages

  // // Input validation function
  // const validateForm = () => {
  //   if (!email || !password || !confirmPassword) {
  //     setError("All fields are required");
  //     return false;
  //   }

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     setError("Please enter a valid email");
  //     return false;
  //   }

  //   if (password.length < 6) {
  //     setError("Password should be at least 6 characters long");
  //     return false;
  //   }

  //   if (password !== confirmPassword) {
  //     setError("Passwords do not match");
  //     return false;
  //   }
  //   if (name) {
  //     setError("Please enter a valid Name");
  //     return false;
  //   }

  //   return true;
  // };

  // // Handle sign-up form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError(""); // Reset error state

  //   if (validateForm()) {
  //     try {
  //       // Create a new user with Firebase Authentication
  //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //       const user = userCredential.user;

  //       // Navigate to document upload page after successful registration
  //       if (user) {
  //         navigate("/upload");
  //       }
  //     } catch (error) {
  //       // Handle Firebase sign-up errors
  //       switch (error.code) {
  //         case "auth/email-already-in-use":
  //           setError("The email address is already in use");
  //           break;
  //         case "auth/weak-password":
  //           setError("The password is too weak");
  //           break;
  //         default:
  //           setError("Sign-up failed. Please try again.");
  //           break;
  //       }
  //     }
  //   }
  // };

  return (
    <div>
      {/* <Header /> */}
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
          <div className={styles.progress}>progress bar:
            <div className={styles.myProgress}>
              <div className={styles.myBar}></div>
            </div>
          </div>
          <form
          // onSubmit={handleSubmit}>
          // {error && <p className={styles.errorMsg}>{error}</p>} {/* Display error message */}>
          >
            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>First & Last Name</h3>
              <input
                type="text"
                placeholder="full name"
                // value={email}
                // onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />
            </div>



            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Email</h3>
              <input
                type="email"
                placeholder="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Password</h3>
              <input
                type="password"
                placeholder="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Re-enter Password</h3>
              <input
                type="password"
                placeholder="password"
                // value={confirmPassword}
                // onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
              />
            </div>

            <button className={styles.LogBTn} type="submit">
              Upload Documents <FaFileUpload />
            </button>

            <p className={styles.downText}>
              Already have an account? <NavLink className={styles.click} to="/Login">Sign in</NavLink>
            </p>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SignUp;
