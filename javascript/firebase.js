 let elSubmitBtn = document.querySelector('#submit-btn');

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
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
  const auth = getAuth(app);
  
  elSubmitBtn.addEventListener('click', () => {
    let elEmail = document.querySelector('#email').value;
    let elPassword = document.querySelector('#password').value;
  
    createUserWithEmailAndPassword(auth, elEmail, elPassword)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        window.location.href = 'index.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
