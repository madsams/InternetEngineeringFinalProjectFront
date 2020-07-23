import React from 'react';
import {Route, useHistory} from 'react-router-dom';
import auth0Client from '../../utils/auth0Client';

interface SecureRouteProps {
    children: React.ReactNode;
    path: string;
}

const SecureRoute = ({children, path}: SecureRouteProps) => {
    const history = useHistory();
    return (
        <Route
            path={path}
            render={() => {
                if (!auth0Client.isAuthenticated()) {
                    history.replace('/');
                    return <div />;
                } else {
                    return children;
                }
            }}
        />
    );
};
export default SecureRoute;
