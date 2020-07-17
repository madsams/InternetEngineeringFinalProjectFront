import {Form, FormAnswer} from '../../utils/types';
import {
    createDataRequestReducer,
    createRequestReducer,
} from '../../utils/generics';
import {combineReducers} from 'redux';
import {
    GET_ALL_FORMS,
    GET_FORM_ANSWER_DETAIL,
    GET_FORM_ANSWERS,
    GET_FORM_DETAIL,
    GET_POLYGON_OF_LOCATION,
    PolygonsOfLocation,
    SUBMIT_FORM,
} from './types';

const formsReducer = createDataRequestReducer<Form[]>(GET_ALL_FORMS, []);

const formAnswersReducer = createDataRequestReducer<FormAnswer[]>(
    GET_FORM_ANSWERS,
    [],
);

const submitFormReducer = createRequestReducer(SUBMIT_FORM);

const polygonsOfLocationReducer = createDataRequestReducer<PolygonsOfLocation>(
    GET_POLYGON_OF_LOCATION,
    [],
    true,
);

const initialFormDetail: Form = {id: '', fields: [], title: ''};
const formDetailReducer = createDataRequestReducer<Form>(
    GET_FORM_DETAIL,
    initialFormDetail,
    true,
);
const initialFormAnswerDetail: FormAnswer = {
    title: '',
    id: '',
    fields: [],
    createdAt: new Date(),
};
const formAnswerDetailReducer = createDataRequestReducer<FormAnswer>(
    GET_FORM_ANSWER_DETAIL,
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
