import { MdSettings } from 'react-icons/md'
import styles from './styles/calculate.module.css'
import { FaRightLong } from 'react-icons/fa6'

const CalculateLoan = () => {
    return (
        <div className={styles.main}>
            <h2>Calculate Loan</h2>
            <h5>Calculate Loan, interest and Payment Periods</h5>

            <div className={styles.table1}>
                <h3>maximum funding</h3>
                <h1># <span>17484.500</span></h1>
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
                <h1># <span>17484.500</span></h1>
                <input className={styles.range} type="range" min="1" max="100" value="10" />
                <p>range movement</p>
            </div>

            <div className={styles.table}>
                <h4>Loan Amount</h4>
                <h1># <span>17484.500</span></h1>
                <input className={styles.range} type="range" min="1" max="100" value="10" />
                <p>range movement</p>
            </div>

            <div className={styles.table2}>
                <h4>Loan Amount</h4>
                <h1># <span>17484.500</span></h1>
                <p></p>
            </div>
            <button className={styles.button1}>Aply Loan <FaRightLong /></button>
        </div>
    )
}

export default CalculateLoan
