import styles from './styles/dashboard.module.css';
import Account from './Account'
import SmallCard from '../../components/dashboardtools/card/smallcard/SmallCard';
import { IoIosAddCircleOutline, IoIosCall, IoMdBus } from 'react-icons/io';
import { RiSignalWifi1Fill } from 'react-icons/ri';
import { MdArrowCircleRight, MdElectricBolt } from 'react-icons/md';
import Pagnation from '../../components/dashboardtools/pagnation/Pagnation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [currectPage, setCurrentPage] = useState(1);
    const totalPages = 10;


    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleCliek = () => {
        alert('The button has been clicked');
    };

    const handleCliekHistory = () => {
        navigate("/dashboard/history");
    };


    return (
        <div className={styles.main}>
            <div className={styles.bigcard}>

                <div className={styles.big}>
                    <Account />
                </div>
            </div>
            <div className={styles.list}>
                <h2>Quick Actions</h2>
                <h1 className={styles.blunt} onClick={handleCliek}>See More <MdArrowCircleRight /></h1>
            </div>
            <div className={styles.smalcard}>
                <div className={styles.small}>
                    <SmallCard icon={<IoIosAddCircleOutline />} texts='Fund Account' color='red' />
                    <SmallCard icon={<IoIosCall />} texts='Airtime' color='palegreen' />
                    <SmallCard icon={<RiSignalWifi1Fill />} texts='Internet' color='yellow' />
                    <SmallCard icon={<MdElectricBolt />} texts='Electricity' color='blue' />
                    <SmallCard icon={<IoMdBus />} texts='Transportation' color='purple' />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.list2}>
                    <div>
                        <h2>Transactions</h2>
                        <p>See Receipt for all Transactions</p>
                    </div>
                    <h1 className={styles.blunt} onClick={handleCliekHistory}>See All Transactions <MdArrowCircleRight /></h1>
                </div>
                <div>
                    active
                </div>
                <div className={styles.page}>
                    <Pagnation
                        currectPage={currectPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
