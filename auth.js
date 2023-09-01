
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setDoc, doc, db, signOut } from "./firebase.js";
/// styling ///

const loginStyle = document.querySelector(".login");
const signupStyle = document.querySelector(".signup");
const form = document.querySelector(".form");
const switches = document.querySelectorAll(".switch");

let current = 1;

function tab2() {
  form.style.marginLeft = "-100%";
  loginStyle.style.background = "white";
  loginStyle.style.color = "black";
  loginStyle.style.fontWeight = "bold";
  signupStyle.style.background = "black";
  signupStyle.style.color = "white";

  switches[current - 1].classList.add("active");
}
function tab1() {
  form.style.marginLeft = "0%";
  loginStyle.style.background = "black";
  loginStyle.style.color = "white";
  loginStyle.style.fontWeight = "bold";
  signupStyle.style.background = "white";
  signupStyle.style.color = "black";

  switches[current - 1].classList.remove("active");
}
window.tab1 = tab1;
window.tab2 = tab2;

let flag = false;

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (location.pathname !== 'main.html' && location.pathname !== 'profile.js' && flag) {
      location.href = 'main.html'
    }
  }
  else {
    console.log('Please login or signup');
  }
})

const signupButton = document.getElementById('signup-button')
const signupUser = (e) => {
  const email = document.getElementById('get-email').value
  const username = document.getElementById('get-username').value
  const password = document.getElementById('get-password').value
  const repeatPassword = document.getElementById('get-checkPassword').value

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (email.indexOf('@') === (-1)) {
    alert('Please enter a valid email address')
    return
  }
  if (username.length < 3) {
    alert('Username must be greater than 3 character')
    return;
  }
  if (!password.match(passwordRegex)) {
    alert('Password must be at least 8 characters long and include both uppercase and lowercase letters.');
    return;
  }
  if (repeatPassword !== password) {
    alert('Password do not match')
    return;
  }
  flag = false
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email
      });
      flag = true;
      location.href = 'main.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}
signupButton.addEventListener('click', signupUser)


const signInButton = document.getElementById('login-button')
const signInUser = (e) => {

  const userEmail = document.getElementById('email').value
  const userPassword = document.getElementById('password').value

  signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      location.href = "main.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
}
signInButton.addEventListener('click', signInUser)

