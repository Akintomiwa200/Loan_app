import { useState } from 'react';
import styles from './Header.module.css'; // Import modular CSS
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const HandleMenuBtn = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Link to='/'>
          <img src={Logo} alt="" />
        </Link>

        <div className={styles.Nav_Container}>
          <a href="#">about</a>
          <a href="#">community</a>
          <a href="#">F.A.Q</a>
          <a href="#">Career</a>
        </div>

        <div className={styles.Button_Container}>
          <button className={styles.header_Btn}>
            <NavLink to="/Login" className={styles.btn_Link}>sign in</NavLink>
          </button>
          <button className={styles.header_Btn}>
            <NavLink to="/Signup" className={styles.btn_Link}>sign up</NavLink>
          </button>
        </div>

        <button className={styles.menuBtn} onClick={HandleMenuBtn}>
          {openMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile header */}
      {openMenu && (
        <div className={styles.mobile_header}>
          <div className={styles.mobile_header_Nav_Container}>
            <a href="#" className={styles.mobLink}>about</a>
            <a href="#" className={styles.mobLink}>community</a>
            <a href="#" className={styles.mobLink}>F.A.Q</a>
            <a href="#" className={styles.mobLink}>Career</a>
          </div>

          <div className={styles.mobile_header_Button_Container}>
            <button className={styles.mobile_header_Btn}>
              <NavLink to="/Login" className={styles.btn_Link}>sign in</NavLink>
            </button>
            <button className={styles.mobile_header_Btn}>
              <NavLink to="/Signup" className={styles.btn_Link}>sign up</NavLink>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
