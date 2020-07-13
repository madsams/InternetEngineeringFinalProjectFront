import React from 'react';
import Login from './login';
import Field from './field';
import Centre from './centre';
import {Strings} from '../utils/types';
import createContainer, {RouteType} from './utils/createContainer';
import IHeader from './utils/header/IHeader';

interface MainRoute extends RouteType {
    path: string;
    headerTitle: Strings;
    component: React.ComponentType<any>;
}

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
];

const getTitle = (pathname: string): Strings | undefined => {
    const firstPath = '/' + pathname.split('/')[1];
    const matchedRoute = routes.find((r) => r.path === firstPath);
    return matchedRoute ? matchedRoute.headerTitle : undefined;
};

const App = createContainer<MainRoute>(routes, <IHeader getTitle={getTitle} />);

export default App;
