import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {DrawerItem} from '../../utils/types';

interface MainApplicationProps {
    routes: Array<DrawerItem>;
}

const MainApplication = ({routes}: MainApplicationProps) => {
    return (
        <Router>
            <Switch>
                {routes.map((r) => (
                    <Route path={r.path} key={r.path}>
                        <r.component />
                    </Route>
                ))}
            </Switch>
        </Router>
    );
};
export default MainApplication;
