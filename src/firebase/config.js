import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// use timestamp from firebase
import { Timestamp } from 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyD--JV7FQ6e6dtFQKscaNKpUnmeFaZwdxw',
  authDomain: 'dulux-express.firebaseapp.com',
  projectId: 'dulux-express',
  storageBucket: 'dulux-express.appspot.com',
  messagingSenderId: '786897233842',
  appId: '1:786897233842:web:355ffcca36142a6af6e6ab'
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// init services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, storage, auth };
