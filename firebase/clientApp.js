import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  
};
// const apiKey = firebaseConfig.apiKey; // Assign the apiKey value to a variable
// console.log("API Key:", apiKey); // Log the apiKey value
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized"); 
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
//const analytics = analytics.isSupported(getAnalytics(app));

export { db, auth, storage };//analytics 

