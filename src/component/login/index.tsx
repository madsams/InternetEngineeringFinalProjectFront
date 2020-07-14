import {MainApplicationType, Role} from '../../utils/types';
import LoginScreen from './LoginScreen';
import React from 'react';

const login: MainApplicationType = {
    role: Role.unknown,
    routes: [
        {
            path: '/login',
            component: <LoginScreen />,
        },
    ],
    defaultPath: '/login',
    headerTitle: {
        fa: 'ورود',
        en: 'Login',
    },
    drawerVisible: false,
};
export default login;
