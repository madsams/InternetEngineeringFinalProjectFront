import {Form} from '../../utils/types';
import API from '../../utils/API';
import {createDataActions} from '../../utils/generics';

export const getForms = createDataActions<Form>('GET_FORMS', API.forms);
export const getFilledForms = createDataActions<Form>(
    'GET_FILLED_FORMS',
    API.filledForms,
);
