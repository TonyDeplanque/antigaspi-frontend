import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging"
import { sendToken } from "./services/notification";
import { getCurrentUser } from "./services/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export const askForPermissionToReceiveNotifications = async () => {
    initializeApp(firebaseConfig);
    const messaging = getMessaging();
    return getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_TOKEN_API_KEY })
        .then((currentToken) => {
            if (currentToken) {
                localStorage.setItem('messaging-token', currentToken)
                sendToken(currentToken, getCurrentUser().id);
            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
}