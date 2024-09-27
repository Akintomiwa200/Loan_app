import styles from './styles/profile.module.css'
import { IoIosAddCircleOutline, IoIosCall } from 'react-icons/io'
import { RiSignalWifi1Fill } from 'react-icons/ri'
import { MdElectricBolt } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Loan = () => {
    const navigate = useNavigate()

    const clickPay = () => {
        navigate("/dashboard/loan/s")
    }

    const clickApply = () => {
        navigate("/dashboard/loan/s/apply")
    }

    const clickCalculate = () => {
        navigate("/dashboard/loan/s/calculate")
    }

    const clickUpload = () => {
        navigate("/dashboard/loan/s/upload")
    }
    return (
        <div className={styles.main}>
            <div className={styles.linkers}>
                <div onClick={clickPay} className={styles.links}><IoIosAddCircleOutline />Pay Loan</div>
                <div onClick={clickApply} className={styles.links}><IoIosCall />Apply For Loan</div>
                <div onClick={clickCalculate} className={styles.links}><RiSignalWifi1Fill />calculate Loan</div>
                <div onClick={clickUpload} className={styles.links}><MdElectricBolt />Upload Documents</div>
            </div>
        </div>
    )
}

export default Loan
