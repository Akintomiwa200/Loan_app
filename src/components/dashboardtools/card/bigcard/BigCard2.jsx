import PropTypes from 'prop-types';
import styles from './bigcard.module.css'



const BigCard2 = ({ title, mainValue, subValue, backgroundColor }) => {
    return (
        <div className={styles.main} style={{ backgroundColor }}>
            <div>
                <div >
                    <h6 className={styles.tit}>Name</h6>
                    <h2 className={styles.tit2}>{mainValue}</h2>
                </div>
                <div>
                    <h6 className={styles.tit}>Account Number</h6>
                    <h2 className={styles.tit2}>{subValue}</h2>
                </div>
            </div>
            <div>
                <h6 className={styles.tit}>Bank</h6>
                <h5 className={styles.tit2}>{title}</h5>
            </div>
            <div className={styles.curve}></div>
            <div className={styles.curve1}></div>
            <div className={styles.curve2}></div>
        </div>
    )
}

BigCard2.propTypes = {
    title: PropTypes.string.isRequired,
    mainValue: PropTypes.string.isRequired,
    subValue: PropTypes.string.isRequired,
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


export default BigCard2
