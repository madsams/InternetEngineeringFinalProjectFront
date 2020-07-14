import {MainApplicationType, Role} from '../../utils/types';

const centre: MainApplicationType = {
    role: Role.centreAgent,
    routes: [],
    headerTitle: {
        fa: 'عامل مرکزی',
        en: 'Centre Agent',
    },
    defaultPath: '/',
    drawerVisible: true,
};
export default centre;
