import React, { createContext, useContext, useState } from 'react';
import "./UserPage.css";
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import UserProfile from '../UserProfile/UserProfile';
import googleSignIn from '../../Firebase/google-sign-in';
import { AuthContext } from '../../App';

export const UserContext = createContext();

const UserPage = props => {
    const auth = useContext(AuthContext);
    const [isRegistered, setIsRegistered] = useState(false);
    const { user, setUser } = props.useUser;
    return (
        <div id="user-page">
            <UserContext.Provider value={props.useUser}>
                {
                    user.email ? <UserProfile />
                        :
                        <div>
                            {isRegistered ? <Login />
                                : <SignUp />
                            }

                            <button className='sign-in-buttons' onClick={() => googleSignIn(auth, setUser)} >Sign in with Google</button>
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