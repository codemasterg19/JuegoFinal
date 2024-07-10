// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage} from "firebase/storage";
import { getAuth,} from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


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

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });


