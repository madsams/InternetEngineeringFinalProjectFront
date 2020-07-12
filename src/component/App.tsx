import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './login';
import Field from './field';
import Centre from './centre';
import NotMatch from './utils/NotMatch';
import IHeader from './utils/header/IHeader';

const App = () => (
    <Router>
        <IHeader />
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/field">
                <Field />
            </Route>
            <Route exact path="/centre">
                <Centre />
            </Route>
            <Route path="*">
                <NotMatch />
            </Route>
        </Switch>
    </Router>
);

export default App;
