import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // Import 'getAuth' and 'GoogleAuthProvider' for Authentication
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCcVIWKIlqIqS5XDfsUaqsAQ5sM64DKPuw",
  authDomain: "cyberspacedigital-7c6c7.firebaseapp.com",
  projectId: "cyberspacedigital-7c6c7",
  storageBucket: "cyberspacedigital-7c6c7.appspot.com",
  messagingSenderId: "1010258509596",
  appId: "1:1010258509596:web:6993acf7e0c506804f04d9",
  measurementId: "G-5JEWSSJZFV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const db = getFirestore(app);


export { auth, provider, analytics,db };