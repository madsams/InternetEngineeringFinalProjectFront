import React from 'react';
import {MainApplicationType, Role} from '../utils/types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IHeader from './utils/header/IHeader';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {Auth0Provider} from '@auth0/auth0-react';
import MainApplication from './utils/MainApplication';
import login from './login';
import centre from './centreAgent';
import field from './fieldAgent';
import ReduxToastr from 'react-redux-toastr';
import {useDirection} from '../utils/hooks';

const mainApplications = [field, centre, login];

const useApplication = (): MainApplicationType<string> => {
    const role = useSelector<RootState, Role>((state) => state.role);
    return mainApplications.find((a) => a.role === role) || login;
};

const App = () => {
    const mainApp = useApplication();
    const isRTL = useDirection();

    return (
        <Auth0Provider
            domain="ieng-final-project.eu.auth0.com"
            clientId="itCUjipghPHaeGzOC72mj04evZCBDcns"
            redirectUri={window.location.origin}>
            <ReduxToastr
                timeOut={3000}
                position={isRTL ? 'top-left' : 'top-right'}
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                closeOnToastrClick
            />
            <Router>
                <IHeader
                    title={mainApp.headerTitle}
                    drawerList={mainApp.routes}
                    drawerVisible={mainApp.drawerVisible}
                />
                <Switch>
                    <Route path="/">
                        <MainApplication
                            routes={mainApp.routes}
                            defaultPath={mainApp.defaultPath}
                        />
                    </Route>
                </Switch>
            </Router>
        </Auth0Provider>
    );
};
export default App;
