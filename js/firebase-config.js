import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfiRqZJ7qy0bXPMI_i2M_ywNTTQwtjJ00",
  authDomain: "lord-prince.firebaseapp.com",
  databaseURL: "https://lord-prince-default-rtdb.firebaseio.com",
  projectId: "lord-prince",
  storageBucket: "lord-prince.firebasestorage.app",
  messagingSenderId: "534402741898",
  appId: "1:534402741898:web:de9ffc8d57e1cfc3b89f73",
  measurementId: "G-BX73L45WKT"
};

// Sirf ye UID login kar sakti hai. Firebase console →
// Authentication → Users se copy karo. Same UID rules/*.json me bhi hona chahiye.
const ADMIN_UID = "xwKyIeWDCeRwq2YKntpoqyuYz7k1";

const app = initializeApp(firebaseConfig);

let analytics = null;
try {
    analytics = getAnalytics(app);
} catch (e) {
    analytics = null;
}

const db = getDatabase(app);
const auth = getAuth(app);

export { app, analytics, db, auth, ADMIN_UID };
