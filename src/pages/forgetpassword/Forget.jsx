// import { FaKey } from 'react-icons/fa6';
// import styles from './forget.module.css';
// import { useNavigate } from 'react-router-dom';
// import { getAuth, sendPasswordResetEmail } from 'firebase/auth'; // Import Firebase auth
// import { useState } from 'react'; // Import useState

// const Forget = () => {
//     const [email, setEmail] = useState(''); // State for email
//     const [error, setError] = useState(''); // State for error messages
//     const navigate = useNavigate();

//     const handleMove = async (e) => {
//         e.preventDefault(); // Prevent default form submission

//         const auth = getAuth();

//         try {
//             // Send password reset email
//             await sendPasswordResetEmail(auth, email);
//             alert('Reset password email sent! Please check your inbox.');
//             navigate("/otp"); // Navigate to OTP verification page
//         } catch (err) {
//             setError('Failed to send reset email. Please check your email and try again.'); // Handle error
//             console.error(err);
//         }
//     };

//     return (
//         <div className={styles.main}>
//             <div className={styles.card}>
//                 <div className={styles.in}>
//                     <div className={styles.inn}>
//                         <FaKey className={styles.keyss} />
//                     </div>
//                 </div>
//                 <h4>Forget Password?</h4>
//                 <em>No Worries, we&apos;ll send you the reset instructions</em>
//                 {error && <p className={styles.error}>{error}</p>} {/* Display error message */}
//                 <form onSubmit={handleMove} className={styles.form}>
//                     <label htmlFor="email">Email Address</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)} // Update email state
//                         placeholder=""
//                         required
//                     />
//                     <button type="submit" className={styles.button1}>Reset Password</button>
//                     <button type="button" className={styles.button} onClick={() => navigate("/")}>Cancel</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Forget;

import { FaKey } from 'react-icons/fa6';
import styles from './forget.module.css';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Forget = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleMove = async (e) => {
        e.preventDefault();

        if (!email) {
            setError('Please enter your email address.');
            return;
        }

        // Generate a random 4-digit OTP
        const otp = Math.floor(1000 + Math.random() * 9000).toString();

        // Send the OTP via EmailJS
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                { otp, to_email: email },
                import.meta.env.VITE_EMAILJS_USER_ID
            );
            alert('OTP sent to your email!');
            navigate("/otp", { state: { otp, email } }); // Pass the OTP and email to OtpVerify
        } catch (err) {
            setError('Failed to send OTP. Please try again.');
            console.error(err);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <div className={styles.in}>
                    <div className={styles.inn}>
                        <FaKey className={styles.keyss} />
                    </div>
                </div>
                <h4>Forget Password?</h4>
                <em>No Worries, we&apos;ll Send you the reset instructions</em>
                <form className={styles.form} onSubmit={handleMove}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        name='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button className={styles.button1} type="submit">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default Forget;
