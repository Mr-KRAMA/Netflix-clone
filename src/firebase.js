// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkmdENXgX6KC-5I3pPTg6Zz4PpYUejFos",
  authDomain: "netdlix-clone-47215.firebaseapp.com",
  projectId: "netdlix-clone-47215",
  storageBucket: "netdlix-clone-47215.firebasestorage.app",
  messagingSenderId: "487172466354",
  appId: "1:487172466354:web:143cbe7f44cc7e29a0cbab",
  measurementId: "G-15E7WVXPZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app);


const signup=async(name,email,password)=>{
    try{
  const res =   await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  await addDoc(collection(db, "users"), {
    uid: user.uid,
    name: name,
    authProvider:"local",
    email: email
  })

    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '));
    
    }
}

const login= async(email,password)=>{
    try {
       await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }

}

const logout=async()=>{
    signOut(auth);
}

export{auth, db, signup, login, logout};