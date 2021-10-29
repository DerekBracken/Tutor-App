import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCX4X0oql5b7P-ZQR_1N5KIUak_WrXjbrQ",
    authDomain: "meeteng-8919f.firebaseapp.com",
    databaseURL: "https://meeteng-8919f-default-rtdb.firebaseio.com",
    projectId: "meeteng-8919f",
    storageBucket: "meeteng-8919f.appspot.com",
    messagingSenderId: "203506631641",
    appId: "1:203506631641:web:52579785e86bf6a9468fc8",
    measurementId: "G-N4X78FYCZB"
})

export const auth = app.auth()
export default app;
