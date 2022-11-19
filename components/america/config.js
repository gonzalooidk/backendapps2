import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRFlszsQXKGAkjhrTNNuwJPiWfVpNhJk8",
    authDomain: "appamerica-a16fb.firebaseapp.com",
    databaseURL: "https://appamerica-a16fb.firebaseio.com",
    projectId: "appamerica-a16fb",
    storageBucket: "appamerica-a16fb.appspot.com",
    messagingSenderId: "253831284338",
    appId: "1:253831284338:web:885b252bee72b0d17264eb"
};

const appFire = initializeApp(firebaseConfig, "america");
const db = getFirestore(appFire);

const PATH_api_send_notification = '/api/america/sendnotification';
const PATH_api_scrap_match = '/api/america/scrapmatch';

export {db, appFire, PATH_api_send_notification, PATH_api_scrap_match};