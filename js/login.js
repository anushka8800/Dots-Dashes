// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsza3xvfUAM9En4zQjxZgO8O4iqdHvvU8",
  authDomain: "morse-code-efb69.firebaseapp.com",
  projectId: "morse-code-efb69",
  storageBucket: "morse-code-efb69.appspot.com",
  messagingSenderId: "236681607131",
  appId: "1:236681607131:web:fb6675bb1f944f060099fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Handle user registration
function handleSignup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
	  alert("Passwords do not match.");
	  return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
	  .then((userCredential) => {
		  // Signed in 
		  const user = userCredential.user;
		  alert("User created successfully!");
	  })
	  .catch((error) => {
		  const errorCode = error.code;
		  const errorMessage = error.message;
		  alert(errorMessage);
	  });
}

// Handle user login
function handleLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
	  .then((userCredential) => {
		  // Signed in
		  const user = userCredential.user;
		  alert("User logged in successfully!");
	  })
	  .catch((error) => {
		  const errorCode = error.code;
		  const errorMessage = error.message;
		  alert(errorMessage);
	  });
}

// Handle user logout
function handleLogout() {
  firebase.auth().signOut()
	  .then(() => {
		  // Sign-out successful.
		  alert("User logged out successfully!");
	  })
	  .catch((error) => {
		  // An error happened.
		  const errorCode = error.code;
		  const errorMessage = error.message;
		  alert(errorMessage);
	  });
}

// Add event listeners to buttons
document.getElementById("signup").addEventListener("click", handleSignup);
document.getElementById("login").addEventListener("click", handleLogin);
document.getElementById("logout").addEventListener("click", handleLogout);