import React, { createContext, useContext, useState } from 'react';
import "./UserPage.css";
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import UserProfile from '../UserProfile/UserProfile';
import googleSignIn from '../../Firebase/google-sign-in';
import { AuthContext } from '../../App';
import gitHubLogin from '../../Firebase/github-sign-in';

export const UserContext = createContext();

const UserPage = props => {
    const auth = useContext(AuthContext);
    const [isRegistered, setIsRegistered] = useState(false);
    const { user, setUser } = props.useUser;
    console.log(user)
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

                            <button className='sign-in-buttons' onClick={() => googleSignIn(auth, setUser)} >Sign in with Google</button>
                            <button className='sign-in-buttons' onClick={() => gitHubLogin(auth, setUser)} >Sign in with GitHub</button>
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