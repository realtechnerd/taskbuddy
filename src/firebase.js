import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_KEY : process.env.REACT_APP_API_KEY,
    authDomain: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_AUTH_DOMAIN : process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_PROJECT_ID : process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_STORAGE_BUCKET : process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_MESSAGING_SENDER_ID : process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_APP_ID : process.env.REACT_APP_APP_ID
})

export const auth = app.auth()
export const firestoreApp = app.firestore()
export default app