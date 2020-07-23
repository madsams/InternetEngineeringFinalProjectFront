import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import {DrawerItem} from '../../utils/types';
import IContainer from './IContainer';
import SecureRoute from './SecureRoute';

interface MainApplicationProps {
    routes: Array<DrawerItem<string>>;
    defaultPath: string;
}

const MainApplication = ({routes, defaultPath}: MainApplicationProps) => {
    return (
        <IContainer>
            <Router>
                <Switch>
                    {routes.map((r) => {
                        return r.isUnSecure ? (
                            <Route path={r.path} key={r.path}>
                                {r.component}
                            </Route>
                        ) : (
                            <SecureRoute path={r.path} key={r.path}>
                                {r.component}
                            </SecureRoute>
                        );
                    })}
                    <Redirect to={defaultPath} />
                </Switch>
            </Router>
        </IContainer>
    );
};
export default MainApplication;
