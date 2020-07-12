import {LanguageActionTypes, SWITCH_LANGUAGE} from './actions/actionTypes';
import {Language} from './types';

//todo save in localStorage
const initialLanguage: Language = Language.en;
export const languagesReducers = (
    state = initialLanguage,
    action: LanguageActionTypes,
) => {
    if (action.type === SWITCH_LANGUAGE) {
        return action.payload;
    } else {
        return state;
    }
};
