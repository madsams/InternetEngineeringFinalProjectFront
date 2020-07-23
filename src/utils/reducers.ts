import {
    LanguageActionTypes,
    RoleActionTypes,
    SET_ROLE,
    SWITCH_LANGUAGE,
} from './actions/actionTypes';
import {Language, languageStorageKey, Role, roleStorageKey} from './types';
import {getStorage} from './effects/storage';
import {Reducer} from 'redux';

const initialLanguage: Language = getStorage<Language>(
    languageStorageKey,
    Language.en,
);
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

const initialRole: Role = getStorage<Role>(roleStorageKey, Role.unknown);
export const roleReducer: Reducer<Role, RoleActionTypes> = (
    state = initialRole,
    action,
) => {
    if (action.type === SET_ROLE) return action.payload;
    else return state;
};
