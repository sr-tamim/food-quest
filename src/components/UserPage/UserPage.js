import React, { useContext, useState } from 'react';
import "./UserPage.css";
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import googleSignIn from '../../Firebase/google-sign-in';
import gitHubLogin from '../../Firebase/github-sign-in';
import fbLogin from '../../Firebase/fb-sign-in';
import msLogin from '../../Firebase/ms-sign-in';
import twitterLogin from '../../Firebase/twitter-sign-in';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../AuthContext/AuthContext';
import handleFirebaseError from '../../Firebase/handleFirebaseError';


const UserPage = () => {
    const { auth } = useContext(UserContext);
    const [isRegistered, setIsRegistered] = useState(false);
    const [userError, setUserError] = useState(null);

    const history = useHistory();
    const pathname = useLocation()?.state?.from.pathname || '/';
    const backToPage = () => history.push(pathname);

    function handleLoginButtons(loginFunction) {
        setUserError(null);
        loginFunction(auth).then(() => backToPage())
            .catch(err => setUserError(err));
    }

    return (
        <div id="user-page">
            {pathname !== '/' && (<>
                <h4>You've to login first to access the page</h4><br />
            </>)}
            {
                <div>
                    {isRegistered ? <Login backToPage={backToPage} />
                        : <SignUp backToPage={backToPage} />
                    }
                    <br /><br />
                    {userError && handleFirebaseError(userError)}
                    <div>
                        Sign In With <br />
                        <span className='sign-in-buttons'
                            onClick={() => handleLoginButtons(googleSignIn)} >
                            <i className="fab fa-google"></i>
                        </span>

                        <span className='sign-in-buttons'
                            onClick={() => handleLoginButtons(gitHubLogin)} >
                            <i className="fab fa-github"></i></span>

                        <span className='sign-in-buttons'
                            onClick={() => handleLoginButtons(fbLogin)} >
                            <i className="fab fa-facebook"></i></span>

                        <span className='sign-in-buttons'
                            onClick={() => handleLoginButtons(twitterLogin)} >
                            <i className="fab fa-twitter"></i></span>

                        <span className='sign-in-buttons'
                            onClick={() => handleLoginButtons(msLogin)} >
                            <i className="fab fa-microsoft"></i></span>
                    </div>
                    <br /> <br />
                    <small
                        onClick={() => setIsRegistered(!isRegistered)}
                        className="toggleRegister" >
                        {
                            isRegistered ? 'No account? Sign Up' : 'Already registered? Login'
                        }

                    </small>
                </div>
            }
        </div>
    );
};

export default UserPage;