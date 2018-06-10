import firebase from 'firebase';

export const appName = 'react-admin-b1edc';
export const firebaseConfig = {
    apiKey: "AIzaSyDlnF-byf7oxidxV50QOlR1je9u--p2dXQ",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "1026370010591"
};

firebase.initializeApp(firebaseConfig);