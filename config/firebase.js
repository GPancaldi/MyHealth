
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import {getAuth} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
 

  
  
  const firebaseConfig = {
    apiKey: "AIzaSyBy0PNH1YGGRJfmANCpnpJy98VTd-93n80",
    authDomain: "myhealthweb-eca16.firebaseapp.com",
    projectId: "myhealthweb-eca16",
    storageBucket: "myhealthweb-eca16.appspot.com",
    messagingSenderId: "769703408786",
    appId: "1:769703408786:web:61d7f8e5e51e6d4f67624b"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

export {app, auth}
 

  