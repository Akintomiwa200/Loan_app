import { Link, useNavigate } from 'react-router-dom'
import styles from './styles/apply.module.css'



const Repayment = () => {
    const navigate = useNavigate()

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
                    <div className={styles.myBar}></div>
                </div></h5>
            <div className={styles.glow}>
                <h4>interest Rate !0% fixed</h4>
                <strong>Note:</strong>
                <p>Applicant who want to borrow more than Four Hundred and Fifty Thousand naira (#450,000) should note that are to present either of these requiresnts:</p>
            </div>
            <div className={styles.inputdiv}>
                <label htmlFor="">Type of Collateral</label>
                <input type="text" className={styles.input} />
            </div>
            <div className={styles.inputdiv}>
                <label htmlFor="">Value of Colleteral</label>
                <input type="text" className={styles.input} />
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
