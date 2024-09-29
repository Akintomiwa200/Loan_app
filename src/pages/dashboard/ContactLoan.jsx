import { Link, useNavigate } from 'react-router-dom'
import styles from './styles/contact.module.css'
import { FaRightLong } from 'react-icons/fa6'


const ContactLoan = () => {

    const navigate = useNavigate()

    const handleNext = () => {
        navigate("/dashboard/loan/s/apply")
    }

    return (
        <div className={styles.main}>
            <h2>Contact Details</h2>
            <em className={styles.emss}>Fill in your Contact Details to apply for loan</em>
            <h5>progress:
                <div className={styles.myProgress}>
                    <div className={styles.myBar}></div>
                </div></h5>
            <div className={styles.inputdiv}>
                <label htmlFor="">Full Name</label>
                <input type="text" className={styles.input} disabled />
            </div>
            <div className={styles.inputdiv}>
                <label htmlFor="">Address</label>
                <input type="text" className={styles.input} disabled />
            </div>
            <div className={styles.inputdiv}>
                <label htmlFor="">city</label>
                <input type="text" className={styles.input} disabled />
            </div>
            <div className={styles.inputdiv}>
                <label htmlFor="">Phone Number</label>
                <input type="text" className={styles.input} disabled />
            </div>

            <div className={styles.butcon}>
                <button className={styles.button}>Edit Information</button>
                <button className={styles.button1} onClick={handleNext}>Fill Loan Details <FaRightLong /></button>
                <p>Not sure What Loan You apply for <Link to='/dashboard/branches' className={styles.link}>Contact Your Branch</Link></p>
            </div>
        </div>
    )
}

export default ContactLoan
