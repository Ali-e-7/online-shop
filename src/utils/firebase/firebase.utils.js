import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQKKUn0UTsQkWEov1UCElA7p2gIBw80SY",
  authDomain: "online-shop-react-ab368.firebaseapp.com",
  projectId: "online-shop-react-ab368",
  storageBucket: "online-shop-react-ab368.appspot.com",
  messagingSenderId: "205600582311",
  appId: "1:205600582311:web:6f3fc63f3c5252d1780982",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
  if(!userAuth) return
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password)
};