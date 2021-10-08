import { signOut } from "@firebase/auth";

export default function userSignOut(auth, setUser) {
    signOut(auth).then(setUser({})).catch(err => alert(err.message))
}