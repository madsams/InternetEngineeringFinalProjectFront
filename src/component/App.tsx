import React, {useCallback} from 'react';
import Login from './login';
import Field from './field';
import Centre from './centre';
import {Role, Strings} from '../utils/types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IHeader from './utils/header/IHeader';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const App = () => {
    const role = useSelector<RootState, Role>((state) => state.role);

    const getTitle = useCallback((): Strings => {
        switch (role) {
            case Role.centreAgent:
                return {
                    fa: 'عامل مرکزی',
                    en: 'Centre Agent',
                };
            case Role.fieldAgent:
                return {
                    fa: 'عامل میدانی',
                    en: 'Field Agent',
                };
            default:
                return {
                    fa: 'ورود',
                    en: 'Login',
                };
        }
    }, [role]);

    return (
        <Router>
            <IHeader getTitle={getTitle} />
            <Switch>
                <Route path="/">
                    {role === Role.centreAgent ? (
                        <Centre />
                    ) : role === Role.fieldAgent ? (
                        <Field />
                    ) : (
                        <Login />
                    )}
                </Route>
            </Switch>
        </Router>
    );
};
export default App;
