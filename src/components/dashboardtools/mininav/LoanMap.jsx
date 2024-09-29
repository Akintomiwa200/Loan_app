import styles from './remind.module.css'
import { NavLink, useLocation } from 'react-router-dom'



const LoanMap = () => {

    const locate = useLocation()

    return (
        <div className={styles.main2}>
            <div className={styles.mains}>
                <div className={styles.linkscontainer}>
                    <NavLink
                        className={locate.pathname === '/dashboard/loan/s' ? styles.activeLink : styles.link}
                        to='/dashboard/loan/s'>
                        Pay Loan
                    </NavLink>
                    <NavLink
                        className={locate.pathname === '/dashboard/loan/s/contact' ? styles.activeLink : styles.link} to='/dashboard/loan/s/contact'>
                        Apply For Loan
                    </NavLink>
                    <NavLink
                        className={locate.pathname === '/dashboard/loan/s/calculate' ? styles.activeLink : styles.link}
                        to='/dashboard/loan/s/calculate'>
                        calculate Loan
                    </NavLink>
                    <NavLink
                        className={locate.pathname === '/dashboard/loan/s/upload' ? styles.activeLink : styles.link} to='/dashboard/loan/s/upload'>
                        Upload Documents
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default LoanMap
