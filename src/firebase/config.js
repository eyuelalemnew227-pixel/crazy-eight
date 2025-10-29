import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// Using environment variables for security (recommended)
// Or replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4vaC-BEagN1pk-6gFter0CrBcowL8hHc",
  authDomain: "crazy-eights-ac61b.firebaseapp.com",
  projectId: "crazy-eights-ac61b",
  storageBucket: "crazy-eights-ac61b.firebasestorage.app",
  messagingSenderId: "131601808507",
  appId: "1:131601808507:web:5ececf58fae4854d6df6de",
  measurementId: "G-N8X460L0VT"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
