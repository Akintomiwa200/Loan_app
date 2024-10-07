// import styles from './styles/dashboard.module.css'
// import BigCard from '../../components/dashboardtools/card/bigcard/BigCard'
// import SmallCard from '../../components/dashboardtools/card/smallcard/SmallCard'
// import { IoIosAddCircleOutline, IoIosCall, IoMdBus } from 'react-icons/io'
// import { RiSignalWifi1Fill } from 'react-icons/ri'
// import { MdArrowCircleRight, MdElectricBolt } from 'react-icons/md'
// import Pagnation from '../../components/dashboardtools/pagnation/Pagnation'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


// const Dashboard = () => {
//     const navigate = useNavigate()
//     const [currectPage, setCurrentPage] = useState(1);
//     const totalPages = 10;

//     const handlePageChange = (newPage) => {
//         setCurrentPage(newPage);
//     }

//     const handleCliek = () => {
//         alert('the button has been clicked')
//     }
//     const handleCliekHistory = () => {
//         // alert('the button has been clicked')
//         navigate("/dashboard/history")
//     }

//     return (
//         <div className={styles.main}>
//             <div className={styles.bigcard}>
//                 <div className={styles.list}>
//                     <h2>
//                         Accounts
//                     </h2>
//                 </div>
//                 <div className={styles.big}>
//                     <BigCard mainValue='12,345' subValue='10' title='savings' backgroundColor='#f9f9f9' />
//                     <BigCard mainValue='12,345' subValue='13' title='current' backgroundColor='#fff6f6' />
//                     <BigCard mainValue='10,000' subValue='8' title='fixed' backgroundColor='#f6f9ff' />
//                 </div>
//             </div>
//             <div className={styles.list}>
//                 <h2>
//                     Quick Actions
//                 </h2>
//                 <h1 className={styles.blunt} onClick={handleCliek}>See More <MdArrowCircleRight /> </h1>
//             </div>
//             <div className={styles.smalcard}>
//                 <div className={styles.small}>
//                     <SmallCard icon={<IoIosAddCircleOutline />} texts='Fund Account' color='red' />
//                     <SmallCard icon={<IoIosCall />} texts='Airtime' color='palegreen' />
//                     <SmallCard icon={<RiSignalWifi1Fill />} texts='Internet' color='yellow' />
//                     <SmallCard icon={<MdElectricBolt />} texts='Electricity' color='blue' />
//                     <SmallCard icon={<IoMdBus />} texts='transportation' color='purple' />
//                 </div>
//             </div>
//             <div className={styles.content}>
//                 <div className={styles.list2}>
//                     <div>
//                         <h2>Transactions</h2>
//                         <p>See Reciept for al Transaction</p>
//                     </div>
//                     <h1 className={styles.blunt} onClick={handleCliekHistory}>See All Transactions <MdArrowCircleRight /> </h1>
//                 </div>
//                 <div>
//                     active
//                 </div>
//                 <div className={styles.page}>
//                     <Pagnation
//                         currectPage={currectPage}
//                         totalPages={totalPages}
//                         onPageChange={handlePageChange}
//                     />


//                 </div>
//                 {/* <div className={styles.pagnation}>
//                     <button className={styles.clicks}><MdKeyboardArrowLeft /> Previous</button>
//                     <div>

//                     </div>
//                     <button className={styles.clicks}>Next <MdKeyboardArrowRight /></button>
//                 </div> */}
//             </div>

//         </div>
//     )
// }

// export default Dashboard



import styles from './styles/dashboard.module.css';
import BigCard from '../../components/dashboardtools/card/bigcard/BigCard';
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

    // State to keep track of the selected card
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleCliek = () => {
        alert('The button has been clicked');
    };

    const handleCliekHistory = () => {
        navigate("/dashboard/history");
    };

    const handleCardClick = (index) => {
        // Toggle selection: if the clicked card is already selected, deselect it
        if (selectedCardIndex === index) {
            setSelectedCardIndex(null);
        } else {
            setSelectedCardIndex(index);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.bigcard}>
                <div className={styles.list}>
                    <h2>Accounts</h2>
                </div>
                <div className={styles.big}>
                    <BigCard
                        mainValue='12,345'
                        subValue='10'
                        title='savings'
                        backgroundColor='#f9f9f9'
                        isSelected={selectedCardIndex === 0} // Check if this card is selected
                        onClick={() => handleCardClick(0)} // Handle click event
                    />
                    <BigCard
                        mainValue='12,345'
                        subValue='13'
                        title='current'
                        backgroundColor='#fff6f6'
                        isSelected={selectedCardIndex === 1} // Check if this card is selected
                        onClick={() => handleCardClick(1)} // Handle click event
                    />
                    <BigCard
                        mainValue='10,000'
                        subValue='8'
                        title='fixed'
                        backgroundColor='#f6f9ff'
                        isSelected={selectedCardIndex === 2} // Check if this card is selected
                        onClick={() => handleCardClick(2)} // Handle click event
                    />
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
