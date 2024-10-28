import firebase from "firebase/compat/app";
import "firebase/compat/auth"

var firebaseconfig={
  apiKey: "AIzaSyBkOpllHIMLDiKLVDCP6_aFOd3SBM925K8",
  authDomain: "bloggingwebsite-a1acf.firebaseapp.com",
  projectId: "bloggingwebsite-a1acf",
  storageBucket: "bloggingwebsite-a1acf.appspot.com",
  messagingSenderId: "533469549338",
  appId: "1:533469549338:web:1daa9eaa5712c0114b12a3"
}

var fire=firebase.initializeApp(firebaseconfig)
export default fire.auth()