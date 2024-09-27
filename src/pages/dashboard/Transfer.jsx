import { BiTransferAlt } from 'react-icons/bi'
import BigCard from '../../components/dashboardtools/card/bigcard/BigCard'
import styles from './styles/transfer.module.css'
import BigCard2 from '../../components/dashboardtools/card/bigcard/BigCard2'
import { FaPlus } from 'react-icons/fa'


const Transfer = () => {
    return (
        <div className={styles.main}>

            <div className={styles.sam}>
                <h2>Accounts</h2>
                <div className={styles.sam2}>
                    <BigCard />
                    <BigCard />
                    <BigCard />
                </div>
            </div>
            <div className={styles.tf}>
                <BiTransferAlt />
            </div>
            <div className={styles.sam}>
                <h2>Connnected Bank</h2>
                <div className={styles.sam2}>
                    <BigCard2 />
                    <BigCard2 />
                    <BigCard2 />
                    <div className={styles.add}>
                        <FaPlus />
                        <h2>Add Bank</h2>
                    </div>
                </div>
            </div>
            <div className={styles.buttonspace}>
                <div className={styles.inputs}>
                    <label htmlFor="">Amount</label>
                    <input type="text" />
                </div>
                <button className={styles.button1}><BiTransferAlt />Complete Transaction </button>
            </div>
        </div>
    )
}

export default Transfer
