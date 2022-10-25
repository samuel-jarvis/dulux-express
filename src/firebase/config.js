import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD--JV7FQ6e6dtFQKscaNKpUnmeFaZwdxw",
  authDomain: "dulux-express.firebaseapp.com",
  projectId: "dulux-express",
  storageBucket: "dulux-express.appspot.com",
  messagingSenderId: "786897233842",
  appId: "1:786897233842:web:355ffcca36142a6af6e6ab"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore =  firebase.firestore();

export { projectFirestore };