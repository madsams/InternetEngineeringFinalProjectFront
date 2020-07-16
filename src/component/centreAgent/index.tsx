import {MainApplicationType, Role} from '../../utils/types';
import {CentrePaths, HOME} from './paths';

const centre: MainApplicationType<CentrePaths> = {
    role: Role.centreAgent,
    routes: [],
    headerTitle: {
        fa: 'عامل مرکزی',
        en: 'Centre Agent',
    },
    defaultPath: HOME,
    drawerVisible: true,
};
export default centre;
