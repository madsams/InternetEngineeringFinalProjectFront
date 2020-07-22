import {combineReducers} from 'redux';
import {createDataRequestReducer} from '../../utils/generics';
import {Form, FormAnswer, FormTable} from '../../utils/types';
import {
    CENTRE_GET_ALL_FORMS,
    CENTRE_GET_FORM_ANSWER_DETAIL,
    CENTRE_GET_FORM_TABLE,
} from './types';

const formsReducer = createDataRequestReducer<Form[]>(CENTRE_GET_ALL_FORMS, []);

const formTableReducer = createDataRequestReducer<FormTable>(
    CENTRE_GET_FORM_TABLE,
    {
        id: '',
        title: '',
        answersCount: 3,
        createdAt: new Date(),
        fields: [],
        records: [],
        sum: {},
    },
);

const formAnswerDetailReducer = createDataRequestReducer<
    FormAnswer | undefined
>(CENTRE_GET_FORM_ANSWER_DETAIL, undefined, true);

const centreReducer = combineReducers({
    forms: formsReducer,
    formTable: formTableReducer,
    formAnswerDetail: formAnswerDetailReducer,
});
export default centreReducer;
