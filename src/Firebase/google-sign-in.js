import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";


const googleProvider = new GoogleAuthProvider();
const googleSignIn = (auth, setUser) => {
    signInWithPopup(auth, googleProvider)
        .then(res => setUser(res.user))
        .catch(err => console.log(err.message));
}

export default googleSignIn;