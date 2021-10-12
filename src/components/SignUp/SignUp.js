import React, { useContext, useState } from 'react';
import "./SignUp.css";
import createUserWithEmail from '../../Firebase/email-sign-in';
import { userContext } from '../UserContext/UserContext';
import { useLocation } from 'react-router';


const SignUp = () => {
    const { setUser, auth } = useContext(userContext);

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
        if (password.length < 6) { alert('password should be at least 6 characters'); return; }
        createUserWithEmail(auth, email, password, name, setUser);
    }


    return (
        <div id="sign-up-container">
            <form onSubmit={handleSubmit} >
                <div className="form-heading">
                    <i className="fas fa-user-plus"></i> <br />
                    <span>Create Account</span>
                </div>
                <div className="input-field-container">
                    <input type="text" id="nameInput" onChange={handleInput} placeholder="Name" required />
                    <label>Name</label>
                </div>
                <div className="input-field-container">
                    <input type="email" id="emailInput" onChange={handleInput} placeholder="Email" required />
                    <label>Email</label>
                </div>
                <div className="input-field-container">
                    <input type="password" id="passwordInput" onChange={handleInput} placeholder="Password" required />
                    <label>Password</label>
                </div>
                <input type="submit" className="submit-button" value="Sign Up" />
            </form>
        </div>
    );
};

export default SignUp;