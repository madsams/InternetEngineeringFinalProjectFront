import {IThunkAction, Role} from '../../utils/types';
import {loginAction} from '../../utils/actions/actions';

export const login = (role: Role): IThunkAction => (dispatch) => {
    dispatch(loginAction('', role));
};
