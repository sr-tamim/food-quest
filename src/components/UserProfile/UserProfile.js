import React, { useContext } from 'react';
import { AuthContext } from '../../App';
import userSignOut from '../../Firebase/sign-out';
import { UserContext } from '../UserPage/UserPage';
import "./UserProfile.css";

const UserProfile = () => {
    const { user, setUser } = useContext(UserContext);
    const auth = useContext(AuthContext);
    return (
        <div>
            <div id="profile-container">
                <span style={{ color: "gray" }}>
                    {
                        user.photoURL ? <img src={user.photoURL} alt="" />
                            : "img not found"
                    }
                </span>
                <br />
                <h1>{user.displayName}</h1>
                <h3>{user.email}</h3>
            </div>
            <button id="sign-out-but" onClick={() => userSignOut(auth, setUser)} >Sign Out</button>
        </div>
    );
};

export default UserProfile;