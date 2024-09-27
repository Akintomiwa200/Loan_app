import { FaKey } from 'react-icons/fa6'
import styles from './forget.module.css'
import { useNavigate } from 'react-router-dom'
const Forget = () => {

    const naviagte = useNavigate()

    const handleMove = () => {
        naviagte("/otp")
    }
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <div className={styles.in}>
                    <div className={styles.inn}>
                        <FaKey className={styles.keyss} />
                    </div>
                </div>
                <h4>Forget Password ?</h4>
                <em>No Worries, we&apos;ll Send you the reset instructions</em>
                <form action=""
                    className={styles.form}>
                    <label htmlFor="email"> Email Address</label>
                    <input type="email" name='email' placeholder='' />
                    <button className={styles.button1} onClick={handleMove}>Reset Password</button>
                    <button className={styles.button} >Cancel</button>
                </form>
            </div>

        </div>
    )
}

export default Forget