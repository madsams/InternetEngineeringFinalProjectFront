import {Role} from '../../utils/types';
import {createGetRequestSimpleActions} from '../../utils/generics';
import {GET_ROLES_OF_USER} from './types';
import api from '../../utils/api';

export const getRoles = createGetRequestSimpleActions<Role[]>(
    GET_ROLES_OF_USER,
    api.getRoles,
);
