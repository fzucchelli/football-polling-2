// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  doc,
  deleteField,
  updateDoc,
  FieldValue,
  increment,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqQnumbHyqLsDC_dDDWE9m6S1kDyv24Gc",
  authDomain: "football-polling.firebaseapp.com",
  projectId: "football-polling",
  storageBucket: "football-polling.appspot.com",
  messagingSenderId: "458039424516",
  appId: "1:458039424516:web:dcaf1e5565d44c770be751",
  measurementId: "G-XJ5L3Q3WMR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

let playersObject = {
  Frank: 0,
  Jamal: 0,
  Houssein: 0,
  Renato: 0,
  Alessandro: 0,
  Giuseppe: 0,
  Diddy: 0,
  Joe: 0,
  Abdul: 0,
  Marco: 0,
  Ezana: 0,
  William: 0,
  Gabi: 0,
  Grey: 0,
  Guleid: 0,
  Adriankeeper: 0,
  Ahmed: 0,
  Phakama: 0,
  Blessing: 0,
  Muhammad: 0,
  Mwiza: 0,
  Ak: 0,
};

let playersThatVotedObject = {
  Frank: 0,
  Jamal: 0,
  Houssein: 0,
  Renato: 0,
  Alessandro: 0,
  Giuseppe: 0,
  Diddy: 0,
  Joe: 0,
  Abdul: 0,
  Marco: 0,
  Ezana: 0,
  William: 0,
  Gabi: 0,
  Grey: 0,
  Guleid: 0,
  Adriankeeper: 0,
  Ahmed: 0,
  Phakama: 0,
  Blessing: 0,
  Muhammad: 0,
  Mwiza: 0,
  Ak: 0,
};

const addPlayers = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), playersObject);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const addHowManyPlayersHaveVoted = async () => {
  try {
    const docRef = await addDoc(
      collection(db, "users"),
      playersThatVotedObject
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const deleteAField = async () => {
  try {
    const docRef = await updateDoc(doc(db, "users", "rQeYMwpbDv1lNYd9nUmX"), {
      first: deleteField(),
    });
    console.log("Deleted field");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateField = async (playersToUpdateRating) => {
  // let tempPlayersObject = playersObject;
  // tempPlayersObject[playersToUpdateRating.name] = playersToUpdateRating.rate;
  console.log(playersToUpdateRating);
  //const increment = db.FieldValue.increment(2);
  try {
    const docRef = await updateDoc(doc(db, "users", "lnZWDrC76ryiWcqSUKBM"), {
      [playersToUpdateRating.name]: increment(playersToUpdateRating.rate),
    });
    console.log("Updated field");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateHowManyPlayerVotedField = async (name) => {
  // let tempPlayersObject = playersObject;
  // tempPlayersObject[playersToUpdateRating.name] = playersToUpdateRating.rate;
  console.log(name);
  //const increment = db.FieldValue.increment(2);
  try {
    const docRef = await updateDoc(doc(db, "users", "0xuNN25hKggbC5WvwNBo"), {
      [name]: increment(1),
    });
    console.log("Updated field");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//addPlayers();

//addHowManyPlayersHaveVoted();

//deleteAField();

//updateField();
