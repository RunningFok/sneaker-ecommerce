import { initializeApp, getApps } from "firebase-admin/app";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "clone-fa5f6.firebaseapp.com",
  projectId: "clone-fa5f6",
  storageBucket: "clone-fa5f6.appspot.com",
  messagingSenderId: "830793381025",
  appId: "1:830793381025:web:3fec2737028834a6fa2ce0",
};

const app = initializeApp(firebaseConfig);
