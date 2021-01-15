import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBfP7WcALbKS7U87DX4xDs8jgOCjDynq6s",
    authDomain: "whatsapp-clone-63a6d.firebaseapp.com",
    projectId: "whatsapp-clone-63a6d",
    storageBucket: "whatsapp-clone-63a6d.appspot.com",
    messagingSenderId: "458228238423",
    appId: "1:458228238423:web:87298f485442660c30fb12",
    measurementId: "G-KQ33WJ45Q8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth ,provider}
  export default db;