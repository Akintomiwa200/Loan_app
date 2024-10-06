import { useContext } from 'react';
import { MdNotifications } from 'react-icons/md';
import styles from './styles/navbar.module.css';
import logo from '../../assets/Logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);

    const handleProfile = () => {
        navigate('profile');
    };

    const getCurrentGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    const getTitle = () => {
        switch (location.pathname) {
            case '/dashboard':
                return 'Dashboard';
            case '/dashboard/account':
                return 'My Account(s)';
            case '/dashboard/loan':
                return 'Loan(s)';
            case '/dashboard/branches':
                return 'Branches';
            case '/dashboard/profile':
                return 'Profile';
            case '/dashboard/transfer':
                return 'Transfer';
            default:
                return 'Dashboard';
        }
    };

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                    <div>
                        <Link to='/'>
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className={styles.title}>{getTitle()}</div>
                </div>

                <div className={styles.right}>
                    <div>
                        <MdNotifications className={styles.icon} />
                    </div>
                    <img
                        className={styles.images}
                        src={userData?.profilePicture || 'path/to/default/image.jpg'} // Fallback to default image
                        alt="User"
                        onClick={handleProfile}
                    />
                    <div className={styles.im}>
                        <div>{getCurrentGreeting()}</div>
                        <div className={styles.profile} onClick={handleProfile}>
                            {userData ? userData.name || 'User Name' : 'User Name'} {/* Fallback for user name */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
