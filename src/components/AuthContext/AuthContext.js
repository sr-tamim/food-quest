
import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const UserContext = createContext();

const AuthContext = ({ children }) => {
    const { auth, user, setUser } = useFirebase();
    const allContext = {
        auth: auth,
        user: user,
        setUser: setUser
    }
    return (
        <UserContext.Provider value={allContext}>{children}</UserContext.Provider>
    );
};

export default AuthContext;