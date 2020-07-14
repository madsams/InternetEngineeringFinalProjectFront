import {MainApplicationType, Role} from '../../utils/types';
import LoginScreen from './LoginScreen';

const login: MainApplicationType = {
    role: Role.unknown,
    routes: [
        {
            path: '/',
            component: LoginScreen,
        },
    ],
    headerTitle: {
        fa: 'ورود',
        en: 'Login',
    },
    drawerVisible: false,
};
export default login;
