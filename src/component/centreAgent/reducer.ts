import {combineReducers} from 'redux';
import {createDataRequestReducer} from '../../utils/generics';
import {Form} from '../../utils/types';
import {CENTRE_GET_ALL_FORMS} from './types';

const formsReducer = createDataRequestReducer<Form[]>(CENTRE_GET_ALL_FORMS, []);

const centreReducer = combineReducers({
    forms: formsReducer,
});
export default centreReducer;
