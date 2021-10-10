import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBcnFGGLAjRogdPMPGij139l4F78mvt8rM',
  authDomain: 'smart-playlist-63553.firebaseapp.com',
  projectId: 'smart-playlist-63553',
  storageBucket: 'smart-playlist-63553.appspot.com',
  messagingSenderId: '417147282436',
  appId: '1:417147282436:web:02af0bbd7b79400a8a8151',
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
