import {IThunkAction, Role} from '../../utils/types';
import {loginAction} from '../../utils/actions/actions';
import {createGetRequestSimpleActions} from '../../utils/generics';
import {GET_ROLES_OF_USER} from './types';
import api from '../../utils/api';

export const login1 = (role: Role): IThunkAction => (dispatch) => {
    dispatch(loginAction('', role));
};

export const getRoles = createGetRequestSimpleActions<Role[]>(
    GET_ROLES_OF_USER,
    api.getRoles,
);
