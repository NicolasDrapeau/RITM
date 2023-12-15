import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc,getDocs  } from "firebase/firestore";
import { Race } from "../models/race";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCK2X3K5nOLjxg20FZmdz8bkPIP-P6g6cs",
    authDomain: "ritm-49d77.firebaseapp.com",
    projectId: "ritm-49d77",
    storageBucket: "ritm-49d77.appspot.com",
    messagingSenderId: "601660167881",
    appId: "1:601660167881:web:f51fd07d06a23279bb5f18"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const addRace = async (race:Race) =>{
    try {
        const docRef = await addDoc(collection(db, "races"), race);
        console.log("Document written with ID: ", docRef.id);
    }catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getAllRace = async () => {
    try {
        const races:Race[]=[]
        const querySnapshot = await getDocs(collection(db, "races"));
        
        querySnapshot.forEach((doc) => {
            const data = doc.data() as Race;
            races.push(data)
        });
        return races;
    }catch (e) {
        console.error("Error adding document: ", e);
    }
}