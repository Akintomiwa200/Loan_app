import { MdNotifications } from 'react-icons/md'
import styles from './styles/navbar.module.css'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const getCurrentGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning'
        if (hour < 18) return 'Good Afternoon'
        return 'Good Evening';
    }

    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                    <div>
                        <Link to='/'>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className={styles.title}>Dashboard</div>
                </div>

                <div className={styles.right}>
                    <div><MdNotifications className={styles.icon} /> </div>
                    <img className={styles.images} src='' alt="img" />
                    <div className={styles.im}>
                        <div>{getCurrentGreeting()}</div>
                        <div>name</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
