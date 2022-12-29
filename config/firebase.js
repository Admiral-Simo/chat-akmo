import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyAImCl6pSozfsZJpS9dZt2FgNnLxYErxVg',
  authDomain: 'chat-app-adc03.firebaseapp.com',
  projectId: 'chat-app-adc03',
  storageBucket: 'chat-app-adc03.appspot.com',
  messagingSenderId: '948344997294',
  appId: '1:948344997294:web:dadcc764c9049073d3343f',
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();