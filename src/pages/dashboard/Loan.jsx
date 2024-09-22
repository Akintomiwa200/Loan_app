import styles from './styles/loan.module.css'
import { IoIosAddCircleOutline, IoIosCall } from 'react-icons/io'
import { RiSignalWifi1Fill } from 'react-icons/ri'
import { MdElectricBolt } from 'react-icons/md'

const Loan = () => {
    return (
        <div className={styles.main}>
            <div className={styles.linkers}>
                <div className={styles.links}><IoIosAddCircleOutline />make a loan</div>
                <div className={styles.links}><IoIosCall />make a loan</div>
                <div className={styles.links}><RiSignalWifi1Fill />make a loan</div>
                <div className={styles.links}><MdElectricBolt />make a loan</div>
            </div>
        </div>
    )
}

export default Loan
