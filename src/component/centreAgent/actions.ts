import {
    createGetRequestSimpleActions,
    createGetRequestWithIdActions,
} from '../../utils/generics';
import {Form, FormAnswer, FormTable} from '../../utils/types';
import api from '../../utils/API';
import {
    CENTRE_GET_ALL_FORMS,
    CENTRE_GET_FORM_ANSWER_DETAIL,
    CENTRE_GET_FORM_TABLE,
} from './types';

export const getForms = createGetRequestSimpleActions<Form>(
    CENTRE_GET_ALL_FORMS,
    api.forms,
);

export const getFormTable = createGetRequestWithIdActions<FormTable>(
    CENTRE_GET_FORM_TABLE,
    api.forms,
);

export const getSelectedFormAnswerDetail = createGetRequestWithIdActions<
    FormAnswer
>(CENTRE_GET_FORM_ANSWER_DETAIL, api.formAnswers);
