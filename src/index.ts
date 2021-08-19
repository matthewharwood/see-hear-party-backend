import './style/index.css';
import App from './components/app';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getDb} from './firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwmk8u0t0VYsw9Wo6Znk3qZPX-u5Kh1XU",
    authDomain: "see-hear-party.firebaseapp.com",
    projectId: "see-hear-party",
    storageBucket: "see-hear-party.appspot.com",
    messagingSenderId: "21510681150",
    appId: "1:21510681150:web:60aabaf5b7057a05a1576f",
    measurementId: "G-XSW9QFFFVN"
};

firebase.initializeApp(firebaseConfig);
getDb(firebase);

export default App;
