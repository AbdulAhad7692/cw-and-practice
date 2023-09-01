import { auth, signOut } from "./firebase.js";


const signOutButton = document.getElementById('sign-out')
const signOutUser = () => {
    signOut(auth).then(() => {
        location.href = 'auth.html'
    }).catch((error) => {
        // An error happened.
    });
}
signOutButton.addEventListener('click', signOutUser)