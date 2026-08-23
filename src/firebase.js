import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2wZwn2sIsAn88dTbkOydyjeUgcgJXSOE",
  authDomain: "classesta.firebaseapp.com",
  projectId: "classesta",
  storageBucket: "classesta.firebasestorage.app",
  messagingSenderId: "732100725862",
  appId: "1:732100725862:web:a3d28c9308e300a1aeb1a7",
  measurementId: "G-M85M536PD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
