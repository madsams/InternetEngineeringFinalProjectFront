import {combineReducers} from 'redux';
import {createDataRequestReducer} from '../../utils/generics';
import {FieldTypes, Form, FormTable} from '../../utils/types';
import {CENTRE_GET_ALL_FORMS, CENTRE_GET_FORM_TABLE} from './types';

const formsReducer = createDataRequestReducer<Form[]>(CENTRE_GET_ALL_FORMS, []);

const mockTable: FormTable = {
    id: 'form id',
    title: 'a sample form',
    answersCount: 3,
    createdAt: new Date(),
    fields: [
        {
            name: 'required',
            title: 'all keys of this field is required',
            type: FieldTypes.Text,
        },
        {
            name: 'notRequired1',
            title: '"required" is not required',
            type: FieldTypes.Number,
        },
        {
            name: 'notRequired2',
            title: '"options" is not required',
            type: FieldTypes.Text,
            options: [
                {label: 'l1', value: 'it must be compatible with field type'},
            ],
        },
    ],
    records: [
        {
            createdAt: new Date(),
            userId: 'user id 1',
            answerId: 'form answer id 1',
            values: {
                required: 'Koft dard maraz6',
                notRequired1: 131231,
                notRequired2: 'it must be compatible with field type1',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 2',
            answerId: 'form answer id 2',
            values: {
                required: 'Koft dard maraz2',
                notRequired1: 131232,
                notRequired2: 'it must be compatible with field type2',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 3',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
    ],
    sum: {
        notRequired1: 131231 + 131232 + 13123,
    },
};

const formTableReducer = createDataRequestReducer<FormTable>(
    CENTRE_GET_FORM_TABLE,
    mockTable,
);

const centreReducer = combineReducers({
    forms: formsReducer,
    formTable: formTableReducer,
});
export default centreReducer;
