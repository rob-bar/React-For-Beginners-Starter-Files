import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVmseIvZfqnLjYcI7rPP_BJV70nwIL2uo",
    authDomain: "catch-of-the-day-robbie.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-robbie.firebaseio.com"
});


const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export {firebaseApp};

// this is a default export
export default base;
