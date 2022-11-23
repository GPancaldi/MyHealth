
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import {getAuth} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
 import { initializeFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
 import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
 

  
  
  const firebaseConfig = {
    apiKey: "AIzaSyBy0PNH1YGGRJfmANCpnpJy98VTd-93n80",
    authDomain: "myhealthweb-eca16.firebaseapp.com",
    databaseURL: "https://myhealthweb-eca16-default-rtdb.firebaseio.com",
    projectId: "myhealthweb-eca16",
    storageBucket: "myhealthweb-eca16.appspot.com",
    messagingSenderId: "769703408786",
    appId: "1:769703408786:web:0fb02c82a89858eb67624b"
  };

  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth(app)

  const db = initializeFirestore(app, {experimentalForceLongPolling: true})

  const storage = getStorage(app)

export {app, auth, db, storage}
 

  