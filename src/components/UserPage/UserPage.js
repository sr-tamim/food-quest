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
import { UserContext } from '../../App';


const UserPage = () => {
    const { auth } = useContext(UserContext);
    const [isRegistered, setIsRegistered] = useState(false);

    const history = useHistory();
    const pathname = useLocation()?.state?.from.pathname || '/';
    const backToPage = () => history.push(pathname);
    return (
        <div id="user-page">
            {
                <div>
                    {isRegistered ? <Login />
                        : <SignUp />
                    }
                    <br /><br />
                    <div>
                        Sign In With <br />
                        <span className='sign-in-buttons' onClick={
                            () => googleSignIn(auth).then(() => backToPage())} >
                            <i className="fab fa-google"></i>
                        </span>
                        <span className='sign-in-buttons' onClick={() => gitHubLogin(auth)} ><i className="fab fa-github"></i></span>
                        <span className='sign-in-buttons' onClick={() => fbLogin(auth)} ><i className="fab fa-facebook"></i></span>
                        <span className='sign-in-buttons' onClick={() => twitterLogin(auth)} ><i className="fab fa-twitter"></i></span>
                        <span className='sign-in-buttons' onClick={() => msLogin(auth)} ><i className="fab fa-microsoft"></i></span>
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