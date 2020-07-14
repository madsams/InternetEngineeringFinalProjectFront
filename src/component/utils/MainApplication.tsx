import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import {DrawerItem} from '../../utils/types';
import IContainer from './IContainer';

interface MainApplicationProps {
    routes: Array<DrawerItem>;
    defaultPath: string;
}

const MainApplication = ({routes, defaultPath}: MainApplicationProps) => {
    return (
        <IContainer>
            <Router>
                <Switch>
                    {routes.map((r) => (
                        <Route path={r.path} key={r.path}>
                            {r.component}
                        </Route>
                    ))}
                    <Redirect to={defaultPath} />
                </Switch>
            </Router>
        </IContainer>
    );
};
export default MainApplication;
