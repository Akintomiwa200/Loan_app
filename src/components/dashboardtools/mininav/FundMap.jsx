import styles from './remind.module.css'
import { NavLink, useLocation } from 'react-router-dom'


const FundMap = () => {

    const locate = useLocation()

    return (

        <div className={styles.main2}>
            <div className={styles.mains}>
                <div className={styles.linkscontainer}>
                    <NavLink
                        className={locate.pathname === '/dashboard/transfer/withdraw' ? styles.activeLink : styles.link} to='/dashboard/transfer/withdraw'>
                        Withdrawal Fund
                    </NavLink>
                    <NavLink
                        className={locate.pathname === '/dashboard/transfer' ? styles.activeLink : styles.link}
                        to='/dashboard/transfer'>
                        Transfer Fund
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default FundMap
