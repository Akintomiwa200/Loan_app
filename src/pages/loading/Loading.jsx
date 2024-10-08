import styles from './loading.module.css';
import load from '../../assets/load.svg';

const Loading = () => {
    return (
        <div className={styles.main}>
            <img src={load} alt="Loading..." className={styles.loadingImage} />
        </div>
    );
};

export default Loading;
