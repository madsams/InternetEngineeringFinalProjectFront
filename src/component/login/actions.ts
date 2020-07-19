import {IThunkAction, Role} from '../../utils/types';
import {loginAction} from '../../utils/actions/actions';

export const login = (): IThunkAction => (dispatch) => {
    dispatch(loginAction('', Role.centreAgent));
};
