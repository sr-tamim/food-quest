import React, { useContext } from 'react';
import { AuthContext } from '../../App';
import userSignOut from '../../Firebase/sign-out';
import "./UserProfile.css";

const UserProfile = ({ user, setUser }) => {
    const auth = useContext(AuthContext);

    const { displayName, photoURL, email } = user.providerData[0];
    return (
        <div id="profile-container">
            <div>
                <div className="profile-img">
                    {
                        photoURL ? <img src={user.photoURL} alt="" />
                            : "img not found"
                    }
                </div>
                <h1>
                    {
                        displayName || user.reloadUserInfo.screenName
                    }
                </h1>
                <h4>{email || 'email access denied'}</h4>
            </div>
            <button id="sign-out-but" onClick={() => userSignOut(auth, setUser)} >Sign Out</button>
        </div>
    );
};

export default UserProfile;