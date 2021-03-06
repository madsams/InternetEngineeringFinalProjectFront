import {
    CHANGE_TOKEN,
    LanguageActionTypes,
    RoleActionTypes,
    SET_ROLE,
    SWITCH_LANGUAGE,
    TokenActionTypes,
} from './actions/actionTypes';
import {Language, Role} from './types';
import {getStorage} from './effects/storage';
import {Reducer} from 'redux';

const initialLanguage: Language = getStorage<Language>('language', Language.en);
export const languagesReducers: Reducer<Language, LanguageActionTypes> = (
    state = initialLanguage,
    action,
) => {
    if (action.type === SWITCH_LANGUAGE) {
        return action.payload;
    } else {
        return state;
    }
};

const initialToken: string = getStorage<string>('token', '');
export const tokenReducer: Reducer<string, TokenActionTypes> = (
    state = initialToken,
    action,
) => {
    if (action.type === CHANGE_TOKEN) return action.payload;
    else return state;
};

const initialRole: Role = getStorage<Role>('role', Role.unknown);
export const roleReducer: Reducer<Role, RoleActionTypes> = (
    state = initialRole,
    action,
) => {
    if (action.type === SET_ROLE) return action.payload;
    else return state;
};
