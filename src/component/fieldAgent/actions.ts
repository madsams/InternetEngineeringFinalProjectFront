import {Form} from '../../utils/types';
import API from '../../utils/API';
import {createRequestActions} from '../../utils/generics';

export const getForms = createRequestActions<Form>('GET_FORMS', API.forms);
export const getFilledForms = createRequestActions<Form>(
    'GET_FILLED_FORMS',
    API.filledForms,
);
