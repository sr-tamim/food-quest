import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function createUserWithEmail(auth, email, password, name) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Signed in 
            updateProfile(auth.currentUser, {
                displayName: name
            }).catch((error) => alert(error.message));
        })
        .catch((error) => alert(error.message));
}

export default createUserWithEmail;