import {
    LanguageActionTypes,
    RoleActionTypes,
    SET_ROLE,
    SWITCH_LANGUAGE,
} from './actionTypes';
import {Language, Role} from '../types';

export const changeLanguage = (language: Language): LanguageActionTypes => ({
    type: SWITCH_LANGUAGE,
    payload: language,
});

export const setRole = (role: Role): RoleActionTypes => ({
    type: SET_ROLE,
    payload: role,
});
