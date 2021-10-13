import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";


const googleProvider = new GoogleAuthProvider();
const googleSignIn = (auth) => {
    return signInWithPopup(auth, googleProvider)
}

export default googleSignIn;