import styles from './success.module.css'
import { Link } from 'react-router-dom'
import { IoMdHappy } from 'react-icons/io'


const Success = () => {

    return (
        <div className={styles.main}>
            <div className={styles.outlet}>
                <div className={styles.express}>
                    <span className={styles.cry}>
                        <span className={styles.cry2}>
                            <IoMdHappy className={styles.cry3} />
                        </span>
                    </span>
                    <h2>Payent Succesful</h2>
                    <h3>Your Payment was Successful</h3>
                </div>
                <div className={styles.buttonspace}>
                    <h5>Go back to <Link to='/dashboard'>Dashboard</Link> </h5>
                    <button className={styles.button1}><Link to='/application'> See Receipt</Link></button>
                    <button className={styles.button}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Success
