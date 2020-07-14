import React from 'react';
import {MainApplicationType, Role} from '../../utils/types';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import FieldHome from './home';
import FieldFilled from './filled';
import FieldForm from './Form';

const field: MainApplicationType = {
    role: Role.fieldAgent,
    routes: [
        {
            path: '/home',
            title: {en: 'Home', fa: 'صفحه اصلی'},
            component: <FieldHome />,
            icon: <HomeIcon />,
        },
        {
            path: '/filled',
            title: {en: 'Filled Forms', fa: 'فرم‌های پر شده'},
            component: <FieldFilled />,
            icon: <AssignmentTurnedInIcon />,
        },
        {
            path: '/form/filled/:id',
            component: <FieldForm isFilled />,
            hideInDrawer: true,
        },
        {
            path: '/form/:id',
            component: <FieldForm />,
            hideInDrawer: true,
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
