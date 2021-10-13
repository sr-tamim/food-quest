import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const fbProvider = new FacebookAuthProvider();
export default function fbLogin(auth) {
    return signInWithPopup(auth, fbProvider);
    /*     .then((result) => {
            // The signed-in user info.
            // const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            console.log(credential, accessToken);

        }); */
}