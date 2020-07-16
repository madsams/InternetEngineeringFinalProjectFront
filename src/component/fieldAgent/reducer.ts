import {Form, FormAnswer} from '../../utils/types';
import {
    createDataRequestReducer,
    createRequestReducer,
} from '../../utils/generics';
import {combineReducers} from 'redux';
import {
    GeoLocation,
    GET_ALL_FORMS,
    GET_FORM_ANSWER_DETAIL,
    GET_FORM_ANSWERS,
    GET_FORM_DETAIL,
    GET_GEO_LOCATION,
    SUBMIT_FORM,
} from './types';

const formsReducer = createDataRequestReducer<Form[]>(GET_ALL_FORMS, []);

const formAnswersReducer = createDataRequestReducer<FormAnswer[]>(
    GET_FORM_ANSWERS,
    [],
);

const submitFormReducer = createRequestReducer(SUBMIT_FORM);

const geoLocationsReducer = createDataRequestReducer<GeoLocation[]>(
    GET_GEO_LOCATION,
    [],
);

const initialFormDetail: Form = {id: '', fields: [], title: ''};
const formDetailReducer = createDataRequestReducer<Form>(
    GET_FORM_DETAIL,
    initialFormDetail,
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
);

const fieldReducer = combineReducers({
    forms: formsReducer,
    formAnswers: formAnswersReducer,
    submitForm: submitFormReducer,
    geoLocations: geoLocationsReducer,
    formDetail: formDetailReducer,
    formAnswerDetail: formAnswerDetailReducer,
});

export default fieldReducer;
