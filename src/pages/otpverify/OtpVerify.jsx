// import { FaEnvelope } from 'react-icons/fa6';
// import styles from './otpverify.module.css';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const OtpVerify = () => {
//   const [otp, setOtp] = useState(['', '', '', '']); // State for OTP input
//   const navigate = useNavigate();

//   const handleOtpChange = (index, value) => {
//     const newOtp = [...otp];
//     newOtp[index] = value.slice(0, 1); // Allow only 1 character
//     setOtp(newOtp);

//     // Move to the next input if the current input is filled
//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const enteredOtp = otp.join(''); // Combine the OTP digits into a single string

//     // Simulated OTP verification logic (replace this with your own logic)
//     const validOtp = '1234'; // This should be replaced with the actual OTP you send

//     if (enteredOtp === validOtp) {
//       alert('OTP verified successfully! Redirecting to login...');
//       navigate("/login"); // Navigate to login page
//     } else {
//       alert('Invalid OTP. Please try again.'); // Error message for invalid OTP
//     }
//   };

//   return (
//     <div className={styles.main}>
//       <div className={styles.card}>
//         <div className={styles.in}>
//           <div className={styles.inn}>
//             <FaEnvelope className={styles.keyss} />
//           </div>
//         </div>
//         <h4>Please check your mail</h4>
//         <em>Enter the OTP sent to your email</em>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <div className={styles.pins}>
//             {otp.map((value, index) => (
//               <input
//                 key={index}
//                 id={`otp-${index}`} // Unique ID for each input
//                 type='text'
//                 value={value}
//                 onChange={(e) => handleOtpChange(index, e.target.value)}
//                 className={styles.input}
//                 maxLength="1" // Limit input to 1 character
//               />
//             ))}
//           </div>
//           <button type="submit" className={styles.button1}>Reset Password</button>
//           <button type="button" className={styles.button} onClick={() => navigate("/")}>Cancel</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OtpVerify;
import { useState } from 'react';
import {useLocation} from 'react-router-dom'
import emailjs from '@emailjs/browser'; // Ensure you have EmailJS installed
import styles from './otpverify.module.css';

const OtpVerify = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [error, setError] = useState('');

  // Get the OTP from location state (ensure you use useLocation in a real case)
  const location = useLocation();
  const { otp: sentOtp} = location.state || {}; // Adjust based on your routing

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // Only allow digits
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field
      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput.focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const previousInput = document.getElementById(`otp-${index - 1}`);
      previousInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    const generatedOtp = sentOtp; // Use the OTP sent to the user's email

    if (enteredOtp === generatedOtp) {
      setOtpVerified(true);
      // Send email with new password
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { message: "Your OTP was verified, reset your password." },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h4>Please enter the OTP sent to your email</h4>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.pins}>
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type='text'
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                className={styles.input}
                maxLength={1}
              />
            ))}
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {otpVerified && (
            <div className={styles.form}>
              <input
                type='password'
                placeholder='Enter New Password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={styles.input1}
              />
              <button className={styles.button1}>Reset Password</button>
            </div>
          )}
          <button className={styles.button}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;
