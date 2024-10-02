import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import PropTypes from 'prop-types'
import styles from './pagnation.module.css'

const Pagnation = ({ currectPage, totalPages, onPageChange }) => {
    const getPageNuber = () => {
        const pages = [];

        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        }
        else {
            pages.push(1, 2, 3);

            if (currectPage > 4) {
                pages.push('...');
            }
            if (currectPage > 3 && currectPage < totalPages - 2) {
                pages.push(currectPage)
            }
            if (currectPage < totalPages - 3) {
                pages.push('...');
            }
            pages.push(totalPages - 2, totalPages - 1, totalPages);
        }
        return pages
    }

    const pageNumbers = getPageNuber()
    return (
        <div>
            <div className={styles.pagnation}>
                <button
                    className={styles.clicks}
                    disabled={currectPage === 1}
                    onClick={() => onPageChange(currectPage - 1)}
                >

                    <MdKeyboardArrowLeft className={styles.icons} /> <h5>Previous</h5>
                </button>
                <div className={styles.num}>
                    {pageNumbers.map((page, index) => (
                        <button
                            key={index}
                            className={`${styles.pageButton} ${page === currectPage ? styles.activePage : ''}`}
                            onClick={() => typeof page === 'number' && onPageChange(page)}
                            disabled={page === '...'}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button
                    className={styles.clicks}
                    disabled={currectPage === totalPages}
                    onClick={() => onPageChange(currectPage + 1)}
                >
                    <h5>Next</h5>  <MdKeyboardArrowRight className={styles.icons} />
                </button>
            </div>
        </div>

    )
}
Pagnation.propTypes = {
    currectPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagnation