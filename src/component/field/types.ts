import {Action} from 'redux';
import {Form} from '../../utils/types';

export const GET_FORMS_PENDING = 'GET_FORMS_PENDING';
export const GET_FORMS_SUCCESS = 'GET_FORMS_SUCCESS';
export const GET_FORMS_ERROR = 'GET_FORMS_ERROR';

export interface GetFormsPendingAction
    extends Action<typeof GET_FORMS_PENDING> {}

export interface GetFormsSuccessAction
    extends Action<typeof GET_FORMS_SUCCESS> {
    payload: Array<Form>;
}

export interface GetFormsErrorAction extends Action<typeof GET_FORMS_ERROR> {}

type FormsAction =
    | GetFormsErrorAction
    | GetFormsPendingAction
    | GetFormsSuccessAction;

export type FieldAction = FormsAction;
