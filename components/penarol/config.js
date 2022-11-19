import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDd-VsSWoKbjV7gWj7VQ94Ua5w4BTn5GeM",
    authDomain: "canciones-de-penarol.firebaseapp.com",
    projectId: "canciones-de-penarol",
    storageBucket: "canciones-de-penarol.appspot.com",
    messagingSenderId: "34553452003",
    appId: "1:34553452003:web:75e4c5131bff494dfdfcd6"
};

const appFire = initializeApp(firebaseConfig, "penarol");
const db = getFirestore(appFire);

const PATH_api_send_notification = '/api/penarol/sendnotification';
const PATH_api_scrap_match = '/api/penarol/scrapmatch';

export {db, appFire, PATH_api_send_notification, PATH_api_scrap_match};