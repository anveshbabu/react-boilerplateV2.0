// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var db;
console.log('')
export const initializeFirebase = () => {
    // if (!firebase.apps.length) {
    initializeApp( {
        apiKey: "AIzaSyD6Mq6tala3GOzc8c1UnD9M-eaZOhEi1hU",
        authDomain: "cms-rvsbgroups-website.firebaseapp.com",
        projectId: "cms-rvsbgroups-website",
        storageBucket: "cms-rvsbgroups-website.appspot.com",
        messagingSenderId: "272987386742",
        appId: "1:272987386742:web:3c358d4c6e6dcfe8670057",
        measurementId: "G-8Q8CNPB1LY"
      });
    db = getFirestore();
}
export default db;