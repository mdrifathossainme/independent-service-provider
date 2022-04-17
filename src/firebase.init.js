import { getAuth} from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPFOeVVwTfG4xnX0-PwXSIq4aS_cLtg1E",
  authDomain: "assignment-10-d013e.firebaseapp.com",
  projectId: "assignment-10-d013e",
  storageBucket: "assignment-10-d013e.appspot.com",
  messagingSenderId: "1081969987315",
  appId: "1:1081969987315:web:c4200f68f17ecf9ec2b186"
};
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;