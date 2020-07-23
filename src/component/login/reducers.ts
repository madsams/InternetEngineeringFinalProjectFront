import {createDataRequestReducer} from '../../utils/generics';
import {Role} from '../../utils/types';
import {GET_ROLES_OF_USER} from './types';
import {combineReducers, Reducer} from 'redux';
import {FilterAction, FilterState} from '../centreAgent/types';

const rolesOfUserReducer = createDataRequestReducer<Role[]>(
    GET_ROLES_OF_USER,
    [],
    true,
);

const filterReducer: Reducer<FilterState, FilterAction> = (
    state = {},
    action,
) => {
    if (action.type === 'CENTRE_SET_FILTER') {
        return {...state, [action.payload.name]: action.payload.filter};
    } else {
        return state;
    }
};

const loginReducer = combineReducers({
    rolesOfUser: rolesOfUserReducer,
    filter: filterReducer,
});

export default loginReducer;
