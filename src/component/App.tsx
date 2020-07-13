import React from 'react';
import Login from './login';
import Field from './field';
import Centre from './centre';
import {Role, Strings} from '../utils/types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IHeader from './utils/header/IHeader';

const App = () => {
    const role = Role.centreAgent;

    const getTitle = (): Strings => {
        //todo move to redux
        return role === Role.centreAgent
            ? {
                  fa: 'عامل مرکزی',
                  en: 'Centre Agent',
              }
            : role === Role.fieldAgent
            ? {
                  fa: 'عامل میدانی',
                  en: 'Field Agent',
              }
            : {
                  fa: 'ورود',
                  en: 'Login',
              };
    };
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
