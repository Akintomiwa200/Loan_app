import { Link, useNavigate } from 'react-router-dom'
import styles from './styles/contact.module.css'
import { FaRightLong } from 'react-icons/fa6'
import { useState, useEffect } from 'react'


const ContactLoan = () => {
    const [isEdited, setIsEdited] = useState(true)
    const [name, setName] = useState("");  // Corrected name input state
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [progress, setProgress] = useState(0); // Progress state
    const [progressColor, setProgressColor] = useState('red'); // Color state

    const Edirable = () => {
        isEdited(!setIsEdited)
    }

    const navigate = useNavigate()

    const handleNext = () => {
        navigate("/dashboard/loan/s/apply")
    }

    useEffect(() => {
        let filledFields = 0;
        if (name) filledFields++;
        if (city) filledFields++;
        if (address) filledFields++;
        if (phone) filledFields++;

        const completionPercentage = (filledFields / 4) * 40; // Cap at 40%
        setProgress(completionPercentage);

        // Change color based on progress
        if (completionPercentage >= 40) {
            setProgressColor('yellow');
        } else {
            setProgressColor('red');
        }
    }, [name, address, city, phone]);

    const validateForm = () => {
        if (!name || !address || !city || !phone) {
            setError("All fields are required");
            return false;
        }
    }

    // Handle sign-up form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset error state

        if (validateForm()) {
            try {
                // // Create a new user with Firebase Authentication
                // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                // const user = userCredential.user;

                // Navigate to document upload page after successful registration
                // if (user) {
                navigate("/upload");
                // }
            } catch (error) {
                // Handle Firebase sign-up errors
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
        <div className={styles.main}>
            <h2>Contact Details</h2>
            <em className={styles.emss}>Fill in your Contact Details to apply for loan</em>
            <h5>progress:
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
                {error && <p className={styles.errorMsg}>{error}</p>} {/* Display error message */}

                <div className={styles.inputdiv}>
                    <label htmlFor="">Full Name</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={Edirable} />
                </div>
                <div className={styles.inputdiv}>
                    <label htmlFor="">Address</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setAddress(e.target.value)}
                        disabled={Edirable} />
                </div>
                <div className={styles.inputdiv}>
                    <label htmlFor="">city</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setCity(e.target.value)}
                        className={styles.input}
                        disabled={Edirable} />
                </div>
                <div className={styles.inputdiv}>
                    <label htmlFor="">Phone Number</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setPhone(e.target.value)}
                        className={styles.input}
                        disabled={Edirable} />
                </div>

                <div className={styles.butcon}>
                    <button className={styles.button}>Edit Information</button>
                    <button className={styles.button1} onClick={handleNext}>Fill Loan Details <FaRightLong /></button>
                    <p>Not sure What Loan You apply for <Link to='/dashboard/branches' className={styles.link}>Contact Your Branch</Link></p>
                </div>
            </form>
        </div>
    )
}

export default ContactLoan
