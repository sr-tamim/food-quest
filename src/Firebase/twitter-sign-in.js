import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";


export default function twitterLogin(auth) {
    const twitterProvider = new TwitterAuthProvider();
    signInWithPopup(auth, twitterProvider)
        .then((result) => {
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            const credential = TwitterAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const secret = credential.secret;
            console.log(token, secret);
        }).catch(error => console.log(error.message));
}