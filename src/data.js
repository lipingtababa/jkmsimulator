// Import the functions you need from the SDKs you need
const {initializeApp} = require("firebase/app")
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNNEsNIo8irCzx2f9IaekqD3Z4hVQI8LQ",
  authDomain: "jkmsimulator.firebaseapp.com",
  projectId: "jkmsimulator",
  storageBucket: "jkmsimulator.appspot.com",
  messagingSenderId: "537992815447",
  appId: "1:537992815447:web:ef1d61474ef0e0a1371412",
  measurementId: "G-58SC683QC1"
};


// Initialize Firebase
const dbapp = initializeApp(firebaseConfig);
const db = getFirestore(dbapp);

// Get a list of persons from your database
async function getPersons(db) {
  const personsCol = collection(db, 'persons');
  const personSnapshot = await getDocs(personsCol);
  const personList = personSnapshot.docs.map(doc => doc.data());
  console.log(personList)
  return personList;
}

const persons = getPersons(db)

module.exports = persons;