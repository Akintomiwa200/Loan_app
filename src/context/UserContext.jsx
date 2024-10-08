// import { createContext, useState, useEffect } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import firebaseExports from '../utils/firebase';
// import PropTypes from 'prop-types'

// const { db, auth } = firebaseExports;

// // Create the UserContext
// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Listen for auth state changes
//         const unsubscribe = onAuthStateChanged(auth, async (user) => {
//             if (user) {
//                 // Fetch user data from Firestore
//                 try {
//                     const userRef = doc(db, 'users', user.uid);
//                     const userSnap = await getDoc(userRef);

//                     if (userSnap.exists()) {
//                         // User data found, update state
//                         setUserData(userSnap.data());
//                     } else {
//                         console.log('No user data found! Creating user data.');
//                         // User does not exist, create a new document
//                         await setDoc(userRef, {
//                             email: user.email,
//                             // Add other default user fields as necessary
//                             createdAt: new Date().toISOString(), // Example field
//                         });
//                         setUserData({ email: user.email }); // Update userData with created fields
//                     }
//                 } catch (error) {
//                     console.error('Error fetching or creating user data:', error);
//                 }
//             } else {
//                 // User is not authenticated
//                 setUserData(null);
//             }
//             setLoading(false); // Set loading to false once the auth state is determined
//         });

//         return () => unsubscribe(); // Cleanup listener on unmount
//     }, []);

//     return (
//         <UserContext.Provider value={{ userData, loading }}>
//             {children}
//         </UserContext.Provider>
//     );
// };



// UserProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// }

import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import firebaseExports from '../utils/firebase';
import PropTypes from 'prop-types';

const { db, auth } = firebaseExports;

// Create the UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        // Retrieve stored user data from localStorage
        const storedUserData = localStorage.getItem('userData');
        return storedUserData ? JSON.parse(storedUserData) : null;
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Fetch user data from Firestore
                try {
                    const userRef = doc(db, 'users', user.uid);
                    const userSnap = await getDoc(userRef);

                    if (userSnap.exists()) {
                        // User data found, update state and store in localStorage
                        const userData = userSnap.data();
                        setUserData(userData);
                        localStorage.setItem('userData', JSON.stringify(userData));
                    } else {
                        console.log('No user data found! Creating user data.');
                        // User does not exist, create a new document
                        const newUser = {
                            email: user.email,
                            createdAt: new Date().toISOString(), // Example field
                        };
                        await setDoc(userRef, newUser);
                        setUserData(newUser);
                        localStorage.setItem('userData', JSON.stringify(newUser)); // Store in localStorage
                    }
                } catch (error) {
                    console.error('Error fetching or creating user data:', error);
                }
            } else {
                // User is not authenticated
                setUserData(null);
                localStorage.removeItem('userData'); // Clear data from localStorage
            }
            setLoading(false); // Set loading to false once the auth state is determined
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, []);

    return (
        <UserContext.Provider value={{ userData, loading }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
