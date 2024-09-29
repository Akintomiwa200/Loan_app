import { MdArrowCircleRight, } from 'react-icons/md'
import Pagnation from '../../components/dashboardtools/pagnation/Pagnation'
import styles from './styles/account.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const TransactionHistory = () => {
    const navigate = useNavigate()
    const [currectPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }


    const handleCliekHistory = () => {
        // alert('the button has been clicked')
        navigate("/dashboard/trans")
    }

    return (
        <div>
            <h2>Transaction History
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

            </h2>
        </div>
    )
}

export default TransactionHistory
