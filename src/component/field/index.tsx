import {MainApplicationType, Role} from '../../utils/types';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import FieldHome from './home';

const field: MainApplicationType = {
    role: Role.fieldAgent,
    routes: [
        {
            path: '/home',
            title: {en: 'Home', fa: 'صفحه اصلی'},
            component: <FieldHome />,
            icon: <HomeIcon />,
        },
    ],
    defaultPath: '/home',
    headerTitle: {
        fa: 'عامل میدانی',
        en: 'Field Agent',
    },
    drawerVisible: true,
};
export default field;
