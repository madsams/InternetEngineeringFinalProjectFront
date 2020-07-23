import {combineReducers, Reducer} from 'redux';
import {createDataRequestReducer} from '../../utils/generics';
import {Area, Form, FormAnswer, FormTable} from '../../utils/types';
import {
    CENTRE_GET_ALL_FORMS,
    CENTRE_GET_AREAS,
    CENTRE_GET_FORM_ANSWER_DETAIL,
    CENTRE_GET_FORM_TABLE,
    CENTRE_SET_FILTER,
    FilterAction,
    FilterState,
} from './types';

const formsReducer = createDataRequestReducer<Form[]>(CENTRE_GET_ALL_FORMS, []);

const formTableReducer = createDataRequestReducer<FormTable>(
    CENTRE_GET_FORM_TABLE,
    {
        id: '',
        title: '',
        answersCount: 3,
        createdAt: new Date(),
        fields: [],
        records: [],
        sum: {},
    },
);

const formAnswerDetailReducer = createDataRequestReducer<
    FormAnswer | undefined
>(CENTRE_GET_FORM_ANSWER_DETAIL, undefined, true);

const filterReducer: Reducer<FilterState, FilterAction> = (
    state = {},
    action,
) => {
    if (action.type === CENTRE_SET_FILTER) {
        return {...state, [action.payload.name]: action.payload.filter};
    } else {
        return state;
    }
};

const areasReducer = createDataRequestReducer<Area[]>(CENTRE_GET_AREAS, []);

const centreReducer = combineReducers({
    forms: formsReducer,
    formTable: formTableReducer,
    formAnswerDetail: formAnswerDetailReducer,
    filter: filterReducer,
    areas: areasReducer,
});
export default centreReducer;
