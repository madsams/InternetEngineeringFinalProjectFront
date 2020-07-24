import {Form, FormAnswer, PolygonsOfLocation} from '../../utils/types';
import {
    createDataRequestReducer,
    createRequestReducer,
} from '../../utils/generics';
import {combineReducers} from 'redux';
import {
    FIELD_GET_ALL_FORMS,
    FIELD_GET_FORM_ANSWER_DETAIL,
    FIELD_GET_FORM_ANSWERS,
    FIELD_GET_FORM_DETAIL,
    FIELD_GET_POLYGON_OF_LOCATION,
    SUBMIT_FORM,
} from './types';

const formsReducer = createDataRequestReducer<Form[]>(FIELD_GET_ALL_FORMS, []);

const formAnswersReducer = createDataRequestReducer<FormAnswer[]>(
    FIELD_GET_FORM_ANSWERS,
    [],
);

const submitFormReducer = createRequestReducer(SUBMIT_FORM);

const polygonsOfLocationReducer = createDataRequestReducer<PolygonsOfLocation>(
    FIELD_GET_POLYGON_OF_LOCATION,
    [],
    true,
);

const initialFormDetail = {
    createdAt: new Date(),
    answersCount: 0,
    title: '',
    id: '',
    fields: [],
};
const formDetailReducer = createDataRequestReducer<Form>(
    FIELD_GET_FORM_DETAIL,
    initialFormDetail,
);
const initialFormAnswerDetail = {
    id: '',
    title: '',
    answersCount: 0,
    createdAt: new Date(),
    fields: [],
    formId: '',
};
const formAnswerDetailReducer = createDataRequestReducer<FormAnswer>(
    FIELD_GET_FORM_ANSWER_DETAIL,
    initialFormAnswerDetail,
    true,
);

const fieldReducer = combineReducers({
    forms: formsReducer,
    formAnswers: formAnswersReducer,
    submitForm: submitFormReducer,
    polygonsOfLocation: polygonsOfLocationReducer,
    formDetail: formDetailReducer,
    formAnswerDetail: formAnswerDetailReducer,
});

export default fieldReducer;
