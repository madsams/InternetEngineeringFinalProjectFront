import {LanguageActionTypes, SWITCH_LANGUAGE} from './actionTypes';
import {Language} from '../types';

export const changeLanguage = (language: Language): LanguageActionTypes => ({
    type: SWITCH_LANGUAGE,
    payload: language,
});
