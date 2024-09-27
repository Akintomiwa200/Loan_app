import { FaEnvelope } from 'react-icons/fa6'
import styles from './otpverify.module.css'

const OtpVerify = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.in}>
          <div className={styles.inn}>
            <FaEnvelope className={styles.keyss} />
          </div>
        </div>
        <h4>please check your mail</h4>
        <em>No Worries, we&apos;ll Send you the reset instructions</em>
        <form action=""
          className={styles.form}>
          <div className={styles.pins}>
            <input type='text' name='email' placeholder='' className={styles.input} />
            <input type='text' name='email' placeholder='' className={styles.input} />
            <input type='text' name='email' placeholder='' className={styles.input} />
            <input type='text' name='email' placeholder='' className={styles.input} />
          </div>

          <button className={styles.button1}>Reset Password</button>
          <button className={styles.button}>Cancel</button>
        </form>
      </div>

    </div>
  )
}

export default OtpVerify
