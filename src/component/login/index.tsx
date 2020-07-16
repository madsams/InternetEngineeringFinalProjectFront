import {MainApplicationType, Role} from '../../utils/types';
import LoginScreen from './LoginScreen';
import React from 'react';
import {LOGIN, LoginPaths} from './paths';

const login: MainApplicationType<LoginPaths> = {
    role: Role.unknown,
    routes: [
        {
            path: LOGIN,
            component: <LoginScreen />,
        },
    ],
    defaultPath: LOGIN,
    headerTitle: {
        fa: 'ورود',
        en: 'Login',
    },
    drawerVisible: false,
};
export default login;
