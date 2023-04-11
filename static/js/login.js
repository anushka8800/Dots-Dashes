import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getDatabase,update,ref } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyC0EZaxAbCsjG3B3mSV_E27Vr5GFq-DKTI",
authDomain: "login-with-firebase-b4f4e.firebaseapp.com",
projectId: "login-with-firebase-b4f4e",
storageBucket: "login-with-firebase-b4f4e.appspot.com",
messagingSenderId: "376910138620",
appId: "1:376910138620:web:916158bad54348f3fbdb79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const database = getDatabase(app);

login.addEventListener('click',(e)=>
		{
			const email = document.getElementById("email").value;
			const password = document.getElementById("password").value;
			
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in 
					const user = userCredential.user;
					// ...
					var lgdata=new Date();
					update(ref(database, 'users/' + user.uid), {
						last_login:lgdata
						
					})
							.then(() => {
							// Data saved successfully!
								alert("User logged in successfully!");
								window.location.href = "/";
								
							})
							.catch((error) => {
							// The write failed...
								alert(error)
							});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					alert(errorMessage);
				});
		
		
  });


//   signOut(auth).then(()=>{ signout bhi daal dena import wlai line mein

//   }).catch((error)=>{

//   });