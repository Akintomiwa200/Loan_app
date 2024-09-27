import { useNavigate } from 'react-router-dom';
import styles from './styles/profile.module.css';
import { IoIosAddCircleOutline, IoIosCall } from 'react-icons/io';
import { RiSignalWifi1Fill } from 'react-icons/ri';
import { MdEdit, MdElectricBolt } from 'react-icons/md';

const Profile = () => {
  const navigate = useNavigate();

  // Function to edit profile (this could open a modal or navigate to an edit page)
  const handleEditProfile = () => {
    alert('Edit Profile feature coming soon!');
  };

  // Function to handle connected accounts (this could navigate to the accounts page)
  const handleConnectedAccounts = () => {
    navigate('/dashboard/account');
  };

  // Function to contact the branch
  const handleContactBranch = () => {
    alert('Branch contact information: Phone number +234 123 4567');
    navigate("/dashboard/branches")
  };

  // Function to handle support
  const handleSupport = () => {
    navigate('/support');
  };

  // Function to sign out
  const handleSignOut = () => {
    alert('Signing out...');
    // Perform any necessary sign-out logic here, e.g., clearing authentication tokens
    navigate('/login');
  };

  return (
    <div className={styles.main}>
      <div className={styles.linkers}>
        <div className={styles.prof}>
          <img src='/path-to-image' alt='Profile of Haword Esther' className={styles.profileImage} />
          <h2 onClick={handleEditProfile}>
            <MdEdit /> Haword Esther
          </h2>
        </div>
        <div className={styles.links} onClick={handleConnectedAccounts}>
          <IoIosAddCircleOutline /> Connected Accounts
        </div>
        <div className={styles.links} onClick={handleContactBranch}>
          <IoIosCall /> Contact Branch
        </div>
        <div className={styles.links} onClick={handleSupport}>
          <RiSignalWifi1Fill /> Support
        </div>
        <div className={styles.links} onClick={handleSignOut}>
          <MdElectricBolt /> Signout
        </div>
      </div>
    </div>
  );
};

export default Profile;
