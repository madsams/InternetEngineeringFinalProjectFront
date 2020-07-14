import React from 'react';
import {MainApplicationType, Role} from '../utils/types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IHeader from './utils/header/IHeader';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {Auth0Provider} from '@auth0/auth0-react';
import MainApplication from './utils/MainApplication';
import login from './login';
import centre from './field';
import field from './field';

const mainApplications: Array<MainApplicationType> = [field, centre, login];

const useApplication = (): MainApplicationType => {
    const role = useSelector<RootState, Role>((state) => state.role);
    return mainApplications.find((a) => a.role === role) || login;
};

const App = () => {
    const mainApp = useApplication();

    return (
        <Auth0Provider
            domain="ieng-final-project.eu.auth0.com"
            clientId="itCUjipghPHaeGzOC72mj04evZCBDcns"
            redirectUri={window.location.origin}>
            <Router>
                <IHeader
                    title={mainApp.headerTitle}
                    drawerList={mainApp.routes}
                    drawerVisible={mainApp.drawerVisible}
                />
                <Switch>
                    <Route path="/">
                        <MainApplication routes={mainApp.routes} />
                    </Route>
                </Switch>
            </Router>
        </Auth0Provider>
    );
};
export default App;
