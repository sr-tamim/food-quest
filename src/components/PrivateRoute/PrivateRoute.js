import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../AuthContext/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { auth, userLoading } = useContext(UserContext);
    return (
        <Route {...rest}
            render={
                ({ location }) => auth.currentUser ? (children)
                    : userLoading ? (<h1 className="loading">Loading...</h1>)
                        : (<Redirect
                            to={{
                                pathname: '/user',
                                state: { from: location }
                            }} />
                        )
            }
        ></Route >
    );
};

export default PrivateRoute;