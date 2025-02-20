// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA06HLhUthMmk7DkJmw6TGDg6IknWDQdw0",
//   authDomain: "visa-navigator-bb0c9.firebaseapp.com",
//   projectId: "visa-navigator-bb0c9",
//   storageBucket: "visa-navigator-bb0c9.firebasestorage.app",
//   messagingSenderId: "412791740822",
//   appId: "1:412791740822:web:33a7e3ecbc3d492078e5b7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);