// import { MdSettings } from 'react-icons/md'
// import styles from './styles/calculate.module.css'
// import { FaRightLong } from 'react-icons/fa6'

// const CalculateLoan = () => {
//     return (
//         <div className={styles.main}>
//             <h2>Calculate Loan</h2>
//             <h5>Calculate Loan, interest and Payment Periods</h5>

//             <div className={styles.table1}>
//                 <h3>maximum funding</h3>
//                 <h1># <span>17484.500</span></h1>
//                 <hr />
//                 <div className={styles.split}>
//                     <div>
//                         <h4>Honda ADV 150 CBS</h4>
//                         <h6>2024</h6>
//                     </div>
//                     <MdSettings />
//                 </div>
//             </div>

//             <div className={styles.table}>
//                 <h4>Loan Amount</h4>
//                 <h1># <span>17484.500</span></h1>
//                 <input className={styles.range} type="range" min="1" max="100" value="10" />
//                 <p>range movement</p>
//             </div>

//             <div className={styles.table}>
//                 <h4>Loan Amount</h4>
//                 <h1># <span>17484.500</span></h1>
//                 <input className={styles.range} type="range" min="1" max="100" value="10" />
//                 <p>range movement</p>
//             </div>

//             <div className={styles.table2}>
//                 <h4>Loan Amount</h4>
//                 <h1># <span>17484.500</span></h1>
//                 <p></p>
//             </div>
//             <button className={styles.button1}>Aply Loan <FaRightLong /></button>
//         </div>
//     )
// }

// export default CalculateLoan




import { useState } from 'react';
import { MdSettings } from 'react-icons/md';
import styles from './styles/calculate.module.css';
import { FaRightLong } from 'react-icons/fa6';

const CalculateLoan = () => {
    const [loanAmount, setLoanAmount] = useState(17484.50); // Initial loan amount
    const [months, setMonths] = useState(10); // Initial months
    const [interestRate, setInterestRate] = useState(10); // Initial interest rate

    // Calculate monthly payment based on loan amount, interest rate, and months
    const calculateMonthlyPayment = () => {
        const principal = loanAmount;
        const calculatedInterest = (interestRate / 100) / 12;
        const totalPayments = months;

        const monthlyPayment = (principal * calculatedInterest) / (1 - Math.pow(1 + calculatedInterest, -totalPayments));
        return isNaN(monthlyPayment) ? 0 : monthlyPayment.toFixed(2); // Ensure no NaN values
    };

    return (
        <div className={styles.main}>
            <h2>Calculate Loan</h2>
            <h5>Calculate Loan, Interest, and Payment Periods</h5>

            <div className={styles.table1}>
                <h3>Maximum Funding</h3>
                <h1># <span>{loanAmount}</span></h1>
                <hr />
                <div className={styles.split}>
                    <div>
                        <h4>Honda ADV 150 CBS</h4>
                        <h6>2024</h6>
                    </div>
                    <MdSettings />
                </div>
            </div>

            <div className={styles.table}>
                <h4>Loan Amount</h4>
                <input
                    className={styles.range}
                    type="range"
                    min="1"
                    max="50000" // Set a max value based on your requirements
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                />
                <p>{loanAmount}</p>
            </div>

            <div className={styles.table}>
                <h4>Payment Period (Months)</h4>
                <input
                    className={styles.range}
                    type="range"
                    min="1"
                    max="60" // Set a max value for payment period
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                />
                <p>{months} months</p>
            </div>

            <div className={styles.table}>
                <h4>Interest Rate (%)</h4>
                <input
                    className={styles.range}
                    type="range"
                    min="1"
                    max="20" // Set a max value for interest rate
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                />
                <p>{interestRate}%</p>
            </div>

            <div className={styles.table2}>
                <h4>Monthly Payment</h4>
                <h1># <span>{calculateMonthlyPayment()}</span></h1>
            </div>
            <button className={styles.button1}>Apply for Loan <FaRightLong /></button>
        </div>
    );
};

export default CalculateLoan;
