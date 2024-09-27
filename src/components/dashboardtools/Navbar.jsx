
// import { MdNotifications } from 'react-icons/md';
// import styles from './styles/navbar.module.css';
// import logo from '../../assets/Logo.png';
// import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useLocation

// const Navbar = () => {
//     const location = useLocation(); // Get current location
//     const naviagte = useNavigate()

//     const handleProfile = () => {
//         naviagte('profile')
//     }

//     const getCurrentGreeting = () => {
//         const hour = new Date().getHours();
//         if (hour < 12) return 'Good Morning';
//         if (hour < 18) return 'Good Afternoon';
//         return 'Good Evening';
//     };

//     // Define a function to dynamically set the title based on the current route
//     const getTitle = () => {
//         switch (location.pathname) {
//             case '/dashboard':
//                 return 'Dashboard';
//             case '/dashboard/account':
//                 return 'My Account(s)';
//             case '/dashboard/loan':
//                 return 'Loan(s)';
//             case '/dashboard/branches':
//                 return 'Branches';
//             case '/dashboard/profile':
//                 return 'Profile';
//             case '/dashboard/transfer':
//                 return 'Transfer';
//             default:
//                 return 'Dashboard'; // Default title if no match
//         }
//     };

//     return (
//         <div className={styles.main}>
//             <div className={styles.nav}>
//                 <div className={styles.logo}>
//                     <div>
//                         <Link to='/'>
//                             <img src={logo} alt="Logo" />
//                         </Link>
//                     </div>
//                     <div className={styles.title}>{getTitle()}</div> {/* Dynamic title */}
//                 </div>

//                 <div className={styles.right}>
//                     <div><MdNotifications className={styles.icon} /> </div>
//                     <img className={styles.images} src='' alt="User" onClick={handleProfile} />
//                     <div className={styles.im}>
//                         <div>{getCurrentGreeting()}</div>
//                         <div className={styles.profile} onClick={handleProfile}>name</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;



import { useContext } from 'react';
import { MdNotifications } from 'react-icons/md';
import styles from './styles/navbar.module.css';
import logo from '../../assets/Logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useLocation
import { UserContext } from '../../context/UserContext'; // Adjust the import path as needed

const Navbar = () => {
    const location = useLocation(); // Get current location
    const navigate = useNavigate();
    const { userData, loading } = useContext(UserContext); // Use UserContext to access user data

    const handleProfile = () => {
        navigate('profile');
    };

    const getCurrentGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    // Define a function to dynamically set the title based on the current route
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
                return 'Dashboard'; // Default title if no match
        }
    };

    // Render a loading state while user data is being fetched
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                    <div>
                        <Link to='/'>
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className={styles.title}>{getTitle()}</div> {/* Dynamic title */}
                </div>

                <div className={styles.right}>
                    <div>
                        <MdNotifications className={styles.icon} />
                    </div>
                    <img
                        className={styles.images}
                        src={userData && userData.profilePicture ? userData.profilePicture : ''}
                        alt="User"
                        onClick={handleProfile}
                    />
                    <div className={styles.im}>
                        <div>{getCurrentGreeting()}</div>
                        <div className={styles.profile} onClick={handleProfile}>
                            {userData ? userData.name : 'User Name'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
