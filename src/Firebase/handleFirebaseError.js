
const handleFirebaseError = err => {
    console.log(err.message, err);
    let errMessage;
    if (err.message) {
        switch (err.message) {
            case "password length<6":
                errMessage = "Password must not be less than 6 characters"; break;
            case "Firebase: Error (auth/account-exists-with-different-credential).":
                errMessage = "Account Exists with this email"; break;
            case "Firebase: Error (auth/user-not-found).":
                errMessage = "User not found!"; break;
            case "Firebase: Error (auth/wrong-password).":
                errMessage = "Password doesn't matched"; break;
            default: errMessage = "Error!"; break;
        }
    }
    else if (err === "Firebase: Error (auth/email-already-in-use).") {
        errMessage = "Account exists with this email!";
    }

    return <> <h3 className="error-message"> {errMessage}</h3></>;
};

export default handleFirebaseError;