import {Reducer} from 'redux';
import {Form} from '../../utils/types';
import {FieldAction} from './types';

interface FieldReducer {
    isLoading: boolean;
    forms: Array<Form>;
}

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

const initialFieldState: FieldReducer = {
    isLoading: false,
    forms: mockForms,
};

const fieldReducer: Reducer<FieldReducer, FieldAction> = (
    state = initialFieldState,
    action,
) => {
    switch (action.type) {
        case 'GET_FORMS_PENDING':
            return {...state, isLoading: true};
        case 'GET_FORMS_ERROR':
            return {...state, isLoading: false};
        case 'GET_FORMS_SUCCESS':
            return {...state, isLoading: false, forms: [...action.payload]};
        default:
            return state;
    }
};
export default fieldReducer;
