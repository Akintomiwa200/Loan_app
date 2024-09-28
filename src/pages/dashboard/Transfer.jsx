// import { BiTransferAlt } from 'react-icons/bi'
// import BigCard from '../../components/dashboardtools/card/bigcard/BigCard'
// import styles from './styles/transfer.module.css'
// import BigCard2 from '../../components/dashboardtools/card/bigcard/BigCard2'
// import { FaPlus } from 'react-icons/fa'


// const Transfer = () => {
//     return (
//         <div className={styles.main}>

//             <div className={styles.sam}>
//                 <h2>Accounts</h2>
//                 <div className={styles.sam2}>
//                     <BigCard />
//                     <BigCard />
//                     <BigCard />
//                 </div>
//             </div>
//             <div className={styles.tf}>
//                 <BiTransferAlt />
//             </div>
//             <div className={styles.sam}>
//                 <h2>Connnected Bank</h2>
//                 <div className={styles.sam2}>
//                     <BigCard2 />
//                     <BigCard2 />
//                     <BigCard2 />
//                     <div className={styles.add}>
//                         <FaPlus />
//                         <h2>Add Bank</h2>
//                     </div>
//                 </div>
//             </div>
//             <div className={styles.buttonspace}>
//                 <div className={styles.inputs}>
//                     <label htmlFor="">Amount</label>
//                     <input type="text" />
//                 </div>
//                 <button className={styles.button1}><BiTransferAlt />Complete Transaction </button>
//             </div>
//         </div>
//     )
// }

// export default Transfer



import { useState } from 'react';
import { BiTransferAlt } from 'react-icons/bi';
import BigCard from '../../components/dashboardtools/card/bigcard/BigCard';
import BigCard2 from '../../components/dashboardtools/card/bigcard/BigCard2';
import { FaPlus } from 'react-icons/fa';
import styles from './styles/transfer.module.css';

const Transfer = () => {
    const [banks, setBanks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedBank, setSelectedBank] = useState(null);

    const validateAccount = async () => {
        const url = `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`;

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (data.status) {
                const newBank = {
                    bankName: data.data.bank_name,
                    accountNumber: data.data.account_number,
                    accountName: data.data.account_name,
                    balance: 'N/A', // Set balance if available
                };

                setBanks([...banks, newBank]);
                setIsModalOpen(false); // Close modal after adding
            } else {
                alert('Account validation failed');
            }
        } catch (error) {
            console.error('Error validating account:', error);
            alert('Something went wrong during account validation');
        }
    };


    const openAddBankModal = () => {
        setIsModalOpen(true);
    };

    const handleBankClick = (bank) => {
        setSelectedBank(bank);
        setIsDetailsModalOpen(true);
    };

    return (
        <div className={styles.main}>
            <div className={styles.sam}>
                <h2>Accounts</h2>
                <div className={styles.sam2}>
                    <BigCard />
                    <BigCard />
                    <BigCard />
                </div>
            </div>
            <div className={styles.tf}>
                <BiTransferAlt />
            </div>
            <div className={styles.sam}>
                <h2>Connected Bank</h2>
                <div className={styles.sam2}>
                    {banks.map((bank, index) => (
                        <BigCard2
                            key={index}
                            title={bank.bankName}
                            mainValue={bank.accountNumber}
                            subValue={bank.balance}
                            onClick={() => handleBankClick(bank)}
                        />
                    ))}
                    <div className={styles.add} onClick={openAddBankModal}>
                        <FaPlus />
                        <h2>Add Bank</h2>
                    </div>
                </div>
            </div>
            <div className={styles.buttonspace}>
                <div className={styles.inputs}>
                    <label htmlFor="">Amount</label>
                    <input type="text" />
                </div>
                <button className={styles.button1}><BiTransferAlt /> Complete Transaction </button>
            </div>

            {/* Add Bank Modal */}
            {isModalOpen && (
                <div className={styles.modal}>
                    <h3>Add New Bank</h3>
                    <input
                        type="text"
                        placeholder="Bank Name"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Account Number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                    />
                    <button onClick={validateAccount}>Validate & Add</button>
                    <button onClick={() => setIsModalOpen(false)}>Cancel</button>
                </div>
            )}

            {/* Bank Details Modal */}
            {isDetailsModalOpen && selectedBank && (
                <div className={styles.modal}>
                    <h3>Bank Details</h3>
                    <p>Bank: {selectedBank.bankName}</p>
                    <p>Account Number: {selectedBank.accountNumber}</p>
                    <p>Balance: {selectedBank.balance}</p>
                    <button onClick={() => setIsDetailsModalOpen(false)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Transfer;
