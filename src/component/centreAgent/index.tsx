import {MainApplicationType, Role} from '../../utils/types';
import {CentrePaths, FORM_RECORD_DETAIL, FORM_TABLE, FORMS} from './paths';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import CentreHome from './CentreFormsList';
import CentreFormTable from './CentreFormTable';
import CentreFormAnswerDetail from './CentreFormAnswerDetail';

const centre: MainApplicationType<CentrePaths> = {
    role: Role.centreAgent,
    routes: [
        {
            path: FORMS,
            title: {fa: 'صفحه اصلی', en: 'Home'},
            component: <CentreHome />,
            icon: <HomeIcon />,
        },
        {
            path: FORM_TABLE(':id'),
            component: <CentreFormTable />,
            hideInDrawer: true,
        },
        {
            path: FORM_RECORD_DETAIL(':id'),
            component: <CentreFormAnswerDetail />,
            hideInDrawer: true,
        },
    ],
    headerTitle: {
        fa: 'عامل مرکزی',
        en: 'Centre Agent',
    },
    defaultPath: FORMS,
    drawerVisible: true,
};
export default centre;
