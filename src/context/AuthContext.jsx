import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import firebaseExports from '../utils/firebase'; // Firebase configuration
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';

const { auth } = firebaseExports;

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to wrap your app and manage auth state
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Firebase Authentication listener to track the authenticated user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false); // Done loading once we have user data
        });

        return () => unsubscribe();
    }, []);

    // Sign-out function
    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const value = {
        currentUser,
        signOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* Only render children after loading */}
        </AuthContext.Provider>
    );
};

// Define prop-types for the AuthProvider component
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensure 'children' is a valid React node and is required
};
