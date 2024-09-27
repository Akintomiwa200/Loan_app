import styles from './styles/branches.module.css'


const Branches = () => {


    const handleCliek = () => {
        alert('the button has been clicked')
    }


    return (
        <div className={styles.main}>
            <div className={styles.branch}>
                <h2>branches</h2>
                <div
                    className={styles.list}>
                    <div onClick={handleCliek} className={styles.link}>Ba&apos;iya-oje, ile Ewe</div>
                    <div onClick={handleCliek} className={styles.link}>Ba&apos;iya-oje, ile Ewe</div>
                    <div onClick={handleCliek} className={styles.link}>Ba&apos;iya-oje, ile Ewe</div>
                    <div onClick={handleCliek} className={styles.link}>Ba&apos;iya-oje, ile Ewe</div>
                    <div onClick={handleCliek} className={styles.link}>Ba&apos;iya-oje, ile Ewe</div>
                    <div onClick={handleCliek} className={styles.link}>Ba&apos;iya-oje, ile Ewe</div>
                </div>
            </div>
            <iframe
                width="250%"
                height="450%"
                title="map"
                className={styles.map}
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed/v1/place?q=ogbomosho&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
        </div>
    )
}

export default Branches
