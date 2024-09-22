import PropTypes from 'prop-types';
import styles from './smallcard.module.css'
const SmallCard = ({ icon, texts, color }) => {
    return (
        <div className={styles.main} style={{ color }}>
            <div>{icon && <span>{icon}</span>}</div>
            <div>{texts}</div>
        </div>
    )
}

SmallCard.propTypes = {
    icon: PropTypes.element,
    texts: PropTypes.string.isRequired,
    color: PropTypes.string
}


// SmallCard.defaultProps = {
//     width: 'w-[80vw] lg:w-[30vw]',
//     placeholder: 'Enter text...',
//     onChange: () => { },
//     value: '',
//     type: 'text',
// };
export default SmallCard
