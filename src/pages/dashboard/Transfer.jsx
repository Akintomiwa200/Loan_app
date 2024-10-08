// import { useState, useEffect, useContext } from 'react';
// import { BiTransferAlt } from 'react-icons/bi';
// import BigCard from '../../components/dashboardtools/card/bigcard/BigCard';
// import BigCard2 from '../../components/dashboardtools/card/bigcard/BigCard2';
// import { FaPlus } from 'react-icons/fa';
// import styles from './styles/transfer.module.css';
// import { UserContext } from '../../context/UserContext';
// import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
// import firebaseExports from '../../utils/firebase';

// const { db } = firebaseExports;

// const Transfer = () => {
//     const { userData } = useContext(UserContext);
//     const [banks, setBanks] = useState([]);
//     const [bankCode, setBankCode] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [accountNumber, setAccountNumber] = useState('');
//     const [bankName, setBankName] = useState('');
//     const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
//     const [selectedBank, setSelectedBank] = useState(null);
//     const [selectedCardIndex, setSelectedCardIndex] = useState(null);
//     const [selectedBankIndex, setSelectedBankIndex] = useState(null);
//     const [bankList, setBankList] = useState([]);
//     const [isLoadingBanks, setIsLoadingBanks] = useState(true);
//     const [accountDetails, setAccountDetails] = useState(null); // State to store real-time account details
//     const [loadingAccountValidation, setLoadingAccountValidation] = useState(false); // To show a loading indicator during validation

//     // Fetch the list of banks on component mount
//     useEffect(() => {
//         const fetchBanks = async () => {
//             try {
//                 const response = await fetch('https://api.paystack.co/bank', {
//                     headers: {
//                         Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_API_KEY}`,
//                         'Content-Type': 'application/json',
//                     },
//                 });
//                 const data = await response.json();
//                 if (data.status) {
//                     setBankList(data.data);
//                 } else {
//                     console.error('Error fetching banks:', data.message);
//                 }
//             } catch (error) {
//                 console.error('Error fetching banks:', error);
//             } finally {
//                 setIsLoadingBanks(false);
//             }
//         };

//         fetchBanks();
//     }, []);

//     // Handle bank selection
//     const handleBankChange = (selectedBankCode) => {
//         const selectedBank = bankList.find(bank => bank.code === selectedBankCode);
//         setBankCode(selectedBankCode);
//         setBankName(selectedBank ? selectedBank.name : '');
//     };

//     // Validate account number with the selected bank and save to Firestore
//     const validateAccount = async () => {
//         if (!accountNumber || !bankCode) {
//             alert('Please select a bank and enter an account number');
//             return;
//         }

//         setLoadingAccountValidation(true); // Set loading to true

//         const url = `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`;

//         try {
//             const response = await fetch(url, {
//                 headers: {
//                     Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_API_KEY}`,
//                     'Content-Type': 'application/json',
//                 },
//             });

//             const data = await response.json();
//             setLoadingAccountValidation(false); // Set loading to false

//             if (data.status) {
//                 const newBank = {
//                     bankName: data.data.bank_name,
//                     accountNumber: data.data.account_number,
//                     accountName: data.data.account_name,
//                 };

//                 // Append the new validated bank details to the banks state
//                 setBanks((prevBanks) => [...prevBanks, newBank]);

//                 // Save the account to the current user in Firestore
//                 const userDocRef = doc(db, 'users', userData.uid);
//                 await updateDoc(userDocRef, {
//                     bankAccounts: arrayUnion(newBank),
//                 });

//                 // Clear modal inputs and close modal
//                 setAccountNumber('');
//                 setBankCode('');
//                 setAccountDetails(null); // Clear real-time account details
//                 setIsModalOpen(false);
//             } else {
//                 alert(`Account validation failed: ${data.message}`);
//             }
//         } catch (error) {
//             console.error('Error validating account:', error);
//             alert('Something went wrong during account validation');
//             setLoadingAccountValidation(false); // Set loading to false on error
//         }
//     };

//     // Real-time fetching of account details
//     const handleAccountNumberChange = async (e) => {
//         const accountNum = e.target.value;
//         setAccountNumber(accountNum);

//         if (accountNum.length === 10 && bankCode) {
//             // Trigger the account validation as the user types the account number
//             const url = `https://api.paystack.co/bank/resolve?account_number=${accountNum}&bank_code=${bankCode}`;

//             try {
//                 const response = await fetch(url, {
//                     headers: {
//                         Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_API_KEY}`,
//                         'Content-Type': 'application/json',
//                     },
//                 });

//                 const data = await response.json();

//                 if (data.status) {
//                     setAccountDetails({
//                         accountName: data.data.account_name,
//                         accountNumber: data.data.account_number,
//                         bankName: data.data.bank_name,
//                     });
//                 } else {
//                     setAccountDetails(null);
//                 }
//             } catch (error) {
//                 console.error('Error fetching account details:', error);
//                 setAccountDetails(null);
//             }
//         } else {
//             setAccountDetails(null);
//         }
//     };

//     // Open modal for adding a new bank
//     const openAddBankModal = () => {
//         setIsModalOpen(true);
//     };

//     // Handle clicking on a bank to view its details
//     const handleBankClick = (bank, index) => {
//         setSelectedBank(bank);
//         setSelectedBankIndex(index);
//         setIsDetailsModalOpen(true);
//     };

//     // Handle card selection (only one BigCard)
//     const handleCardClick = (index) => {
//         setSelectedCardIndex(index);
//     };

//     return (
//         <div className={styles.main}>
//             <div className={styles.sam}>
//                 <h2>Accounts</h2>
//                 <div className={styles.sam2}>
//                     {[0, 1, 2].map((_, index) => (
//                         <BigCard
//                             key={index}
//                             isSelected={selectedCardIndex === index}
//                             onClick={() => handleCardClick(index)}
//                         />
//                     ))}
//                 </div>
//             </div>
//             <div className={styles.tf}>
//                 <BiTransferAlt />
//             </div>
//             <div className={styles.sam}>
//                 <h2>Connected Bank</h2>
//                 <div className={styles.sam2}>
//                     {banks.map((bank, index) => (
//                         <BigCard2
//                             key={index}
//                             title={bank.bankName}
//                             mainValue={bank.accountName}
//                             subValue={bank.accountNumber}
//                             isSelected={selectedBankIndex === index}
//                             onClick={() => handleBankClick(bank, index)}
//                         />
//                     ))}
//                     <div className={styles.add} onClick={openAddBankModal}>
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
//                 <button className={styles.button1}>
//                     <BiTransferAlt /> Complete Transaction
//                 </button>
//             </div>

//             {/* Add Bank Modal */}
//             {isModalOpen && (
//                 <div className={styles.modal}>
//                     <h3>Add New Bank</h3>
//                     {isLoadingBanks ? (
//                         <p>Loading banks...</p>
//                     ) : (
//                         <>
//                             <select
//                                 value={bankCode}
//                                 className={styles.input}
//                                 onChange={(e) => handleBankChange(e.target.value)}
//                             >
//                                 <option value="">Select Bank</option>
//                                 {bankList.map((bank) => (
//                                     <option key={bank.code} value={bank.code}>
//                                         {bank.name}
//                                     </option>
//                                 ))}
//                             </select>
//                             <input
//                                 type="text"
//                                 placeholder="Account Number"
//                                 value={accountNumber}
//                                 onChange={handleAccountNumberChange}
//                             />
//                             {accountDetails && (
//                                 <p>
//                                     Account Name: {accountDetails.accountName}
//                                 </p>
//                             )}
//                             {loadingAccountValidation && <p>Validating account...</p>}
//                             <span className={styles.buttoncon}>
//                                 <button className={styles.buttons} onClick={validateAccount} disabled={loadingAccountValidation}>
//                                     Add Account
//                                 </button>
//                                 <button className={styles.buttons} onClick={() => setIsModalOpen(false)}>
//                                     Cancel
//                                 </button>
//                             </span>
//                         </>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Transfer;




import { useState, useEffect, useContext } from 'react';
import { BiTransferAlt } from 'react-icons/bi';
import BigCard from '../../components/dashboardtools/card/bigcard/BigCard';
import BigCard2 from '../../components/dashboardtools/card/bigcard/BigCard2';
import { FaPlus } from 'react-icons/fa';
import styles from './styles/transfer.module.css';
import { UserContext } from '../../context/UserContext';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import firebaseExports from '../../utils/firebase';

const { db } = firebaseExports;

const Transfer = () => {
    const { userData } = useContext(UserContext);
    const [banks, setBanks] = useState([]);
    const [bankCode, setBankCode] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedBank, setSelectedBank] = useState(null);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [selectedBankIndex, setSelectedBankIndex] = useState(null);
    const [bankList, setBankList] = useState([]);
    const [isLoadingBanks, setIsLoadingBanks] = useState(true);
    const [accountDetails, setAccountDetails] = useState(null);
    const [loadingAccountValidation, setLoadingAccountValidation] = useState(false);
    const [amount, setAmount] = useState('');
    const [isTransactionSuccessful, setIsTransactionSuccessful] = useState(false);
    const [showResultModal, setShowResultModal] = useState(false);

    // Fetch the list of banks on component mount
    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const response = await fetch('https://api.paystack.co/bank', {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                if (data.status) {
                    setBankList(data.data);
                } else {
                    console.error('Error fetching banks:', data.message);
                }
            } catch (error) {
                console.error('Error fetching banks:', error);
            } finally {
                setIsLoadingBanks(false);
            }
        };

        fetchBanks();
    }, []);

    // Handle bank selection
    const handleBankChange = (selectedBankCode) => {
        const selectedBank = bankList.find(bank => bank.code === selectedBankCode);
        setBankCode(selectedBankCode);
        setBankName(selectedBank ? selectedBank.name : '');
    };

    // Handle amount change
    const handleAmountChange = (e) => {
        setAmount(e.target.value); // Ensure it accepts only numbers
    };

    // Validate account number with the selected bank and save to Firestore
    const validateAccount = async () => {
        if (!accountNumber || !bankCode) {
            alert('Please select a bank and enter an account number');
            return;
        }

        setLoadingAccountValidation(true); // Set loading to true

        const url = `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`;

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            setLoadingAccountValidation(false); // Set loading to false

            if (data.status) {
                const newBank = {
                    bankName: data.data.bank_name,
                    accountNumber: data.data.account_number,
                    accountName: data.data.account_name,
                    balance: 5000, // Assuming new bank has an initial balance (dummy data)
                };

                // Append the new validated bank details to the banks state
                setBanks((prevBanks) => [...prevBanks, newBank]);

                // Save the account to the current user in Firestore
                const userDocRef = doc(db, 'users', userData.uid);
                await updateDoc(userDocRef, {
                    bankAccounts: arrayUnion(newBank),
                });

                // Clear modal inputs and close modal
                setAccountNumber('');
                setBankCode('');
                setAccountDetails(null); // Clear real-time account details
                setIsModalOpen(false);
            } else {
                alert(`Account validation failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Error validating account:', error);
            alert('Something went wrong during account validation');
            setLoadingAccountValidation(false); // Set loading to false on error
        }
    };

    // Real-time fetching of account details
    const handleAccountNumberChange = async (e) => {
        const accountNum = e.target.value;
        setAccountNumber(accountNum);

        if (accountNum.length === 10 && bankCode) {
            // Trigger the account validation as the user types the account number
            const url = `https://api.paystack.co/bank/resolve?account_number=${accountNum}&bank_code=${bankCode}`;

            try {
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();

                if (data.status) {
                    setAccountDetails({
                        accountName: data.data.account_name,
                        accountNumber: data.data.account_number,
                        bankName: data.data.bank_name,
                    });
                } else {
                    setAccountDetails(null);
                }
            } catch (error) {
                console.error('Error fetching account details:', error);
                setAccountDetails(null);
            }
        } else {
            setAccountDetails(null);
        }
    };

    // Handle transaction when button is clicked
    const completeTransaction = () => {
        if (!selectedBank) {
            alert('Please select a bank account.');
            return;
        }

        const amountToDeduct = parseFloat(amount);

        if (isNaN(amountToDeduct) || amountToDeduct <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        const selectedBankBalance = parseFloat(selectedBank.balance || 0); // Assuming bank object has a balance field

        if (selectedBankBalance >= amountToDeduct) {
            // Proceed with the transaction
            const newBalance = selectedBankBalance - amountToDeduct;

            // Update the bank's balance in Firestore
            const updatedBank = { ...selectedBank, balance: newBalance };
            setBanks((prevBanks) =>
                prevBanks.map((bank, index) =>
                    index === selectedBankIndex ? updatedBank : bank
                )
            );

            // Update Firestore with the new balance
            const userDocRef = doc(db, 'users', userData.uid);
            updateDoc(userDocRef, {
                [`bankAccounts.${selectedBankIndex}.balance`]: newBalance,
            });

            setIsTransactionSuccessful(true);
        } else {
            // Insufficient funds
            setIsTransactionSuccessful(false);
        }

        setShowResultModal(true); // Show result modal
    };

    // Open modal for adding a new bank
    const openAddBankModal = () => {
        setIsModalOpen(true);
    };

    // Handle clicking on a bank to view its details
    const handleBankClick = (bank, index) => {
        setSelectedBank(bank);
        setSelectedBankIndex(index);
        setIsDetailsModalOpen(true);
    };

    // Handle card selection (only one BigCard)
    const handleCardClick = (index) => {
        setSelectedCardIndex(index);
    };

    return (
        <div className={styles.main}>
            <div className={styles.sam}>
                <h2>Accounts</h2>
                <div className={styles.sam2}>
                    {[0, 1, 2].map((_, index) => (
                        <BigCard
                            key={index}
                            isSelected={selectedCardIndex === index}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}
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
                            mainValue={bank.accountName}
                            subValue={`Balance: ${bank.balance || 0}`} // Display balance
                            isSelected={selectedBankIndex === index}
                            onClick={() => handleBankClick(bank, index)}
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
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="Enter amount"
                    />
                </div>
                <button className={styles.button1} onClick={completeTransaction}>
                    <BiTransferAlt /> Complete Transaction
                </button>
            </div>

            {/* Transaction Result Modal */}
            {showResultModal && (
                <div className={styles.modal}>
                    {isTransactionSuccessful ? (
                        <p>Transaction successful!</p>
                    ) : (
                        <p>Insufficient funds.</p>
                    )}
                    <button onClick={() => setShowResultModal(false)}>Close</button>
                </div>
            )}

            {/* Add Bank Modal */}
            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>Add New Bank</h2>
                        <div className={styles.inputs}>
                            <label htmlFor="bank">Select Bank</label>
                            <select value={bankCode} onChange={(e) => handleBankChange(e.target.value)}>
                                <option value="">Select Bank</option>
                                {bankList.map((bank) => (
                                    <option key={bank.code} value={bank.code}>
                                        {bank.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.inputs}>
                            <label htmlFor="accountNumber">Account Number</label>
                            <input
                                type="text"
                                value={accountNumber}
                                onChange={handleAccountNumberChange}
                                placeholder="Enter account number"
                            />
                        </div>

                        {accountDetails && (
                            <div>
                                <p>Account Name: {accountDetails.accountName}</p>
                                <p>Bank Name: {accountDetails.bankName}</p>
                            </div>
                        )}

                        <button
                            className={styles.button1}
                            onClick={validateAccount}
                            disabled={loadingAccountValidation}
                        >
                            {loadingAccountValidation ? 'Validating...' : 'Add Bank'}
                        </button>

                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}

            {/* Bank Details Modal */}
            {isDetailsModalOpen && selectedBank && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>Bank Details</h2>
                        <p>Bank Name: {selectedBank.bankName}</p>
                        <p>Account Number: {selectedBank.accountNumber}</p>
                        <p>Account Name: {selectedBank.accountName}</p>
                        <p>Balance: {selectedBank.balance}</p>

                        <button onClick={() => setIsDetailsModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Transfer;
