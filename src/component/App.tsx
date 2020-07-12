import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './login';
import Field from './field';
import Centre from './centre';
import NotMatch from './utils/NotMatch';
import IHeader from './utils/header/IHeader';
import {Strings} from '../utils/types';

interface MainRoute {
    path: string;
    headerTitle: Strings;
    component: React.ComponentType<any>;
}

let notFoundRoute = {
    path: '*',
    component: NotMatch,
    headerTitle: {
        fa: 'یافت نشد',
        en: 'Not found',
    },
};
const routes: MainRoute[] = [
    {
        path: '/login',
        component: Login,
        headerTitle: {
            fa: 'ورود',
            en: 'Login',
        },
    },
    {
        path: '/centre',
        component: Centre,
        headerTitle: {
            fa: 'عامل مرکزی',
            en: 'Centre Agent',
        },
    },
    {
        path: '/field',
        component: Field,
        headerTitle: {
            fa: 'عامل میدانی',
            en: 'Field Agent',
        },
    },
    notFoundRoute,
];

const App = () => {
    const getTitle = (pathname: string): Strings | undefined => {
        const firstPath = '/' + pathname.split('/')[1];
        const matchedRoute = routes.find((r) => r.path === firstPath);
        return (matchedRoute || notFoundRoute).headerTitle;
    };

    return (
        <Router>
            <IHeader getTitle={getTitle} />
            <Switch>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                    />
                ))}
            </Switch>
        </Router>
    );
};

export default App;
