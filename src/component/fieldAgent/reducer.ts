import {FieldTypes, FilledForm, Form} from '../../utils/types';
import {
    createDataRequestReducer,
    createRequestReducer,
} from '../../utils/generics';
import {combineReducers} from 'redux';
import {GET_FILLED_FORMS, GET_FORMS, SUBMIT_FORM} from './types';

const mockForms: Form[] = [
    {
        title: 'A smaple form',
        id: 1234,
        fields: [
            {
                name: 'First_Name',
                title: 'First Name',
                type: FieldTypes.Text,
                required: true,
            },
            {
                name: 'Date_field',
                title: 'Date Filed',
                type: FieldTypes.Date,
                required: true,
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: FieldTypes.Number,
                required: false,
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: FieldTypes.Text,
                options: [
                    {
                        label: 'Help',
                        value: 'Help',
                    },
                    {
                        label: 'Info',
                        value: 'Information',
                    },
                ],
            },
            {
                name: 'Base_Location',
                title: 'Base Location',
                type: FieldTypes.Location,
                options: [
                    {
                        label: 'Base1',
                        value: {
                            lat: 1.2,
                            long: 3.2,
                        },
                    },
                    {
                        label: 'Base2',
                        value: {
                            lat: 2.3,
                            long: 1.434,
                        },
                    },
                ],
            },
        ],
    },
    {
        title: 'A smaple form',
        id: 123,
        fields: [
            {
                name: 'First_Name',
                title: 'First Name',
                type: FieldTypes.Text,
                required: true,
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: FieldTypes.Location,
                required: false,
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: FieldTypes.Text,
                options: [
                    {
                        label: 'Help',
                        value: 'Help',
                    },
                    {
                        label: 'Info',
                        value: 'Information',
                    },
                ],
            },
            {
                name: 'Base_Location',
                title: 'Base Location',
                type: FieldTypes.Location,
                options: [
                    {
                        label: 'Base1',
                        value: {
                            lat: 1.2,
                            long: 3.2,
                        },
                    },
                    {
                        label: 'Base2',
                        value: {
                            lat: 2.3,
                            long: 1.434,
                        },
                    },
                ],
            },
        ],
    },
    {
        title: 'A smaple form',
        id: 1,
        fields: [
            {
                name: 'First_Name',
                title: 'First Name',
                type: FieldTypes.Text,
                required: true,
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: FieldTypes.Location,
                required: false,
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: FieldTypes.Text,
                options: [
                    {
                        label: 'Help',
                        value: 'Help',
                    },
                    {
                        label: 'Info',
                        value: 'Information',
                    },
                ],
            },
            {
                name: 'Base_Location',
                title: 'Base Location',
                type: FieldTypes.Location,
                options: [
                    {
                        label: 'Base1',
                        value: {
                            lat: 1.2,
                            long: 3.2,
                        },
                    },
                    {
                        label: 'Base2',
                        value: {
                            lat: 2.3,
                            long: 1.434,
                        },
                    },
                ],
            },
        ],
    },
];
const formReducer = createDataRequestReducer<Form[]>(GET_FORMS, mockForms);

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
