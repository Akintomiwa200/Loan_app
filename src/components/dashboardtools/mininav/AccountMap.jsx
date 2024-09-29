
import styles from './remind.module.css'
import { NavLink, useLocation } from 'react-router-dom'


const AccountMap = () => {
    const locate = useLocation()

    return (
        <div className={styles.main2}>
            <div className={styles.mains}>
                <div className={styles.linkscontainer}>
                    <NavLink
                        className={locate.pathname === '/dashboard/account' ? styles.activeLink : styles.link}
                        to='/dashboard/account'>
                        Transaction History
                    </NavLink>
                    <NavLink
                        className={locate.pathname === '/dashboard/account/balance' ? styles.activeLink : styles.link} to='/dashboard/account/balance'>
                        Balance Trends
                    </NavLink>
                    <NavLink
                        className={locate.pathname === '/dashboard/account/statement' ? styles.activeLink : styles.link}
                        to='/dashboard/account/statement'>
                        Account Statements
                    </NavLink>
                    <NavLink
                        className={locate.pathname === '/dashboard/account/service' ? styles.activeLink : styles.link} to='/dashboard/account/service'>
                        Services
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default AccountMap


