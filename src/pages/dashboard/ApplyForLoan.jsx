import { Link, useNavigate } from 'react-router-dom'
import styles from './styles/apply.module.css'
import { FaRightLong } from 'react-icons/fa6'
import { useState, useEffect } from 'react';


const ApplyForLoan = () => {

    const navigate = useNavigate();

    const [amount, setAmount] = useState('');
    const [purpose, setPurpose] = useState(null);
    const [error, setError] = useState('');
    const [progress, setProgress] = useState(location.state?.progress || 40); // Start from previous progress or 40%
    const [progressColor, setProgressColor] = useState(progress >= 80 ? 'green' : 'yellow');



    // Update progress based on address and file selection
    useEffect(() => {
        let filledFields = 0;
        if (amount) filledFields++;
        if (purpose) filledFields++;

        const completionPercentage = 40 + (filledFields / 2) * 30; // Start from 40% and cap at 80%
        setProgress(completionPercentage);

        if (completionPercentage >= 80) {
            setProgressColor('green');
        } else {
            setProgressColor('yellow');
        }
    }, [amount, purpose]);

    const handleNext = () => {
        navigate("/dashboard/loan/s/repay")
    }

    const handlePrev = () => {
        navigate("/dashboard/loan/s/contact")
    }




    return (
        <div className={styles.main}>
            <h2>Loan Details</h2>
            <em>Fill in Loan Details</em>
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

            <div className={styles.inputdiv}>
                <label htmlFor="">Loan Amount</label>
                <input type="text"
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
    )
}

export default ApplyForLoan
