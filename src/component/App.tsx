import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => (
    <Router>
        <Switch>
            {/*<Route path="/login" component={Login}/>*/}
            {/*<Route path="/field" component={Field}/>*/}
            {/*<Route path="/centre" component={Centre}/>*/}
        </Switch>
    </Router>
);

export default App;
