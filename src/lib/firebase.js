// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9EWT9afELqwPCoTe39doIEtm5Rd6wyBk",
  authDomain: "izac-af500.firebaseapp.com",
  databaseURL: "https://izac-af500-default-rtdb.firebaseio.com",
  projectId: "izac-af500",
  storageBucket: "izac-af500.appspot.com",
  messagingSenderId: "915191750863",
  appId: "1:915191750863:web:b2ec367fba01fe088517ba",
  measurementId: "G-L08EZS97SJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProjects() {
  return new Promise(async (resolve, reject) => {
    const q = query(collection(db, "projects"));

    const querySnapshot = await getDocs(q);
    let projects = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      projects.push(data);
    });
    resolve(projects);
  });
}
