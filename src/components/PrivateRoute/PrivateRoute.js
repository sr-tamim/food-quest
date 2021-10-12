import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const { currentUser } = useContext(UserContext).auth;
    return (
        <Route {...rest}
            render={({ location }) => currentUser ? (children)
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