import React, { useContext, useState } from 'react';
import loginUser from '../../Firebase/login';
import { UserContext } from '../AuthContext/AuthContext';

const Login = () => {
    const { setUser, auth } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleInput(e) {
        e.target.id === 'emailInput' && setEmail(e.target.value);
        e.target.id === 'passwordInput' && setPassword(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        loginUser(auth, email, password, setUser);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="form-heading">
                    <i className="fas fa-user"></i> <br />
                    <span>Sign In</span>
                </div>
                <div className="input-field-container">
                    <input type="email" id="emailInput" onChange={handleInput} placeholder="Email" required />
                    <label>Email</label>
                </div>
                <div className="input-field-container">
                    <input type="password" id="passwordInput" onChange={handleInput} placeholder="Password" required />
                    <label>Password</label>
                </div>
                <input type="submit" className="submit-button" value="Login" />
            </form>
        </div>
    );
};

export default Login;