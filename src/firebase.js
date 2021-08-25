import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCXHb076Ql0K1gobE083jE1snUZOnRAJrU",
    authDomain: "whats-app-clone-dadb7.firebaseapp.com",
    projectId: "whats-app-clone-dadb7",
    storageBucket: "whats-app-clone-dadb7.appspot.com",
    messagingSenderId: "651645642510",
    appId: "1:651645642510:web:f6b7ea4146e456f4c9595f"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider };

  export default db;