import './style/index.css';
import App from './components/app';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getDb} from './firestore';
import {firebaseConfig} from "./config";


firebase.initializeApp(firebaseConfig);
getDb(firebase);

export default App;
