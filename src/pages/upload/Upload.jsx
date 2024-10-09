import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { ref, uploadBytes } from 'firebase/storage';
import firebaseExports from '../../utils/firebase'; // Import your storage instance
import styles from './Upload.module.css';

const Upload = () => {
  const { storage } = firebaseExports;

  const location = useLocation();
  const navigate = useNavigate();

  const [address, setAddress] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(location.state?.progress || 40);
  const [progressColor, setProgressColor] = useState(progress >= 80 ? 'green' : 'yellow');
  const [isUploading, setIsUploading] = useState(false)


  const sliderTexts = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt voluptatum eveniet blanditiis molestias quos ipsam nisi illum?",
    "Excepturi doloribus amet a natus, dignissimos numquam quia deleniti eveniet pariatur fugiat?",
    "Repellendus tempora, beatae deleniti ullam quae officiis delectus, corporis enim quasi dolore ipsa eos.",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderTexts.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [sliderTexts.length]);

  useEffect(() => {
    let filledFields = 0;
    if (address) filledFields++;
    if (file) filledFields++;

    const completionPercentage = 40 + (filledFields / 2) * 60;
    setProgress(completionPercentage);
    setProgressColor(completionPercentage >= 100 ? 'green' : 'yellow');
  }, [address, file]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    if (!file) {
      setError('Please upload a passport document.');
      return;
    }

    const storageRef = ref(storage, `documents/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      setError('');
      setProgress(100);
      setProgressColor('green');
      navigate('/login');
    } catch (err) {
      setError('Failed to upload document. Please try again.');
      console.error('Error uploading file:', err);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.uploadD}>
        <div className={styles.aside}>
          <div className={styles.asideInnerDiv}>
            <p className={styles.star}>
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </p>
            <p className={styles.lorem}>
              {sliderTexts[currentSlide]}
            </p>
            <div className={styles.peep}>
              <div>
                <img src="" alt="man" />
              </div>
              <div>
                <h2>fdgkjgjfhgjkf</h2>
                <em>Co-Founder Cesign.co</em>
              </div>
            </div>
            <div className={styles.slider}>
              {sliderTexts.map((_, index) => (
                <span
                  key={index}
                  className={index === currentSlide ? styles.actively : styles.slided}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <h3 className={styles.topText}>Join Our Cooperative</h3>
          <p className={styles.formP}>Ogbomoso Ifedayo Alajo Cooperative Investment & Credit Union Limited.</p>
          <div className={styles.progress}>
            Progress:
            <div className={styles.myProgress}>
              <div
                className={styles.myBar}
                style={{
                  width: `${progress}%`,
                  backgroundColor: progressColor,
                }}
              ></div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {error && <p className={styles.errorMsg}>{error}</p>}
            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Address</h3>
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.inputDiv}>
              <h3 className={styles.inputText}>Upload Passport</h3>
              <input
                type="file"
                onChange={handleFileChange}
                className={styles.input}
              />
            </div>
            <button className={styles.LogBTn} type="submit">
              {isUploading ? (
                <>
                  Uploading...
                </>
              ) : (
                'Upload Documents'
              )
              }
            </button>
            <p className={styles.downText}>
              Already have an account? <NavLink className={styles.link} to="/Login">Sign in</NavLink>
            </p>
          </form>
        </div>
      </div >
    </div >
  );
};

export default Upload;
