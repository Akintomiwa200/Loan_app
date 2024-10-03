import { Outlet } from "react-router-dom"
import Navbar from "../components/dashboardtools/Navbar"
import Sidebar from "../components/dashboardtools/Sidebar"
import styles from './styles/dashboardlayout.module.css'
import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'


const DashboardLayout = () => {


    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.main}>

            <Navbar />
            <div className={styles.split}>
                <div onClick={toggleSidebar} className={styles.splat}>
                    {isOpen ? <div className={styles.open}><MdKeyboardArrowRight className={styles.opeenn} /></div> : <div className={styles.close}>
                        <MdKeyboardArrowLeft className={styles.opeenn} /> </div>
                    }
                </div>
                {isOpen && (
                    <Sidebar />
                )}

                <div className={styles.outlet}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout


// import { Outlet } from "react-router-dom";
// import Navbar from "../components/dashboardtools/Navbar";
// import Sidebar from "../components/dashboardtools/Sidebar";
// import styles from './styles/dashboardlayout.module.css';
// import { useState, useContext } from 'react';
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
// import { UserContext } from '../context/UserContext'; // Import UserContext
// import Loading from '../pages/loading/Loading'; // Import Loading component

// const DashboardLayout = () => {
//     const { loading } = useContext(UserContext); // Access loading state from UserContext
//     const [isOpen, setIsOpen] = useState(true);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     // Show the loading component until the data is fully loaded
//     if (loading) {
//         return <Loading />;
//     }

//     return (
//         <div className={styles.main}>
//             <Navbar />
//             <div className={styles.split}>
//                 <div onClick={toggleSidebar} className={styles.splat}>
//                     {isOpen ? (
//                         <div className={styles.open}>
//                             <MdKeyboardArrowRight className={styles.opeenn} />
//                         </div>
//                     ) : (
//                         <div className={styles.close}>
//                             <MdKeyboardArrowLeft className={styles.opeenn} />
//                         </div>
//                     )}
//                 </div>
//                 {isOpen && <Sidebar />}
//                 <div className={styles.outlet}>
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashboardLayout;
