
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Firebase Auth methods
import House from "../../assets/House.png";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./Login.module.css"; // Import modular CSS

const LogIn = () => {
  const navigate = useNavigate();
  const auth = getAuth(); // Initialize Firebase Auth

  // State for form input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error messages

  // Input validation
  const validateForm = () => {
    if (!email || !password) {
      setError("Both fields are required");
      return false;
    }

    // Email validation (simple regex for format checking)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return false;
    }

    return true;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading page
    setError(""); // Reset error state

    if (validateForm()) {
      try {
        // Sign in with Firebase Auth
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Redirect to dashboard after successful login
        if (user) {
          navigate("/dashboard");
        }
      } catch (error) {
        // Handle login errors
        if (error.code === "auth/user-not-found") {
          setError("No user found with this email");
        } else if (error.code === "auth/wrong-password") {
          setError("Incorrect password");
        } else {
          setError("Login failed. Please try again.");
        }
      }
    }
  };

  const handleForget = () => {
    navigate("/forget")
  }

  return (
    <div className={styles.sigN}>
      <div className={styles.generalFormContainer}>
        <img src={House} alt="" className={styles.formImg} />
        <div className={styles.formContainer}>
          <h3 className={styles.formTopText}>welcome back👋</h3>
          <p className={styles.formP}>Ogbomoso Ifedayo Alajo Cooperative Investment & Credit Union Limited.</p>

          <form onSubmit={handleSubmit}>
            {error && <p className={styles.errorMsg}>{error}</p>} {/* Display error message */}
            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Email address</h3>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Password</h3>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.chckDiv}>
              <div className={styles.inputDiv}>
                <input type="checkbox" />
                <label htmlFor=""> remember me</label>
              </div>
              <p className={styles.forgot} onClick={handleForget}>forgot password?</p>
            </div>
            <button className={styles.LogBTn} type="submit">
              sign in <FaArrowRight />
            </button>

            <p className={styles.downText}>
              Already have an account? <NavLink className={styles.click} to="/signup">Create an Account</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
