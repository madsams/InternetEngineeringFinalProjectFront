import {Reducer} from 'redux';
import {Form} from '../../utils/types';
import {FieldAction} from './types';

interface FieldReducer {
    isLoading: boolean;
    forms: Array<Form>;
}

const initialFieldState: FieldReducer = {
    isLoading: false,
    forms: [],
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
