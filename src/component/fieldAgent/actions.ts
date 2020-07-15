import {Form} from '../../utils/types';
import API from '../../utils/API';
import {createDataRequestActions} from '../../utils/generics';

export const getForms = createDataRequestActions<Form>('GET_FORMS', API.forms);
export const getFilledForms = createDataRequestActions<Form>(
    'GET_FILLED_FORMS',
    API.filledForms,
);
