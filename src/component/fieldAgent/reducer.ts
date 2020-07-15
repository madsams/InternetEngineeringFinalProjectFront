import {FieldTypes, FilledForm, Form} from '../../utils/types';
import {createDataRequestReducer, createRequestReducer,} from '../../utils/generics';
import {combineReducers} from 'redux';
import {GET_FILLED_FORMS, GET_FORMS, SUBMIT_FORM} from './types';

const formReducer = createDataRequestReducer<Form[]>(GET_FORMS, []);

const mockFilledForms: FilledForm[] = [
    {
        title: 'Now',
        id: 1234,
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
        id: 124,
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
        id: 12,
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
const filledFormsReducer = createDataRequestReducer<FilledForm[]>(
    GET_FILLED_FORMS,
    mockFilledForms,
);

const submitFormReducer = createRequestReducer(SUBMIT_FORM);

const fieldReducer = combineReducers({
    forms: formReducer,
    filled: filledFormsReducer,
    submitForm: submitFormReducer,
});

export default fieldReducer;
