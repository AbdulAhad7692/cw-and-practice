
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDiiQ52dkLx_qH6MHi2r8QxVL9qCS4oAM8",
    authDomain: "js-projects-37cca.firebaseapp.com",
    projectId: "js-projects-37cca",
    storageBucket: "js-projects-37cca.appspot.com",
    messagingSenderId: "835545380676",
    appId: "1:835545380676:web:031d068b38d3222c0a0911",
    measurementId: "G-LDBSV0V20H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



let btn = document.getElementById('register');

btn.addEventListener('click', () => {
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let number = document.getElementById('number')
    let password = document.getElementById('password')

    let userData = {
        name: name.value,
        password: password.value,
        email: email.value,
        number: number.value
    }
    // console.log(userData);

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    ...userData,
                    uid: user.uid

                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);

        });

})

// let read = async () => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} =>`, doc.data());
//     });
// }
// read ()

let updateBtn = document.getElementById('update')
updateBtn.addEventListener('click', async () => {

    const id = 'AuqDcHb25O0idUgj8TFK'

    try {
        await deleteDoc(doc(db, 'users', id)); // Corrected the spacing here
        console.log('Document deleted');
    } catch (error) {
        console.error('Error deleting document:', error);
    }

})
