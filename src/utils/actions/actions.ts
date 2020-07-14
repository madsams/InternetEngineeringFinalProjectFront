import {
    CHANGE_TOKEN,
    LanguageActionTypes,
    RoleActionTypes,
    SET_ROLE,
    SWITCH_LANGUAGE,
    TokenActionTypes,
} from './actionTypes';
import {Language, Role} from '../types';

export const changeLanguage = (language: Language): LanguageActionTypes => ({
    type: SWITCH_LANGUAGE,
    payload: language,
});

export const changeToken = (token: string): TokenActionTypes => ({
    type: CHANGE_TOKEN,
    payload: token,
});

export const changeRole = (role: Role): RoleActionTypes => ({
    type: SET_ROLE,
    payload: role,
});
