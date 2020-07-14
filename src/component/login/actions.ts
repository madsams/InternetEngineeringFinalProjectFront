import {IThunkAction, Role} from '../../utils/types';
import {changeRole, changeToken} from '../../utils/actions/actions';

export const login = (): IThunkAction => (dispatch) => {
    dispatch(changeToken(''));
    dispatch(changeRole(Role.fieldAgent));
};
