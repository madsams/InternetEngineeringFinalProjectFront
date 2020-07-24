import {createDataRequestReducer} from '../../utils/generics';
import {GET_ROLES_OF_USER} from './types';
import {combineReducers} from 'redux';

const rolesOfUserReducer = createDataRequestReducer<{name: string}[]>(
    GET_ROLES_OF_USER,
    [],
    true,
);
const loginReducer = combineReducers({
    rolesOfUser: rolesOfUserReducer,
});

export default loginReducer;
