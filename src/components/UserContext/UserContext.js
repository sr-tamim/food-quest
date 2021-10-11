import React from 'react';
import { createContext } from 'react/cjs/react.development';
import useFirebase from '../../hooks/useFirebase';

export const userContext = createContext();

const UserContext = ({ children }) => {
    const allDetails = useFirebase();
    return (
        <userContext.Provider value={allDetails} >
            {children}
        </userContext.Provider>
    );
};

export default UserContext;