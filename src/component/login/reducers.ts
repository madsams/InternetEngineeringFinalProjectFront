import {createDataRequestReducer} from '../../utils/generics';
import {Role} from '../../utils/types';
import {GET_ROLES_OF_USER} from './types';
import {combineReducers} from 'redux';

const rolesOfUserReducer = createDataRequestReducer<Role[]>(
    GET_ROLES_OF_USER,
    [],
    true,
);
const loginReducer = combineReducers({
    rolesOfUser: rolesOfUserReducer,
});

export default loginReducer;
