
// import { Link, useNavigate } from 'react-router-dom';
// import styles from './styles/contact.module.css';
// import { FaRightLong } from 'react-icons/fa6';
// import { useState, useEffect } from 'react';
// import firebaseExports from '../../utils/firebase'; // Import your Firebase configuration
// import { setDoc, doc } from 'firebase/firestore';

// const ContactLoan = () => {
//     const [isEdited, setIsEdited] = useState(false);
//     const [name, setName] = useState("");
//     const [address, setAddress] = useState("");
//     const [city, setCity] = useState("");
//     const [phone, setPhone] = useState("");
//     const [error, setError] = useState("");
//     const [progress, setProgress] = useState(0); // Progress state
//     const [progressColor, setProgressColor] = useState('red'); // Color state

//     const { db } = firebaseExports;


//     const navigate = useNavigate();

//     const handleNext = () => {
//         navigate("/dashboard/loan/s/apply");
//     };

//     useEffect(() => {
//         let filledFields = 0;
//         if (name) filledFields++;
//         if (address) filledFields++;
//         if (city) filledFields++;
//         if (phone) filledFields++;

//         const completionPercentage = (filledFields / 4) * 40; // Cap at 40%
//         setProgress(completionPercentage);

//         // Change color based on progress
//         if (completionPercentage >= 40) {
//             setProgressColor('yellow');
//         } else {
//             setProgressColor('red');
//         }
//     }, [name, address, city, phone]);

//     const validateForm = () => {
//         if (!name || !address || !city || !phone) {
//             setError("All fields are required");
//             return false;
//         }
//         return true; // Return true if validation passes
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(""); // Reset error state

//         if (validateForm()) {
//             try {
//                 // Create a reference to the Firestore document (replace 'users' and 'userId' with your actual collection and document ID)
//                 const userId = 'some_user_id'; // Get this from your authentication context or props
//                 const userRef = doc(db, 'users', userId);

//                 // Set the user data in Firestore
//                 await setDoc(userRef, {
//                     name,
//                     address,
//                     city,
//                     phone,
//                 });

//                 // Navigate to document upload page after successful registration
//                 navigate("/upload");
//             } catch (error) {
//                 console.error("Error saving data: ", error);
//                 setError("An error occurred while saving your information. Please try again.");
//             }
//         }
//     };

//     return (
//         <div className={styles.main}>
//             <h2>Contact Details</h2>
//             <em className={styles.emss}>Fill in your Contact Details to apply for a loan</em>
//             <h5>Progress:
//                 <div className={styles.myProgress}>
//                     <div
//                         className={styles.myBar}
//                         style={{
//                             width: `${progress}%`,
//                             backgroundColor: progressColor,
//                         }}
//                     ></div>
//                 </div>
//             </h5>
//             <form onSubmit={handleSubmit}>
//                 {error && <p className={styles.errorMsg}>{error}</p>} {/* Display error message */}

//                 <div className={styles.inputdiv}>
//                     <label htmlFor="">Full Name</label>
//                     <input
//                         type="text"
//                         className={styles.input}
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         disabled={!isEdited} // Disable if not editable
//                     />
//                 </div>
//                 <div className={styles.inputdiv}>
//                     <label htmlFor="">Address</label>
//                     <input
//                         type="text"
//                         className={styles.input}
//                         value={address}
//                         onChange={(e) => setAddress(e.target.value)}
//                         disabled={!isEdited} // Disable if not editable
//                     />
//                 </div>
//                 <div className={styles.inputdiv}>
//                     <label htmlFor="">City</label>
//                     <input
//                         type="text"
//                         value={city}
//                         onChange={(e) => setCity(e.target.value)}
//                         className={styles.input}
//                         disabled={!isEdited} // Disable if not editable
//                     />
//                 </div>
//                 <div className={styles.inputdiv}>
//                     <label htmlFor="">Phone Number</label>
//                     <input
//                         type="text"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         className={styles.input}
//                         disabled={!isEdited} // Disable if not editable
//                     />
//                 </div>

//                 <div className={styles.butcon}>
//                     <button
//                         type="button"
//                         className={styles.button}
//                         onClick={() => setIsEdited(!isEdited)} // Toggle edit state
//                     >
//                         {isEdited ? "Save Information" : "Edit Information"}
//                     </button>
//                     <button className={styles.button1} onClick={handleNext}>Fill Loan Details <FaRightLong /></button>
//                     <p>Not sure What Loan You apply for? <Link to='/dashboard/branches' className={styles.link}>Contact Your Branch</Link></p>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default ContactLoan;






import { Link, useNavigate } from 'react-router-dom';
import styles from './styles/contact.module.css';
import { useState, useEffect, useContext } from 'react';
import firebaseExports from '../../utils/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { FaRightLong } from 'react-icons/fa6';
import { AuthContext } from '../../context/AuthContext'; // Context for user authentication

const ContactLoan = () => {
    const [isEdited, setIsEdited] = useState(false);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [progress, setProgress] = useState(0);
    const [progressColor, setProgressColor] = useState('red');
    const { db } = firebaseExports;
    const { currentUser } = useContext(AuthContext); // Get current user
    const navigate = useNavigate();

    useEffect(() => {
        const filledFields = [name, address, city, phone].filter(field => field).length;
        const completionPercentage = (filledFields / 4) * 40;
        setProgress(completionPercentage);
        setProgressColor(completionPercentage >= 40 ? 'yellow' : 'red');
    }, [name, address, city, phone]);

    const validateForm = () => {
        if (!name || !address || !city || !phone) {
            setError("All fields are required");
            return false;
        }
        return true;
    };
    const handleNext = () => {
        navigate("/dashboard/loan/s/apply");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (validateForm() && currentUser) {
            try {
                const userRef = doc(db, 'users', currentUser.uid);
                await setDoc(userRef, { name, address, city, phone });

                navigate("/dashboard/loan/s/apply");
            } catch (error) {
                setError("Error saving data: " + error.message);
                console.error()
            }
        }
    };

    return (
        <div className={styles.main}>
            <h2>Contact Details</h2>
            <em className={styles.emss}>Fill in your Contact Details to apply for a loan</em>
            <h5>Progress:
                <div className={styles.myProgress}>
                    <div
                        className={styles.myBar}
                        style={{
                            width: `${progress}%`,
                            backgroundColor: progressColor,
                        }}
                    ></div>
                </div>
            </h5>
            <form onSubmit={handleSubmit}>
                {error && <p className={styles.errorMsg}>{error}</p>}
                <div className={styles.inputdiv}>
                    <label htmlFor="">Full Name</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={!isEdited} // Disable if not editable
                    />
                </div>
                <div className={styles.inputdiv}>
                    <label htmlFor="">Address</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        disabled={!isEdited} // Disable if not editable
                    />
                </div>
                <div className={styles.inputdiv}>
                    <label htmlFor="">City</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className={styles.input}
                        disabled={!isEdited} // Disable if not editable
                    />
                </div>
                <div className={styles.inputdiv}>
                    <label htmlFor="">Phone Number</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={styles.input}
                        disabled={!isEdited} // Disable if not editable
                    />
                </div>

                <div className={styles.butcon}>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={() => setIsEdited(!isEdited)} // Toggle edit state
                    >
                        {isEdited ? "Save Information" : "Edit Information"}
                    </button>
                    <button className={styles.button1} onClick={handleNext}>Fill Loan Details <FaRightLong /></button>
                    <p>Not sure What Loan You apply for? <Link to='/dashboard/branches' className={styles.link}>Contact Your Branch</Link></p>
                </div>
            </form>
        </div>
    );
};

export default ContactLoan;
