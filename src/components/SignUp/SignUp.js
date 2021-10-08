import React, { useContext, useState } from 'react';
import { UserContext } from '../UserPage/UserPage'
import "./SignUp.css";
import createUserWithEmail from '../../Firebase/email-sign-in';
import { AuthContext } from '../../App';


const SignUp = () => {
    const setUser = useContext(UserContext).setUser;
    const auth = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    function handleInput(e) {
        e.target.id === 'nameInput' && setName(e.target.value);
        e.target.id === 'emailInput' && setEmail(e.target.value);
        e.target.id === 'passwordInput' && setPassword(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        createUserWithEmail(auth, email, password, name, setUser);
    }


    return (
        <div id="sign-up-container">
            <form onSubmit={handleSubmit} >
                <div className="input-field-container">
                    <input type="text" id="nameInput" onBlur={handleInput} placeholder="Name" required />
                    <label>Name</label>
                </div>
                <div className="input-field-container">
                    <input type="email" id="emailInput" onBlur={handleInput} placeholder="Email" required />
                    <label>Email</label>
                </div>
                <div className="input-field-container">
                    <input type="password" id="passwordInput" onBlur={handleInput} placeholder="Password" required />
                    <label>Password</label>
                </div>
                <input type="submit" className="submit-button" value="Sign Up" />
            </form>
        </div>
    );
};

export default SignUp;