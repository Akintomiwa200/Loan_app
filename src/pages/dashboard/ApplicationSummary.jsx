import styles from './styles/applicationsummary.module.css'

const ApplicationoSummary = () => {
    return (
        <div className={styles.main}>
            <div className={styles.second}>
                <div className={styles.content}>
                    <h1>Application Summary</h1>
                    <em>Kindly allow 3-4hrs to reflect in your bank account</em>
                    <hr />
                    <span className={styles.cage}>
                        <h2>Purpose of Loan </h2>
                        <h5>school fees</h5>
                    </span>

                    <span className={styles.cage}>
                        <h2>Next Repayment Date </h2>
                        <h5>02/04/2021</h5>
                    </span>

                    <span className={styles.cage}>
                        <h2>interest rate </h2>
                        <h5>20%</h5>
                    </span>

                    <span className={styles.cage}>
                        <h2>Monthly Payment</h2>
                        <h5>#5000</h5>
                    </span>

                    <span className={styles.cage}>
                        <h2>No of Payments </h2>
                        <h5>24</h5>
                    </span>


                    <hr />
                    <span className={styles.cage}>
                        <h2>Total Payback Amount </h2>
                        <h5>#58,000</h5>
                    </span>
                </div>
                <div className={styles.buttonspace}>
                    <button className={styles.button1}>Print Reciept</button>
                    <button className={styles.button}>Go Back To DashBoard</button>
                </div>
            </div>
        </div>
    )
}

export default ApplicationoSummary
