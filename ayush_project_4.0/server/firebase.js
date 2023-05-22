import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0DWBZT11X3z_NhX_8AQZPBejWkKqJOkg",
  authDomain: "chat-app-a799b.firebaseapp.com",
  projectId: "chat-app-a799b",
  storageBucket: "chat-app-a799b.appspot.com",
  messagingSenderId: "184087580731",
  appId: "1:184087580731:web:ebaab32728091bfec00c1e",
  measurementId: "G-DH1G4FNDLJ",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
