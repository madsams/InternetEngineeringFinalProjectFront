import {MainApplicationType, Role} from '../../utils/types';
import LoginScreen from './LoginScreen';
import React from 'react';
import {CALLBACK, LOGIN, LoginPaths, SET_ROLE} from './paths';
import Callback from './Callback';
import SetRole from './SetRole';

const login: MainApplicationType<LoginPaths> = {
    role: Role.unknown,
    routes: [
        {
            path: LOGIN,
            component: <LoginScreen />,
            isUnSecure: true,
        },
        {
            path: CALLBACK,
            component: <Callback />,
            isUnSecure: true,
        },
        {
            path: SET_ROLE,
            component: <SetRole />,
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
