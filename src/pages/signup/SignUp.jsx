
// import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { FaStar, FaFileUpload } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import styles from "./SignUP.module.css";
// import firebase from "../../utils/firebase"; // Ensure the path to your Firebase config is correct

// const SignUp = () => {
//   const { auth } = firebase; // Ensure you're accessing auth from the imported firebase object
//   const navigate = useNavigate();

//   // State for form input and error handling
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState(""); // Corrected name input state
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [progress, setProgress] = useState(0); // Progress state
//   const [progressColor, setProgressColor] = useState('red'); // Color state

//   // Text for the text slider
//   const sliderTexts = [
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt voluptatum eveniet blanditiis molestias quos ipsam nisi illum?",
//     "Excepturi doloribus amet a natus, dignissimos numquam quia deleniti eveniet pariatur fugiat?",
//     "Repellendus tempora, beatae deleniti ullam quae officiis delectus, corporis enim quasi dolore ipsa eos.",
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderTexts.length);
//     }, 4000); // Change slide every 4 seconds

//     return () => clearInterval(slideInterval); // Cleanup on unmount
//   }, [sliderTexts.length]);

//   // Update progress based on form completion
//   useEffect(() => {
//     let filledFields = 0;
//     if (name) filledFields++;
//     if (email) filledFields++;
//     if (password) filledFields++;
//     if (confirmPassword) filledFields++;

//     const completionPercentage = (filledFields / 4) * 40; // Cap at 40%
//     setProgress(completionPercentage);

//     // Change color based on progress
//     if (completionPercentage >= 40) {
//       setProgressColor('yellow');
//     } else {
//       setProgressColor('red');
//     }
//   }, [name, email, password, confirmPassword]);

//   // Input validation function
//   const validateForm = () => {
//     if (!name || !email || !password || !confirmPassword) {
//       setError("All fields are required");
//       return false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError("Please enter a valid email");
//       return false;
//     }

//     if (password.length < 6) {
//       setError("Password should be at least 6 characters long");
//       return false;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return false;
//     }

//     return true;
//   };

//   // Handle sign-up form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Reset error state

//     if (validateForm()) {
//       try {
//         // Create a new user with Firebase Authentication
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;

//         // Navigate to document upload page after successful registration
//         if (user) {
//           navigate("/upload");
//         }
//       } catch (error) {
//         console.error('Error during sign-up:', error); // Log the full error object
//         switch (error.code) {
//           case "auth/email-already-in-use":
//             setError("The email address is already in use");
//             break;
//           case "auth/weak-password":
//             setError("The password is too weak");
//             break;
//           default:
//             setError("Sign-up failed. Please try again.");
//             break;
//         }
//       }
//     }
//   };

//   return (
//     <div>
//       <div className={styles.sigN}>
//         <div className={styles.aside}>
//           <div className={styles.asideInnerDiv}>
//             <p className={styles.star}>
//               <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
//             </p>
//             <p className={styles.lorem}>
//               {sliderTexts[currentSlide]}
//             </p>
//             <div className={styles.peep}>
//               <div>
//                 <img src="" alt="man" />
//               </div>
//               <div>
//                 <h2>fdgkjgjfhgjkf</h2>
//                 <em>Co-Founder Cesign.co</em>
//               </div>
//             </div>
//             <div className={styles.slider}>
//               {sliderTexts.map((_, index) => (
//                 <span
//                   key={index}
//                   className={index === currentSlide ? styles.actively : styles.slided}
//                 ></span>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className={styles.formContainer}>
//           <h3 className={styles.topText}>Join Our Cooperative</h3>
//           <p className={styles.formP}>Ogbomoso Ifedayo Alajo Cooperative Investment & Credit Union Limited.</p>
//           <div className={styles.progress}>
//             {/* Progress Bar */}
//             <div className={styles.myProgress}>
//               <div
//                 className={styles.myBar}
//                 style={{
//                   width: `${progress}%`,
//                   backgroundColor: progressColor,
//                 }}
//               ></div>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit}>
//             {error && <p className={styles.errorMsg}>{error}</p>} {/* Display error message */}

//             <div className={styles.inputDiv}>
//               <h3 className={styles.inputText}>First & Last Name</h3>
//               <input
//                 type="text"
//                 placeholder="full name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.inputDiv}>
//               <h3 className={styles.inputText}>Email</h3>
//               <input
//                 type="email"
//                 placeholder="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.inputDiv}>
//               <h3 className={styles.inputText}>Password</h3>
//               <input
//                 type="password"
//                 placeholder="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.inputDiv}>
//               <h3 className={styles.inputText}>Re-enter Password</h3>
//               <input
//                 type="password"
//                 placeholder="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className={styles.input}
//               />
//             </div>

//             <button className={styles.LogBTn} type="submit">
//               Upload Documents <FaFileUpload />
//             </button>

//             <p className={styles.downText}>
//               Already have an account? <NavLink className={styles.click} to="/Login">Sign in</NavLink>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaStar, FaFileUpload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./SignUP.module.css";
import firebase from "../../utils/firebase"; // Ensure the path to your Firebase config is correct
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions

const SignUp = () => {
  const { auth, db } = firebase; // Ensure you're accessing auth and db from the imported firebase object
  const navigate = useNavigate();

  // State for form input and error handling
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // Corrected name input state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0); // Progress state
  const [progressColor, setProgressColor] = useState('red'); // Color state
  const [isUploading, setIsUploading] = useState(false)

  // Text for the text slider
  const sliderTexts = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt voluptatum eveniet blanditiis molestias quos ipsam nisi illum?",
    "Excepturi doloribus amet a natus, dignissimos numquam quia deleniti eveniet pariatur fugiat?",
    "Repellendus tempora, beatae deleniti ullam quae officiis delectus, corporis enim quasi dolore ipsa eos.",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderTexts.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, [sliderTexts.length]);

  // Update progress based on form completion
  useEffect(() => {
    let filledFields = 0;
    if (name) filledFields++;
    if (email) filledFields++;
    if (password) filledFields++;
    if (confirmPassword) filledFields++;

    const completionPercentage = (filledFields / 4) * 40; // Cap at 40%
    setProgress(completionPercentage);

    // Change color based on progress
    setProgressColor(completionPercentage >= 40 ? 'yellow' : 'red');
  }, [name, email, password, confirmPassword]);

  // Input validation function
  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return false;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  // Handle sign-up form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    setIsUploading(true);
    if (validateForm()) {
      try {
        // Create a new user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store user data in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          name,
          email,
          createdAt: new Date().toISOString(), // Add any other fields you need
        });

        // Navigate to document upload page after successful registration
        navigate("/upload");
      } catch (error) {
        console.error('Error during sign-up:', error); // Log the full error object
        switch (error.code) {
          case "auth/email-already-in-use":
            setError("The email address is already in use");
            break;
          case "auth/weak-password":
            setError("The password is too weak");
            break;
          default:
            setError("Sign-up failed. Please try again.");
            break;
        }
      }
    }
  };

  return (
    <div>
      <div className={styles.sigN}>
        <div className={styles.aside}>
          <div className={styles.asideInnerDiv}>
            <p className={styles.star}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </p>
            <p className={styles.lorem}>
              {sliderTexts[currentSlide]}
            </p>
            <div className={styles.peep}>
              <div>
                <img src="" alt="man" />
              </div>
              <div>
                <h2>fdgkjgjfhgjkf</h2>
                <em>Co-Founder Cesign.co</em>
              </div>
            </div>
            <div className={styles.slider}>
              {sliderTexts.map((_, index) => (
                <span
                  key={index}
                  className={index === currentSlide ? styles.actively : styles.slided}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <h3 className={styles.topText}>Join Our Cooperative</h3>
          <p className={styles.formP}>Ogbomoso Ifedayo Alajo Cooperative Investment & Credit Union Limited.</p>
          <div className={styles.progress}>
            {/* Progress Bar */}
            <div className={styles.myProgress}>
              <div
                className={styles.myBar}
                style={{
                  width: `${progress}%`,
                  backgroundColor: progressColor,
                }}
              ></div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {error && <p className={styles.errorMsg}>{error}</p>} {/* Display error message */}

            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>First & Last Name</h3>
              <input
                type="text"
                placeholder="full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Email</h3>
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

            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Re-enter Password</h3>
              <input
                type="password"
                placeholder="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
              />
            </div>

            <button className={styles.LogBTn} type="submit">
              {isUploading ? (
                <>
                  Uploading...
                </>
              ) : (
                <>Upload Documents <FaFileUpload /></>
              )
              }
            </button>

            <p className={styles.downText}>
              Already have an account? <NavLink className={styles.click} to="/Login">Sign in</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
