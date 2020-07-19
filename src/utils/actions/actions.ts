import {
    CHANGE_TOKEN,
    LanguageActionTypes,
    RoleActionTypes,
    SET_ROLE,
    SWITCH_LANGUAGE,
    TokenActionTypes,
} from './actionTypes';
import {
    IThunkAction,
    Language,
    Role,
    roleStorageKey,
    tokenStorageKey,
} from '../types';
import {removeStorage} from '../effects/storage';

export const changeLanguage = (language: Language): LanguageActionTypes => ({
    type: SWITCH_LANGUAGE,
    payload: language,
});

const changeToken = (token: string): TokenActionTypes => ({
    type: CHANGE_TOKEN,
    payload: token,
});

const changeRole = (role: Role): RoleActionTypes => ({
    type: SET_ROLE,
    payload: role,
});

export const loginAction = (token: string, role: Role): IThunkAction => (
    dispatch,
) => {
    dispatch(changeToken(token));
    dispatch(changeRole(role));
};

export const logoutAction = (): IThunkAction => (dispatch) => {
    //todo call remove token
    removeStorage(roleStorageKey);
    removeStorage(tokenStorageKey);
    dispatch(loginAction('', Role.unknown));
};
