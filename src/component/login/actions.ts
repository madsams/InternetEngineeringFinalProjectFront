import {IThunkAction, Role} from '../../utils/types';
import {loginAction} from '../../utils/actions/actions';

export const login1 = (role: Role): IThunkAction => (dispatch) => {
    dispatch(loginAction('', role));
};
