
import { useState, useEffect } from 'react';
import { BiTransferAlt } from 'react-icons/bi';
import BigCard from '../../components/dashboardtools/card/bigcard/BigCard';
import BigCard2 from '../../components/dashboardtools/card/bigcard/BigCard2';
import { FaPlus } from 'react-icons/fa';
import styles from './styles/transfer.module.css';

const Transfer = () => {
    const [banks, setBanks] = useState([]); // Holds validated bank accounts
    const [bankCode, setBankCode] = useState(''); // Selected bank code
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal for adding bank
    const [accountNumber, setAccountNumber] = useState(''); // Input for account number
    const [bankName, setBankName] = useState(''); // Selected bank name
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false); // Modal for bank details
    const [selectedBank, setSelectedBank] = useState(null); // Holds selected bank for details

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

    // Validate account number with the selected bank
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

            if (data.status) {
                const newBank = {
                    bankName: data.data.bank_name,
                    accountNumber: data.data.account_number,
                    accountName: data.data.account_name,  // Added account name for potential use
                    balance: 'N/A', // Set balance or other available fields from API
                };

                // Append the new validated bank details to the banks state
                setBanks((prevBanks) => [...prevBanks, newBank]);
                setIsModalOpen(false); // Close modal after successful addition
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
            title={bankName}      // Display the account name here
            mainValue={bank.accountName}  // Display the account number here
            subValue={bank.accountNumber}        // Display the balance (currently "N/A")
            onClick={() => handleBankClick(bank)}  // Show bank details on click
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
                            Validate & Add
                        </button>
                        <button className={styles.buttons} onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </button>
                    </span>
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
