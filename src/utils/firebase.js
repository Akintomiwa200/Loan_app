import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth to initialize authentication
import { getFirestore } from "firebase/firestore"; // Import getFirestore to initialize Firestore

const firebase = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebase);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app); // Initialize authentication
const db = getFirestore(app); // Initialize Firestore

// Export the auth and db objects for use in other files
const firebaseExports = { app, auth, db }; // Now you can import auth and db wherever needed
export default firebaseExports