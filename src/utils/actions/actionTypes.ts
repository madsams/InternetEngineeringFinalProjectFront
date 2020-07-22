import {Action} from 'redux';
import {Language, Role} from '../types';

export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

interface SwitchLanguageAction extends Action<typeof SWITCH_LANGUAGE> {
    payload: Language;
}

export type LanguageActionTypes = SwitchLanguageAction;

export const SET_ROLE = 'SET_ROLE';

interface SetRoleAction extends Action<typeof SET_ROLE> {
    payload: Role;
}

export type RoleActionTypes = SetRoleAction;
