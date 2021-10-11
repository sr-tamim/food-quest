import { signInWithPopup, OAuthProvider } from "firebase/auth";

export default function msLogin(auth) {
    const msProvider = new OAuthProvider('microsoft.com');
    msProvider.setCustomParameters({
        prompt: "consent",
        tenant: "f8cdef31-a31e-4b4a-93e4-5f571e91255a"
    });
    signInWithPopup(auth, msProvider)
        .then((result) => {
            // User is signed in.
            // IdP data available in result.additionalUserInfo.profile.

            // Get the OAuth access token and ID Token
            const credential = OAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            const idToken = credential.idToken;
        }).catch(error => console.log(error));
}