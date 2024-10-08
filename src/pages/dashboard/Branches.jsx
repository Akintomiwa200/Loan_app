
// import { useState } from 'react';
// import styles from './styles/branches.module.css';

// const Branches = () => {
//     // Store the selected location
//     const [mapSrc, setMapSrc] = useState('https://www.google.com/maps/embed/v1/place?q=ogbomosho&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8');

//     // List of locations with their respective Google Maps queries
//     const locations = [
//         { name: "Ba'iya-oje, ile Ewe 1", query: 'Ba%27iya-oje%20ile%20Ewe%201' },
//         { name: "Ba'iya-oje, ile Ewe 2", query: 'Ba%27iya-oje%20ile%20Ewe%202' },
//         { name: "Ba'iya-oje, ile Ewe 3", query: 'Ba%27iya-oje%20ile%20Ewe%203' },
//         { name: "Ba'iya-oje, ile Ewe 4", query: 'Ba%27iya-oje%20ile%20Ewe%204' },
//         { name: "Ba'iya-oje, ile Ewe 5", query: 'Ba%27iya-oje%20ile%20Ewe%205' },
//         { name: "Ba'iya-oje, ile Ewe 6", query: 'Ba%27iya-oje%20ile%20Ewe%206' },
//     ];

//     // Handle location click to update the map source
//     const handleClick = (locationQuery) => {
//         setMapSrc(`https://www.google.com/maps/embed/v1/place?q=${locationQuery}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`);
//     };

//     return (
//         <div className={styles.main}>
//             <div className={styles.branch}>
//                 <h2>branches</h2>
//                 <div className={styles.list}>
//                     {locations.map((location, index) => (
//                         <div
//                             key={index}
//                             onClick={() => handleClick(location.query)}
//                             className={styles.link}
//                         >
//                             {location.name}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <iframe
//                 width="250%"
//                 height="450%"
//                 title="map"
//                 className={styles.map}
//                 frameBorder={0}
//                 marginHeight={0}
//                 marginWidth={0}
//                 style={{ filter: "opacity(0.7)" }}
//                 src={mapSrc}
//             />
//         </div>
//     );
// };

// export default Branches;



import { useState } from 'react';
import styles from './styles/branches.module.css';

const Branches = () => {
    // Store the selected location
    const [mapSrc, setMapSrc] = useState(`https://www.google.com/maps/embed/v1/place?q=ogbomosho&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`);

    // List of locations with their respective Google Maps queries
    const locations = [
        { name: "Ba'iya-oje, ile Ewe 1", query: 'Ba%27iya-oje%20ile%20Ewe%201' },
        { name: "Ba'iya-oje, ile Ewe 2", query: 'Ba%27iya-oje%20ile%20Ewe%202' },
        { name: "Ba'iya-oje, ile Ewe 3", query: 'Ba%27iya-oje%20ile%20Ewe%203' },
        { name: "Ba'iya-oje, ile Ewe 4", query: 'Ba%27iya-oje%20ile%20Ewe%204' },
        { name: "Ba'iya-oje, ile Ewe 5", query: 'Ba%27iya-oje%20ile%20Ewe%205' },
        { name: "Ba'iya-oje, ile Ewe 6", query: 'Ba%27iya-oje%20ile%20Ewe%206' },
    ];

    // Handle location click to update the map source
    const handleClick = (locationQuery) => {
        setMapSrc(`https://www.google.com/maps/embed/v1/place?q=${locationQuery}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`);
    };

    return (
        <div className={styles.main}>
            <div className={styles.branch}>
                <h2>Branches</h2>
                <div className={styles.list}>
                    {locations.map((location, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(location.query)}
                            className={styles.link}
                        >
                            {location.name}
                        </div>
                    ))}
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
                src={mapSrc}
            />
        </div>
    );
};

export default Branches;
