// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOciLIXljsEPbLysGSAxjaFA72Q6CMQEI",
  authDomain: "juegomoviles-a6162.firebaseapp.com",
  databaseURL: "https://juegomoviles-a6162-default-rtdb.firebaseio.com",
  projectId: "juegomoviles-a6162",
  storageBucket: "juegomoviles-a6162.appspot.com",
  messagingSenderId: "263626630431",
  appId: "1:263626630431:web:50b36088e907ba1d077c2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
//export const auth = getAuth(app);
export const storage = getStorage(app);

