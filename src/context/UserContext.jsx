// import { createContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { auth, db } from '../utils/firebase'; // Adjust the import path as needed
// import { doc, getDoc } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';

// // Create UserContext
// export const UserContext = createContext();

// // Create UserProvider component
// export const UserProvider = ({ children }) => {
//     const [userData, setUserData] = useState(null); // State for user data
//     const [loading, setLoading] = useState(true); // State for loading status
//     const [error, setError] = useState(null); // State for error handling

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, async (user) => {
//             setLoading(true); // Start loading
//             if (user) {
//                 // User is signed in
//                 try {
//                     const docRef = doc(db, 'users', user.uid);
//                     const docSnap = await getDoc(docRef);
//                     if (docSnap.exists()) {
//                         setUserData(docSnap.data()); // Set user data if document exists
//                     } else {
//                         console.error('No such user document!');
//                         setUserData(null); // Reset user data if no document found
//                     }
//                 } catch (err) {
//                     console.error('Error fetching user data:', err);
//                     setError('Failed to fetch user data'); // Set error message
//                 }
//             } else {
//                 // User is signed out
//                 setUserData(null);
//             }
//             setLoading(false); // End loading
//         });

//         return () => unsubscribe(); // Cleanup subscription on unmount
//     }, []);

//     return (
//         <UserContext.Provider value={{ userData, loading, error }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// // Define PropTypes for UserProvider
// UserProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };




import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const db = getFirestore();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Fetch user data from Firestore using user.uid
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                } else {
                    console.log('No such document!');
                }
            } else {
                setUserData(null); // Reset userData if no user is logged in
            }
            setLoading(false);
        });

        // Cleanup the subscription on unmount
        return () => unsubscribe();
    }, [auth, db]);

    return (
        <UserContext.Provider value={{ userData, loading }}>
            {children}
        </UserContext.Provider>
    );
};

// Define PropTypes for the UserProvider
UserProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children is a required node
};
