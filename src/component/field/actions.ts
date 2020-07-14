import {Form, IThunkAction} from '../../utils/types';
import request from '../../utils/effects/request';
import api from '../../utils/api';
import {
    GET_FORMS_ERROR,
    GET_FORMS_PENDING,
    GET_FORMS_SUCCESS,
    GetFormsErrorAction,
    GetFormsPendingAction,
    GetFormsSuccessAction,
} from './types';

const getFormsPending = (): GetFormsPendingAction => ({
    type: GET_FORMS_PENDING,
});
const getFormsError = (): GetFormsErrorAction => ({
    type: GET_FORMS_ERROR,
});
const getFormsSuccess = (forms: Array<Form>): GetFormsSuccessAction => ({
    type: GET_FORMS_SUCCESS,
    payload: forms,
});

export const getForms = (): IThunkAction => (dispatch) => {
    dispatch(
        request({
            url: api.forms,
            method: 'GET',
            errorAction: getFormsError,
            pendingAction: getFormsPending,
            successAction: getFormsSuccess,
        }),
    );
};
