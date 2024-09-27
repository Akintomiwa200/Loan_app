// import { MdOutlineDashboard, MdAccountBalance, } from 'react-icons/md'
// import styles from './styles/sidebar.module.css'
// import { NavLink, useLocation } from 'react-router-dom'
// import { TbMoneybag } from 'react-icons/tb'
// import { CiLocationOn } from 'react-icons/ci'
// import { BiTransferAlt } from 'react-icons/bi'
// import { useNavigate } from 'react-router-dom'


// const Sidebar = () => {

//     const locate = useLocation()
//     const naviagte = useNavigate()

//     const handleTransfer = () => {
//         naviagte('transfer')
//     }

//     const handleProfile = () => {
//         naviagte('profile')
//     }
//     return (
//         <div className={styles.main}>
//             <div className={styles.main2}>
//                 <div className={styles.mains}>
//                     <button onClick={handleTransfer} className={styles.button}> <BiTransferAlt />  Transfer  </button>
//                     <span className='close'> </span>
//                     <div className={styles.linkscontainer}>
//                         <NavLink
//                             className={locate.pathname === '/dashboard' ? styles.activeLink : styles.link}
//                             to='/dashboard'>
//                             <MdOutlineDashboard /> Dashboard
//                         </NavLink>
//                         <NavLink
//                             className={locate.pathname === '/dashboard/account' ? styles.activeLink : styles.link} to='/dashboard/account'>
//                             <MdAccountBalance /> My Account(s)
//                         </NavLink>
//                         <NavLink
//                             className={locate.pathname === '/dashboard/loan' ? styles.activeLink : styles.link} to='/dashboard/loan'> <TbMoneybag /> Loan(s)
//                         </NavLink>
//                         <NavLink
//                             className={locate.pathname === '/dashboard/branches' ? styles.activeLink : styles.link} to='/dashboard/branches'> <CiLocationOn /> Branches
//                         </NavLink>
//                     </div>

//                 </div>
//                 <div className={styles.glory}>
//                     <div className={styles.images} onClick={handleProfile}>
//                         <img src="" alt='img' />
//                         <div className={styles.im}>
//                             <h2>ghjgrgj</h2>
//                             <p>dfjbj@ehf.com</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Sidebar



import { useContext } from 'react';
import { MdOutlineDashboard, MdAccountBalance } from 'react-icons/md';
import styles from './styles/sidebar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { TbMoneybag } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';
import { BiTransferAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'; // Adjust the import path as needed

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userData, loading } = useContext(UserContext); // Use the UserContext

    const handleTransfer = () => {
        navigate('transfer');
    };

    const handleProfile = () => {
        navigate('profile');
    };

    // Render a loading state while user data is being fetched
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.main}>
            <div className={styles.main2}>
                <div className={styles.mains}>
                    <button onClick={handleTransfer} className={styles.button}>
                        <BiTransferAlt /> Transfer
                    </button>
                    <span className='close'></span>
                    <div className={styles.linkscontainer}>
                        <NavLink
                            className={location.pathname === '/dashboard' ? styles.activeLink : styles.link}
                            to='/dashboard'
                        >
                            <MdOutlineDashboard /> Dashboard
                        </NavLink>
                        <NavLink
                            className={location.pathname === '/dashboard/account' ? styles.activeLink : styles.link}
                            to='/dashboard/account'
                        >
                            <MdAccountBalance /> My Account(s)
                        </NavLink>
                        <NavLink
                            className={location.pathname === '/dashboard/loan' ? styles.activeLink : styles.link}
                            to='/dashboard/loan'
                        >
                            <TbMoneybag /> Loan(s)
                        </NavLink>
                        <NavLink
                            className={location.pathname === '/dashboard/branches' ? styles.activeLink : styles.link}
                            to='/dashboard/branches'
                        >
                            <CiLocationOn /> Branches
                        </NavLink>
                    </div>
                </div>
                <div className={styles.glory}>
                    <div className={styles.images} onClick={handleProfile}>
                        {userData && userData.profilePicture ? (
                            <img src={userData.profilePicture} alt='User' />
                        ) : (
                            <img src="" alt='Default' /> // Provide a default image if no profile picture exists
                        )}
                        <div className={styles.im}>
                            <h2>{userData ? userData.name : 'User Name'}</h2>
                            <p>{userData ? userData.email : 'user@example.com'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
