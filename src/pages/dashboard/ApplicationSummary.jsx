// import { Link } from 'react-router-dom'
// import styles from './styles/applicationsummary.module.css'

// const ApplicationoSummary = () => {
//     return (
//         <div className={styles.main}>
//             <div className={styles.second}>
//                 <div className={styles.content}>
//                     <h1>Application Summary</h1>
//                     <em>Kindly allow 3-4hrs to reflect in your bank account</em>
//                     <hr />
//                     <span className={styles.cage}>
//                         <h2>Purpose of Loan </h2>
//                         <h5>school fees</h5>
//                     </span>

//                     <span className={styles.cage}>
//                         <h2>Next Repayment Date </h2>
//                         <h5>02/04/2021</h5>
//                     </span>

//                     <span className={styles.cage}>
//                         <h2>interest rate </h2>
//                         <h5>20%</h5>
//                     </span>

//                     <span className={styles.cage}>
//                         <h2>Monthly Payment</h2>
//                         <h5>#5000</h5>
//                     </span>

//                     <span className={styles.cage}>
//                         <h2>No of Payments </h2>
//                         <h5>24</h5>
//                     </span>


//                     <hr />
//                     <span className={styles.cage}>
//                         <h2>Total Payback Amount </h2>
//                         <h5>#58,000</h5>
//                     </span>
//                 </div>
//                 <div className={styles.buttonspace}>
//                     <button className={styles.button1}>Print Reciept</button>
//                     <button className={styles.button}  > <Link to='/dashboard'>Go Back To DashBoard</Link></button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ApplicationoSummary



import { Link } from 'react-router-dom';
import styles from './styles/applicationsummary.module.css';
import { useEffect, useState } from 'react';
import firebaseExports from '../../utils/firebase'; // Adjust the path to your firebase.js
import { doc, getDoc } from 'firebase/firestore';

const ApplicationSummary = () => {
    const [loanData, setLoanData] = useState(null);
    const [error, setError] = useState('');
    const { db } = firebaseExports;

    useEffect(() => {
        const fetchLoanData = async () => {
            const userId = 'currentUserId'; // Replace with actual user ID logic
            try {
                const docRef = doc(db, 'loanApplications', userId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setLoanData(docSnap.data());
                } else {
                    setError('No loan application found.');
                }
            } catch (err) {
                setError('Failed to fetch loan data. Please try again later.');
                console.error(err);
            }
        };

        fetchLoanData();
    }, []);

    if (error) {
        return <p className={styles.errorMsg}>{error}</p>;
    }

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
}

export default ApplicationSummary;
