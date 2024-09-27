import BigCard from '../../components/dashboardtools/card/bigcard/BigCard'
import { MdArrowCircleRight, } from 'react-icons/md'
import Pagnation from '../../components/dashboardtools/pagnation/Pagnation'
import styles from './styles/account.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {
    const navigate = useNavigate()
    const [currectPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }


    const handleCliekHistory = () => {
        // alert('the button has been clicked')
        navigate("/dashboard/history")
    }


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
            <div className={styles.content}>
                <div className={styles.list2}>
                    <div>
                        <h2>Transactions</h2>
                        <p>See Reciept for al Transaction</p>
                    </div>
                    <h1 className={styles.blunt} onClick={handleCliekHistory}>See All Transactions <MdArrowCircleRight /> </h1>
                </div>
                <div>
                    <Pagnation
                        currectPage={currectPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />


                </div>
                {/* <div className={styles.pagnation}>
                    <button className={styles.clicks}><MdKeyboardArrowLeft /> Previous</button>
                    <div>

                    </div>
                    <button className={styles.clicks}>Next <MdKeyboardArrowRight /></button>
                </div> */}
            </div>

        </div>
    )
}

export default Account
