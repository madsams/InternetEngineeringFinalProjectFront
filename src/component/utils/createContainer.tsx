import React from 'react';
import {Switch} from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NotMatch from './NotMatch';

export interface RouteType {
    path: string;
    component: React.ComponentType<any>;
}

const notFoundRoute: RouteType = {
    path: '*',
    component: NotMatch,
};

const createContainer = <R extends RouteType>(
    routes: R[],
    header?: React.ReactNode,
): React.FunctionComponent => () => (
    <Router>
        {header}
        <Switch>
            {[...routes, notFoundRoute].map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                />
            ))}
        </Switch>
    </Router>
);
export default createContainer;
