import {createGetRequestSimpleActions} from '../../utils/generics';
import {Form} from '../../utils/types';
import api from '../../utils/API';
import {CENTRE_GET_ALL_FORMS} from './types';

export const getForms = createGetRequestSimpleActions<Form>(
    CENTRE_GET_ALL_FORMS,
    api.forms,
);
