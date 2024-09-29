import styles from './styles/AccountStatement.module.css'
import { useNavigate } from 'react-router-dom'
import { FaFilePdf } from 'react-icons/fa6'
import { FaFileCsv, FaLink } from 'react-icons/fa'


const AccountStatement = () => {

  const navigate = useNavigate()

  const clickPay = () => {
    navigate("/dashboard/loan/s")
  }

  const clickApply = () => {
    navigate("/dashboard/loan/s/contact")
  }

  const clickCalculate = () => {
    navigate("/dashboard/loan/s/calculate")
  }

  return (
    <div className={styles.main}>
      <div className={styles.linkers}>
        <div onClick={clickPay} className={styles.links}><FaFileCsv /> Download CSV File</div>
        <div onClick={clickApply} className={styles.links}><FaFilePdf />Download PDF File</div>
        <div onClick={clickCalculate} className={styles.links}><FaLink /> Get Shareable Link</div>
      </div>
    </div>
  )
}

export default AccountStatement
