import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

export default function gitHubLogin(auth) {
    const gitHubProvider = new GithubAuthProvider();
    signInWithPopup(auth, gitHubProvider)
        .catch((error) => {
            alert(error.message);
        });
}