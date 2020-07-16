import React from 'react';
import {MainApplicationType, Role} from '../../utils/types';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import FieldFormsList from './FieldFormsList';
import FieldFormAnswersList from './FieldFormAnswersList';
import FieldFormDetail from './form/FieldFormDetail';
import FieldFormAnswerDetail from './form/FieldFormAnswerDetail';
import {
    FieldAgentPaths,
    FORM_ANSWERS,
    FORM_ANSWERS_DETAIL,
    FORMS,
    FORMS_DETAIL,
} from './paths';

const field: MainApplicationType<FieldAgentPaths> = {
    role: Role.fieldAgent,
    routes: [
        {
            path: FORMS,
            title: {en: 'Home', fa: 'صفحه اصلی'},
            component: <FieldFormsList />,
            icon: <HomeIcon />,
        },
        {
            path: FORMS_DETAIL(':id'),
            component: <FieldFormDetail />,
            hideInDrawer: true,
        },
        {
            path: FORM_ANSWERS_DETAIL(':id'),
            component: <FieldFormAnswerDetail />,
            hideInDrawer: true,
        },
        {
            path: FORM_ANSWERS,
            title: {en: 'Filled Forms', fa: 'فرم‌های پر شده'},
            component: <FieldFormAnswersList />,
            icon: <AssignmentTurnedInIcon />,
        },
    ],
    defaultPath: FORMS,
    headerTitle: {
        fa: 'عامل میدانی',
        en: 'Field Agent',
    },
    drawerVisible: true,
};
export default field;
