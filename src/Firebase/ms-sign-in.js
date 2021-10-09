import { signInWithPopup, OAuthProvider } from "firebase/auth";

export default function msLogin(auth) {
    const msProvider = new OAuthProvider('microsoft.com');
    signInWithPopup(auth, msProvider)
        .then((result) => {
            // User is signed in.
            // IdP data available in result.additionalUserInfo.profile.

            // Get the OAuth access token and ID Token
            const credential = OAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            const idToken = credential.idToken;
        })
}