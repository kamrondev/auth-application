import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCGOe9dBaD4JV1DtVlOoXCu3jep0VLgs6s",
  authDomain: "auth-application-aa06f.firebaseapp.com",
  projectId: "auth-application-aa06f",
  storageBucket: "auth-application-aa06f.appspot.com",
  messagingSenderId: "562940734876",
  appId: "1:562940734876:web:327406f2bcd0d405082c59",
  measurementId: "G-X19D1H2BFL",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
