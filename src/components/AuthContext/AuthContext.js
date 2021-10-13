
import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const UserContext = createContext();

const AuthContext = ({ children }) => {
    const getInfo = useFirebase();
    const allContext = { ...getInfo };
    return (
        <UserContext.Provider value={allContext}>{children}</UserContext.Provider>
    );
};

export default AuthContext;