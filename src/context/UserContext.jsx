// context/UserContext.jsx
import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import firebaseExports from '..//utils/firebase';


const { db, auth } = firebaseExports;

// Create the UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
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
                        setUserData(userSnap.data());
                    } else {
                        console.log('No user data found!');
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            } else {
                setUserData(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ userData, loading }}>
            {children}
        </UserContext.Provider>
    );
};
