import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyChiYQHb9AI6APMPAb9GPAWi0mn2wV87C0",
  authDomain: "library-app-3d1cc.firebaseapp.com",
  projectId: "library-app-3d1cc",
  storageBucket: "library-app-3d1cc.appspot.com",
  messagingSenderId: "980634944727",
  appId: "1:980634944727:web:c904afecf1b65bc70b5c92"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


