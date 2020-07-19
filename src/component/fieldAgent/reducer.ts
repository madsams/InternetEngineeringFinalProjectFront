import {Form, FormAnswer} from '../../utils/types';
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
    PolygonsOfLocation,
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

const formDetailReducer = createDataRequestReducer<Form | undefined>(
    FIELD_GET_FORM_DETAIL,
    undefined,
    true,
);
const formAnswerDetailReducer = createDataRequestReducer<
    FormAnswer | undefined
>(FIELD_GET_FORM_ANSWER_DETAIL, undefined, true);

const fieldReducer = combineReducers({
    forms: formsReducer,
    formAnswers: formAnswersReducer,
    submitForm: submitFormReducer,
    polygonsOfLocation: polygonsOfLocationReducer,
    formDetail: formDetailReducer,
    formAnswerDetail: formAnswerDetailReducer,
});

export default fieldReducer;
