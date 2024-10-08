
import { useContext } from 'react';
import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/dashboardtools/Navbar';
import Sidebar from '../components/dashboardtools/Sidebar';
import { UserContext } from '../context/UserContext';
import Loading from '../pages/loading/Loading'; // Loading component for feedback
import styles from './styles/dashboardlayout.module.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const DashboardLayout = () => {
    const { loading } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    if (loading) {
        return <Loading />; // Show loading spinner until user data is available
    }

    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.split}>
                <div onClick={toggleSidebar} className={styles.splat}>
                    {isOpen ? (
                        <div className={styles.open}>
                            <MdKeyboardArrowRight className={styles.opeenn} />
                        </div>
                    ) : (
                        <div className={styles.close}>
                            <MdKeyboardArrowLeft className={styles.opeenn} />
                        </div>
                    )}
                </div>
                {isOpen && <Sidebar />}
                <div className={styles.outlet}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
