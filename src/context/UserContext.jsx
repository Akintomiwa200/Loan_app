// import { createContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes
// import { getAuth } from 'firebase/auth';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const auth = getAuth();
//     const db = getFirestore();

//     useEffect(() => {
//         const fetchUserData = async () => {
//             const user = auth.currentUser;
//             if (user) {
//                 const docRef = doc(db, 'users', user.uid);
//                 const docSnap = await getDoc(docRef);
//                 if (docSnap.exists()) {
//                     setUserData(docSnap.data());
//                 }
//             }
//             setLoading(false);
//         };

//         fetchUserData();
//     }, [auth, db]);

//     return (
//         <UserContext.Provider value={{ userData, loading }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// // Define PropTypes for the UserProvider
// UserProvider.propTypes = {
//     children: PropTypes.node.isRequired, // Ensure children is a required node
// };
