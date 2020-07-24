import React, {useEffect, useState} from 'react';
import {MainApplicationType, Role} from '../utils/types';
import {BrowserRouter as Router} from 'react-router-dom';
import IHeader from './utils/header/IHeader';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import MainApplication from './utils/MainApplication';
import login from './login';
import centre from './centreAgent';
import field from './fieldAgent';
import ReduxToastr from 'react-redux-toastr';
import {useDirection} from '../utils/hooks';
import auth0Client from '../utils/auth0Client';

const mainApplications = [field, centre, login];

const App = () => {
    const isRTL = useDirection();
    const role = useSelector<RootState, Role>((state) => state.role);
    const [mainApp, setMainApp] = useState<MainApplicationType<string>>(login);

    useEffect(() => {
        setMainApp(
            auth0Client.isAuthenticated()
                ? mainApplications.find((a) => a.role === role) || login
                : login,
        );
    }, [role]);

    return (
        <Router>
            <ReduxToastr
                timeOut={3000}
                position={isRTL ? 'top-left' : 'top-right'}
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                closeOnToastrClick
            />
            <IHeader
                title={mainApp.headerTitle}
                drawerList={mainApp.routes}
                drawerVisible={mainApp.drawerVisible}
            />

            <MainApplication
                routes={mainApp.routes}
                defaultPath={mainApp.defaultPath}
            />
        </Router>
    );
};
export default App;
