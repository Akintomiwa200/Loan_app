import BigCard from '../../components/dashboardtools/card/bigcard/BigCard'
import styles from './styles/account.module.css'


const Account = () => {
    return (
        <div className={styles.main}>
            <div className={styles.bigcard}>
                <div className={styles.list}>
                    <h2>
                        Accounts
                    </h2>
                </div>
                <div className={styles.big}>
                    <BigCard mainValue='12,345' subValue='10' title='savings' backgroundColor='#f9f9f9' />
                    <BigCard mainValue='12,345' subValue='13' title='current' backgroundColor='#fff6f6' />
                    <BigCard mainValue='10,000' subValue='8' title='fixed' backgroundColor='#f6f9ff' />
                </div>
            </div>

        </div>
    )
}

export default Account
