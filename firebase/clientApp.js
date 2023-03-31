import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhE7PCG3Aofb7YJlwfp2fFneoY7LgYIYI",
  authDomain: "verbal-b4021.firebaseapp.com",
  databaseURL: "https://verbal-b4021-default-rtdb.firebaseio.com",
  projectId: "verbal-b4021",
  storageBucket: "verbal-b4021.appspot.com",
  messagingSenderId: "573290634303",
  appId: "1:573290634303:web:0c7159d390ef1111a3ac8a",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
//const analytics = analytics.isSupported(getAnalytics(app));

export { db, auth, storage };//analytics 

