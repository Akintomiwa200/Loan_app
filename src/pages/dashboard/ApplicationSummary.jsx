
// import { Link } from 'react-router-dom';
// import styles from './styles/applicationsummary.module.css';
// import { useEffect, useState } from 'react';
// import firebaseExports from '../../utils/firebase'; // Adjust the path to your firebase.js
// import { doc, getDoc } from 'firebase/firestore';

// const ApplicationSummary = () => {
//     const [loanData, setLoanData] = useState(null);
//     const [error, setError] = useState('');
//     const { db } = firebaseExports;

//     useEffect(() => {
//         const fetchLoanData = async () => {
//             const userId = 'currentUserId'; // Replace with actual user ID logic
//             try {
//                 const docRef = doc(db, 'loanApplications', userId);
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     setLoanData(docSnap.data());
//                 } else {
//                     setError('No loan application found.');
//                 }
//             } catch (err) {
//                 setError('Failed to fetch loan data. Please try again later.');
//                 console.error(err);
//             }
//         };

//         fetchLoanData();
//     }, []);

//     if (error) {
//         return <p className={styles.errorMsg}>{error}</p>;
//     }

//     if (!loanData) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className={styles.main}>
//             <div className={styles.second}>
//                 <div className={styles.content}>
//                     <h1>Application Summary</h1>
//                     <em>Kindly allow 3-4hrs to reflect in your bank account</em>
//                     <hr />
//                     <span className={styles.cage}>
//                         <h2>Purpose of Loan</h2>
//                         <h5>{loanData.purpose}</h5>
//                     </span>

//                     <span className={styles.cage}>
//                         <h2>Next Repayment Date</h2>
//                         <h5>{new Date(loanData.nextRepaymentDate?.toDate()).toLocaleDateString()}</h5>
//                     </span>

//                     <span className={styles.cage}>
//                         <h2>Interest Rate</h2>
//                         <h5>{loanData.interestRate}%</h5>
//                     </span>

//                     <span className={styles.cage}>
//                         <h2>Monthly Payment</h2>
//                         <h5># {loanData.monthlyPayment}</h5>
//                     </span>

//                     <span className={styles.cage}>
//                         <h2>No of Payments</h2>
//                         <h5>{loanData.numberOfPayments}</h5>
//                     </span>

//                     <hr />
//                     <span className={styles.cage}>
//                         <h2>Total Payback Amount</h2>
//                         <h5># {loanData.totalPaybackAmount}</h5>
//                     </span>
//                 </div>
//                 <div className={styles.buttonspace}>
//                     <button className={styles.button1}>Print Receipt</button>
//                     <button className={styles.button}>
//                         <Link to='/dashboard'>Go Back To Dashboard</Link>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ApplicationSummary;



import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import firebaseExports from '../../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';
import AuthContext from '../../context/AuthContext'; // Default import
import { useContext } from 'react';
import styles from './styles/applicationsummary.module.css';

const ApplicationSummary = () => {
    const [loanData, setLoanData] = useState(null);
    const { currentUser } = useContext(AuthContext); // Get current user
    const { db } = firebaseExports;

    useEffect(() => {
        const fetchLoanData = async () => {
            if (currentUser) {
                const loanDocRef = doc(db, 'loanApplications', currentUser.uid);
                const loanDocSnap = await getDoc(loanDocRef);

                if (loanDocSnap.exists()) {
                    setLoanData(loanDocSnap.data());
                } else {
                    setLoanData(null);
                }
            }
        };
        fetchLoanData();
    }, [currentUser, db]); // Added db to dependency array

    if (!loanData) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.main}>
            <div className={styles.second}>
                <div className={styles.content}>
                    <h1>Application Summary</h1>
                    <em>Kindly allow 3-4hrs to reflect in your bank account</em>
                    <hr />
                    <span className={styles.cage}>
                        <h2>Purpose of Loan</h2>
                        <h5>{loanData.purpose}</h5>
                    </span>

                    <span className={styles.cage}>
                        <h2>Next Repayment Date</h2>
                        <h5>{new Date(loanData.nextRepaymentDate?.toDate()).toLocaleDateString()}</h5>
                    </span>

                    <span className={styles.cage}>
                        <h2>Interest Rate</h2>
                        <h5>{loanData.interestRate}%</h5>
                    </span>

                    <span className={styles.cage}>
                        <h2>Monthly Payment</h2>
                        <h5># {loanData.monthlyPayment}</h5>
                    </span>

                    <span className={styles.cage}>
                        <h2>No of Payments</h2>
                        <h5>{loanData.numberOfPayments}</h5>
                    </span>

                    <hr />
                    <span className={styles.cage}>
                        <h2>Total Payback Amount</h2>
                        <h5># {loanData.totalPaybackAmount}</h5>
                    </span>
                </div>
                <div className={styles.buttonspace}>
                    <button className={styles.button1}>Print Receipt</button>
                    <button className={styles.button}>
                        <Link to='/dashboard'>Go Back To Dashboard</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ApplicationSummary;
