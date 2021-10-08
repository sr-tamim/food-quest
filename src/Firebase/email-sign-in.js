import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function createUserWithEmail(auth, email, password, name, setUser) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            updateProfile(auth.currentUser, {
                displayName: name
            }).catch((error) => console.log(error.message));
            setUser(userCredential.user);
        })
        .catch((error) => console.log(error.message));
}

export default createUserWithEmail;