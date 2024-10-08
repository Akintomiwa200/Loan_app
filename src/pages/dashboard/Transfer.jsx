


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
    const { userData } = useContext(UserContext); // Get current user data (includes userId)
    const [banks, setBanks] = useState([]); // Holds validated bank accounts
    const [bankCode, setBankCode] = useState(''); // Selected bank code
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal for adding bank
    const [accountNumber, setAccountNumber] = useState(''); // Input for account number
    const [bankName, setBankName] = useState(''); // Selected bank name
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false); // Modal for bank details
    const [selectedBank, setSelectedBank] = useState(null); // Holds selected bank for details
    const [selectedCardIndex, setSelectedCardIndex] = useState(null); // For selecting only one BigCard
    const [selectedBankIndex, setSelectedBankIndex] = useState(null); // For selecting only one BigCard2

    const [bankList, setBankList] = useState([]); // List of banks fetched from the API
    const [isLoadingBanks, setIsLoadingBanks] = useState(true); // Loading state for bank list

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
                    setIsLoadingBanks(false);
                } else {
                    console.error('Error fetching banks:', data.message);
                    setIsLoadingBanks(false);
                }
            } catch (error) {
                console.error('Error fetching banks:', error);
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

    // Validate account number with the selected bank and save to Firebase
    const validateAccount = async () => {
        if (!accountNumber || !bankCode) {
            alert('Please select a bank and enter an account number');
            return;
        }

        const url = `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`;

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            console.log('Paystack Response:', data);  // Log response for debugging

            if (data.status) {
                const newBank = {
                    bankName: data.data.bank_name,
                    accountNumber: data.data.account_number,
                    accountName: data.data.account_name,
                };

                // Append the new validated bank details to the banks state
                setBanks((prevBanks) => [...prevBanks, newBank]);

                // Save the account to the current user in Firebase
                const userDocRef = doc(db, 'users', userData.uid); // Get the document for the user
                console.log('UserDocRef:', userDocRef);  // Log the reference for debugging

                await updateDoc(userDocRef, {
                    bankAccounts: arrayUnion(newBank), // Add new bank account to user's bankAccounts array
                });

                // Clear modal inputs and close modal
                setAccountNumber('');
                setBankCode('');
                setIsModalOpen(false); // Close modal after successful addition
            } else {
                alert(`Account validation failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Error validating account:', error);
            alert('Something went wrong during account validation');
        }
    };

    // Open modal for adding a new bank
    const openAddBankModal = () => {
        setIsModalOpen(true);
    };

    // Handle clicking on a bank to view its details
    const handleBankClick = (bank, index) => {
        setSelectedBank(bank);
        setSelectedBankIndex(index); // Track selected bank index
        setIsDetailsModalOpen(true);
    };

    // Handle card selection (only one BigCard1)
    const handleCardClick = (index) => {
        setSelectedCardIndex(index); // Ensure only one card is selected at a time
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
                            subValue={bank.accountNumber}
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
                    <input type="text" />
                </div>
                <button className={styles.button1}><BiTransferAlt /> Complete Transaction </button>
            </div>

            {/* Add Bank Modal */}
            {isModalOpen && (
                <div className={styles.modal}>
                    <h3>Add New Bank</h3>
                    {isLoadingBanks ? (
                        <p>Loading banks...</p>
                    ) : (
                        <select
                            value={bankCode}
                            className={styles.input}
                            onChange={(e) => handleBankChange(e.target.value)}
                        >
                            <option value="">Select Bank</option>
                            {bankList.map((bank) => (
                                <option key={bank.code} value={bank.code}>
                                    {bank.name}
                                </option>
                            ))}
                        </select>
                    )}
                    <input
                        type="text"
                        placeholder="Account Number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                    />
                    <span className={styles.buttoncon}>
                        <button className={styles.buttons} onClick={validateAccount}>
                            Add Account
                        </button>
                        <button className={styles.buttons} onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </button>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Transfer;
