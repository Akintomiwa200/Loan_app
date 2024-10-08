// import styles from './styles/AccountStatement.module.css'
// import { useNavigate } from 'react-router-dom'
// import { FaFilePdf } from 'react-icons/fa6'
// import { FaFileCsv, FaLink } from 'react-icons/fa'


// const AccountStatement = () => {

//   const navigate = useNavigate()

//   const clickPay = () => {
//     navigate("/dashboard/loan/s")
//   }

//   const clickApply = () => {
//     navigate("/dashboard/loan/s/contact")
//   }

//   const clickCalculate = () => {
//     navigate("/dashboard/loan/s/calculate")
//   }

//   return (
//     <div className={styles.main}>
//       <div className={styles.linkers}>
//         <div onClick={clickPay} className={styles.links}><FaFileCsv /> Download CSV File</div>
//         <div onClick={clickApply} className={styles.links}><FaFilePdf />Download PDF File</div>
//         <div onClick={clickCalculate} className={styles.links}><FaLink /> Get Shareable Link</div>
//       </div>
//     </div>
//   )
// }

// export default AccountStatement




import styles from './styles/AccountStatement.module.css';
import { FaFilePdf } from 'react-icons/fa6';
import { FaFileCsv, FaLink } from 'react-icons/fa';

const AccountStatement = () => {

    const handleCSVDownload = () => {
        // Logic to download CSV
        const csvData = "data:text/csv;charset=utf-8,Account Statement\nDate,Amount\n2024-10-01,1000\n2024-10-02,1500"; // Sample data
        const encodedUri = encodeURI(csvData);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'account_statement.csv');
        document.body.appendChild(link); // Required for Firefox
        link.click();
        document.body.removeChild(link);
    };

    const handlePDFDownload = () => {
        // Logic to download PDF
        const pdfData = `
            <h1>Account Statement</h1>
            <p>Date: 2024-10-01 - Amount: $1000</p>
            <p>Date: 2024-10-02 - Amount: $1500</p>
        `; // Sample data
        const blob = new Blob([pdfData], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'account_statement.pdf';
        document.body.appendChild(link); // Required for Firefox
        link.click();
        document.body.removeChild(link);
    };


    const getShareableLink = () => {
        // Logic to generate a shareable link
        const shareableLink = "https://example.com/dashboard/loan/share"; // Replace with your actual link
        navigator.clipboard.writeText(shareableLink)
            .then(() => {
                alert("Shareable link copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy the link: ", err);
            });
    };

    return (
        <div className={styles.main}>
            <div className={styles.linkers}>
                <div onClick={handleCSVDownload} className={styles.links}>
                    <FaFileCsv /> Download CSV File
                </div>
                <div onClick={handlePDFDownload} className={styles.links}>
                    <FaFilePdf /> Download PDF File
                </div>
                <div onClick={getShareableLink} className={styles.links}>
                    <FaLink /> Get Shareable Link
                </div>
            </div>
        </div>
    );
};

export default AccountStatement;
