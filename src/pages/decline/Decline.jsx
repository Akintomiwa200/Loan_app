import { FaFaceSadCry } from 'react-icons/fa6'
import styles from './decline.module.css'
import { Link } from 'react-router-dom'



const Decline = () => {
    return (
        <div className={styles.main}>
            <div className={styles.outlet}>
                <div className={styles.express}>
                    <span className={styles.cry}>
                        <span className={styles.cry2}>
                            <FaFaceSadCry className={styles.cry3} />
                        </span>
                    </span>
                    <h2>Payent Declined</h2>
                    <h3>Your Payment was not Successful</h3>
                </div>
                <div className={styles.buttonspace}>
                    <h5>Contact <Link to='/support'>Support</Link> </h5>
                    <button className={styles.button1}>Try Again</button>
                    <button className={styles.button}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Decline
