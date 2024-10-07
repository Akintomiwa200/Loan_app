


// components/dashboardtools/Navbar.jsx
import { useContext } from 'react';
import { MdNotifications } from 'react-icons/md';
import styles from './styles/navbar.module.css';
import logo from '../../assets/Logo.png';
import { UserContext } from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);

    const handleProfile = () => {
        navigate('profile');
    };

    const getInitials = (name) => {
        const initials = name.split(' ').map((word) => word[0]).join('');
        return initials;
    };

    const getCurrentGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                    <Link to='/'>
                        <img src={logo} alt="Logo" />
                    </Link>
                    <div className={styles.title}>Dashboard</div>
                </div>

                <div className={styles.right}>
                    <MdNotifications className={styles.icon} />
                    <div className={styles.images} onClick={handleProfile}>
                        {userData?.profilePicture ? (
                            <img src={userData.profilePicture} alt="User" />
                        ) : (
                            <div className={styles.initials}>{getInitials(userData?.name || 'User')}</div>
                        )}
                    </div>
                    <div className={styles.im}>
                        <div>{getCurrentGreeting()}</div>
                        <div className={styles.profile} onClick={handleProfile}>
                            {userData?.name || 'User Name'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
