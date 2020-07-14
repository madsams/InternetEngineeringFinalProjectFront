import {Form} from '../../utils/types';
import API from '../../utils/API';
import {createDataActions} from '../../utils/generics';

export const getForms = createDataActions<Form>('FORMS', API.forms);
export const getFilledForms = createDataActions<Form>(
    'FILLED_FORMS',
    API.filledForms,
);
