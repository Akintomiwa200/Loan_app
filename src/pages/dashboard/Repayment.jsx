import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './styles/apply.module.css'
import { useState, useEffect } from 'react';




const Repayment = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [type, setType] = useState('');
    const [value, setValue] = useState(null);
    const [error, setError] = useState('');
    const [progress, setProgress] = useState(location.state?.progress || 40); // Start from previous progress or 40%
    const [progressColor, setProgressColor] = useState(progress >= 80 ? 'green' : 'yellow');

    useEffect(() => {
        let filledFields = 0;
        if (type) filledFields++;
        if (value) filledFields++;

        const completionPercentage = 70 + (filledFields / 2) * 30; // Start from 40% and cap at 80%
        setProgress(completionPercentage);

        if (completionPercentage >= 100) {
            setProgressColor('green');
        } else {
            setProgressColor('yellow');
        }
    }, [type, value]);

    const handleNext = () => {
        navigate("/success")
    }

    const handlePrev = () => {
        navigate("/dashboard/loan/s/apply")
    }

    return (
        <div className={styles.main}>
            <h2>Repayment Information</h2>
            <em>Take note of the following Information Before Completing Your Applocation</em>
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
                <h4>interest Rate !0% fixed</h4>
                <strong>Note:</strong>
                <p>Applicant who want to borrow more than Four Hundred and Fifty Thousand naira (#450,000) should note that are to present either of these requiresnts:</p>
            </div>
            <div className={styles.inputdiv}>
                <label htmlFor="">Type of Collateral</label>
                <input type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={styles.input} />
            </div>
            <div className={styles.inputdiv}>
                <label htmlFor="">Value of Colleteral</label>
                <input type="text"
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
    )
}

export default Repayment
