import React from 'react';
import {MainApplicationType, Role} from '../../utils/types';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import FieldFormsList from './FieldFormsList';
import FieldFormAnswersList from './FieldFormAnswersList';
import FieldFormDetail from './form/FieldFormDetail';
import FieldFormAnswerDetail from './form/FieldFormAnswerDetail';

const field: MainApplicationType = {
    role: Role.fieldAgent,
    routes: [
        {
            path: '/home',
            title: {en: 'Home', fa: 'صفحه اصلی'},
            component: <FieldFormsList />,
            icon: <HomeIcon />,
        },
        {
            path: '/form/answer',
            title: {en: 'Filled Forms', fa: 'فرم‌های پر شده'},
            component: <FieldFormAnswersList />,
            icon: <AssignmentTurnedInIcon />,
        },
        {
            path: '/form/answer/:id',
            component: <FieldFormAnswerDetail />,
            hideInDrawer: true,
        },
        {
            path: '/form/:id',
            component: <FieldFormDetail />,
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
