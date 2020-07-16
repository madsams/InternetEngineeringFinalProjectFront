import {FieldTypes, Form, FormAnswer} from '../../utils/types';
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

const mockFilledForms: FormAnswer[] = [
    {
        title: 'Now',
        id: '1234',
        fields: [
            {
                name: 'First_Name',
                title: 'First Name',
                type: FieldTypes.Text,
                value: 'adaf',
            },
            {
                name: 'Date_field',
                title: 'Date Filed',
                type: FieldTypes.Date,
                value: new Date(),
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: FieldTypes.Number,
                value: {lat: 142, lng: 435},
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: FieldTypes.Text,
                value: {label: 'sdsd', value: 423},
            },
            {
                name: 'Base_Location',
                title: 'Base Location',
                type: FieldTypes.Location,
                value: {label: 'ASD', value: 234},
            },
        ],
        filledAt: new Date(Date.now()),
    },
    {
        title: 'حالا',
        id: '124',
        fields: [
            {
                name: 'First_Name',
                title: 'First Name',
                type: FieldTypes.Text,
                value: 'adaf',
            },
            {
                name: 'Date_field',
                title: 'Date Filed',
                type: FieldTypes.Date,
                value: new Date(),
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: FieldTypes.Number,
                value: {lat: 142, lng: 435},
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: FieldTypes.Text,
                value: {label: 'sdsd', value: 423},
            },
            {
                name: 'Base_Location',
                title: 'Base Location',
                type: FieldTypes.Location,
                value: {label: 'ASD', value: 234},
            },
        ],
        filledAt: new Date(Date.now()),
    },
    {
        title: 'دیروز',
        id: '12',
        fields: [
            {
                name: 'First_Name',
                title: 'First Name',
                type: FieldTypes.Text,
                value: 'adaf',
            },
            {
                name: 'Date_field',
                title: 'Date Filed',
                type: FieldTypes.Date,
                value: new Date(),
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: FieldTypes.Number,
                value: {lat: 142, lng: 435},
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: FieldTypes.Text,
                value: {label: 'sdsd', value: 423},
            },
            {
                name: 'Base_Location',
                title: 'Base Location',
                type: FieldTypes.Location,
                value: {label: 'ASD', value: 234},
            },
        ],
        filledAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
];
const formAnswersReducer = createDataRequestReducer<FormAnswer[]>(
    GET_FORM_ANSWERS,
    mockFilledForms,
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
    filledAt: new Date(),
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
