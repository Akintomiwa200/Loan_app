// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import styles from './styles/apply.module.css'
// import { useState, useEffect } from 'react';




// const Repayment = () => {
//     const location = useLocation();
//     const navigate = useNavigate()
//     const [type, setType] = useState('');
//     const [value, setValue] = useState(null);
//     const [error, setError] = useState('');
//     const [progress, setProgress] = useState(location.state?.progress || 40); // Start from previous progress or 40%
//     const [progressColor, setProgressColor] = useState(progress >= 80 ? 'green' : 'yellow');

//     useEffect(() => {
//         let filledFields = 0;
//         if (type) filledFields++;
//         if (value) filledFields++;

//         const completionPercentage = 70 + (filledFields / 2) * 30; // Start from 40% and cap at 80%
//         setProgress(completionPercentage);

//         if (completionPercentage >= 100) {
//             setProgressColor('green');
//         } else {
//             setProgressColor('yellow');
//         }
//     }, [type, value]);

//     const handleNext = () => {
//         navigate("/success")
//     }

//     const handlePrev = () => {
//         navigate("/dashboard/loan/s/apply")
//     }

//     return (
//         <div className={styles.main}>
//             <h2>Repayment Information</h2>
//             <em>Take note of the following Information Before Completing Your Applocation</em>
//             <h5>progress:
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
//             {error && <p className={styles.errorMsg}>{error}</p>}

//             <div className={styles.glow}>
//                 <h4>interest Rate !0% fixed</h4>
//                 <strong>Note:</strong>
//                 <p>Applicant who want to borrow more than Four Hundred and Fifty Thousand naira (#450,000) should note that are to present either of these requiresnts:</p>
//             </div>
//             <div className={styles.inputdiv}>
//                 <label htmlFor="">Type of Collateral</label>
//                 <input type="text"
//                     value={type}
//                     onChange={(e) => setType(e.target.value)}
//                     className={styles.input} />
//             </div>
//             <div className={styles.inputdiv}>
//                 <label htmlFor="">Value of Colleteral</label>
//                 <input type="text"
//                     value={value}
//                     onChange={(e) => setValue(e.target.value)}
//                     className={styles.input} />
//             </div>
//             <div className={styles.butcon}>
//                 <button className={styles.button1} onClick={handleNext}> Complete Application</button>
//                 <button className={styles.button} onClick={handlePrev}>Go Back To Loan Details</button>
//                 <p>Not sure What Loan You apply for <Link to='/dashboard/branches' className={styles.link}>Contact Your Branch</Link></p>
//             </div>
//         </div>
//     )
// }

// export default Repayment


import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './styles/apply.module.css';
import { useState, useEffect } from 'react';
import firebaseExports from '../../utils/firebase'; // Adjust the path to your firebase.js
import { doc, setDoc, getDoc } from 'firebase/firestore'; 

const Repayment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [type, setType] = useState('');
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [progress, setProgress] = useState(location.state?.progress || 70); // Start from previous progress or 70%
    const [progressColor, setProgressColor] = useState(progress >= 100 ? 'green' : 'yellow');
    
const { db } = firebaseExports;

    useEffect(() => {
        let filledFields = 0;
        if (type) filledFields++;
        if (value) filledFields++;

        const completionPercentage = 70 + (filledFields / 2) * 30; // Start from 70% and cap at 100%
        setProgress(completionPercentage);

        if (completionPercentage >= 100) {
            setProgressColor('green');
        } else {
            setProgressColor('yellow');
        }
    }, [type, value]);

    const handleNext = async () => {
        // Assuming you have a way to get the current user's ID
        const userId = 'currentUserId'; // Replace with actual user ID logic

        // Validate that value is a number
        if (isNaN(value) || value.trim() === '') {
            setError("Collateral value must be a valid number");
            return;
        }

        try {
            // Get existing loan count for the user
            const docRef = doc(db, 'loanApplications', userId);
            const docSnap = await getDoc(docRef);
            let loanCount = 0;
            let interestRate = 10; // Default to 10% for the first loan

            if (docSnap.exists()) {
                // If the document exists, increment the loan count
                loanCount = docSnap.data().loanCount || 0;
                if (loanCount === 1) {
                    interestRate = 20; // Second loan
                } else if (loanCount >= 2) {
                    interestRate = 25; // Third loan and beyond
                }
            }

            // Store repayment information in Firestore
            await setDoc(doc(db, 'loanApplications', userId), {
                type,
                value: parseFloat(value), // Store as a number
                interestRate,
                loanCount: loanCount + 1, // Increment loan count
                createdAt: new Date(),
            });

            navigate("/success");
        } catch (error) {
            setError("Failed to store repayment information. Please try again.");
            navigate("/decline");
        }
    };

    const handlePrev = () => {
        navigate("/dashboard/loan/s/apply");
    };

    return (
        <div className={styles.main}>
            <h2>Repayment Information</h2>
            <em>Take note of the following Information Before Completing Your Application</em>
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
            {error && <p className={styles.errorMsg}>{error}</p>}

            <div className={styles.glow}>
                <h4>Interest Rate {progress >= 100 ? '10%' : '0%'} fixed</h4>
                <strong>Note:</strong>
                <p>Applicants who want to borrow more than Four Hundred and Fifty Thousand naira (#450,000) should note that they are to present either of these requirements:</p>
            </div>
            <div className={styles.inputdiv}>
                <label htmlFor="">Type of Collateral</label>
                <input type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={styles.input} />
            </div>
            <div className={styles.inputdiv}>
                <label htmlFor="">Value of Collateral</label>
                <input type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={styles.input} />
            </div>
            <div className={styles.butcon}>
                <button className={styles.button1} onClick={handleNext}> Complete Application</button>
                <button className={styles.button} onClick={handlePrev}>Go Back To Loan Details</button>
                <p>Not sure What Loan You apply for <Link to='/dashboard/branches' className={styles.link}>Contact Your Branch</Link></p>
            </div>
        </div>
    );
};

export default Repayment;
