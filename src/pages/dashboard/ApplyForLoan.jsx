import { Link, useNavigate } from 'react-router-dom'
import styles from './styles/apply.module.css'
import { FaRightLong } from 'react-icons/fa6'

const ApplyForLoan = () => {

    const navigate = useNavigate()

    const handleNext = () => {
        navigate("/dashboard/loan/s/calculate")
    }

    return (
        <div className={styles.main}>
            <h2>Loan Details</h2>
            <em>Fill in Loan Details</em>
            <h5>progress:
                <div className={styles.myProgress}>
                    <div className={styles.myBar}></div>
                </div></h5>
            <div className={styles.inputdiv}>
                <label htmlFor="">Loan Amount</label>
                <input type="text" className={styles.input} />
            </div>
            <div className={styles.inputdiv}>
                <label htmlFor="">Loan Purpose</label>
                <input type="text" className={styles.input} />
            </div>
            <div className={styles.butcon}>
                <button className={styles.button1} onClick={handleNext}>Agree To Terms & Conditions <FaRightLong /></button>
                <button className={styles.button}>Go Back To Contact Details</button>
                <p>Not sure What Loan You apply for <Link to='/dashboard/branches' className={styles.link}>Contact Your Branch</Link></p>
            </div>
        </div>
    )
}

export default ApplyForLoan
