import { signInWithEmailAndPassword } from "firebase/auth";

export default function loginUser(auth, email, password, setUser) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setUser(userCredential.user);
        })
        .catch((error) => { alert(error.message) });
}