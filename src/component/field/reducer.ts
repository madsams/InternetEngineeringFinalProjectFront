import {FilledForm, Form} from '../../utils/types';
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
                type: 'Text',
                required: true,
            },
            {
                name: 'Date_field',
                title: 'Date Filed',
                type: 'Date',
                required: true,
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: 'Number',
                required: false,
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: 'Text',
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
                type: 'Location',
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
                type: 'Text',
                required: true,
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: 'Location',
                required: false,
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: 'Text',
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
                type: 'Location',
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
                type: 'Text',
                required: true,
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: 'Location',
                required: false,
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: 'Text',
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
                type: 'Location',
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
        title: 'A smaple form',
        id: 1234,
        fields: [
            {
                name: 'First_Name',
                title: 'First Name',
                type: 'Text',
                value: 'adaf',
            },
            {
                name: 'Date_field',
                title: 'Date Filed',
                type: 'Date',
                value: new Date(),
            },
            {
                name: 'Loc',
                title: 'Your Location',
                type: 'Number',
                value: {lat: 142, lng: 435},
            },
            {
                name: 'Request_Type',
                title: 'Request Type',
                type: 'Text',
                value: {label: 'sdsd', value: 423},
            },
            {
                name: 'Base_Location',
                title: 'Base Location',
                type: 'Location',
                value: {label: 'ASD', value: 234},
            },
        ],
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
