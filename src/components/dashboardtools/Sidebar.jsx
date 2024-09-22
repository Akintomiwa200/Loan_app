import { MdOutlineDashboard, MdAccountBalance, } from 'react-icons/md'
import styles from './styles/sidebar.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { TbMoneybag } from 'react-icons/tb'
import { CiLocationOn } from 'react-icons/ci'
import { BiTransferAlt } from 'react-icons/bi'


const Sidebar = () => {

    const locate = useLocation()


    const handleprofile = () => {
        console.log('the button has been clicked')
        alert('the button has been clicked')
    }
    return (
        <div className={styles.main}>
            <div className={styles.main2}>
                <div className={styles.mains}>
                    <button className={styles.button}> <BiTransferAlt />  Transfer  </button>
                    <span className='close'> </span>
                    <div className={styles.linkscontainer}>
                        <NavLink
                            className={locate.pathname === '/dashboard' ? styles.activeLink : styles.link}
                            to='/dashboard'>
                            <MdOutlineDashboard /> Dashboard
                        </NavLink>
                        <NavLink
                            className={locate.pathname === '/dashboard/account' ? styles.activeLink : styles.link} to='/dashboard/account'>
                            <MdAccountBalance /> My Account(s)
                        </NavLink>
                        <NavLink
                            className={locate.pathname === '/dashboard/loan' ? styles.activeLink : styles.link} to='/dashboard/loan'> <TbMoneybag /> Loan(s)
                        </NavLink>
                        <NavLink
                            className={locate.pathname === '/dashboard/branches' ? styles.activeLink : styles.link} to='/dashboard/branches'> <CiLocationOn /> Branches
                        </NavLink>
                    </div>

                </div>
                <div>
                    <div className={styles.images} onClick={handleprofile}>
                        <img src="" alt='img' />
                        <div className={styles.im}>
                            <h2>ghjgrgj</h2>
                            <p>dfjbj@ehf.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
