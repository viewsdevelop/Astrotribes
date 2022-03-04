import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBt_SIz3I8u6pDe8j_fkypooYcjyGDv50s",
  authDomain: "astrotribes-development.firebaseapp.com",
  projectId: "astrotribes-development",
  storageBucket: "astrotribes-development.appspot.com",
  messagingSenderId: "477736739705",
  appId: "1:477736739705:web:48d66d3a4df837ed2305a8",
  measurementId: "G-GCHYYGX7P1"
};

const app = initializeApp(firebaseConfig);

export default app