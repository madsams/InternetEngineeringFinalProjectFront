import {Action} from 'redux';
import {Language} from '../types';

export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

interface SwitchLanguageAction extends Action<typeof SWITCH_LANGUAGE> {
    payload: Language;
}

export type LanguageActionTypes = SwitchLanguageAction;

export const CHANGE_TOKEN = 'CHANGE_TOKEN';

interface ChangeTokenAction extends Action<typeof CHANGE_TOKEN> {
    payload: string;
}

export type TokenActionTypes = ChangeTokenAction;
