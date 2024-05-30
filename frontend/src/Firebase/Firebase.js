import { initializeApp } from "@firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_Firebase_Key,
  authDomain: process.env.REACT_APP_Auth_Domain,
  projectId: process.env.REACT_APP_Project_Id,
  storageBucket: process.env.REACT_APP_Storage_Bucket,
  messagingSenderId: process.env.REACT_APP_Messaging_Sender_Id,
  appId: process.env.REACT_APP_App_Id,
  measurementId: process.env.REACT_APP_Measurement_Id,
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

