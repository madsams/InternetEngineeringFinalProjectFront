import {combineReducers} from 'redux';
import {createDataRequestReducer} from '../../utils/generics';
import {FieldTypes, Form, FormAnswer, FormTable} from '../../utils/types';
import {
    CENTRE_GET_ALL_FORMS,
    CENTRE_GET_FORM_ANSWER_DETAIL,
    CENTRE_GET_FORM_TABLE,
} from './types';

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
        {
            createdAt: new Date(),
            userId: 'user id 4',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 5',
            answerId: 'form answer id 1',
            values: {
                required: 'Koft dard maraz6',
                notRequired1: 131231,
                notRequired2: 'it must be compatible with field type1',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 6',
            answerId: 'form answer id 2',
            values: {
                required: 'Koft dard maraz2',
                notRequired1: 131232,
                notRequired2: 'it must be compatible with field type2',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 7',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 8',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 9',
            answerId: 'form answer id 1',
            values: {
                required: 'Koft dard maraz6',
                notRequired1: 131231,
                notRequired2: 'it must be compatible with field type1',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 10',
            answerId: 'form answer id 2',
            values: {
                required: 'Koft dard maraz2',
                notRequired1: 131232,
                notRequired2: 'it must be compatible with field type2',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 11',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 12',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 13',
            answerId: 'form answer id 1',
            values: {
                required: 'Koft dard maraz6',
                notRequired1: 131231,
                notRequired2: 'it must be compatible with field type1',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 14',
            answerId: 'form answer id 2',
            values: {
                required: 'Koft dard maraz2',
                notRequired1: 131232,
                notRequired2: 'it must be compatible with field type2',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 15',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 16',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 17',
            answerId: 'form answer id 1',
            values: {
                required: 'Koft dard maraz6',
                notRequired1: 131231,
                notRequired2: 'it must be compatible with field type1',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 18',
            answerId: 'form answer id 2',
            values: {
                required: 'Koft dard maraz2',
                notRequired1: 131232,
                notRequired2: 'it must be compatible with field type2',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 19',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 20',
            answerId: 'form answer id 2',
            values: {
                required: 'Koft dard maraz2',
                notRequired1: 131232,
                notRequired2: 'it must be compatible with field type2',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 21',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 22',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 23',
            answerId: 'form answer id 1',
            values: {
                required: 'Koft dard maraz6',
                notRequired1: 131231,
                notRequired2: 'it must be compatible with field type1',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 24',
            answerId: 'form answer id 2',
            values: {
                required: 'Koft dard maraz2',
                notRequired1: 131232,
                notRequired2: 'it must be compatible with field type2',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 25',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 26',
            answerId: 'form answer id 3',
            values: {
                required: 'Koft dard maraz3',
                notRequired1: 13123,
                notRequired2: 'it must be compatible with field type3',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 27',
            answerId: 'form answer id 1',
            values: {
                required: 'Koft dard maraz6',
                notRequired1: 131231,
                notRequired2: 'it must be compatible with field type1',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 28',
            answerId: 'form answer id 2',
            values: {
                required: 'Koft dard maraz2',
                notRequired1: 131232,
                notRequired2: 'it must be compatible with field type2',
            },
        },
        {
            createdAt: new Date(),
            userId: 'user id 29',
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

const formAnswerDetailReducer = createDataRequestReducer<
    FormAnswer | undefined
>(CENTRE_GET_FORM_ANSWER_DETAIL, undefined, true);

const centreReducer = combineReducers({
    forms: formsReducer,
    formTable: formTableReducer,
    formAnswerDetail: formAnswerDetailReducer,
});
export default centreReducer;
