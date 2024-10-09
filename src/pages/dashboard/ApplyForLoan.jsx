

// import { Link, useNavigate } from 'react-router-dom';
// import styles from './styles/apply.module.css';
// import { FaRightLong } from 'react-icons/fa6';
// import { useState, useEffect } from 'react';
// import firebaseExports from '../../utils/firebase'; // Adjust the path to your firebase.js
// import { doc, setDoc } from 'firebase/firestore';

// const ApplyForLoan = () => {
//     const navigate = useNavigate();
//     const [amount, setAmount] = useState('');
//     const [purpose, setPurpose] = useState('');
//     const [error, setError] = useState('');
//     const [progress, setProgress] = useState(40);
//     const [progressColor, setProgressColor] = useState('yellow');


//     const { db } = firebaseExports;


//     useEffect(() => {
//         const filledFields = [amount, purpose].filter(field => field).length;
//         const completionPercentage = 40 + (filledFields / 2) * 30;
//         setProgress(completionPercentage);
//         setProgressColor(completionPercentage >= 80 ? 'green' : 'yellow');
//     }, [amount, purpose]);

//     const handleNext = async () => {
//         // Validate that amount is a number
//         if (isNaN(amount) || amount.trim() === '') {
//             setError("Loan amount must be a valid number");
//             return;
//         }

//         // Assuming you have a way to get the current user's ID
//         const userId = 'currentUserId'; // Replace with actual user ID logic

//         try {
//             // Store loan application in Firestore
//             await setDoc(doc(db, 'loanApplications', userId), {
//                 amount: parseFloat(amount), // Store as a number
//                 purpose,
//                 createdAt: new Date(),
//             });

//             navigate("/dashboard/loan/s/repay");
//         } catch (error) {
//             setError("Failed to store loan application. Please try again.");
//         }
//     };

//     const handlePrev = () => {
//         navigate("/dashboard/loan/s/contact");
//     };

//     return (
//         <div className={styles.main}>
//             <h2>Loan Details</h2>
//             <em>Fill in Loan Details</em>
//             <h5>progress:
//                 <div className={styles.myProgress}>
//                     <div
//                         className={styles.myBar}
//                         style={{ width: `${progress}%`, backgroundColor: progressColor }}
//                     ></div>
//                 </div>
//             </h5>
//             {error && <p className={styles.errorMsg}>{error}</p>}

//             <div className={styles.inputdiv}>
//                 <label htmlFor="">Loan Amount</label>
//                 <input type="number"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     className={styles.input} />
//             </div>
//             <div className={styles.inputdiv}>
//                 <label htmlFor="">Loan Purpose</label>
//                 <input type="text"
//                     value={purpose}
//                     onChange={(e) => setPurpose(e.target.value)}
//                     className={styles.input} />
//             </div>
//             <div className={styles.butcon}>
//                 <button className={styles.button1} onClick={handleNext}>Agree To Terms & Conditions <FaRightLong /></button>
//                 <button className={styles.button} onClick={handlePrev}>Go Back To Contact Details</button>
//                 <p>Not sure What Loan You apply for <Link to='/dashboard/branches' className={styles.link}>Contact Your Branch</Link></p>
//             </div>
//         </div>
//     );
// };

// export default ApplyForLoan;






import { Link, useNavigate } from 'react-router-dom';
import { FaRightLong } from 'react-icons/fa6';
import styles from './styles/apply.module.css';
import { useState, useEffect, useContext } from 'react';
import firebaseExports from '../../utils/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext'; // Context for user authentication

const ApplyForLoan = () => {
    const [amount, setAmount] = useState('');
    const [purpose, setPurpose] = useState('');
    const [error, setError] = useState('');
    const [progress, setProgress] = useState(40);
    const [progressColor, setProgressColor] = useState('yellow');
    const { db } = firebaseExports;
    const { currentUser } = useContext(AuthContext); // Get current user
    const navigate = useNavigate();

    useEffect(() => {
        const filledFields = [amount, purpose].filter(field => field).length;
        const completionPercentage = 40 + (filledFields / 2) * 30;
        setProgress(completionPercentage);
        setProgressColor(completionPercentage >= 80 ? 'green' : 'yellow');
    }, [amount, purpose]);


    const handlePrev = () => {
        navigate("/dashboard/loan/s/contact");
    };

    const handleNext = async () => {
        if (!currentUser || isNaN(amount) || amount.trim() === '') {
            setError("Please enter a valid loan amount and purpose.");
            return;
        }

        try {
            await setDoc(doc(db, 'loanApplications', currentUser.uid), {
                amount: parseFloat(amount),
                purpose,
                createdAt: new Date(),
            });
            navigate("/dashboard/loan/s/repay");
        } catch (error) {
            setError("Failed to store loan application: " + error.message);
        }
    };

    return (
        <div className={styles.main}>
            <h2>Loan Details</h2>
            <em>Fill in Loan Details</em>
            <h5>progress:
                <div className={styles.myProgress}>
                    <div
                        className={styles.myBar}
                        style={{ width: `${progress}%`, backgroundColor: progressColor }}
                    ></div>
                </div>
            </h5>
            {error && <p className={styles.errorMsg}>{error}</p>}

            <div className={styles.inputdiv}>
                <label htmlFor="">Loan Amount</label>
                <input type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={styles.input} />
            </div>
            <div className={styles.inputdiv}>
                <label htmlFor="">Loan Purpose</label>
                <input type="text"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className={styles.input} />
            </div>
            <div className={styles.butcon}>
                <button className={styles.button1} onClick={handleNext}>Agree To Terms & Conditions <FaRightLong /></button>
                <button className={styles.button} onClick={handlePrev}>Go Back To Contact Details</button>
                <p>Not sure What Loan You apply for <Link to='/dashboard/branches' className={styles.link}>Contact Your Branch</Link></p>
            </div>
        </div>
    );
};

export default ApplyForLoan;
