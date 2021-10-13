import { signInWithEmailAndPassword } from "firebase/auth";

export default function loginUser(auth, email, password, setUser) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setUser(userCredential.user);
        })
}