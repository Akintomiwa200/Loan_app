import PropTypes from 'prop-types';
import styles from './bigcard.module.css'



const BigCard = ({ title, mainValue, subValue, backgroundColor }) => {
    return (
        <div className={styles.main} style={{ backgroundColor }}>
            <div>
                <div >
                    <h6 className={styles.tit}>BALANCE</h6>
                    <h2 className={styles.tit2}>#<span>{mainValue}</span></h2>
                </div>
                <div>
                    <h6 className={styles.tit}>INTEREST</h6>
                    <h2 className={styles.tit2}><span>{subValue}</span>%</h2>
                </div>
            </div>
            <div>
                <h6 className={styles.tit}>TYPE</h6>
                <h5 className={styles.tit2}>{title}</h5>
            </div>
            <div className={styles.curve}></div>
            <div className={styles.curve1}></div>
            <div className={styles.curve2}></div>
        </div>
    )
}

BigCard.propTypes = {
    title: PropTypes.string,
    mainValue: PropTypes.string,
    subValue: PropTypes.string,
    SubText: PropTypes.string,
    type: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func
};

// BigCard.defaultProps = {
//     width: 'w-[80vw] lg:w-[30vw]',
//     placeholder: 'Enter text...',
//     onChange: () => { },
//     value: '',
//     type: 'text',
// };


export default BigCard
