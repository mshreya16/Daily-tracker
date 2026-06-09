import { initializeApp }
from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANu1A2oYSHSvt35GrRDG6X6CXEhjG1khI",
  authDomain: "shreya-s-daily-tracker.firebaseapp.com",
  projectId: "shreya-s-daily-tracker",
  storageBucket: "shreya-s-daily-tracker.firebasestorage.app",
  messagingSenderId: "792915708980",
  appId: "1:792915708980:web:bd895f25e8cd2eaf2f0e61"
};

const app =
  initializeApp(
    firebaseConfig
  );

export default app;