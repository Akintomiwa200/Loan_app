import { useContext } from 'react';
import { MdOutlineDashboard, MdAccountBalance } from 'react-icons/md';
import styles from './styles/sidebar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { TbMoneybag } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';
import { BiTransferAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);

    const handleTransfer = () => {
        navigate('transfer');
    };

    const handleProfile = () => {
        navigate('profile');
    };

    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    const getInitials = (name) => name.split(' ').map(word => word[0]).join('');

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
                        {userData?.profilePicture ? (
                            <img src={userData.profilePicture} alt="User" />
                        ) : (
                            <div className={styles.initials}>{getInitials(userData?.name || 'User')}</div>
                        )}
                        <div className={styles.im}>
                            <h2>{userData?.name || 'User Name'}</h2>
                            <p>{userData?.email || 'user@example.com'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;


