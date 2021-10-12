import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState } from "react";
import initializeFirebase from "../Firebase/firebase-init";

// get authentication
initializeFirebase(); // initialize firebase app
const auth = getAuth();


const useFirebase = () => {
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (usr) => {
        if (usr) { setUser(usr) }
        else if (Object.keys(user).length) {
            setUser({})
            /*if usr is null but user is not {} then set user as {}*/
        }
    });

    return ({
        auth: auth,
        user: user,
        setUser: setUser
    });
};

export default useFirebase;