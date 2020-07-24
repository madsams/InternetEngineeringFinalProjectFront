import {
    createGetRequestSimpleActions,
    createGetRequestWithIdActions,
    createGetRequestWithIdAndParamsAction,
} from '../../utils/generics';
import {Area, Form, FormAnswer, FormTable} from '../../utils/types';
import api from '../../utils/api';
import {
    CENTRE_GET_ALL_FORMS,
    CENTRE_GET_AREAS,
    CENTRE_GET_FORM_ANSWER_DETAIL,
    CENTRE_GET_FORM_TABLE,
    CENTRE_SET_ALL_FILTER,
    CENTRE_SET_FILTER,
    Filter,
    FilterState,
    GetFormTableParam,
    SetAllFilter,
    SetFilter,
} from './types';

export const getForms = createGetRequestSimpleActions<Form>(
    CENTRE_GET_ALL_FORMS,
    api.formsList,
);

export const getFormTable = createGetRequestWithIdAndParamsAction<
    FormTable,
    GetFormTableParam
>(CENTRE_GET_FORM_TABLE, api.answerOfForm);

export const getSelectedFormAnswerDetail = createGetRequestWithIdActions<
    FormAnswer
>(CENTRE_GET_FORM_ANSWER_DETAIL, api.answerDetail);

export const setFilter = (name: string, filter: Filter): SetFilter => ({
    type: CENTRE_SET_FILTER,
    payload: {
        name,
        filter,
    },
});

export const setAllFilter = (filter: FilterState): SetAllFilter => ({
    type: CENTRE_SET_ALL_FILTER,
    payload: filter,
});

export const getAreas = createGetRequestSimpleActions<Area[]>(
    CENTRE_GET_AREAS,
    api.getAreas,
);
