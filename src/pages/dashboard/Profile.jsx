import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/profile.module.css';
import { IoIosAddCircleOutline, IoIosCall } from 'react-icons/io';
import { RiSignalWifi1Fill } from 'react-icons/ri';
import { MdEdit, MdElectricBolt } from 'react-icons/md';
import { UserContext } from '../../context/UserContext';
import { signOut } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import firebaseExports from '../../utils/firebase';

const { auth, db, storage } = firebaseExports;

const Profile = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedName, setUpdatedName] = useState(userData?.name || '');
  const [updatedEmail, setUpdatedEmail] = useState(userData?.email || '');
  const [updatedImage, setUpdatedImage] = useState(null);

  // Function to open the edit profile modal
  const handleEditProfile = () => {
    setIsEditMode(true);
  };

  // Function to close the edit profile modal
  const handleCloseModal = () => {
    setIsEditMode(false);
  };

  // Function to handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdatedImage(file);
    }
  };

  // Function to save the edited profile details (including image) to Firebase
  const handleSaveProfile = async () => {
    console.log('Attempting to save profile...');

    if (!updatedName || !updatedEmail) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const userDocRef = doc(db, 'users', userData.uid);
      console.log('User document reference:', userDocRef.id);

      let updatedData = {
        name: updatedName,
        email: updatedEmail,
      };

      // If a new image is selected, upload it to Firebase Storage
      if (updatedImage) {
        const imageRef = ref(storage, `profileImages/${userData.uid}`);
        console.log('Uploading image to:', imageRef.fullPath);
        await uploadBytes(imageRef, updatedImage);
        const imageURL = await getDownloadURL(imageRef);
        updatedData.profilePicture = imageURL;
        console.log('Uploaded image URL:', imageURL);
      }

      // Update Firestore with the new data
      await updateDoc(userDocRef, updatedData);
      console.log('Profile updated successfully:', updatedData);

      // Update the context with the new user data
      setUserData((prev) => ({
        ...prev,
        name: updatedName,
        email: updatedEmail,
        profilePicture: updatedData.profilePicture || prev.profilePicture,
      }));

      setIsEditMode(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again later.');
    }
  };

  // Function to handle connected accounts (navigate to the accounts page)
  const handleConnectedAccounts = () => {
    navigate('/dashboard/account');
  };

  // Function to contact the branch
  const handleContactBranch = () => {
    alert('Branch contact information: Phone number +234 123 4567');
    navigate('/dashboard/branches');
  };

  // Function to handle support
  const handleSupport = () => {
    navigate('/support');
  };

  // Function to sign out user in real-time and close the session
  const handleSignOut = async () => {
    try {
      // Clear any user data from local storage or context before signing out
      localStorage.removeItem('userSession'); // Adjust if you're using a different key
      setUserData(null); // Clear user data from context

      // Sign out using Firebase authentication
      await signOut(auth);

      // Optionally, inform other parts of the app that the user has signed out
      // This can be done via context, state management, or an event emitter

      alert('Signed out successfully!');
      navigate('/login'); // Redirect to the login page after signing out
    } catch (error) {
      console.error('Error signing out:', error);
      alert('Failed to sign out. Please try again.');
    }
  };


  return (
    <div className={styles.main}>
      <div className={styles.linkers}>
        <div className={styles.prof}>
          <img
            src={userData?.profilePicture || '/path-to-default-profile-image'}
            alt={`Profile of ${userData?.name || 'User'}`}
            className={styles.profileImage}
          />
          <h2 onClick={handleEditProfile}>
            <MdEdit /> {userData?.name || 'User'}
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

      {/* Modal for editing profile */}
      {isEditMode && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Edit Profile</h3>
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              placeholder="Update Name"
            />
            <input
              type="email"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
              placeholder="Update Email"
            />
            {/* File input for profile image */}
            <input type="file" onChange={handleImageChange} />
            <span>
              <button className={styles.saveButton} onClick={handleSaveProfile}>
                Save
              </button>
              <button className={styles.cancelButton} onClick={handleCloseModal}>
                Cancel
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
