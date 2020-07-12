import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './login';
import Field from './field';
import Centre from './centre';
import NotMatch from './utils/NotMatch';

const App = () => (
    <Router>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/field">
                <Field />
            </Route>
            <Route path="/centre">
                <Centre />
            </Route>
            <Route path="*">
                <NotMatch />
            </Route>
        </Switch>
    </Router>
);

export default App;
