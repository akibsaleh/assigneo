// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACx_nG9BT-JsrRb_iZO-n2qUJA-NX_8mg',
  authDomain: 'general-authentication-f7699.firebaseapp.com',
  projectId: 'general-authentication-f7699',
  storageBucket: 'general-authentication-f7699.appspot.com',
  messagingSenderId: '833181243984',
  appId: '1:833181243984:web:35a1a942dacc7f1f8c8f55',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
