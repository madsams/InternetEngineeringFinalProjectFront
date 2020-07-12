import {Action} from 'redux';
import {Language} from '../types';

export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

interface SwitchLanguageAction extends Action<typeof SWITCH_LANGUAGE> {
    payload: Language;
}

export type LanguageActionTypes = SwitchLanguageAction;
