  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBBECAwMcxkWjiyQuvRxYMq__JocCWQUWc",
    authDomain: "tokners-4d7b3.firebaseapp.com",
    projectId: "tokners-4d7b3",
    storageBucket: "tokners-4d7b3.appspot.com",
    messagingSenderId: "626955745254",
    appId: "1:626955745254:web:58a08d4093d044fe520827",
    measurementId: "G-YPCLRRMX7V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);