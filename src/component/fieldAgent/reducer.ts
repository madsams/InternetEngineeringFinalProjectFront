import {FieldTypes, FilledForm, Form} from '../../utils/types';
import {createDataReducer} from '../../utils/generics';
import {combineReducers} from 'redux';

const mockForms: Form[] = [
    {
        title: 'A smaple form',
        id: 1234,
        fields: [
            {
                name: 'First_Name',
                title: 'First Name',
                type: FieldTypes.text,
                required: true,
            },
            {
                name: 'Date_field',
                title: 'Date Filed',
                type: FieldTypes.date,
                required: true,
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: FieldTypes.number,
                required: false,
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: FieldTypes.text,
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
                type: FieldTypes.location,
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
                type: FieldTypes.text,
                required: true,
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: FieldTypes.location,
                required: false,
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: FieldTypes.text,
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
                type: FieldTypes.location,
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
                type: FieldTypes.text,
                required: true,
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: FieldTypes.location,
                required: false,
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: FieldTypes.text,
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
                type: FieldTypes.location,
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
const formReducer = createDataReducer<Form[]>('GET_FORM', mockForms);

const mockFilledForms: FilledForm[] = [
    {
        title: 'Now',
        id: 1234,
        fields: [
            {
                name: 'First_Name',
                title: 'First Name',
                type: FieldTypes.text,
                value: 'adaf',
            },
            {
                name: 'Date_field',
                title: 'Date Filed',
                type: FieldTypes.date,
                value: new Date(),
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: FieldTypes.number,
                value: {lat: 142, lng: 435},
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: FieldTypes.text,
                value: {label: 'sdsd', value: 423},
            },
            {
                name: 'Base_Location',
                title: 'Base Location',
                type: FieldTypes.location,
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
                type: FieldTypes.text,
                value: 'adaf',
            },
            {
                name: 'Date_field',
                title: 'Date Filed',
                type: FieldTypes.date,
                value: new Date(),
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: FieldTypes.number,
                value: {lat: 142, lng: 435},
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: FieldTypes.text,
                value: {label: 'sdsd', value: 423},
            },
            {
                name: 'Base_Location',
                title: 'Base Location',
                type: FieldTypes.location,
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
                type: FieldTypes.text,
                value: 'adaf',
            },
            {
                name: 'Date_field',
                title: 'Date Filed',
                type: FieldTypes.date,
                value: new Date(),
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: FieldTypes.number,
                value: {lat: 142, lng: 435},
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: FieldTypes.text,
                value: {label: 'sdsd', value: 423},
            },
            {
                name: 'Base_Location',
                title: 'Base Location',
                type: FieldTypes.location,
                value: {label: 'ASD', value: 234},
            },
        ],
        filledAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
];
const filledFormsReducer = createDataReducer<FilledForm[]>(
    'GET_FILLED_FORM',
    mockFilledForms,
);

const fieldReducer = combineReducers({
    forms: formReducer,
    filled: filledFormsReducer,
});

export default fieldReducer;
