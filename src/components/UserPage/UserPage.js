import React, { createContext, useContext, useState } from 'react';
import "./UserPage.css";
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import UserProfile from '../UserProfile/UserProfile';
import googleSignIn from '../../Firebase/google-sign-in';
import { AuthContext } from '../../App';
import gitHubLogin from '../../Firebase/github-sign-in';
import fbLogin from '../../Firebase/fb-sign-in';
import msLogin from '../../Firebase/ms-sign-in';
import twitterLogin from '../../Firebase/twitter-sign-in';

export const UserContext = createContext();

const UserPage = props => {
    const auth = useContext(AuthContext);
    const [isRegistered, setIsRegistered] = useState(false);
    const { user } = props.useUser;
    console.log(user);
    return (
        <div id="user-page">
            <UserContext.Provider value={props.useUser}>
                {
                    Object.keys(user).length > 0 ? <UserProfile />
                        :
                        <div>
                            {isRegistered ? <Login />
                                : <SignUp />
                            }
                            <br /><br />
                            <div>
                                Sign In With <br />
                                <button className='sign-in-buttons' onClick={() => googleSignIn(auth)} ><i className="fab fa-google"></i></button>
                                <button className='sign-in-buttons' onClick={() => gitHubLogin(auth)} ><i className="fab fa-github"></i></button>
                                <button className='sign-in-buttons' onClick={() => fbLogin(auth)} ><i className="fab fa-facebook"></i></button>
                                <button className='sign-in-buttons' onClick={() => twitterLogin(auth)} ><i className="fab fa-twitter"></i></button>
                                <button className='sign-in-buttons' onClick={() => msLogin(auth)} ><i className="fab fa-microsoft"></i></button>
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
            </UserContext.Provider>
        </div>
    );
};

export default UserPage;