import BigCard from '../../components/dashboardtools/card/bigcard/BigCard';
import styles from './styles/account.module.css';
import { useState } from 'react';

const Account = () => {
    // State to keep track of the selected card
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

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
                        subValue='20'
                        title='current'
                        backgroundColor='#fff6f6'
                        isSelected={selectedCardIndex === 1} // Check if this card is selected
                        onClick={() => handleCardClick(1)} // Handle click event
                    />
                    <BigCard
                        mainValue='10,000'
                        subValue='25'
                        title='fixed'
                        backgroundColor='#f6f9ff'
                        isSelected={selectedCardIndex === 2} // Check if this card is selected
                        onClick={() => handleCardClick(2)} // Handle click event
                    />
                </div>
            </div>
        </div>
    );
}

export default Account;
