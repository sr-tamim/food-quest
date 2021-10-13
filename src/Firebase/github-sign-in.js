import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

const gitHubProvider = new GithubAuthProvider();
export default function gitHubLogin(auth) {
    return signInWithPopup(auth, gitHubProvider);
}