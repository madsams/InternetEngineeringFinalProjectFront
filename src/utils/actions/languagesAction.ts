import {
    CHANGE_TOKEN,
    LanguageActionTypes,
    SWITCH_LANGUAGE,
    TokenActionTypes,
} from './actionTypes';
import {Language} from '../types';

export const changeLanguage = (language: Language): LanguageActionTypes => ({
    type: SWITCH_LANGUAGE,
    payload: language,
});

export const changeToken = (token: string): TokenActionTypes => ({
    type: CHANGE_TOKEN,
    payload: token,
});
