import styles from "./Digital.module.css"; // Import modular CSS
import Tree from "../../assets/Tree.png";
import Key from "../../assets/key.png";
import Man from "../../assets/man.png";
import Thumb from "../../assets/Thumb.png";

const Digital = () => {
  return (
    <div>
      <div className={styles.digitalContainer}>
        <div className={styles.innerDigitalContainer}>
          <h3 className={styles.digTopText}>our digital services</h3>
          <p className={styles.digP}>
            Our new financial management solution is specially designed for
            cooperative societies like ours, helping you manage your finances
            effectively. Whether you&apos;re applying for a loan, managing your
            account, or simply checking your balance, everything you need is now
            just a few clicks away.
          </p>

          <div className={styles.flexServices}>
            <div className={styles.services}>
              <div className={styles.boxServices1}>
                <img src={Thumb} alt="" className={styles.digImg} />
                <div className={styles.innerBoxServices}>
                  <h3 className={styles.topTextServ}>Secure Login & Registration</h3>
                  <p className={styles.downTextServices}>
                    Enjoy a fast and secure login process with multi-factor
                    authentication, or easily register to become a member with
                    our user-friendly registration form.
                  </p>
                  <p className={styles.redText}>security</p>
                </div>
              </div>

              <div className={styles.boxServices2}>
                <img src={Key} alt="" className={styles.digImg} />
                <div className={styles.innerBoxServices}>
                  <h3 className={styles.topTextServ}>loan service</h3>
                  <p className={styles.downTextServices}>
                    Apply for loans quickly and easily. Use our loan calculator
                    to estimate your repayments, track your application status
                    in real-time, and upload required documents securely.
                  </p>
                  <p className={styles.redText}>loan</p>
                </div>
              </div>

              <div className={styles.boxServices3}>
                <img src={Man} alt="" className={styles.digImg} />
                <div className={styles.innerBoxServices}>
                  <h3 className={styles.topTextServ}>customer support</h3>
                  <p className={styles.downTextServices}>
                    Have a question or need assistance? Our integrated chat
                    support and ticket system are here to help, along with
                    direct contact information for all 49 branches.
                  </p>
                  <p className={styles.redText}>support</p>
                </div>
              </div>

              <div className={styles.boxServices4}>
                <img src={Tree} alt="" className={styles.digImg} />
                <div className={styles.innerBoxServices}>
                  <h3 className={styles.topTextServ}>Branch locator</h3>
                  <p className={styles.downTextServices}>
                    Find the nearest branch using our interactive map, or search
                    for specific services available at each branch. You can even
                    schedule in-person appointments.
                  </p>
                  <p className={styles.redText}>location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
